// Temporary maintenance mode.
//
// While this worker is wired up in wrangler.jsonc (`main` + `run_worker_first`),
// every request gets the holding page below and none of the site's real content
// is served. To bring the site back, remove `main` and `run_worker_first` from
// wrangler.jsonc and redeploy.

// Static files that may still be served (favicon only).
const ALLOWED_ASSETS = new Set(["/icon.png"]);

const PAGE = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex" />
    <title>Veira — We'll Be Back Soon</title>
    <link rel="icon" type="image/png" href="/icon.png" />
    <link
      href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Raleway:wght@300;400&display=swap"
      rel="stylesheet"
    />
    <style>
      :root {
        --navy: #0d1b2a;
        --red: #b82c22;
        --white: #ffffff;
      }
      *,
      *::before,
      *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      html,
      body {
        height: 100%;
      }
      body {
        background: var(--navy);
        color: var(--white);
        font-family: "Raleway", sans-serif;
        font-weight: 300;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 32px 16px;
      }
      main {
        max-width: 560px;
      }
      .logo {
        font-family: "Cormorant Garamond", serif;
        font-size: 32px;
        font-weight: 500;
        letter-spacing: 0.35em;
        margin-right: -0.35em;
      }
      .rule {
        width: 48px;
        height: 1px;
        background: var(--red);
        margin: 32px auto;
      }
      h1 {
        font-family: "Cormorant Garamond", serif;
        font-style: italic;
        font-weight: 400;
        font-size: clamp(32px, 6vw, 48px);
        line-height: 1.15;
        margin-bottom: 20px;
      }
      p {
        font-size: 15px;
        line-height: 1.8;
        color: rgba(255, 255, 255, 0.7);
      }
      a {
        color: var(--white);
        text-decoration: none;
        border-bottom: 1px solid var(--red);
      }
    </style>
  </head>
  <body>
    <main>
      <div class="logo">VEIRA</div>
      <div class="rule"></div>
      <h1>We'll be back soon.</h1>
      <p>
        Our website is temporarily unavailable while we make some updates.
        Thank you for your patience.
      </p>
      <p style="margin-top: 24px">
        <a href="mailto:private@veiraglobal.com">private@veiraglobal.com</a>
      </p>
    </main>
  </body>
</html>
`;

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);

    if (ALLOWED_ASSETS.has(pathname)) {
      return env.ASSETS.fetch(request);
    }

    return new Response(request.method === "HEAD" ? null : PAGE, {
      status: 503,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-store",
        "Retry-After": "86400",
      },
    });
  },
};

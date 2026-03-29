import emailjs from "@emailjs/browser";

export const initVeira = () => {
  // Initialize EmailJS
  emailjs.init("ofFPY_ZW8sYqLxy5E");
  document.title = "Veira";

  const cleanup = [];

  const on = (target, event, handler, options) => {
    target.addEventListener(event, handler, options);
    cleanup.push(() => target.removeEventListener(event, handler, options));
  };

  const cursor = document.getElementById("cursor");
  const ring = document.getElementById("cursorRing");
  if (!cursor || !ring) {
    return () => {};
  }

  let mx = window.innerWidth / 2;
  let my = window.innerHeight / 2;
  let visible = false;

  const onMouseMove = (e) => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = `${mx}px`;
    cursor.style.top = `${my}px`;
    ring.style.left = `${mx}px`;
    ring.style.top = `${my}px`;

    if (!visible) {
      visible = true;
      cursor.style.opacity = "1";
      ring.style.opacity = "1";
    }
  };
  on(document, "mousemove", onMouseMove);

  const attachCursorHover = (el) => {
    const enter = () => {
      cursor.style.transform = "translate(-50%,-50%) scale(2.5)";
      cursor.style.background = "var(--gold-light)";
      ring.style.width = "60px";
      ring.style.height = "60px";
      ring.style.borderColor = "rgba(201,168,76,.6)";
    };

    const leave = () => {
      cursor.style.transform = "translate(-50%,-50%) scale(1)";
      cursor.style.background = "var(--gold)";
      ring.style.width = "34px";
      ring.style.height = "34px";
      ring.style.borderColor = "rgba(201,168,76,.35)";
    };

    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    cleanup.push(() => {
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
    });
  };

  document
    .querySelectorAll(
      "a, button, .outcome-peek, .starc-peek-item, .partner-card, .starc-item, .pill, .outcome-item",
    )
    .forEach(attachCursorHover);

  const pageViews = document.querySelectorAll(".page-view");
  const navPageLogo = document.getElementById("navPageLogo");
  const ham = document.getElementById("hamburger");
  const overlay = document.getElementById("menuOverlay");

  if (!navPageLogo || !ham || !overlay) {
    return () => {
      cleanup.forEach((fn) => fn());
    };
  }

  let currentPage = "landing";
  let menuOpen = false;

  const pageToPath = {
    landing: "/",
    outcomes: "/outcomes",
    about: "/about",
    how: "/how",
    contact: "/contact",
    access: "/access",
  };

  const pathToPage = Object.fromEntries(
    Object.entries(pageToPath).map(([page, path]) => [path, page]),
  );

  const getPageFromPath = () => {
    const rawPath = window.location.pathname || "/";
    const normalizedPath =
      rawPath.endsWith("/") && rawPath !== "/" ? rawPath.slice(0, -1) : rawPath;
    return pathToPage[normalizedPath] || "landing";
  };

  const setRouteForPage = (pageId, mode = "push") => {
    const nextPath = pageToPath[pageId] || "/";
    const currentPath = window.location.pathname || "/";

    if (nextPath === currentPath) {
      return;
    }

    const state = { pageId };
    if (mode === "replace") {
      window.history.replaceState(state, "", nextPath);
      return;
    }

    window.history.pushState(state, "", nextPath);
  };

  const setMenuOpen = (open) => {
    menuOpen = open;
    ham.classList.toggle("open", menuOpen);
    overlay.classList.toggle("open", menuOpen);
  };

  let revObserver;
  const setupReveal = () => {
    if (revObserver) {
      revObserver.disconnect();
    }

    revObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".active .reveal").forEach((el) => {
      el.classList.remove("visible");
      revObserver.observe(el);
    });
  };

  const setupOutcomeCards = () => {
    document.querySelectorAll(".active .outcome-item").forEach((item) => {
      item.onclick = () => {
        const isOpen = item.classList.contains("open");
        document
          .querySelectorAll(".outcome-item.open")
          .forEach((el) => el.classList.remove("open"));
        if (!isOpen) {
          item.classList.add("open");
        }
      };
    });
  };

  const partnerObservers = [];
  const setupPartnerCards = () => {
    partnerObservers.forEach((observer) => observer.disconnect());
    partnerObservers.length = 0;

    const cards = document.querySelectorAll(".active .partner-card");
    if (!cards.length) {
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const siblings = Array.from(
              entry.target.parentElement.querySelectorAll(".partner-card"),
            );
            const idx = siblings.indexOf(entry.target);
            setTimeout(() => entry.target.classList.add("visible"), idx * 80);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    cards.forEach((card) => {
      card.classList.remove("visible");
      obs.observe(card);
    });

    partnerObservers.push(obs);
  };

  const initRipple = () => {
    const canvas = document.getElementById("ripple-canvas");
    if (!canvas || canvas.dataset.inited === "1") {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    canvas.dataset.inited = "1";
    const rings = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    on(window, "resize", resize);

    const spawnRing = (x, y, fromMouse) => {
      rings.push({
        x,
        y,
        r: 0,
        maxR: fromMouse
          ? Math.max(canvas.width, canvas.height) * 0.5
          : 280 + Math.random() * 120,
        speed: fromMouse ? 1.2 : 0.5 + Math.random() * 0.4,
        alpha: fromMouse ? 0.5 : 0.18 + Math.random() * 0.1,
        fromMouse,
      });
    };

    let lastMouseSpawn = 0;
    const mouseSpawnInterval = 300;

    on(canvas, "mouseenter", (e) => {
      spawnRing(e.clientX, e.clientY, true);
    });

    on(canvas, "mousemove", (e) => {
      const now = performance.now();
      if (now - lastMouseSpawn >= mouseSpawnInterval) {
        lastMouseSpawn = now;
        spawnRing(e.clientX, e.clientY, true);
      }
    });

    let rippleAnimation = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = rings.length - 1; i >= 0; i -= 1) {
        const ringItem = rings[i];
        ringItem.r += ringItem.speed;
        const alpha = ringItem.alpha * (1 - ringItem.r / ringItem.maxR);

        if (alpha <= 0.003) {
          rings.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(ringItem.x, ringItem.y, ringItem.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(201,168,76,${alpha.toFixed(3)})`;
        ctx.lineWidth = ringItem.fromMouse ? 0.5 : 0.8;
        ctx.stroke();
      }

      rippleAnimation = requestAnimationFrame(draw);
    };

    rippleAnimation = requestAnimationFrame(draw);
    cleanup.push(() => cancelAnimationFrame(rippleAnimation));
  };

  const navigateTo = (
    pageId,
    { updateHistory = true, historyMode = "push", force = false } = {},
  ) => {
    if (!force && pageId === currentPage) {
      if (updateHistory) {
        setRouteForPage(pageId, historyMode);
      }
      return;
    }

    const target = document.getElementById(`page-${pageId}`);
    if (!target) {
      return;
    }

    pageViews.forEach((page) => page.classList.remove("active", "entering"));
    target.classList.add("active", "entering");
    window.scrollTo(0, 0);
    currentPage = pageId;

    navPageLogo.style.display = pageId === "landing" ? "none" : "block";

    setTimeout(() => {
      setupReveal();
      setupOutcomeCards();
      setupPartnerCards();
      setupBackToTop();
    }, 50);

    if (pageId === "landing") {
      initRipple();
    }

    if (updateHistory) {
      setRouteForPage(pageId, historyMode);
    }

    setMenuOpen(false);
  };

  const onDocumentClick = (e) => {
    const link = e.target.closest("[data-page]");
    if (link) {
      e.preventDefault();
      navigateTo(link.dataset.page);
    }
  };
  on(document, "click", onDocumentClick);

  const onHamburgerClick = (e) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };
  on(ham, "click", onHamburgerClick);

  const onOutsideClick = (e) => {
    if (menuOpen && !ham.contains(e.target) && !overlay.contains(e.target)) {
      setMenuOpen(false);
    }
  };
  on(document, "click", onOutsideClick);

  const onKeyDown = (e) => {
    if (e.key === "Escape" && menuOpen) {
      setMenuOpen(false);
    }
  };
  on(document, "keydown", onKeyDown);

  const onPopState = () => {
    navigateTo(getPageFromPath(), { updateHistory: false, force: true });
  };
  on(window, "popstate", onPopState);

  setupReveal();
  setupOutcomeCards();
  setupPartnerCards();

  const outItems = document.querySelectorAll("#outcomesList .outcome-item");
  const outObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = Array.from(outItems).indexOf(entry.target);
          setTimeout(() => entry.target.classList.add("visible"), idx * 70);
          outObs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 },
  );
  outItems.forEach((item) => outObs.observe(item));

  cleanup.push(() => outObs.disconnect());
  cleanup.push(() => {
    partnerObservers.forEach((observer) => observer.disconnect());
    if (revObserver) {
      revObserver.disconnect();
    }
  });

  window.togglePill = (el) => {
    document
      .querySelectorAll(".pill")
      .forEach((pill) => pill.classList.remove("active"));
    el.classList.add("active");
  };

  window.handleSubmit = () => {
    // Get form data
    const firstName = document.getElementById("firstName").value;
    const familyName = document.getElementById("familyName").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const enquiryType = document.querySelector(".pill.active").textContent;

    // Template
    const fullMessage = `
<strong> Name:</strong> ${firstName} ${familyName}<br>
<strong>Email:</strong> ${email}<br>
<strong>Enquiry Type:</strong> ${enquiryType}<br>
<hr/>
<strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}
    `;
    const templateParams = {
      from_name: `${firstName} ${familyName}`,
      from_email: "private@veiraglobal.com",
      message_html: fullMessage,
      enquiry_type: enquiryType,
      reply_to: email,
    };

    emailjs.send("service_n0nzcfd", "template_tfk4l9k", templateParams).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        // Show success overlay
        const overlaySuccess = document.getElementById("successOverlay");
        if (overlaySuccess) {
          overlaySuccess.classList.add("visible");
          overlaySuccess.style.opacity = "0";
          overlaySuccess.style.transition = "opacity .8s ease";
          setTimeout(() => {
            overlaySuccess.style.opacity = "1";
          }, 10);
        }
      },
      (error) => {
        console.log("FAILED...", error);
        alert("Failed to send email. Please try again.");
      },
    );
  };

  // Back to top button setup function
  const setupBackToTop = () => {
    const backToTopButton = document.querySelector(
      ".page-view.active .back-to-top",
    );
    if (backToTopButton) {
      const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

      // Remove old click listener and add new one
      backToTopButton.onclick = scrollToTop;
      attachCursorHover(backToTopButton);
    }
  };

  // Initial setup
  setupBackToTop();

  const initialPage = getPageFromPath();
  navigateTo(initialPage, {
    updateHistory: false,
    force: true,
  });
  setRouteForPage(initialPage, "replace");

  cleanup.push(() => {
    delete window.togglePill;
    delete window.handleSubmit;
  });

  initRipple();

  return () => {
    cleanup.forEach((fn) => fn());
  };
};

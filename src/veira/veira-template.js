import shell from "./templates/shell.html?raw";
import landing from "./templates/landing.html?raw";
import outcomes from "./templates/outcomes.html?raw";
import about from "./templates/about.html?raw";
import how from "./templates/how.html?raw";
import contact from "./templates/contact.html?raw";
import access from "./templates/access.html?raw";

const veiraTemplate = [
  shell,
  landing,
  outcomes,
  about,
  how,
  contact,
  access,
].join("\n\n");

export default veiraTemplate;

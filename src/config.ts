export const SITE_TITLE = "Portfolio de Fausto Calviño - Desarrollador y Programador Web";
export const SITE_DESCRIPTION =
  "Explora el portfolio de Fausto Calviño, un desarrollador y programador web especializado en tecnologías front-end y back-end. Descubre mis proyectos, habilidades en HTML, CSS, JavaScript, React, Next.js, Node.js y Go, y cómo puedo ayudar a tu equipo a crear soluciones web innovadoras y eficientes.";
export const TWITTER_HANDLE = "@faustocalvinio";
export const MY_NAME = "Fausto Calviño";
const siteUrl = `${import.meta.env.SITE}`;
console.log(siteUrl)
if (!siteUrl) {
  console.log(siteUrl)
  throw new Error('La variable de entorno SITE no está definida.');
}

const BASE_URL = new URL("https://faustocalvinio.netlify.app/");
export const SITE_URL = BASE_URL.origin;

// const BASE_URL = new URL(import.meta.env.SITE);
// export const SITE_URL = BASE_URL.origin;

import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  return new Response(null, {
    status: 302, // o 301 si quieres que sea permanente
    headers: {
      Location: 'https://www.linkedin.com/in/faustocalvinio/', // <-- cambia esto por tu URL real
    },
  });
};

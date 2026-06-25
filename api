export const config = { runtime: 'edge' };

export default async function handler(request) {
  const url = new URL(request.url);
  // This forces all traffic sent here to go to OpenRouter instead
  const targetUrl = 'https://openrouter.ai' + url.pathname.replace(/^\/api\/proxy/, '') + url.search;

  const modifiedRequest = new Request(targetUrl, {
    method: request.method,
    headers: request.headers,
    body: request.body,
    redirect: 'follow'
  });

  return fetch(modifiedRequest);
}

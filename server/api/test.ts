export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return `Hello Nitro ${body.name} ${getRequestURL(event)}`;
});

export default defineEventHandler(async (event) => {
  return {
    headers: event.headers,
    path: event.path,
    query: getQuery(event),
    msg: event.context.params,
  };
});

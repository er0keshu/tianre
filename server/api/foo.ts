import { useSleep } from '~/composables';

export default defineEventHandler(async (event) => {
  await useSleep(1000);

  return {
    headers: event.headers,
    path: event.path,
    query: getQuery(event),
    msg: event.context.params,
  };
});

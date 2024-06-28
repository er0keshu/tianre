import { writeFile } from 'node:fs';

export default defineEventHandler(async (event) => {
  const body = await readMultipartFormData(event);

  const path = `${process.cwd()}/public/uploads/a.jpeg`;

  writeFile(path, body?.[1]?.data!, (err) => {
    if (err) return console.log(err);
    console.log('File uploaded successfully');
  });

  return {
    name: body?.[0]?.data.toString(),
  };
});

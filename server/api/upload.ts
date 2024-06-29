import { writeFile, createWriteStream } from 'node:fs'
import { Readable } from 'node:stream'

export default defineEventHandler(async (event) => {
  const body = await readFormData(event)

  const path = `${process.cwd()}/public/uploads/a.jpeg`

  console.log((body.get('file') as File).arrayBuffer())

  // writeFile(path, body?.[1]?.data!, (err) => {
  //   if (err) return console.log(err)
  //   console.log('File uploaded successfully')
  // })

  // const readable = new Readable({
  //   read() {
  //     this.push(body?.[1]?.data!)
  //     this.push(null)
  //   }
  // })
  // readable.pipe(createWriteStream(path))

  return {
    // name: body?.[0]?.data.toString()
  }
})

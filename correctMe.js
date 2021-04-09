const fsPromises = require('fs/promises')

const main = async () => {
  try {
    const txt1 = await fsPromises.readFile('hello.txt', 'utf-8')
    console.log(txt1)
  } catch (e) {
    console.log(e.message)
  }
}
main()
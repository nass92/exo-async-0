const fsPromises = require('fs/promises');

if (process.argv.length !== 3) {
  console.log('Error! check your enter of pathDirectory or you file!')
  process.exit(1)
}

const dirCopyFile = async (file) => {
  try {
    const dir = await fsPromises.readdir(`${file}`);
    console.log(dir)
    for (const elem of dir) {
      fsPromises.copyFile(`./${file}/${elem}`, `./file/${elem}`)
    }
    console.log(`the files copy of ${file} was succed!`)
  } catch (e) {
    console.error(e.message)
  }
}

dirCopyFile(process.argv[2])
const axios = require('axios')
const fsPromises = require('fs/promises')
const readlineSync = require('readline-sync')
const fs = require('fs')

const main = async () => {
  try {
    const response = await axios.get(readlineSync.question('url: '))
    await fsPromises.writeFile('index.html', response.data)
    console.log(`la taille des données téléchargées sont de : ${response.headers['content-length']}`)
  } catch (e) {
    console.log(e.message)
  }
}

main()
const fs = require('fs')
const pump = require('pump')

const file = fs.createReadStream(process.argv[2])
const output = fs.createWriteStream('./pumpoutput.txt')

pump(file, output, function(err) {
  if (err) {
    console.error(err)
  }
})

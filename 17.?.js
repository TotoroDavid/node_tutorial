const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt', {
    highWaterMark: 90000,
    enconding: 'utf8'
})

// default 64kb
// last buffer - remainder
// highWaterMark - control size 
// const stream = createReadStream('./content/big.txt',{highWaterMark})
// const stream = createReadStream('./content/big.txt',{enconding:'utf8})

stream.on('data', (result) => {
    console.log(result);
})
stream.on('error', (err) => console.log(err))
const net = require('net')

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    const buf = Buffer.from(data)
    if (buf.readInt32BE() === 0) {
      socket.write('"(9)"')
    } else if (buf.readInt32BE() === 1) {
      socket.write('"(-0.400,-0.10915,0.2545,2.221,2.2215,0,4)"')
    } else if (buf.readInt32BE() === 2) {
      socket.write('"(-0.450,-0.10915,0.2545,2.221,2.2215,0,1)"')
    } else if (buf.readInt32BE() === 3) {
      socket.write('"(-0.500,-0.10915,0.2545,2.221,2.2215,0,1)"')
    } else if (buf.readInt32BE() === 4) {
      socket.write('"(-0.550,-0.10915,0.2545,2.221,2.2215,0,1)"')
    } else if (buf.readInt32BE() === 5) {
      socket.write('"(-0.600,-0.10915,0.2545,2.221,2.2215,0,1)"')
    } else if (buf.readInt32BE() === 6) {
      socket.write('"(-0.650,-0.10915,0.2545,2.221,2.2215,0,1)"')
    } else if (buf.readInt32BE() === 7) {
      socket.write('"(-0.700,-0.10915,0.2545,2.221,2.2215,0,1)"')
    } else if (buf.readInt32BE() === 8) {
      socket.write('"(-0.750,-0.10915,0.2545,2.221,2.2215,0,1)"')
    } else if (buf.readInt32BE() === 9) {
      socket.write('"(-0.800,-0.10915,0.2545,2.221,2.2215,0,1)"')
    } else if (buf.readInt32BE() === 999) {
      socket.write('"(-0.800,-0.10915,0.2445,2.221,2.2215,0,1)"')
    } else if (buf.readInt32BE() === 777) {
      console.log('Socket connection is going to CLOSE')
    } else {
      console.log('Data format is not proper')
      console.log(data)
    }
  })
})

server.listen(30002, () => {
  console.log('opened server on', server.address())
})

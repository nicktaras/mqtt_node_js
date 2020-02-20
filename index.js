var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://mqtt.eclipse.org')
 
client.on('connect', function () {
  client.subscribe('ozberry/messages', function (err) {
    if (!err) {
      client.publish('ozberry/messages', 'Test, node connected to mqtt')
    }
  })
})
 
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})

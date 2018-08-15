const http = require("http");
const url = require('url');
const server = http.createServer();

server.listen(3000, () => {
  console.log('The HTTP server is listening at Port 3000.');
});

let messages = [
  { 'id': 1, 'user': 'brittany storoz', 'message': 'hi there!' },
  { 'id': 2, 'user': 'bob loblaw', 'message': 'check out my law blog' },
  { 'id': 3, 'user': 'lorem ipsum', 'message': 'dolor set amet' }
];

server.on('request', (request, response) => {
  if (request.method === 'GET') {
    getAllMessages(response);
  }

  else if (request.method === 'POST') {
    let newMessage = { 'id': new Date() };

    request.on('data', (data) => {
      newMessage = Object.assign(newMessage, JSON.parse(data));
    });

    request.on('end', () => {
      addMessage(newMessage, response);
    });
  }

    const addMessage = async (newMessage, response) => {
      const addMessageResponse = await fetch('http://localhost:3000/', {
        method: 'POST',
        body: JSON.stringify({
          newMessage
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const addMessageData = await addMessageResponse.json();
      return addMessageData
  }

    const getAllMessages = async (response) => {
      if (resposne.ok === true){
        const messageResponse = await fetch('http://localhost:3000/', {
          method: 'GET'
        });
        const messageData = await messageResponse.json()
        return messageData
      }
  }
})
const express = require('express')
const app = express()
const server = require('http').createServer(app);
const dotenv = require('dotenv').config({path:__dirname+'/.env'})
const cors = require('cors')
const router = require('./routes/routes');
const WebSocket = require('ws');
const { func } = require('@hapi/joi');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

const wss = new WebSocket.Server({server:server});

let ws_connections = [];

wss.on('connection', function connection(ws,req) {
  ws._id = req.url.split('token=')[1];
  ws_connections.push(ws);
  ws.send(JSON.stringify({
    msg:'Welcome'
  }));

  ws.on('message', (res , isBinary)=>{
    console.log(res)  
    if(res){
      try {
        if(isBinary){
          const data = res;
          const message = {
            msg: data,
            notification: {
              msg: 'New File'
            }
          };
          ws_connections.forEach(function(client) {
            if(client._id != ws._id)
            client.send(JSON.stringify(message));
          });
        }else{
          const data = JSON.parse(res.toString());
          const message = {
            msg: data,
            notification: {
              msg: data.msg
            }
          };
          console.log(message);
          ws_connections.forEach(function(client) {
            if(client._id != ws._id)
            client.send(JSON.stringify(message));
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  });

  ws.on('close',()=>{
    ws_connections.map((val,idx)=>{
      if(val._id == ws._id )
      ws_connections.splice(idx,1)
    })
  })

});


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(upload.array());


app.use('/',router);

server.listen(3500,()=>{
  console.log('servers started')
});
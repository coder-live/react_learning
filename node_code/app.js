const express = require('express');
const app = express();


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method' )
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE')
  res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE')
  next();
});

// app.use((req, res, next) => {
//   res.header({
//     'Access-Control-Allow-Credential': true,
//     'Access-Control-Allow-Origin': req.headers.origin || '*',
//     'Access-Control-Allow-Headers': 'Content-Type',
//     'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
//     'Content-Type': 'application/json;charset:utf-8'
//   });
//   if(req.methods === 'OPTIONS') {
//     res.sendStatus(200)
//   }else {
//     console.log(666)
//     next();
//   }
// })

app.get('/', (req, res) => {
  res.send('首页')
})

app.get('/test', (req, res) => {
  let arr = ['test1', 'test2', 'test3']
  res.json({
    data: arr
  })
})

app.listen(3001, () => {
  console.log(3001)
});
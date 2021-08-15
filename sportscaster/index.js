const app = require('express')();
const football = require('./football');

app.get('/', (req, res)=>{
  res.status(400);
  res.send('Bad request!!');
});

app.use('/football', football);

app.listen(process.env.PORT || 8000, () =>{
  console.log('Running on port 8000');
});

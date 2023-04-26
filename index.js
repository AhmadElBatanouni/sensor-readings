import express from 'express';

const app = new express();

app.use(express.json());

app.get('/new-readings', (req, res) => {
  const { temprature, humidity } = req.query;
  console.log(req.body);
  console.log({ temprature, humidity });
  res.send(
    'You sent the following: temprature' + temprature + ', humidity:' + humidity
  );
});


app.post('/new-readings', (req, res) => {
  console.log(req.body);
  res.send('Sent successfully');
});

app.listen(process.env.PORT || 3001);

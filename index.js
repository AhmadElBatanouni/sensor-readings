import express from 'express';

const app = new express();

app.get('/new-readings', (req, res) => {
  const { temprature, humidity } = req.query;
  console.log({ temprature, humidity });
  res.send(
    'You sent the following: temprature' + temprature + ', humidity:' + humidity
  );
});

app.listen(process.env.PORT || 3001);

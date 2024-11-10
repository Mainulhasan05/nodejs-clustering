import express from "express";

const port = 5000;
const app = express();

app.get("/heavy", (req, res) => {
    console.log('Heavy request received');
  let total = 0;
  for (let i = 0; i < 5_000_000; i++) {
    total++;
  }
  res.send(`The result of the CPU intensive task is ${total}\n`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
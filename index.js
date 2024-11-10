import express from "express";

const port = 5000;
const app = express();

app.get("/heavy", (req, res) => {
  let total = 0;
  for (let i = 0; i < 50000000; i++) {
    total++;
  }
  res.send(`The result of the CPU intensive task is ${total}\n`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
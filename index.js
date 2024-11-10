import express from "express";
import { rateLimit } from 'express-rate-limit'
const port = 5000;
const app = express();

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  message: 'Ar dite parba na monu',
	// store: ... , // Redis, Memcached, etc. See below.
})

app.use(limiter)

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
const {
  Worker,
  isMainThread,
  parentPort,
  workerData
} = require("worker_threads");
const express = require("express");

if (isMainThread) {
  const app = express();
  const port = 3000;

  app.get("/", function(req, res) {
    console.log("serving request...");
    const worker = new Worker(__filename, { workerData: 0 });
    worker.once("message", count => {
      res.status(200).send(`The final count :${count}`);
    });
    worker.once("error", err => {
      console.error(err);
    });
  });

  app.get("/fast", function(req, res) {
    res.end(`The fastest route`);
  });

  app.listen(port, () => {
    console.log(`server is listening on localhost:${port}`);
  });
} else {
  console.log("Running worker function");
  // This is simulation of a long running CPU Task
  // for which the /fast route will be blocked if there are
  // request landing on both the places
  let count = workerData;
  while (count < 1e9) {
    count++;
  }
  parentPort.postMessage(count);
}

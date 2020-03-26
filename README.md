# nodejs-worker

Workers (threads) are useful for performing CPU-intensive JavaScript operations. They will not help much with I/O-intensive work. Node.js’s built-in asynchronous I/O operations are more efficient than Workers can be.

Details: https://nodejs.org/api/worker_threads.html

## Architecture diagram

<img src="https://raw.githubusercontent.com/Kshirodram/nodejs-worker/master/architecture.png" width="400" height="400">

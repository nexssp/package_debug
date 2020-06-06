// Nexss PROGRAMMER 2.0+ - NodeJS
// Debug - Displays data inbetween streams
const {
  nxsTrace,
} = require(`${process.env.NEXSS_PACKAGES_PATH}/Nexss/Lib/NexssLog.js`);

process.stdin.on("data", function (NexssStdin) {
  let NexssStdout;
  try {
    NexssStdout = JSON.parse(NexssStdin.toString());
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
  nxsTrace(JSON.stringify(NexssStdout, null, 2));
  // STDOUT
  process.stdout.write(JSON.stringify(NexssStdout));
});

process.stdin.on("end", function () {
  //On Windows below is not needed.
  process.exit(0);
});

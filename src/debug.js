// Nexss PROGRAMMER 2.0+ - NodeJS
// Debug - Displays data inbetween streams
const {
  nxsTrace,
} = require(`${process.env.NEXSS_PACKAGES_PATH}/Nexss/Lib/NexssLog.js`);

const NexssIn = require(`${process.env.NEXSS_PACKAGES_PATH}/Nexss/Lib/NexssIn.js`);
let NexssStdout = NexssIn();

// if (NexssStdout.nxsIn) {
//   NexssStdout["DDDDDDDDDDDDD"] = NexssStdout.nxsIn;
// }

if (!NexssStdout.nxsAs) {
  nxsTrace(JSON.stringify(NexssStdout, null, 2));
} else {
  NexssStdout[NexssStdout.resultField_1] = JSON.stringify(NexssStdout, null, 2);
}

delete NexssStdout.nxsIn;
delete NexssStdout.resultField_1;
process.stdout.write(JSON.stringify(NexssStdout));

// // var shell = require('shelljs');

// // // if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
// // //   shell.echo('Error: Git commit failed');
// // //   shell.exit(1);
// // // }
// // shell.exec('ls');
// let spawn = require("child_process").spawn;

// let bat = spawn("gnome-terminal", [
//     "ls" 
// ]);

// bat.stdout.on("data", (data) => {
//     console.log(data);
// });

// bat.stderr.on("data", (err) => {
//     // Handle error...
// });

// bat.on("exit", (code) => {
//     // Handle exit
// });

const { spawn } = require('child_process');
const ls = spawn('gnome-terminal', ['--', 'bash' , './script.sh']);

ls.stdout.on('data', (data) => {
  console.log(data);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
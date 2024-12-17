// Programmers Names: Stephanos Khoury ,Rula yosef
// Writes selected lines from input files into output.txt
const fs = require("fs");
const path = require("path");

const input_path = path.join(__dirname, "/input");

// Read all file names in the 'input' folder
const allfiles = fs.readdirSync(input_path);

// Initialize the output file
const output_path = path.join(__dirname, "/output.txt");
fs.writeFileSync(output_path, ""); // Clear the file if it exists

for (let i = 0; i < allfiles.length; i++) {
  let filepath = path.join(input_path, allfiles[i]);
  let filecontent = fs.readFileSync(filepath, "utf-8");
  let lines = filecontent.split("\n");

  for (let k = 0; k <= i; k++) {
    if (k < lines.length) {
      fs.appendFileSync(output_path, lines[k] + "\n");
    }
  }
}

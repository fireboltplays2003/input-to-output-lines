---

# File Line Extractor

## Description

This program processes a set of text files located in an "input" directory, reads the content of each file, and extracts lines from each file incrementally. For each file, it extracts and writes a number of lines to an output file, corresponding to its position in the directory. For example, the first file's first line is written, the second file's first two lines are written, and so on. The program appends the lines into an output file.

### Features:
- Reads files from the "input" directory.
- Extracts and writes incremental lines from each file to an output file.
- Writes the lines to an "output.txt" file, starting with the first line from the first file and progressively including more lines from subsequent files.

### Example:
For input files:
- `File 1.txt` with lines:
  - `Line 1`
  - `Line 2`
  - `Line 3`

- `File 2.txt` with lines:
  - `Line 1`
  - `Line 2`
  - `Line 3`

The program will:
- Write the first line of `File 1.txt` to the output file.
- Write the first two lines of `File 2.txt` to the output file.
- And so on.

## Programmers

- **Stephanos Khoury**
- **Rula Yosef**

## Code

```javascript
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
```

--- 

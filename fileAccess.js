async function processFile(fileHandle) {
  const file = await fileHandle.getFile();
  const text = await file.text();
  // Split the text by new lines to get an array of lines
  const lines = text.split(/\r?\n/);
  // Filter out any lines that are just whitespace
  const filteredLines = lines.filter(line => line.trim() !== "");
  
  return filteredLines;
}

async function processDirectory() {
  const directoryHandle = await window.showDirectoryPicker();
  const allLines = []; // Initialize an empty array to hold all lines from all files

  for await (const entry of directoryHandle.values()) {
    if (entry.kind === 'file') {
      const lines = await processFile(entry);
      // Add the filtered lines from this file to the allLines array
      allLines.push(...lines);
    }
  }

  // allLines now contains every cleaned line from every processed file
  // This array can be saved to Firebase or used as needed
  return allLines;
}

// Example usage
processDirectory().then((allLines) => {
  // Here, you would implement your logic to save allLines to Firebase
  // The array allLines will contain all the cleaned lines across all selected documents
});
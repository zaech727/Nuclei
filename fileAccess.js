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
  const filesMap = new Map(); // Initialize a map to hold each file's name and its lines

  for await (const entry of directoryHandle.values()) {
    if (entry.kind === 'file') {
      const lines = await processFile(entry);
      // Map the file's name to its array of cleaned lines
      filesMap.set(entry.name, lines);
    }
  }

  // filesMap now contains the names of files mapped to arrays of their cleaned lines
  // This map can now be used for further processing or saving to Firebase
  return filesMap;
}

// Example usage
processDirectory().then((filesMap) => {
  // Here, you can iterate over filesMap to save data to Firebase or for any other processing
  // Each key in filesMap is a file name, and its value is an array of the file's cleaned lines
  
  
});
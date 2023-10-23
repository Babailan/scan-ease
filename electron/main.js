const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    minWidth: 800,
    minHeight: 600,
    width: 1200,
    height: 600,
    icon: path.join(__dirname, "icon.png"),
    title: "Scan Studio",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (process.argv.includes("--dev")) {
    console.log(
      "If the page didn't load make sure the react port is correct and running correctly."
    );
    win.loadURL("http://localhost:5173");
  } else {
    win.loadFile(path.join(__dirname, "../dist/index.html"));
  }
}
async function handleFileOpen() {
  const { canceled, filePaths } = await dialog.showOpenDialog({});
  if (!canceled) {
    return filePaths[0];
  }
}
app.whenReady().then(async () => {
  ipcMain.handle("dialog:openFile", handleFileOpen);
  createWindow();
});

const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");

async function createWindow() {
  const win = new BrowserWindow({
    minWidth: 800,
    minHeight: 600,
    width: 1200,
    height: 600,
    icon: path.join(__dirname, "icon.png"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    fullscreen: true,
  });
  win.setTitle("Scan Ease");

  if (process.argv.includes("--dev")) {
    console.log("Dev Mode");
    try {
      await win.loadURL("http://localhost:5173");
    } catch (error) {
      console.log("Make sure you start the development mode");
    }
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

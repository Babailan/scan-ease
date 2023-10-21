const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    icon: path.join(__dirname, "icon.jpg"),
    title: "ScanEase",
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

app.whenReady().then(() => {
  createWindow();
});

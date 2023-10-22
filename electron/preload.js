const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("potangina", "gago");

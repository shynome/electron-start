import { app, BrowserWindow } from "electron";
app.on('ready',()=>{
  require('../renderer')
})
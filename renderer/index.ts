import { BrowserWindow } from "electron";
const win = new BrowserWindow({ width:1200, height:800 })
win.webContents.openDevTools()
import path = require('path')
win.loadURL(`file://${__dirname}/index.html`)
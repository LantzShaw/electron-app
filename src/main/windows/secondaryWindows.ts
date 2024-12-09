import { BrowserWindow } from 'electron'
import path from 'path'

const createSecondaryWindow = () => {
  const secondaryWindow = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
  })

  // 另一个 React 页面
  secondaryWindow.loadURL('http://localhost:3000/secondary')
}

export default createSecondaryWindow

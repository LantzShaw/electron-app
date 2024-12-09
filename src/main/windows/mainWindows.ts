import { BrowserWindow } from 'electron'
import { join } from 'path'

import icon from '../../resources/icon.png?asset'

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      // 在 BrowserWindow 中，始终设置 nodeIntegration: false 来确保渲染进程无法直接访问 Node.js API，这样可以增强安全性。preload.js 是唯一允许渲染进程与主进程进行交互的安全通道
      // contextBridge：确保仅暴露必要的 API，避免直接暴露可能带来安全风险的功能。例如，不要暴露对文件系统、网络请求等敏感操作的直接访问。
      nodeIntegration: false, // 禁用 Node.js 集成
      contextIsolation: true
    }
  })

  // 另一个 React 页面
  mainWindow.loadURL('http://localhost:3000')
}

export default createMainWindow
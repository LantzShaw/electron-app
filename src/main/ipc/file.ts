import { dialog, ipcMain } from "electron";
import { readFile } from 'node:fs'

export default function setupFileIPC() {
    ipcMain.handle("open-file-dialog", async () => {
        const result = await dialog.showOpenDialog({
            properties: ["openFile"]
        })

        return result.filePaths
    })

    ipcMain.handle('save-file-dialog', async () => {
        const result = await dialog.showSaveDialog({})

        return result
    })

    ipcMain.handle("read-file", async () => {
        // return readFile
    })
}
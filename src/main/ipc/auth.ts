import { ipcMain } from "electron";

export default function setupAuthIPC() {
    ipcMain.handle("login", async (event, username, password) => {
        if(username === 'Lantz' && password === '123456') {
            return true
        } else {
            return false
        }
    })

    ipcMain.handle("logout", async () => {
        return false
    })
}
import { ipcMain } from "electron";

export default function setupSettingsIPC() {
    ipcMain.handle("get-settings", (event, key) => {
        const settings = {
            theme: 'dark',
            language: 'en'
        }

        return settings[key]
    })

    ipcMain.handle("set-settings", async (event, key, value) => {
        const settings = {}
        settings[key] = value

        return true
    })
}
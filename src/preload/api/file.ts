import { ipcRenderer } from "electron"

 const fileAPI = {
    login: (username: string, password: string):Promise<boolean> => {
        return ipcRenderer.invoke('login', username, password)
    },
    logout: (): Promise<boolean> => {
        return ipcRenderer.invoke('logout')
    }
}

export default fileAPI
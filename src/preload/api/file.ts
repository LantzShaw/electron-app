import { ipcRenderer } from 'electron'

export type FileAPI = {
  login: (username: string, password: string) => Promise<boolean>
  logout: () => Promise<boolean>
}

const fileAPI: FileAPI = {
  login: (username: string, password: string) => {
    return ipcRenderer.invoke('login', username, password)
  },
  logout: () => {
    return ipcRenderer.invoke('logout')
  }
}

export default fileAPI

import { ElectronAPI } from '@electron-toolkit/preload'

import type { API } from './api'

declare global {
  interface Window {
    electron: ElectronAPI
    api: API
  }
}

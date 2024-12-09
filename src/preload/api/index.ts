// export { default as authAPI, type AuthAPI } from './auth'
// export { default as fileAPI, type FileAPI } from './file'
// export { default as settingsAPI, type SettingsAPI } from './settings'

import authAPI, { type AuthAPI } from './auth'
import fileAPI, { type FileAPI } from './file'
import settingsAPI, { type SettingsAPI } from './settings'

export { authAPI, fileAPI, settingsAPI }

export type API = {
  auth: AuthAPI
  file: FileAPI
  settings: SettingsAPI
}


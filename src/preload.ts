import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electron', {
    popCalc: () => ipcRenderer.invoke('popCalc'),
});
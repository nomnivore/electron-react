// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge } from "electron";
import { IpcService } from "./IpcService";
import { IpcRequest } from "./shared/IpcRequest";

const ipcService = new IpcService();

const ipcServiceWrapper = {
  send: <T>(channel: string, request: IpcRequest = {}): Promise<T> =>
    ipcService.send<T>(channel, request),
};

contextBridge.exposeInMainWorld("ipc", ipcServiceWrapper);

export type IpcServiceWrapper = typeof ipcServiceWrapper;

import { IpcRenderer, ipcRenderer } from "electron";
import { IpcRequest } from "./shared/IpcRequest";

export class IpcService {
  private ipcRenderer?: IpcRenderer;

  private initializeIpcRenderer() {
    if (typeof ipcRenderer === "undefined") {
      throw new Error("Electron IPC Renderer not available");
    }

    this.ipcRenderer = ipcRenderer;
  }

  public send<T>(channel: string, request: IpcRequest = {}): Promise<T> {
    if (!this.ipcRenderer) {
      this.initializeIpcRenderer();
    }

    if (!request.responseChannel) {
      request.responseChannel = `${channel}_response_${new Date().getTime()}`;
    }

    const ipcRenderer = this.ipcRenderer;
    ipcRenderer.send(channel, request);

    return new Promise((resolve) => {
      ipcRenderer.once(request.responseChannel, (_, response) =>
        resolve(response)
      );
    });
  }
}

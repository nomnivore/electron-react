import { IpcServiceWrapper } from "../preload";

declare global {
  interface Window {
    ipc: IpcServiceWrapper;
  }
}

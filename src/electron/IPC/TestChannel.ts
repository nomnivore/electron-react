import { IpcMainEvent } from "electron";
import { IpcRequest } from "../../shared/IpcRequest";
import { IpcChannelInterface } from "./IpcChannelInterface";
import { execSync } from "child_process";

export class TestChannel implements IpcChannelInterface {
  getName(): string {
    return "test";
  }

  handle(event: IpcMainEvent, request: IpcRequest): void {
    if (!request.responseChannel) {
      request.responseChannel = `${this.getName()}_response`;
    }

    event.sender.send(request.responseChannel, {
      kernel: execSync("uname -a").toString(),
    });
  }
}

import { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);
  const [sysInfo, setSysInfo] = useState<{ kernel: string } | null>(null);

  const ipc = window.ipc;

  async function getSysInfo() {
    const info = await ipc.send<{ kernel: string }>("test");

    setSysInfo(info);
  }
  return (
    <div>
      <h1>Click to increment</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        Count: {count}
      </button>

      <h2>Get system info</h2>
      <button onClick={getSysInfo} disabled={sysInfo !== null}>
        Click here ??
      </button>

      <p>{sysInfo ? sysInfo.kernel : "No system info"}</p>
    </div>
  );
};

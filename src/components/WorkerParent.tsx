import React, { useEffect, useState } from "react";
import WebpackWorker from "worker-loader!*";
interface Props {}

type WorkerState = WebpackWorker | undefined;

function WorkerParent(props: Props) {
  const {} = props;
  const [count, setCount] = useState(0);
  const [worker, setWorker] = useState<WorkerState>();

  useEffect(() => {
    console.log("Loading countworker");
    (async () => {
      if (typeof window !== "undefined") {
        const countListenerWorker = await import(
          "worker-loader!./countListener.worker.ts"
        );
        const loaded = new countListenerWorker.default();
        console.log("Worker loaded", loaded);
        loaded.onmessage = event => {
          const next = event.data.next;
          setCount(next);
        };
        setWorker(loaded);
      }
    })();
  }, []);

  const handleClick = () => {
    worker?.postMessage({ count });
  };

  return (
    <>
      <h4>Count: {count}</h4>
      <button onClick={handleClick} disabled={!worker}>
        Increase
      </button>
    </>
  );
}

export default WorkerParent;

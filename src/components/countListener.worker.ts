// Worker.ts
const ctx: Worker = self as any;

// Respond to message from parent thread
ctx.addEventListener("message", event => {
  // Read number from data
  let count: number = event.data.count || 0;

  // respond with next value
  ctx.postMessage({ next: count + 1 });
});

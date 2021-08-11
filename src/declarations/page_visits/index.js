import { Actor, HttpAgent } from "@dfinity/agent";
// Imports and re-exports candid interface
import { idlFactory } from "./page_visits.did.js";
export { idlFactory } from "./page_visits.did.js";
// CANISTER_ID is replaced by webpack based on node environment
export const canisterId = "q4j37-xqaaa-aaaab-qadrq-cai";
/**
 *
 * @param {string | import("@dfinity/principal").Principal} canisterId Canister ID of Agent
 * @param {{agentOptions?: import("@dfinity/agent").HttpAgentOptions; actorOptions?: import("@dfinity/agent").ActorConfig}} [options]
 * @return {import("@dfinity/agent").ActorSubclass<import("./page_visits.did.js")._SERVICE>}
 */
export const createActor = (canisterId, options) => {
  if (typeof window === "undefined") {
    return null;
  }
  const agent = new HttpAgent({
    ...options?.agentOptions,
    host: "https://ic0.app",
  });

  // Creates an actor with using the candid interface and the HttpAgent
  return Actor.createActor(idlFactory, {
    agent,
    canisterId,
    ...options?.actorOptions,
  });
};

/**
 * A ready-to-use agent for the page_visits canister
 * @type {import("@dfinity/agent").ActorSubclass<import("./page_visits.did.js")._SERVICE>}
 */
export const page_visits = createActor(canisterId);

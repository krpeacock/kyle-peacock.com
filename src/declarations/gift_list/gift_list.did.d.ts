import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Gift {
  'id' : string,
  'status' : Status,
  'modifiedBy' : [] | [Principal],
}
export type Result = { 'ok' : null } |
  { 'err' : string };
export type Status = { 'bought' : null } |
  { 'unbought' : null };
export interface _SERVICE {
  'getControllers' : ActorMethod<[], Array<Principal>>,
  'getGift' : ActorMethod<[string], [] | [Gift]>,
  'getGifts' : ActorMethod<[], Array<Gift>>,
  'greet' : ActorMethod<[string], string>,
  'registerGift' : ActorMethod<[string], undefined>,
  'updateGift' : ActorMethod<[string, Status], Result>,
}

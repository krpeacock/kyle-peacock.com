export const idlFactory = ({ IDL }) => {
  const Status = IDL.Variant({ 'bought' : IDL.Null, 'unbought' : IDL.Null });
  const Gift = IDL.Record({
    'id' : IDL.Text,
    'status' : Status,
    'modifiedBy' : IDL.Opt(IDL.Principal),
  });
  const Result = IDL.Variant({ 'ok' : IDL.Null, 'err' : IDL.Text });
  return IDL.Service({
    'getControllers' : IDL.Func([], [IDL.Vec(IDL.Principal)], []),
    'getGift' : IDL.Func([IDL.Text], [IDL.Opt(Gift)], ['query']),
    'getGifts' : IDL.Func([], [IDL.Vec(Gift)], ['query']),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], []),
    'registerGift' : IDL.Func([IDL.Text], [], []),
    'updateGift' : IDL.Func([IDL.Text, Status], [Result], []),
  });
};
export const init = ({ IDL }) => { return []; };

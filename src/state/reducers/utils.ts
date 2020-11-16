export const put = <TState, TKey extends keyof TState, TValue extends TState[TKey]>(
  key: TKey,
  status: TValue
) => {
  return (state: TState) => ({
    ...state,
    [key]: status,
  });
};

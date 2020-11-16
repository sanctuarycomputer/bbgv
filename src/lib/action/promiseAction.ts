import {
  Action,
  TypeConstant,
  createAction,
  PayloadActionCreator,
  PayloadMetaActionCreator,
  PayloadAction,
  PayloadMetaAction,
} from 'typesafe-actions';

import { ThunkDispatch } from 'redux-thunk';
import { GlobalState } from 'types';

export interface PromiseAction<
  TPendingType extends TypeConstant,
  TFulfilledType extends TypeConstant,
  TRejectedType extends TypeConstant,
  TFulfilledPayload,
  TRejectedPayload,
  TMeta = undefined
> {
  pending: TMeta extends undefined
    ? PayloadActionCreator<TPendingType, Promise<TFulfilledPayload>>
    : PayloadMetaActionCreator<TPendingType, Promise<TFulfilledPayload>, TMeta>;
  fulfilled: TMeta extends undefined
    ? PayloadActionCreator<TFulfilledType, TFulfilledPayload>
    : PayloadMetaActionCreator<TFulfilledType, TFulfilledPayload, TMeta>;
  rejected: TMeta extends undefined
    ? PayloadActionCreator<TRejectedType, TRejectedPayload>
    : PayloadMetaActionCreator<TRejectedType, TRejectedPayload, TMeta>;
}

export function createPromiseAction<
  TPendingType extends TypeConstant,
  TFulfilledType extends TypeConstant,
  TRejectedType extends TypeConstant
>(pendingType: TPendingType, fulfilledType: TFulfilledType, rejectedType: TRejectedType) {
  return (() => {
    return {
      pending: createAction(pendingType)(),
      fulfilled: createAction(fulfilledType)(),
      rejected: createAction(rejectedType)(),
    };
  }) as <TFulfilledPayload, TRejectedPayload, TMeta = undefined>() => {
    /*
    This doesn't use the PromiseAction<> interface because it gives worse IDE
    feedback. Using the raw type here allows developers to read the pending,
    fulfilled, rejected types seperately.
    */
    pending: TMeta extends undefined
      ? PayloadActionCreator<TPendingType, Promise<TFulfilledPayload>>
      : PayloadMetaActionCreator<TPendingType, Promise<TFulfilledPayload>, TMeta>;
    fulfilled: TMeta extends undefined
      ? PayloadActionCreator<TFulfilledType, TFulfilledPayload>
      : PayloadMetaActionCreator<TFulfilledType, TFulfilledPayload, TMeta>;
    rejected: TMeta extends undefined
      ? PayloadActionCreator<TRejectedType, TRejectedPayload>
      : PayloadMetaActionCreator<TRejectedType, TRejectedPayload, TMeta>;
  };
}

export const promiseActionHandlerFactory = (
  onRejectedCallback: (action: { type: any; payload: any }, state: GlobalState) => void
) => {
  return <
    TPendingType extends TypeConstant,
    TFulfilledType extends TypeConstant,
    TRejectedType extends TypeConstant,
    TFulfilledPayload,
    TRejectedPayload,
    TMeta
  >(
    promiseAction: PromiseAction<
      TPendingType,
      TFulfilledType,
      TRejectedType,
      TFulfilledPayload,
      TRejectedPayload,
      TMeta
    >,
    promise: Promise<TFulfilledPayload>,
    meta?: TMeta
  ) => handlePromiseAction(promiseAction, promise, meta, onRejectedCallback);
};

export function handlePromiseAction<
  TPendingType extends TypeConstant,
  TFulfilledType extends TypeConstant,
  TRejectedType extends TypeConstant,
  TFulfilledPayload,
  TRejectedPayload,
  TMeta = undefined
>(
  promiseAction: PromiseAction<
    TPendingType,
    TFulfilledType,
    TRejectedType,
    TFulfilledPayload,
    TRejectedPayload,
    TMeta
  >,
  promise: Promise<TFulfilledPayload>,
  meta?: TMeta,
  onRejectedCallback?: (
    action:
      | PayloadAction<TRejectedType, TRejectedPayload>
      | PayloadMetaAction<TRejectedType, TRejectedPayload, TMeta>,
    state: GlobalState
  ) => void
) {
  return (dispatch: ThunkDispatch<GlobalState, undefined, Action>, getState: () => GlobalState) => {
    if (meta === undefined) {
      const pendingDispatch = promiseAction.pending as PayloadActionCreator<
        TPendingType,
        Promise<TFulfilledPayload>
      >;
      dispatch(pendingDispatch(promise));
    } else {
      dispatch(promiseAction.pending(promise, meta));
    }

    promise
      .then((result: TFulfilledPayload) => {
        if (meta === undefined) {
          const fulfilledDispatch = promiseAction.fulfilled as PayloadActionCreator<
            TFulfilledType,
            TFulfilledPayload
          >;
          dispatch(fulfilledDispatch(result));
        } else {
          dispatch(promiseAction.fulfilled(result, meta));
        }
        return result;
      })
      .catch((error: TRejectedPayload) => {
        if (meta === undefined) {
          const rejectedDispatch = promiseAction.rejected as PayloadActionCreator<
            TRejectedType,
            TRejectedPayload
          >;
          dispatch(rejectedDispatch(error));
          if (onRejectedCallback) {
            onRejectedCallback(rejectedDispatch(error), getState());
          }
        } else {
          dispatch(promiseAction.rejected(error, meta));
          if (onRejectedCallback) {
            onRejectedCallback(promiseAction.rejected(error, meta), getState());
          }
        }
        return error;
      });

    return promise;
  };
}

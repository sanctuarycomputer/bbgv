/*
This file wraps action() from the 'typesafe-actions' package. 

If promiseActionTypes are passed into the type argument and a corrisponding promise
is passed into the payload argument, then the promiseActionHandler will be called.
Otherwise, the arguments will be passed through to action(). 
*/

import { action as actionHandler, TypeConstant } from 'typesafe-actions';
import * as Global from 'types';
import { PromiseAction } from './promiseAction';
import promiseActionHandler from 'lib/action/promiseActionHandler';

export function action<T extends TypeConstant, E>(
  type: T,
  payload: undefined,
  meta: undefined,
  error: E
): {
  type: T;
  error: E;
};
export function action<T extends TypeConstant, M, E>(
  type: T,
  payload: undefined,
  meta: M,
  error: E
): {
  type: T;
  meta: M;
  error: E;
};
export function action<T extends TypeConstant, P, E>(
  type: T,
  payload: P,
  meta: undefined,
  error: E
): {
  type: T;
  payload: P;
  error: E;
};
export function action<T extends TypeConstant, P, M, E>(
  type: T,
  payload: P,
  meta: M,
  error: E
): {
  type: T;
  payload: P;
  meta: M;
  error: E;
};
export function action<T extends TypeConstant, M>(
  type: T,
  payload: undefined,
  meta: M
): {
  type: T;
  meta: M;
};
export function action<T extends TypeConstant, P, M>(
  type: T,
  payload: P,
  meta: M
): {
  type: T;
  payload: P;
  meta: M;
};
export function action<T extends TypeConstant, P>(
  type: T,
  payload: P
): {
  type: T;
  payload: P;
};
export function action<T extends TypeConstant>(
  type: T
): {
  type: T;
};

export function action<
  TPendingType extends TypeConstant,
  TFulfilledType extends TypeConstant,
  TRejectedType extends TypeConstant,
  TFulfilledPayload,
  TRejectedPayload,
  TMeta = undefined
>(
  type: PromiseAction<
    TPendingType,
    TFulfilledType,
    TRejectedType,
    TFulfilledPayload,
    TRejectedPayload,
    TMeta
  >,
  promise: Promise<TFulfilledPayload>,
  meta?: TMeta
): Global.ThunkResult<Promise<TFulfilledPayload>>;

// prettier-ignore
export function action<
  TPendingType extends TypeConstant,
  TFulfilledType extends TypeConstant,
  TRejectedType extends TypeConstant,
  TFulfilledPayload,
  TRejectedPayload,
  TMeta,
  T extends
    | TypeConstant
    | PromiseAction<
        TPendingType,
        TFulfilledType,
        TRejectedType,
        TFulfilledPayload,
        TRejectedPayload,
        TMeta
      >,
  P extends undefined | Promise<TFulfilledPayload>,
  M extends undefined | TMeta,
  E = undefined
>(
  type: T,
  payload?: P,
  meta?: M,
  error?: E
) : {
  type: T;
  payload?: P;
  meta?: M;
  error?: E;
} | Global.ThunkResult<Promise<TFulfilledPayload>> {
  if (typeof type === 'string') {
    return actionHandler(type, payload, meta, error);
  } else {
    return promiseActionHandler(
      type as PromiseAction<
        TPendingType,
        TFulfilledType,
        TRejectedType,
        TFulfilledPayload,
        TRejectedPayload,
        TMeta
      >,
      payload as Promise<TFulfilledPayload>,
      meta
    );
  }
}

export { createPromiseAction } from './promiseAction';

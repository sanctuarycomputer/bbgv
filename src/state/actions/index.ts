import { ActionType } from 'typesafe-actions';

import ApplicationActions from 'state/actions/applicationActions';
import PagesActions from 'state/actions/pagesActions';
import UiActions from 'state/actions/uiActions';

export type ApplicationActions = ActionType<typeof ApplicationActions>;
export type PagesActions = ActionType<typeof PagesActions>;
export type UiActions = ActionType<typeof UiActions>;

export type AnyAction = ApplicationActions | PagesActions | UiActions;

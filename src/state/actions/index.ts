import { ActionType } from 'typesafe-actions';

import ApplicationActions from 'state/actions/applicationActions';
import PagesActions from 'state/actions/pagesActions';

export type ApplicationActions = ActionType<typeof ApplicationActions>;
export type PagesActions = ActionType<typeof PagesActions>;

export type AnyAction = ApplicationActions | PagesActions;

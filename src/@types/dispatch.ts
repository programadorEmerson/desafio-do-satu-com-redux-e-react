import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

import { GlobalStateType } from './todo.type'

export type Dispatch = ThunkDispatch<GlobalStateType, void, AnyAction>
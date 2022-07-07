import { TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import { ThunkDispatch } from 'redux-thunk';
import { action } from './actions';
import { RootState } from "./store";

export const useAppDispatch = () =>  useDispatch<ThunkDispatch<RootState, void, action>>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
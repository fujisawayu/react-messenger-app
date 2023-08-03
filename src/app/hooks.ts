import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { AppDispath, RootState } from './store';
import { useSelector } from 'react-redux';

export const useAppDispath: () => AppDispath = useDispatch;
export const usrAppSelector: TypedUseSelectorHook<RootState> = useSelector;

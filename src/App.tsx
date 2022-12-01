import {FC, useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import './App.scss';
import { useAppDispatch } from './store/hooks';
import { AdminActionCreators } from './store/action-creators/adminActionCreators';
import { UserActionCreators } from './store/action-creators/userActionCreators';
import { ICurrentBasketItem } from './utils/interfaces/dbInterfaces';



const App: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const prevStringCurrentBasketItems = localStorage.getItem('currentBasketItems')
    const prevCurrentBasketItems: ICurrentBasketItem[] = JSON.parse(prevStringCurrentBasketItems ? prevStringCurrentBasketItems : '[]')
    dispatch(UserActionCreators.setCurrentBasketItems(prevCurrentBasketItems))
  }, [])

  useEffect(() => {
    dispatch(AdminActionCreators.checkAuthAdmin())
  }, [])

  useEffect(() => {
    dispatch(UserActionCreators.getActiveDiscountAndSet())
  }, [])

  return (
    <div className='App'>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
    </div>
  );
}

export default App;

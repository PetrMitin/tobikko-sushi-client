import {FC, useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import './App.scss';
import { useAppDispatch } from './store/hooks';
import { AdminActionCreators } from './store/action-creators/adminActionCreators';



const App: FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(AdminActionCreators.checkAuthAdmin())
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

import {FC} from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import './App.scss';


const App: FC = () => {
  return (
    <div className='App'>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
    </div>
  );
}

export default App;

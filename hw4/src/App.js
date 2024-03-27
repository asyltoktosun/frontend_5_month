import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import UserListPage from './pages/userListPage/UserListPage';
import UserRegisterPage from './pages/userRegisterPage/UserRegisterPage';
import Menu from './components/menu/Menu';


function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route index element={<UserRegisterPage/>}/>
        <Route path={'/users'} element={<UserListPage/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

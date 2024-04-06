import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import UserListPage from './pages/userListPage/UserListPage';
import UserRegisterPage from './pages/userRegisterPage/UserRegisterPage';
import Menu from './components/menu/Menu';
import RegisterPage from './pages/registerPage/RegisterPage'


function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route index element={<UserRegisterPage/>}/>
        <Route path={'/users'} element={<UserListPage/>}/>
        <Route path={'/register'} element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

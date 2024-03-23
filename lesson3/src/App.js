
import './App.css';
import AboutPage from './pages/aboutPage/AboutPage';
import UsersPage from './pages/usersPage/UsersPage'
import {Route, Routes} from 'react-router-dom'



function App() {
  return (
    <Routes>
        <Route path='/' element={<UsersPage/>}/>
        <Route path='/user/:id' element={<AboutPage/>}/>
    </Routes>
  );
}

export default App;

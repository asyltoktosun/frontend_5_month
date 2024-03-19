import './App.css';
import ChangeTitle from './components/changeTitle/ChangeTitle';
import AboutPage from './pages/aboutPage/AboutPage';
import ContactsPage from './pages/contactsPage/ContactsPage';
import CountPage from './pages/countPage/CountPage';
import MainPages from './pages/mainPages/MainPages';

function App() {
  return (
    <div className="App">
      {/* <MainPages/>
      <AboutPage/>
      <ChangeTitle/> */}
      <ContactsPage/>
      <CountPage/>

      
    </div>
  );
}

export default App;

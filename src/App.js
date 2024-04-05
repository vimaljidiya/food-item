import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Foods from './Food/Foods';
import Cards from './Cards/Cards';
import Contacts from './Contact/Contacts';
import { Provider } from 'react-redux';
import Store from './Stores/Store';



function App() {
  return (
<>
<Provider store={Store}>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Main/>}/>
  <Route path='/Foods' element={<Foods/>}/>
  <Route path='/Cards' element={<Cards/>}/>

  <Route path='/Contacts' element={<Contacts/>}/>

</Routes>
<Footer/>
</BrowserRouter>
</Provider>


</>
  );
}

export default App;

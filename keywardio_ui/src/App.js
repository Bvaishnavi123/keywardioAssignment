import { Route, Routes } from 'react-router-dom';
import './App.css';
import ModalUnstyled from './Components/Modal/modal.jsx';
import { Navbar } from './Components/Navbar/navbar.jsx';
import { CreateAds } from './Pages/CreateAds/createads.jsx';
import { MediaFormCmp } from './Pages/CreateMediaAd/create_mediaForm.jsx';
import { CreateTextForm } from './Pages/CreateTextForm/create_text.jsx';
import { Home } from './Pages/Home/home.jsx';

function App() {
  return (
    <div className="App">
    <Navbar/>
   <Routes>
    <Route path='/'  element={<Home/>}/>
    <Route path='/create-ads'  element={ <CreateAds/>}/>
    <Route path='/create-text-form'  element={<CreateTextForm/>}/>
    <Route path='/create-media-form'  element={<MediaFormCmp/>}/>
   </Routes>
   
    </div>
  );
}

export default App;

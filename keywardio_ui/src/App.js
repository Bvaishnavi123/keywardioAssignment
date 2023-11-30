import './App.css';
import { Navbar } from './Components/Navbar/navbar.jsx';
import { CreateAds } from './Pages/CreateAds/createads.jsx';
import { CreateTextForm } from './Pages/CreateTextForm/create_text.jsx';
import { Home } from './Pages/Home/home.jsx';

function App() {
  return (
    <div className="App">
    <Navbar/>
    {/* <Home/> */}
    {/* <CreateAds/> */}
    <CreateTextForm/>
    </div>
  );
}

export default App;

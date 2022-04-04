import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Headers from './components/Headers/Headers';
import REVIEWS from './components/REVIEWS/REVIEWS';
import DASHBOARD from './components/DASHBOARD/DASHBOARD';
import BLOGS from './components/BLOGS/BLOGS';
import About from './components/About/About';
import Notfound from './components/Notfound/Notfound';

function App() {
  return (
    <div className="">
      <Headers></Headers>
     <Routes>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/reviews' element={<REVIEWS></REVIEWS>}></Route>
       <Route path='/dashboard' element={<DASHBOARD></DASHBOARD>}></Route>
       <Route path='/blogs' element={<BLOGS></BLOGS>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='*' element={<Notfound></Notfound>}></Route>
     </Routes>
    </div>
  );
}

export default App;

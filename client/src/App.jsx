import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';

import Home from './Pages/Home';
import Collection from './Pages/Collection';
import Cart from './Pages/Cart';

function App() {

  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/collection" element={<Collection/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;

import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Layout from './components/Layout';
// import ActiveUser from './data/ActiveUser.json'

// const navigate = useNavigate();

// const CheckAuth = () => {
//   if (ActiveUser.userId==0) {
//     navigate('/login')  
//   }
// };
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route element={<Layout/>}>
            {/* {CheckAuth} */}
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

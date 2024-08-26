import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/auth/login'
import { useState } from 'react'
import SignUp from './pages/auth/signup'
import { Toaster } from 'react-hot-toast'


function App() {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => setIsLogin(!isLogin);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={isLogin ? <Login handleLogin={handleLogin}/> : <SignUp handleLogin={handleLogin} />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;

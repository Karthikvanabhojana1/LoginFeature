import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './Component/Login/SignUp';
import Login from './Component/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Routes>
        {/* <Route index element={<Home />} /> */}
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

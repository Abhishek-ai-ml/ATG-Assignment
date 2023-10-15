import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import FeedSection from "./components/FeedSection";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Login from './components/Login'

function App() {

  const [logIn, setLogIn] = useState(false);
  const [signUpPage, setSignUpPage] = useState(false);
  const [loginPage, setLoginPage] = useState(false);

  return (
    <div className="w-full relative">
      <div className="hidden lg:inline">
        <Navbar logIn={logIn} setLogIn={setLogIn} signUpPage={signUpPage} setSignUpPage={setSignUpPage}/>
      </div>

      <div className="w-full h-full">
        <Banner/>
      </div>

      <div className="lg:w-9/12 w-full mx-auto">
        <FeedSection logIn={logIn}/>
      </div>

      <div className="absolute lg:top-[186px] lg:left-[352px] top-[178px] left-0 right-0 backdrop-blur-3">{signUpPage && <SignUp signUpPage={signUpPage} setSignUpPage={setSignUpPage} loginPage={loginPage} setLoginPage={setLoginPage}/>}</div>
      <div className="absolute lg:top-[186px] lg:left-[352px] top-[178px] left-0 right-0 backdrop-blur-3">{loginPage && <Login loginPage={loginPage} setLoginPage={setLoginPage} signUpPage={signUpPage} setSignUpPage={setSignUpPage} logIn={logIn} setLogIn={setLogIn}/>}</div>
    </div>
  );
}

export default App;

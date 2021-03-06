import { React, Fragment } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { FinanceContextProvider } from './FinanceContext';
import Auth from './1-Landing/Auth';
import Landing from './1-Landing/Landing';
import Header from "./Header&Footer/Header";
import Main from "./2-Main/Main"
import Profile from "./3-Profile/Profile"
import Footer from "./Header&Footer/Footer"

function App() {
  let location = useLocation();

  return (
    <Fragment>
      <FinanceContextProvider>
        {((location.pathname === '/')||(location.pathname === '/landing')) ? null : <Header />}
          <Routes>
            <Route exact path="/" element={<Auth/>} />
            <Route exact path="/landing" element={<Landing/>} />
            <Route path="/main" element={<Main/>} />
            <Route path="/profile" element={<Profile/>} />
          </Routes>
        {((location.pathname === '/')||(location.pathname === '/landing')) ? null : <Footer/>}
      </FinanceContextProvider>
    </Fragment>
  )
}

export default App;
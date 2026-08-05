import logo from './logo.svg';
import React,{useEffect} from 'react';
import './App.css';
import { Link , Route, Routes, BrowserRouter,NavLink } from 'react-router-dom';
import Main from './compoments/Main';
import Single from './compoments/single';
import Photo from './compoments/photo';
import * as Sentry from "@sentry/react";
function App() {
  useEffect(() => {
    // تجربة رمي خطأ يدوي لاختبار Sentry
    try {
      throw new Error("💥 هذا خطأ تجريبي لاختبار Sentry!");
    } catch (error) {
      Sentry.captureException(error, {
        extra: {
          context: "اختبار يدوي من App.js"
        }
      });
    }
  }, []);
  return (
    <div className="App">
      <h1>Reduxstagram</h1>
      {/* <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link> */}
      {/* <Routes>
        <Route path="/" element={<Main />} />
            <Route path="/single" element={<Single />} />
        <Route path="/photo" element={<Photo />} />
        </Route>
      </Routes> */}
   <Routes>
  <Route path="/" element={<Main />}>
    <Route path="/view/:postId" element={<Single />} />
    <Route path="photo" element={<Photo />} />
  </Route>
</Routes>
      <ul>
      <NavLink to="/" style={({isActive})=>isActive?{color:"red"}:{color:"black"}}>Home</NavLink>
     <NavLink to="/photo"style={({isActive})=>isActive?{color:"red"}:{color:"black"}}>Photo</NavLink>
     <NavLink to="/view/4"style={({isActive})=>isActive?{color:"red"}:{color:"black"}}>Single</NavLink>
      </ul>
    </div>
  );
}

export default App;

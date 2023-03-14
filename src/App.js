// import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import Contact from "./Contact.js";
import About from "./About.js";
import "./Navbar.css";

import EmbedSocialWidget from "./EmbedSocialWidget.js";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Weather from "./Weather.js";
function App() {
  return (
<>
           <Router>
              <Navbar/>

   
  
                <Switch>
        
              <Route exact path="/">
               <Weather />
               <EmbedSocialWidget/>
              </Route> 
              <Route exact path="/Contact">
               <Contact/>
              </Route>
              <Route exact path="/About">
               <About/>
              </Route>
              </Switch> 
          
        
   
          </Router>
          <Footer/>
          </>
  );
}

export default App;



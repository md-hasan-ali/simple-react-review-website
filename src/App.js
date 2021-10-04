import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import MenuBar from './components/MenuBar/MenuBar';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Servicess2 from './components/Servicess2/Servicess2';
import ContactUs from './components/ContactUs/ContactUs';


function App() {
  return (
    <div className="App">
      <Router>
        <MenuBar></MenuBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>


          <Route path="/services">
            <Servicess2></Servicess2>
          </Route>

          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>

          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

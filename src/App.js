import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
// import MenuBar from './components/MenuBar/MenuBar';

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
}

export default App;

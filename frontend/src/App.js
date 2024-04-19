import logo from './logo.svg';
import './App.css';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Main from './components/main/Main';


function App() {
  return (
    <div className="App">
       <Header/>
       <Main/>
       <Footer/>
    </div>
  );
}

export default App;

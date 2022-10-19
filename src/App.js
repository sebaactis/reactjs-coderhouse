import './App.css';
import Header from './components/layout/Header'
import Main from './components/layout/Main'
import Footer from './components/layout/Footer';
import ItemListContainer from './components/ItemListContainer';
import Contador from './components/Contador';


const App = () => {
  return (
    <>

      <Header  />
      <ItemListContainer greeting= "Rama pruebas" />
      <Contador stock={10} />
      <Main />
      <Footer />

    </>
  );
};


export default App;

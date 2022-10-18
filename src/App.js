import './App.css';
import Header from './components/layout/Header'
import Main from './components/layout/Main'
import Footer from './components/layout/Footer';
import ItemListContainer from './components/ItemListContainer';


const App = () => {
  return (
    <>

      <Header  />
      <ItemListContainer greeting= "Rama pruebas" />
      <Main />
      <Footer />

    </>
  );
};


export default App;

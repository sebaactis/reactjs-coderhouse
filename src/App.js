import './App.css';
import Header from './components/layout/Header'
import Main from './components/layout/Main'
import Footer from './components/layout/Footer';
import ItemListContainer from './components/item/ItemListContainer';
import Fondo from './components/visual/Fondo';



const App = () => {
  return (
    <>

      <Header />
      <Fondo />
      <ItemListContainer />
      <Main />
      <Footer />

    </>
  );
};


export default App;

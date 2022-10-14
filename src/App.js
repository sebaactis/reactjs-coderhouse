import './App.css';
import Header from './components/layout/Header'
import Main from './components/layout/Main'
import Footer from './components/layout/Footer';
import ItemListContainer from './components/ItemListContainer';


const App = () => {
  return (
    <>

      <Header  />
      <ItemListContainer greeting= "Enviado desde una prop" />
      <Main />
      <Footer />

    </>
  );
};


export default App;

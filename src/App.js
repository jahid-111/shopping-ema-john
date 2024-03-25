

import './App.css';
import Cover from './components/Cover/Cover';
import Header from './components/Header/Header';
import Products from './components/Products/Products';



function App() {
  return (
    <div className=" mx-auto">
        <Header></Header>
        <Cover></Cover>
        <Products></Products>
    </div>
  );
}

export default App;

import './App.css';
import Card from './Components/Card';
import Header from './Components/Header';
import data from './Components/data';
import Footer from './Components/Footer';
function App() {

  const cardData = data.map(item =>{
    return <Card
          key = {item.id}
          {...item}
    />
  });

  return (
    <div className="App">
      <Header/>
      <div className='container'>
        {cardData}
      </div>
      <Footer/>
    </div>
  );
}

export default App;

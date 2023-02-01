import './App.css';
import Header from './components/Header';
import Place from './components/Place';
import places from './components/places'


function App() {

  const placesItems = places.map(item => <Place
      key={item.id}
      {...item}
      />)

  return (
    <div className="App">
      <div>
        <Header/>
        <div className='places--scroll'>
          {placesItems}
        </div>
      </div>
    </div>
  );
}

export default App;

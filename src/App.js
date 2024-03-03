
import './App.css';
import Accordian from './components/accordian'; 
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
function App() {
  return (
    <div className="App">
      {/*Accordian component*/}
      <Accordian/>
      <RandomColor/>
      <StarRating/>
      <ImageSlider url={"https://picsum.photos/v2/list" } limit={"10"}/>
    </div>
  );
}

export default App;

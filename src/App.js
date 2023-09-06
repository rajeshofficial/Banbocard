
import './App.css';
import './Component /Card';
import ImageSlider from './Component /Slider';
import Card from './Component /Card';
import Nav from './Component /Nav';
import Background from './Component /Background';
// import InfoSlide from './Component /InfoSlide';
import citiesSlider from './Component /InfoSlide';



function App() {
  return (
<div>
  <Nav/>
  <Background/>
  {/* <ImageSlider /> */}
     {/* <Card/> */}
   {/* <InfoSlide/> */}
   <citiesSlider/>
 
 

</div>
  );
}

export default App;

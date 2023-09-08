
import './App.css';
import Card from './Component /Card';
import Nav from './Component /Nav';
import Background from './Component /Background';
import Imagebox from './Component /Imagebox';
import Features from './Component /Features';
import Form from './Component /Form';




function App() {
  return (
<div>
  <Nav/>
  <Background/>
  {/* <ImageSlider /> */}
     {/* <Card/> */}
   {/* <InfoSlide/> */}
   <Imagebox/>
   <Features/>
   <Form/>
   <Card/>

</div>
  );
}

export default App;

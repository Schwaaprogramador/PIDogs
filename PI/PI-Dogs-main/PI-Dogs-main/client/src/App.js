
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home';
import { Route } from 'react-router-dom';
import CreateDog from './components/CreateDog/CreateDog.jsx';
import DogDetail from './components/DogDetail/DogDetail.jsx';

function App() {
  return (<>
          <Route exact path="/" >
            <LandingPage/>
          </Route>

          <Route path="/home">
            <Home/>
          </Route>

          <Route exact path="/createdog">
            <CreateDog/>
          </Route>


          {/* Route component recibe automaticamente el id */}
          {/* Al route component no se le pueden pasar props, tiene un match default */}
          <Route path="/dogdetail/:id"  component={DogDetail}/>


          </>
    
    
    
  );
}

export default App;


import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home';
import { Route } from 'react-router-dom';

function App() {
  return (<>
          <Route exact path="/" >
            <LandingPage/>
          </Route>

          <Route path="/home">
            <Home/>
          </Route>
          </>
    
    
    
  );
}

export default App;

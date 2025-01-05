
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout/Layout';


const App = () => {
  return (
    <Router>
      <Routes>
      <Route  element={<Layout />} >
      <Route index element={<Home />} /> 
      </Route>
       
      </Routes>
    </Router>
  );
};

export default App;

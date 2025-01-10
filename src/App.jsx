
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout/Layout';
import CreatePost from './pages/CreatePost';


const App = () => {
  return (
    <Router>
      <Routes>
      <Route  element={<Layout />} >
      <Route index element={<Home />} /> 
      <Route path={'/generate-image'} element={<CreatePost/>} />
      </Route>
     
      </Routes>
      
    </Router>
  );
};

export default App;

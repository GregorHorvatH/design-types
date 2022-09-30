import { Routes, Route } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Home from '../Home';
import Adaptive from '../Adaptive';
import Fixed from '../Fixed';
import Responsive from '../Responsive';
import Rubber from '../Rubber';

const App = () => {
  return (
    <div className='design-types'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='fixed' element={<Fixed />} />
        <Route path='rubber' element={<Rubber />} />
        <Route path='adaptive' element={<Adaptive />} />
        <Route path='responsive' element={<Responsive />} />
      </Routes>
    </div>
  );
};

export default App;

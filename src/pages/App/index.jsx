import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/styles';
import { StyledEngineProvider, useTheme } from '@mui/material/styles';

import Navigation from '../../components/Navigation';
import Home from '../Home';
import Adaptive from '../Adaptive';
import Fixed from '../Fixed';
import Responsive from '../Responsive';
import Rubber from '../Rubber';
import MuiGrid from '../MuiGrid';
import MuiContainer from '../MuiContainer';
import MuiBreakpoints from '../MuiBreakpoints';
import MuiUseMediaQuery from '../MuiUseMediaQuery';
import MuiHidden from '../MuiHidden';

const App = () => {
  const theme = useTheme();

  return (
    <div className="design-types">
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="fixed" element={<Fixed />} />
            <Route path="rubber" element={<Rubber />} />
            <Route path="adaptive" element={<Adaptive />} />
            <Route path="responsive" element={<Responsive />} />
            <Route path="mui-grid" element={<MuiGrid />} />
            <Route path="mui-container" element={<MuiContainer />} />
            <Route path="mui-breakpoints" element={<MuiBreakpoints />} />
            <Route path="mui-use-media-query" element={<MuiUseMediaQuery />} />
            <Route path="mui-hidden" element={<MuiHidden />} />
          </Routes>
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
};

export default App;

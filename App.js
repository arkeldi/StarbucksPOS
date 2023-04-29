// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ThemeSettings from './components/settings';
import { ChartStyle } from './components/chart';
import ScrollToTop from './components/ScrollToTop';
import { ProgressBarStyle } from './components/ProgressBar';
import NotistackProvider from './components/NotistackProvider';
import MotionLazyContainer from './components/animate/MotionLazyContainer';

// Import the Weather component
import Weather from './Weather';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <MotionLazyContainer>
      <ThemeProvider>
        <ThemeSettings>
          <NotistackProvider>
            <ProgressBarStyle />
            <ChartStyle />
            <ScrollToTop />
            <Router />
            {/* Include the Weather component */}
            <Weather />
          </NotistackProvider>
        </ThemeSettings>
      </ThemeProvider>
    </MotionLazyContainer>
  );
}




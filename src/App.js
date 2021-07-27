import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/styles';

import AppBar from './components/appbar/Appbar';
import AppBar2 from './components/appbar2/Appbar2';
import Alert from './components/welcomeAlert/Alert';
import Main from './pages/accountSummary/AccountOverview';
import SubFooter from './components/subFooter/SubFooter';
import Footer from './components/footer/Footer';

import { theme } from './AppStyles';

export default function App() {
  console.log('App.js');
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppBar />
        <AppBar2 />
        <Alert/>
        <Main />
        <SubFooter />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

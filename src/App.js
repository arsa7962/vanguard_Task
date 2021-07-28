import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/styles';

import AppBar from './components/appbar/Appbar';
import NavBar from './components/navbar/Navbar';
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
        <header>
          <AppBar />
          <NavBar />
          <Alert />
        </header>
        <body>
          <Main />
        </body>
        <footer>
          <SubFooter />
          <Footer />
        </footer>
      </ThemeProvider>
    </BrowserRouter>
  );
}

import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default'
import { Container } from './style';
import Header from '../Header';
import ContactList from '../ContactsList'
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles/>
      <Container>
        <Header />
        <ContactList />
      </Container>
    </ThemeProvider>
  );
}

export default App;

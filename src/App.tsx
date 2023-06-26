import { ThemeProvider } from 'styled-components';
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import LinkTree from './components/LinkTree';
import { Header } from './components/Header';
import  Footer  from './components/Footer';
import { Tags } from './components/tags';



export function App() {
  return (
   <ThemeProvider theme={defaultTheme}>
      <Header />
      <Tags/>
      <LinkTree />
      <Footer />
    <GlobalStyle />
   </ThemeProvider>
  )
}


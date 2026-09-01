import {Header} from "../components/header";
import {Main} from "../components/main";
import {Footer} from "../components/footer";
import { GlobalStyle } from '../styles/global';

export const App = () => {
  return (
      <div>
          <GlobalStyle></GlobalStyle>
        <Header />
        <Main />
        <Footer />
      </div>
  )
}
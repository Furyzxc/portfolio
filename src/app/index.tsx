import {Header} from "../components/header";
import {Footer} from "../components/footer";
import { GlobalStyle } from '../styles/global';
import {Main} from "../components/main";

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
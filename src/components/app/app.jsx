import { ThemeProvider } from 'styled-components';
import {
  Route,
  Routes,
} from 'components/common/common';
import DetailedQuest from 'components/detailed-quest/detailed-quest';
import Contacts from 'components/contacts/contacts';
import Home from 'components/home/home';
import NotFoundPage from 'components/not-found-page/not-found-page';
import { appTheme } from './common';
import * as S from './app.styled';
import { AppRoute } from 'consts';

const App = () => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
      <Routes>
        <Route path={AppRoute.Main} element={<Home />} />
        <Route path={AppRoute.QuestCard} element={<DetailedQuest />} />
        <Route path={AppRoute.Contacts} element={<Contacts />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
  </ThemeProvider>
);

export default App;

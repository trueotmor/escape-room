import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from 'components/common/common';
import { QuestsCatalog } from './components/components';
import * as S from './home.styled';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useCallback } from 'react';
import { fetchQuests } from 'store/main/main-thunks';
import { getQuests } from '../../store/main/main-selectors'
import { setQuestGenre } from 'store/main/main-data';
import { getQuestGenre } from '../../store/main/main-selectors';
import { QuestGenre } from 'consts';

const Home = () => {
  const dispatch = useDispatch();
  const quests = useSelector(getQuests);
  const currentQuestGenre = useSelector(getQuestGenre);

  const getQuestsByGenre = (quests, genre) => {
    if(genre === QuestGenre.All) {
      return quests;
    }
    return [...quests].filter((quest)=>{
      return quest.type === genre;
    })
  }

  useEffect(() => {
    dispatch(fetchQuests())
  }, [ dispatch ]);

  const setCurrentQuestGenre = useCallback((questGenre) => {
    dispatch(setQuestGenre(questGenre));
  }, [ dispatch ]);

    return (
    <MainLayout>
      <S.Main forwardedAs="main">
        <PageHeading>
          <PageTitle>Выберите тематику</PageTitle>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </PageHeading>
        <QuestsCatalog quests={getQuestsByGenre(quests, currentQuestGenre)} onGenreSelect={setCurrentQuestGenre} selectedGenre={currentQuestGenre} />
      </S.Main>
    </MainLayout>
  );
}

export default Home;

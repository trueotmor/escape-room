import React, { useCallback, useEffect, useState } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getIsWrongIdRequest, getQuests } from 'store/main/main-selectors';
import { fetchQuest } from 'store/main/main-thunks';
import { Loading } from 'components/common/loading/loading';
import { QuestLevel, TabsData } from 'consts';
import { isEscEvent } from 'utils/utils';
import NotFoundPage from '../not-found-page/not-found-page';
import { fetchRequest } from 'services/api-post';


const DetailedQuest = () => {
  const {questID} = useParams();
  const dispatch = useDispatch();
  const quests = useSelector(getQuests);
  const wrongId = useSelector(getIsWrongIdRequest);
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);
  const [quest, setQuest] = useState(null);

  useEffect(()=>{
    const currentQuest = quests.find(({id}) => `${id}` === questID);
    if(currentQuest) {
      setQuest(currentQuest);
    } else {
      dispatch(fetchQuest(questID));
    }
  },[dispatch, questID, quests]);

  const handleEscapeKeyDown =
    (evt) => {
      if (isEscEvent(evt)) {
        setIsBookingModalOpened(false);
        document.removeEventListener('keydown', handleEscapeKeyDown);
      }
    };

  const openModal = () => {
    setIsBookingModalOpened(true);
    document.addEventListener('keydown', handleEscapeKeyDown);
  };

  const closeModal = () => {
    setIsBookingModalOpened(false);
    document.removeEventListener('keydown', handleEscapeKeyDown);
  };

  const handleBookingBtnClick = () => {
    openModal();
  };

  const handleModalCloseBtnClick = () => {
    closeModal();
  };

  const handleModalSubmit = useCallback((data)=>{
    fetchRequest(data)
      .then(()=>{
        setIsBookingModalOpened(false);
      });
  },[]);

  if(wrongId) {
    return (
      <NotFoundPage/>
    )
  }

  if (quest === null) {
    return (
      <MainLayout>
        <S.Main>
          <Loading/>
        </S.Main>
      </MainLayout>
    )
  }

  const {title, description, coverImg, type, level, peopleCount:[min, max], duration} = quest;
  const questType = TabsData.find(({genre})=> genre===type).title.toLocaleLowerCase();

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`/${coverImg}`}
          alt={`Квест ${title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{questType}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{`${duration} мин`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{`${min} - ${max} чел`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{QuestLevel[level]}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={handleBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && (
          <BookingModal onCloseBtnClick={handleModalCloseBtnClick} peopleCount={quest.peopleCount} onSubmit={handleModalSubmit}/>)}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;

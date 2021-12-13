import React, { memo } from 'react';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import { TabsData, EMPTY_QUESTS_LIST_NOTICE, AppRoute, QuestLevel } from '../../../../consts'


const Tabs = ({onGenreSelect, selectedGenre}) => {
  return (
    <S.Tabs>
    {
      TabsData.map(({genre, title, icon})=>{
        const isActive = selectedGenre === genre;
        const handleTabItemClick = () => onGenreSelect(genre);
        return (
          <S.TabItem key={genre} onClick={handleTabItemClick}>
            <S.TabBtn isActive={isActive}>
              <S.TabIcon src={icon} alt={title}/>
              <S.TabTitle>{title}</S.TabTitle>
            </S.TabBtn>
          </S.TabItem>
        )})
    }
    </S.Tabs>
  )
}

const QuestsList = ({quests}) => {
  if (!quests.length) {
    return <S.Notice>{EMPTY_QUESTS_LIST_NOTICE}</S.Notice>;
  }
  return (
    <S.QuestsList>
      {
        quests.map((quest)=>{
          const {id, previewImg, title, peopleCount : [min, max], level} = quest;
          return (
            <S.QuestItem key={quest.id}>
              <S.QuestItemLink to={AppRoute.getQuest(id)}>
                <S.Quest>
                  <S.QuestImage
                    src={previewImg}
                    width="344"
                    height="232"
                    alt={`квест ${title}`}
                  />

                  <S.QuestContent>
                    <S.QuestTitle>{title}</S.QuestTitle>

                    <S.QuestFeatures>
                      <S.QuestFeatureItem>
                        <IconPerson />
                        {`${min} - ${max} чел`}
                      </S.QuestFeatureItem>
                      <S.QuestFeatureItem>
                        <IconPuzzle />
                        {`${QuestLevel[level]}`}
                      </S.QuestFeatureItem>
                    </S.QuestFeatures>
                  </S.QuestContent>
                </S.Quest>
              </S.QuestItemLink>
            </S.QuestItem>
          )})
      }
    </S.QuestsList>
  )
}

const QuestsCatalog = ({quests, onGenreSelect, selectedGenre}) => (
  <>
    <Tabs onGenreSelect={onGenreSelect} selectedGenre={selectedGenre}/>
    <QuestsList quests={quests}/>
  </>
);

export default memo(QuestsCatalog);

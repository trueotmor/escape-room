import logo from 'assets/img/logo.svg';
import { AppRoute, ContactsData } from 'consts';
import * as S from './header.styled';
import { Navigation } from 'consts';
import { useDispatch } from 'react-redux';
import { setQuestGenre } from 'store/main/main-data';
import { QuestGenre } from 'consts';

const Header = () => {
  const dispatch = useDispatch();

  const handleLogoClick = () => {
    dispatch(setQuestGenre(QuestGenre.All));
  }
  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.LogoLink to={AppRoute.Main} onClick={handleLogoClick}>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.LogoLink>

        <S.Navigation>
          <S.Links>
            {
              Navigation.map(({link, title})=> (
                <S.LinkItem key={title}>
                  <S.NavLink to={link}>{title}</S.NavLink>
                </S.LinkItem>
            ))
            }
          </S.Links>
        </S.Navigation>
        <S.Phone href={`tel:${ContactsData.phone.number}`}>{ContactsData.phone.number}</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );
}

export default Header;

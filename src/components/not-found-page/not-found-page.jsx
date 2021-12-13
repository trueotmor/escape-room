import React from 'react';
import { AppRoute } from '../../consts';
import {
  MainLayout,
  PageSubtext,
  Link,
} from '../common/common';
import * as S from './not-found-page.styled';

function NotFoundPage() {
  return (
    <MainLayout>
      <S.Main>
        <S.ErrorTitle>Error 404</S.ErrorTitle>
        <S.Title>The page you are looking can't be found</S.Title>
        <Link to={AppRoute.Main}>
          <PageSubtext>Go back to the main page</PageSubtext>
        </Link>
      </S.Main>
    </MainLayout>
  );
}

export default NotFoundPage;

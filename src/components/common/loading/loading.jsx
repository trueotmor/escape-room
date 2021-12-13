import React from 'react';
import Loader from 'react-loader-spinner';
import * as S from './loading.styled';

const Loading = () => {
  return (
    <S.StyledLoading>
      <Loader type="Oval" color="#F2890F" height={150} width={150} />
    </S.StyledLoading>
  );
}

export {Loading};

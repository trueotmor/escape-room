import styled from 'styled-components';
import { Container, PageTitle } from '../common/common';

const Main = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 65%;
  margin-top: 100px;
  margin-bottom: 100px;
  @media (max-width: 1150px) {
    padding-left: 32px;
    padding-right: 33px;
  }
  &:after {
    content: '';
    z-index: 4;
    position: fixed;
    display: block;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 80px;
    background: linear-gradient(180deg, rgba(19, 18, 18, 0) 0%, #131212 100%);
    opacity: 0.8;
    pointer-events: none;
  }
`;

const ErrorTitle = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: ${({ theme }) => theme.font.medium};
  color: ${({ theme }) => theme.color.whiteSmoke};
`;

const Title = styled(PageTitle)`
  text-align: center;
  line-height: 150%;
`;

export { Main, ErrorTitle, Title };

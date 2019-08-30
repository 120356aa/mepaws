import styled from 'styled-components';
import { colors, fonts, media } from '../../vars';

export const ContentWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  padding: 30px 0 30px 0;
  bottom: 0;
  // border: 1px solid blue;
  background-color: white;
  box-shadow: -8px 0 8px lightgray};

  ${media.desktop} {
    flex-flow: row nowrap;
  }

  .imgs {
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      width: 100px;
      height: 100px;
      border: 1px solid gray;
      // background-color: gray;
      margin: 0 10px 0 10px;
    }
  }

  button {
    margin-top: 20px;
    width: 130px;
    height: 38px;
    border: none;
    color: ${colors.lightgray};
    font-family: ${fonts.primary};
    font-size: 18px;
    background-color: ${colors.primary};

    ${media.desktop} {
      margin: 0 0 0 20px;
    }
  }
`;
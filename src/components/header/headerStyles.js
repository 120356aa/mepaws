import styled from 'styled-components';
import { colors, fonts, media } from '../../vars';

export const HeaderWrap = styled.div`
  width: 100%;
  padding: 12px 0 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // background-color: ${colors.lightgray};
  box-shadow: 4px 0 8px lightgray;
  position: fixed;

  img {
    width: 46px;
    height: 46px;
    margin-left: 10px;
  }

  .nav {
    display: none;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px;

    ${media.tablet} {
      display: flex;
    }

    a {
      padding: 0 14px;
      text-decoration: none;
      color: black;
      font-size: 18px;
    }
  }

  .navButton {
    width: 34px;
    height: 28px;
    margin-right: 12px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;

    ${media.tablet} { display: none; }

    div {
      height: 6px;
      width: 100%;
      background-color: black;
    }
  }
`;

export const NavBox = styled.div`
  position: fixed;
  right: 0;
  top: 73px;
  width: 100%;
  height: 50px;
  background-color: ${colors.lightgray};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    padding: 0 12px;
    color: black;
    font-size: 18px;

    ${media.largeMb} {
      padding: 0 17px;
    }
  }
`;
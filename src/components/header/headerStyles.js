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
    width: 40px;
    height: 40px;
    margin-left: 10px;

    ${media.tablet} {
      width: 42px;
      height: 42px;
      margin-left: 14px;
    }

    ${media.largeTb} {
      width: 44px;
      height: 44px;
    }
  }

  .nav {
    display: none;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px;

    ${media.tablet} {
      display: flex;
    }

    .linkContainer {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;

      .icon {
        height: 100%;
        width: 26px;
      }

      a {
        margin: 0 26px 0 6px;
        text-decoration: none;
        color: black;
        font-size: 18px;
        font-family: ${fonts.primary};
      }
    }
  }

  .navButton {
    width: 30px;
    height: 26px;
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

  .linkContainer {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    .icon {
      height: 100%;
      width: 20px;
    }

    a {
      margin: 0 22px 0 6px;
      text-decoration: none;
      color: black;
      font-size: 16px;
      font-family: ${fonts.primary};
    }
  }
`;
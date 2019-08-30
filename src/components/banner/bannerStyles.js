import styled from 'styled-components';
import { colors, fonts, media } from '../../vars';

export const BannerWrap = styled.div`
  width: 100%;
  // border: 1px solid red;
  padding-top: 160px;

  ${media.desktop} {
    padding-top: 210px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${media.modern} {
    padding-top: 260px;
  }

  .bannBox {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    ${media.desktop} {
      align-items: flex-start;
      margin-right: 40px;
    }
    
    ${media.largeDt} { margin-right: 60px;}

    h1 {
      font-family: ${fonts.secondary};
      font-size: 56px;
      font-weight: 800;
      color: ${colors.darkgray};
      span { color: ${colors.primary}}

      ${media.tablet} { font-size: 60px; }
      ${media.largeTb} { font-size: 64px; }
      ${media.desktop} { font-size: 74px; }
      ${media.largeDt} { font-size: 82px; }
      ${media.modern} { font-size: 110px; }
    }
  }

  .contBox {
    // border: 1px solid red;
    margin: 70px 0 290px 0;

    ${media.desktop} {
      margin: 42px 0 0 40px;
      padding: 24px;
      background-color: ${colors.lightgray};
    }

    ${media.largeDt} { margin-left: 60px;}
    ${media.modern} { padding: 40px; }

    h3 {
      font-family: ${fonts.primary};
      font-size: 19px;
      text-align: center;
      width: 300px;
      margin: 0px auto;
      color: ${colors.darkgray};
      line-height: 24px;

      ${media.desktop} {
        width: 360px;
        text-align: left;
      }

      ${media.modern} {
        width: 400px;
        line-height: 26px;
      }
    }
  }
`;
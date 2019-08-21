import styled from 'styled-components';
import { colors, fonts, media } from '../../vars';

export const HeaderWrap = styled.div`
  width: 100%;
  padding: 12px 0 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.lightgray};
  position: fixed;

  img {
    width: 54px;
    height: 54px;
    margin-left: 10px;
  }

  .navButton {
    width: 34px;
    height: 30px;
    margin-right: 12px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;

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
  top: 78px;
  width: 180px;
  height: 240px;
  background-color: ${colors.lightgray};
  display: ${(props) => props.status ? 'inline' : 'none'};
`;
import styled from 'styled-components';
import { colors, fonts, media } from '../../vars';

export const ServiceBoxWrap = styled.div`
    width: 100%;
    // border: 1px solid red;
    margin-top: 80px;

    .S1 {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: column nowrap;

        ${media.largeTb} {
            flex-flow: row nowrap;
        }

        .box {
            width 300px;
            box-shadow: 1px 0 8px lightgray;
            margin-top: 40px;

            ${media.tablet} { width: 440px; }
            ${media.largeTb} {
                width: 320px;
                margin: 40px 20px 0 20px;
            }
            ${media.desktop} {
                width: 400px;
            }

            .header {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                background: rgb(0,157,149);
                background: linear-gradient(336deg, rgba(0,157,149,1) 0%, rgba(0,170,162,1) 100%);
                
                h3 {
                    padding: 22px 0 22px 0;
                    color: ${colors.white};
                    font-family: ${fonts.primary};
                    font-weight: 600;
                    font-size: 16px;

                    ${media.desktop} {
                        font-size: 18px;
                        padding: 26px 0;
                    }
                }
            }

            .cont {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-flow: column nowrap;

                p {
                    font-family: ${fonts.secondary};
                    font-size: 15px;
                    color: ${colors.darkgray};
                    padding: 20px;
                    line-height: 19px;

                    ${media.largeTb} { padding: 24px; }
                    ${media.desktop} {
                        padding: 30px;
                        font-size: 16px;
                        line-height: 21px;
                    }
                }
    
                .line {
                    width: 60px;
                    height: 1px;
                    background-color: ${colors.darkgray};
                    margin: 10px 0 25px 0;
                }

                h4 {
                    font-family: ${fonts.primary};
                    color: ${colors.darkgray};
                    font-size: 32px;
                    font-weight: 600;
                    margin: 0 0 20px 0;
                }

                .buttons {
                    width: 100%;
                    padding: 15px 0 15px 0;
                    display: flex;
                    justify-content: center;
                    background-color: ${colors.lightgray};

                    ${media.largeTb} { padding: 20px 0; }

                    button{
                        border: none;
                        padding: 10px 20px 10px 20px;
                        margin: 0 5px 0 5px;
                        font-family: ${fonts.secondary};
                        color: ${colors.white};
                        font-weight: 600;

                        &:nth-of-type(1) {
                            background-color: ${colors.primary};
                        }
                        &:nth-of-type(2) {
                            background-color: ${colors.white};
                            color: ${colors.darkgray};
                        }
                    }
                }
            }
        }
    }
`;
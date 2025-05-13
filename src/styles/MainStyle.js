import styled from "styled-components";
import { media } from "../styles/Media";

export const GoToTopButton = styled.div`
    float: right;
    cursor: pointer;
    color: #938a85;
    & svg: hover {
        color: black;
    }
`
export const Row = styled.div`
    ${[media.large, media.medium].map((breakpoint) => breakpoint`
        display: grid;
        grid-template-columns: 1fr 2fr;
        width: 100%;
    `)}
    ${media.small`
        display: block;
    `}
`
export const RowLeft = styled.div`
    text-align: left;
    & > .row-left-container {
        margin: 1.5rem 0;
        & > h3 {
            margin-bottom: 1rem;
            ${media.small`
                font-size: 1.5rem;
            `}
        }
        & > p {
            margin: 0.2rem 0;
        }
    }
`
export const RowRight = styled.div`
    text-align: left;
    & > h3 {
        margin: 0 0 1rem 0;
    }
    ${[media.large, media.medium].map((breakpoint) => breakpoint`
        & > #aboutMe {
            font-size: 1.1rem;
        }
        & > p {
            margin: 0;
        }
    `)}
    ${media.small`
        & > #aboutMe {
            font-size: 1rem;
        }
        & > p {
            margin: 1rem 0;
        }
    `}
`
export const Navigator = styled.ul`
    list-style-type: none;
    padding: 0;
    color: #938a85;
    font-family: 'Pretendard-Light';
    & > li > span:hover {
        color: black;
        cursor: pointer;
    }
    text-align: left;
    ${media.small`
        margin-bottom: 2rem;
    `}
`
export const Section = styled.section`
    padding: 2rem 0;
    text-align: left;
    & > h2 {
        ${media.small`
            font-size: 1.8rem;
        `}
    }
    & > h4 {
        font-family: 'Pretendard-ExtraLight';
        margin: 0.2rem 0;
    }
`
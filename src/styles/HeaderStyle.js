import styled from "styled-components";
import { media } from "../styles/Media";

export const Row = styled.div`
    align-items: center;
    ${[media.large, media.medium].map((breakpoint) => breakpoint`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
        padding: 4rem 0;
    `)}
    ${media.small`
        display: block;
        padding: 4rem 0 2rem;
    `}
`
export const RowLeft = styled.div`
    padding: 0 2rem;
    text-align: left;
    & > h3 {
        font-family: 'Pretendard-ExtraLight';
    }
    // ${[media.large, media.medium].map((breakpoint) => breakpoint`
    // `)}
    // ${media.small`
    // `}
`
export const RowRight = styled.div`
    padding: 0 2rem;
    ${[media.large, media.medium].map((breakpoint) => breakpoint`
        text-align: right;
    `)}
    ${media.small`
        text-align: left;
        margin-top: 1rem;
    `}
    & > p {
        margin: 0;

        & > a {
            text-decoration: none;
            font-family: 'Pretendard-Light';
            color: #938a85;
        }
        & > a: hover {
            color: black;
        }
    }
`
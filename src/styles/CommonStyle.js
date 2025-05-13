import styled from "styled-components";
import { media } from "../styles/Media";

export const H1 = styled.h1`
    font-family: 'Pretendard-Bold';
    margin: 0;
    ${[media.large, media.medium].map((breakpoint) => breakpoint`
        font-size: 3rem;
    `)}
    ${media.small`
        font-size: 2.5rem;
    `}
`
export const H2 = styled.h2`
    font-family: 'Pretendard-Regular';
    margin: 0;
    ${[media.large, media.medium].map((breakpoint) => breakpoint`
        font-size: 2rem;
    `)}
    ${media.small`
        font-size: 1.5rem;
    `}
`
export const H3 = styled.h3`
    font-family: 'Pretendard-Regular';
    margin: 0;
    ${[media.large, media.medium].map((breakpoint) => breakpoint`
        font-size: 1.5rem;
    `)}
    ${media.small`
        font-size: 1.2rem;
    `}
`
export const H4 = styled.h4`
    ${[media.large, media.medium].map((breakpoint) => breakpoint`
        font-family: 'Pretendard-Light';
        font-size: 1.2rem;
        margin: 0 0 0.5rem;
    `)}
    ${media.small`
        font-family: 'Pretendard-Regular';
        font-size: 1.1rem;
    `}
    
`
export const H5 = styled.h3`
    ${[media.large, media.medium].map((breakpoint) => breakpoint`
        font-family: 'Pretendard-ExtraLight';
        font-size: 1.1rem;
        margin: 0 0 0.5rem;
    `)}
    ${media.small`
        font-family: 'Pretendard-Light';
        font-size: 1rem;
        margin: 0 0 1rem;
    `}
`
export const ThinLine = styled.p`
    border-bottom: 1px dotted #e0d3cc; // #938a85;
`
export const BoldLine = styled.p`
    border-bottom: 4px dotted black;
`
export const ColorText = styled.p`
    color: #938a85;
    margin: 0;
`
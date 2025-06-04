import React from 'react'
import { H2, BoldLine } from "../styles/CommonStyle";
import styled from 'styled-components';
import { media } from '../styles/Media';

export const Section = ({id, title, children}) => {
  return (
    <Container id={id}>
        <H2>{title}</H2>
        <BoldLine />
        {children}
    </Container>
  )
}


export const Container = styled.section`
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
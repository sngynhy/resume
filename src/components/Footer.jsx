import React, { memo } from "react";
import styled from "styled-components";

const Container = styled.div`
    padding-top: 4rem;
    padding-bottom: 2rem;
    text-align: center;
    & > p > a {
        font-size: 15px;
        color: black;
        text-decoration: none;
    }
`

export const Footer = memo(function Footer() {
    return (
        <Container id="footer">
            <p>
                <a href="https://github.com/sngynhy" target="blank">@2025 Made by sngynhy</a>
            </p>
        </Container>
    )
})
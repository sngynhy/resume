import React, { memo } from "react";
import { Row, RowLeft, RowRight } from "../styles/HeaderStyle";
import { H1, H3 } from "../styles/CommonStyle";

export const Header = memo(function Header() {
    return (
        <Row id="header"> 
            <RowLeft>
                <H1>안녕하세요,</H1>
                <H1>성윤혜입니다.</H1>
                <p></p>
                <H3>백엔드 / 프론트엔드 웹 개발자</H3>
            </RowLeft>
            <RowRight>
                <p>
                    <a href="mailto:sngynhy@gmail.com" target="blank">sngynhy@gmail.com</a>
                </p>
                <p>
                    <a href="https://github.com/sngynhy" target="blank">https://github.com/sngynhy</a>
                </p>
                <p>
                    <a href="https://sngynhy.tistory.com/" target="blank">sngynhy.tistory.com</a>
                </p>
            </RowRight>
        </Row>
    )
})


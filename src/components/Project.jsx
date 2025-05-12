import React, { memo } from "react";
import styled from "styled-components";
import { H3, H4 } from "../styles/CommonStyle";

export const Project = memo((props) => {
    const data = props.data
    return (
        <>
            {data.length > 0 &&
            <div className="project">
                {data.map((el, i) => {
                    return (
                        <Contanier key={i}>
                            <H3>{el.title}.</H3>
                            <div>
                                <span>{el.period}</span>
                                <p>{el.description}</p>
                            </div>
                            <div>
                                <H4>수행 업무</H4>
                                <ul>
                                    {el.work?.map((item, i) => {
                                        return (
                                            <div key={i}>
                                                <li>{item.main}</li>
                                                <ul>
                                                    {item.detail?.map((el, i) => <li key={i}>{el}</li>)}
                                                </ul>
                                            </div>
                                        )}
                                    )}
                                </ul>
                            </div>
                            <div>
                                <H4>기술 스택</H4>
                                {el.tech}
                            </div>
                            <div>
                                {el.demosite && <><H4>Demo</H4><a className="url" href={el.demosite} target="blank">{el.demosite}</a></>}
                                <p></p>
                                {el.repository && <><H4>Git</H4> <a className="url" href={el.repository} target="blank">{el.repository}</a></>}
                            </div>
                        </Contanier>
                    )
                })}
            </div>
            }
        </>
    )
})

const Contanier = styled.div`
    margin: 1.5rem 0 3.5rem;
    & > h3 {
        margin-bottom: 0.2rem;
    }
    & > div {
        margin: 0 0 1.5rem;
        font-family: 'Pretendard-Light';

        & > p {
            font-family: 'Pretendard-Regular';
        }
        // & > .url {
        //     color: #938a85;
        // }
        // & > .url:hover {
        //     color: black;
        // }
    }
`
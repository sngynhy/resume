import React, { useState } from "react";
import { GoToTopButton, Row, RowLeft, RowRight, Navigator, Section } from "../styles/MainStyle";
import { H1, H2, H3, H4, BoldLine, ThinLine, H5 } from "../styles/CommonStyle";
import { GoMoveToTop } from "react-icons/go";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { Project } from "../components/Project";
import { summaryData } from "../data/summaryData";
import { coreCompetenceData } from "../data/coreCompetenceData";
import projectData from "../data/projectData.json";
import experienceData from "../data/experienceData.json";
import sideProjectData from "../data/sideProjectData.json";
import certificationData from "../data/certificationData.json";
import educationData from "../data/educationData.json";
import skillsData from "../data/skillsData.json";

const navList = [
    { id: 'experience', title: 'Work Experience.' },
    { id: 'side-project', title: 'Side Project.' },
    { id: 'skills', title: 'Skills.' },
    { id: 'education', title: 'Education.' },
    { id: 'certificate', title: 'Certificate.' },
    { id: 'core-competence', title: 'Core Competence.' }
]

export const Main = () => {

    const [showOther, setShowOther] = useState(false)
    const [showDetails, setShowDetails] = useState([])
    const toggleDetail = (index) => {
        setShowDetails((prev) => {
          const updatedDetails = [...prev]
          updatedDetails[index] = !updatedDetails[index]
          return updatedDetails
        });
    };
    const scrollToSection = (id) => {
        const location = document.querySelector('#' + id).offsetTop
        window.scrollTo({ top: location, behavior: "smooth" })
    }
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    experienceData = experienceData.sort((a, b) => b.id - a.id)
    const lastIndex = experienceData.findIndex(el => !el.developer) - 1

    return (
        <>
            <div id="overview" style={{padding: "0 2rem"}}>
                <Row className="row">
                    {/* 상단 좌측 - 네비게이션 */}
                    <RowLeft className="row-left">
                        <nav id="navigator">
                            <H3 style={{color: '#938a85'}}>Navigator.</H3>
                            <Navigator>
                                {navList.map((item, i) => <li key={i}><span onClick={() => scrollToSection(item.id)}>{i + 1}. {item.title}</span></li>)}
                            </Navigator>
                        </nav>
                    </RowLeft>
                    {/* 상단 우측 - About Me */}
                    <RowRight className="row-right">
                        {/* <H3>About Me.</H3> */}
                        <div id="aboutMe" dangerouslySetInnerHTML={{ __html: summaryData }} />
                    </RowRight>
                </Row>
            </div>

            <div style={{padding: "2rem"}}>
                {/* Work Experience */}
                <Section id="experience">
                    <H2>{navList[0].title}</H2>
                    <BoldLine />
                    {experienceData.map((experience, i) => {
                        return (
                            <div key={i}>
                                <Row>
                                    {experience.developer &&
                                        <RowLeft className="row-left">
                                            <div className="row-left-container">
                                                <H3>{experience.name}.</H3>
                                                <p>{experience.role}</p>
                                                <p>{experience.period}</p>
                                            </div>
                                        </RowLeft>
                                    }
                                    <RowRight className="row-right">
                                        <Project data={projectData.filter(project => project.id === experience.id)}/>
                                    </RowRight>
                                </Row>
                                {experience.developer &&
                                    <div>
                                        {i === lastIndex && <H3 style={{color: "#938a85", cursor: 'pointer'}} onClick={() => setShowOther(!showOther)}>Other Experience.</H3>}
                                        <ThinLine />
                                    </div>
                                }
                                {!experience.developer && showOther &&
                                    <div>
                                        <Row style={{color: '#938a85'}}>
                                                <RowLeft className="row-left">
                                                    <div className="row-left-container" style={{margin: '0'}}>
                                                        <H4 style={{margin: '1rem 0'}}>{experience.name}.</H4>
                                                        <p>{experience.period}</p>
                                                    </div>
                                                </RowLeft>
                                                <RowRight>
                                                    <p>{experience.role}</p>
                                                </RowRight>
                                        </Row>
                                    </div>
                                }
                            </div>
                        )
                    })}
                </Section>
                {/* Side Project */}
                <Section id="side-project">
                    <H2>{navList[1].title}</H2>
                    <BoldLine />
                    {sideProjectData.sort((a, b) => b.id - a.id).map((data, i) => {
                        return (
                            <Row key={i}>
                                <RowLeft className="row-left">
                                    <div className="row-left-container">
                                        <H3>{data.name}.</H3>
                                        <p>{data.role}</p>
                                        <p>{data.period}</p>
                                    </div>
                                </RowLeft>
                                <RowRight className="row-right">
                                    <Project data={[data]}/>
                                </RowRight>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                            </Row>
                        )
                    })}
                </Section>
                {/* Skills */}
                <Section id="skills">
                    <H2>{navList[2].title}</H2>
                    <BoldLine />
                    <div className="container">
                        {skillsData.map((data, i) => {
                            return (
                                <div key={i} style={{marginBottom: '0.5rem'}}>
                                    <Row>
                                        <RowLeft>
                                            <H4>{data.name}</H4>
                                        </RowLeft>
                                        <RowRight>
                                            {data.detail}
                                        </RowRight>
                                    </Row>
                                </div>
                            )
                        })}
                    </div>
                </Section>
                {/* Education */}
                <Section id="education">
                    <H2>{navList[3].title}</H2>
                    <BoldLine />
                    <div className="container">
                        {educationData.map((data, i) => {
                            return (
                                <div key={i} style={{marginBottom: '1rem'}}>
                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <div style={{cursor: data.detail ? 'pointer' : ''}} onClick={() => data.detail ? toggleDetail(i) : null}>
                                            <H4>{data.name}</H4>
                                        </div>
                                        {data.detail && <span style={{cursor: 'pointer'}} onClick={() => toggleDetail(i)}>
                                                {showDetails[i] ? <FaCaretUp /> : <FaCaretDown />}
                                            </span>}
                                    </div>
                                    <span>{data.period}</span>
                                    {showDetails[i] && <div>
                                        <ul>
                                            {data.detail?.map((el, i) => <li key={i}>{el}</li>)}
                                        </ul>
                                        {data.skills && <p>✔ {data.skills}</p>}
                                    </div>}
                                </div>
                            )
                        })}
                    </div>
                </Section>
                {/* Certificate */}
                <Section id="certificate">
                    <H2>{navList[4].title}</H2>
                    <BoldLine />
                    <div className="container">
                        {certificationData.map((certification, i) => <H5 key={i}>{certification.name}</H5>)}
                    </div>
                </Section>
                {/* Core Competence */}
                <Section id="core-competence">
                    <H2>{navList[5].title}</H2>
                    <BoldLine />
                    <div className="container">
                        {coreCompetenceData.map((data, i) => <H5 key={i}>{i+1}. {data}</H5>)}
                    </div>
                </Section>

                <GoToTopButton>
                    <GoMoveToTop size={30} onClick={scrollToTop} />
                </GoToTopButton>
            </div>
        </>
    )
}

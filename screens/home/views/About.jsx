import { useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import styled from "styled-components";

import { Container, Main, Title, SubHeading, Gradient } from "../Home";

export default function About() {
    return (
        <Container style={{ backgroundColor: "black" }} id="about">
            <Main>
                <Content>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce offset={0}>
                        <SubHeading><Gradient>ABOUT</Gradient></SubHeading>
                        <Title white>Who I am,<br />what I do</Title>
                    </ScrollAnimation>

                    <Info>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce offset={0}>
                            <Text>
                                Hi, my name is Tomas Boda, I’m a front-end web developer and user interface designer based in Bratislava, Slovakia. I design and build modern, minimalistic and reactive websites and web applications that have helped many businesses over the past few years.
                            </Text>
                        </ScrollAnimation>

                        <div style={{ height: 50 }} />

                        <ScrollAnimation animateIn="fadeInUp" animateOnce offset={0}>
                            <Text>
                                Every client and business faces different problems and needs individual approach, therefore I tailor every design to the client’s specific needs and try to solve their problems by intuitive layout and seamless user experience that achieve the results they strive for.
                            </Text>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeInUp" animateOnce offset={0}>
                            <Points>
                                <Heading>My main objectives are</Heading>

                                <Point>
                                    <Bullet />
                                    <Value>Intuitive layout</Value>
                                </Point>

                                <Point>
                                    <Bullet />
                                    <Value>Clean design</Value>
                                </Point>

                                <Point>
                                    <Bullet />
                                    <Value>User experience</Value>
                                </Point>

                                <Point>
                                    <Bullet />
                                    <Value>Performance</Value>
                                </Point>
                            </Points>
                        </ScrollAnimation>
                    </Info>
                </Content>
            </Main>
        </Container>
    )
}

const Content = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Info = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    margin-top: 75px;

    @media (max-width: 600px) {
        margin-top: 50px;
    }
`;

const Text = styled.p`
    color: white;
    font-size: 28px;
    font-weight: 200;
    line-height: 42px;

    opacity: 0.4;

    @media (max-width: 600px) {
        font-size: 20px;
        line-height: 30px;
    }
`;

const Points = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-top: 75px;
`;

const Heading = styled.div`
    color: white;
    font-size: 35px;
    font-weight: 700;
    line-height: 35px;

    margin-bottom: 30px;
    
    @media (max-width: 600px) {
        font-size: 28px;
        line-height: 38px;
    }
`;

const Point = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Bullet = styled.div`
    width: 10px;
    height: 10px;

    border-radius: 50%;

    margin-right: 10px;

    background: -webkit-linear-gradient(-70deg, #2188ff 0%, #804eda 100%);
`;

const Value = styled.div`
    color: white;
    font-size: 22px;
    font-weight: 200;
    line-height: 22px;

    margin: 10px 0px;

    opacity: 0.4;

    @media (max-width: 600px) {
        font-size: 18px;
        line-height: 18px;
    }
`;
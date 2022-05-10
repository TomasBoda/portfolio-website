import { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import styled from "styled-components";

import SmoothScroll from "../../../components/SmoothScroll";

import { Main, Button, Gradient } from "../Home";
import Header from "../../../components/Header";

export default function Landing() {

    const [useBreaks, setUseBreaks] = useState(false);

    useEffect(() => {
        handleBreaks();
    });

    useEffect(() => {
        window.addEventListener("resize", () => handleBreaks());
    }, []);

    function handleBreaks() {
        if (window.innerWidth > 600) {
            setUseBreaks(true);
        } else {
            setUseBreaks(false);
        }
    }

    return (
        <Container id="landing">
            <Header />

            <Main>
                <Content>
                    <Info>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce offset={0}>
                            <Title>
                                <Gradient>I build products</Gradient>
                                <br />
                                with seamless
                                <br />
                                user experience
                            </Title>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeInUp" animateOnce offset={0} delay={500}>
                            <Description>
                                Hi, my name is Tomas Boda, I'm a web developer and{useBreaks && <br />} user interface designer based in Bratislava, Slovakia.
                            </Description>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn="fadeInUp" animateOnce offset={0} delay={1000}>
                            <Button black onClick={() => SmoothScroll.scroll("#about")}>Explore</Button>
                        </ScrollAnimation>
                    </Info>

                    <PhotoPanel>
                        <Photo src={require("../../../public/assets/tomasboda.svg")} />
                    </PhotoPanel>
                </Content>
            </Main>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    max-height: 1000px;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0px 100px 0px 100px;

    @media (max-width: 1200px) {
        padding: 0px 50px 0px 50px;

        height: auto;
        max-height: none;
    }

    @media (max-width: 900px) {
        padding: 0px 20px 0px 20px;
    }
`;

const Content = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;

    @media (max-width: 1230px) {
        flex-direction: column;

        padding-top: 100px;
    }
`;

const PhotoPanel = styled.div`    
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    width: 600px;

    @media (max-width: 1600px) {
        width: 550px;
    }

    @media (max-width: 1500px) {
        width: 500px;
    }

    @media (max-width: 1450px) {
        width: 450px;
    }

    @media (max-width: 1230px) {
        width: 100%;
        max-width: 600px;

        margin-top: 50px;
    }
`;

const Photo = styled.img`
    width: 100%;

    transform: translateY(1px);
`;

const Info = styled.div`
    align-self: center;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    flex: 1;

    @media (max-width: 1230px) {
        align-self: flex-start;
    }
`;

const Title = styled.h1`
    color: black;
    font-size: 90px;
    font-weight: 700;
    line-height: 100px;

    @media (max-width: 1450px) {
        font-size: 70px;
        line-height: 80px;
    }

    @media (max-width: 600px) {
        font-size: 10.5vw;
        line-height: 12vw;
    }
`;

const Description = styled.p`
    color: black;
    font-size: 24px;
    font-weight: 300;
    line-height: 34px;

    opacity: 0.5;

    margin: 40px 0px;

    @media (max-width: 1400px) {
        font-size: 20px;
        line-height: 30px;
    }

    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 26px;

        margin: 20px 0px 30px 0px;
    }
`;
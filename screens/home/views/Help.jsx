import { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import styled from "styled-components";

import { Container, Main, Title, Gradient, SubHeading } from "../Home";

import { process } from "../../../configuration/Data";

export default function Help() {

    const [delay, setDelay] = useState(0);

    useEffect(() => {
        if (window.innerWidth > 1200) {
            setDelay(300);
        } else {
            setDelay(0);
        }
    }, []);

    return (
        <Container style={{ backgroundColor: "white" }} id="help">
            <Main>
                <Content>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce offset={0}>
                        <SubHeading><Gradient>HOW I CAN HELP</Gradient></SubHeading>
                        {/*<Title black>Analyse, design,<br />build, launch</Title>*/}
                        <Title black>My process of<br/>collaboration</Title>
                    </ScrollAnimation>

                    <Grid>
                        {process.map((item, index) =>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce offset={0} delay={index * delay} key={index}>
                                <Item>
                                    <Icon src={item.icon} />
                                    <Heading>{item.title}</Heading>
                                    <Description>{item.description}</Description>

                                    {item.points.map((point, index) =>
                                        <Point key={index}>
                                            <Bullet />
                                            <Info>{point}</Info>
                                        </Point>    
                                    )}
                                </Item>
                            </ScrollAnimation>
                        )}
                    </Grid>
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

const Grid = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;

    margin-top: 150px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 100px;
    }

    @media (max-width: 900px) {
        gap: 50px;
    }

    @media (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);

        margin-top: 75px;
    }
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Icon = styled.img`
    width: 80px;
    height: 80px;
    object-fit: contain;
`;

const Heading = styled.div`
    color: black;
    font-size: 30px;
    font-weight: 700;
    line-height: 30px;

    margin: 35px 0px 15px 0px;
`;

const Description = styled.div`
    color: black;
    font-size: 18px;
    font-weight: 300;
    line-height: 28px;

    opacity: 0.5;

    margin-bottom: 25px;
`;

const Point = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin: 8px 0px;
`;

const Bullet = styled.div`
    width: 8px;
    height: 8px;

    border-radius: 50%;

    margin-right: 10px;

    background: -webkit-linear-gradient(-70deg, #2188ff 0%, #804eda 100%);
`;

const Info = styled.div`
    color: black;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
`;
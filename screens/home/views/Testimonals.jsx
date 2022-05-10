import { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import styled from "styled-components";

import { Container, Main, Title, Gradient, SubHeading } from "../Home";

import { testimonals } from "../../../configuration/Data";

export default function Testimonals() {

    const [testimonal, setTestimonal] = useState(0);
    const [showingMore, setShowingMore] = useState(false);

    function nextTestimonal() {
        var testimonalComponent = document.getElementById("testimonal");

        testimonalComponent.style.opacity = "0";

        setTimeout(() => {
            const next = testimonal + 1 === testimonals.length ? 0 : testimonal + 1;
            setTestimonal(next);

            testimonalComponent.style.opacity = "1";
        }, 410);
    }

    function previousTestimonal() {
        var testimonalComponent = document.getElementById("testimonal");

        testimonalComponent.style.opacity = "0";

        setTimeout(() => {
            const previous = testimonal - 1 === -1 ? testimonals.length - 1 : testimonal - 1;
            setTestimonal(previous);

            testimonalComponent.style.opacity = "1";
        }, 410);
    }

    function showMore() {
        var text = document.getElementById("testimonal-text");

        if (showingMore) {
            text.style.overflow = "hidden";
            text.style.textOverflow = "ellipsis";
            text.style.display = "-webkit-box";
            text.style.webkitLineClamp = "4";
            text.style.webkitBoxOrient = "vertical";

            setShowingMore(false);
        } else {
            text.style.overflow = "";
            text.style.textOverflow = "";
            text.style.display = "initial";
            text.style.webkitLineClamp = "";
            text.style.webkitBoxOrient = "";

            setShowingMore(true);
        }
    }

    return (
        <Container style={{ backgroundColor: "white" }} id="testimonals">
            <Main>
                <Content>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce offset={0}>
                        <SubHeading><Gradient>TESTIMONALS</Gradient></SubHeading>
                        <Title black>What people<br />wrote about me</Title>
                    </ScrollAnimation>

                    <Testimonal id="testimonal">
                        <Photo src={testimonals[testimonal].image} />

                        <Info>
                            <Quotes><Gradient>"</Gradient></Quotes>

                            <Text id="testimonal-text">
                                {testimonals[testimonal].text}
                            </Text>

                            <ShowMore onClick={() => showMore()}>
                                {showingMore ? "Hide" : "Show more"}
                            </ShowMore>

                            <div style={{ flex: 1 }} />

                            <Bottom>
                                <Person>
                                    <Name>{testimonals[testimonal].name}</Name>
                                    <Role>{testimonals[testimonal].role}</Role>
                                </Person>

                                <div style={{ flex: 1 }} />

                                <Controls>
                                    <Arrow src={require("../../../public/assets/back-arrow.svg")} onClick={() => previousTestimonal()} />
                                    <Arrow src={require("../../../public/assets/next-arrow.svg")} onClick={() => nextTestimonal()} />
                                </Controls>
                            </Bottom>
                        </Info>
                    </Testimonal>
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

const Testimonal = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;

    margin-top: 150px;

    opacity: 1;

    transition: all 400ms;

    @media (max-width: 1200px) {
        flex-direction: column;

        margin-top: 75px;
    }
`;

const Photo = styled.img`
    width: 400px;
    height: 400px;
    object-fit: cover;

    filter: grayscale();

    background-color: rgba(0, 0, 0, 0.1);

    margin-right: 150px;

    @media (max-width: 1400px) {
        margin-right: 100px;
    }

    @media (max-width: 1200px) {
        width: 100%;
        max-width: 400px;
        height: 400px;

        margin-right: 0px;
        margin-bottom: 50px;
    }

    @media (max-width: 600px) {
        height: 250px;
    }
`;

const Info = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

const Quotes = styled.div`
    color: black;
    font-size: 100px;
    font-weight: 900;
    line-height: 100px;
`;

const Text = styled.p`
    color: black;
    font-size: 24px;
    font-weight: 500;
    line-height: 34px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;

    transform: translateY(-20px);

    @media (max-width: 1200px) {
        font-size: 26px;
        line-height: 36px;
    }
`;

const ShowMore = styled.span`
    color: black;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;

    background: -webkit-linear-gradient(-70deg, #2188ff 0%, #804eda 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    margin-bottom: 50px;

    cursor: pointer;
`;

const Bottom = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 1200px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const Person = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 1200px) {
        margin-bottom: 50px;
    }
`;

const Name = styled.div`
    color: black;
    font-size: 22px;
    font-weight: 700;
    line-height: 22px;

    margin-bottom: 3px;
`;

const Role = styled.div`
    color: black;
    font-size: 17px;
    font-weight: 400;
    line-height: 27px;

    opacity: 0.5;
`;

const Controls = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Arrow = styled.img`
    width: 40px;
    height: 40px;

    padding: 12px;

    background-color: black;

    cursor: pointer;

    transition: all 200ms;

    &:hover {
        background-color: rgba(0, 0, 0, 0.85);
    }
`;
import React from "react";
import styled from "styled-components";
import OnImagesLoaded from "react-on-images-loaded";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { hideTransition } from "../../components/Transition";

export default function Project({ project }) {
    return (
        <OnImagesLoaded onLoaded={() => hideTransition()}>
            <Container style={{ paddingTop: 0 }}>
                <Main>
                    <Header />

                    <Content>
                        <SubHeading><Gradient>CASE STUDY</Gradient></SubHeading>
                        <Title>{project.name}</Title>

                        <Info>
                            <Left>
                                <Item>
                                    <Heading>My role</Heading>
                                    {project.role.map((item, index) => <Text key={index}>{item}</Text>)}
                                </Item>

                                <Item>
                                    <Heading>Technologies</Heading>
                                    {project.technologies.map((item, index) => <Text key={index}>{item}</Text>)}
                                </Item>

                                <Item>
                                    <Heading>Year</Heading>
                                    <Text>{project.year}</Text>
                                </Item>
                            </Left>

                            <Right>
                                {project.description.map((item, index) => <Description key={index}>{item}</Description>)}

                                <Description>The project was initiated and finished in <Redirect href="https://advision.sk">AdVision Digital Marketing</Redirect>.</Description>
                            </Right>
                        </Info>

                        <Gallery>
                            {project.images.map((image, index) =>
                                <Image src={image} key={index} />    
                            )}
                        </Gallery>
                    </Content>
                </Main>
                
                <Footer />
            </Container>
        </OnImagesLoaded>
    )
}

const Container = styled.section`
    width: 100vw;
    //height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    //position: sticky;
`;

const Main = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1500px;

    padding: 100px;
    padding-top: 0px;

    @media (max-width: 1200px) {
        padding: 50px;
        padding-top: 0px;
    }

    @media (max-width: 900px) {
        padding: 50px 20px;
        padding-top: 0px;
    }
`;

const Content = styled.div`
    width: 100%;

    padding-top: 100px;
`;

const Gradient = styled.span`
    background: -webkit-linear-gradient(-70deg, #2188ff 0%, #804eda 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const SubHeading = styled.h3`
    color: white;
    font-size: 25px;
    font-weight: 900;
    line-height: 25px;

    margin-bottom: 10px;

    @media (max-width: 600px) {
        font-size: 18px;
        line-height: 18px;

        margin-bottom: 5px;
    }
`;

const Title = styled.h2`
    color: ${props => props.black && "black"};
    color: ${props => props.white && "white"};
    font-size: 80px;
    font-weight: 700;
    line-height: 90px;
    text-align: left;

    @media (max-width: 1400px) {
        font-size: 70px;
        line-height: 80px;
    }

    @media (max-width: 900px) {
        font-size: 50px;
        line-height: 60px;
    }

    @media (max-width: 600px) {
        font-size: 40px;
        line-height: 50px;

        font-size: 12vw;
        line-height: 14vw;
    }
`;

const Info = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 100px;

    align-items: flex-start;

    margin: 65px 0px 100px 0px;

    @media (max-width: 1100px) {
        grid-template-columns: 1fr;
        gap: 65px;
    }
`;

const Left = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: auto;
    gap: 30px;
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 0px;
`;

const Heading = styled.h4`
    color: black;
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;

    margin-bottom: 10px;
`;

const Text = styled.h5`
    color: black;
    font-size: 16px;
    font-weight: 300;
    line-height: 26px;

    opacity: 0.5;
`;

const Right = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;
`;

const Description = styled.p`
    color: black;
    font-size: 18px;
    font-weight: 300;
    line-height: 28px;

    opacity: 0.5;
`;

const Redirect = styled.a`
    color: black;
    font-size: 18px;
    font-weight: 300;
    line-height: 28px;

    text-decoration: none;
`;

const Gallery = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;

    @media (max-width: 900px) {
        gap: 10px;
    }
`;

const Image = styled.img`
    width: 100%;

    box-shadow: 0px 0px 15px -9px rgba(0, 0, 0, 0.2);
`;
import { useRouter } from "next/router";
import ScrollAnimation from "react-animate-on-scroll";
import styled from "styled-components";

import { Container, Main, Title, SubHeading, Gradient } from "../Home";

import { projects } from "../../../configuration/Data";
import { redirect } from "../../../components/Transition";

export default function Work() {

    const router = useRouter();

    return (
        <Container style={{ backgroundColor: "white" }} id="work">
            <Main>
                <Content>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce offset={0}>
                        <SubHeading><Gradient>PROJECTS</Gradient></SubHeading>
                        <Title black>See my<br />latest work</Title>
                    </ScrollAnimation>

                    <Grid>
                        {projects.map((project, index) =>
                            <Item onClick={() => redirect({ pathname: "/projects/" + project.link, router: router})} key={index}>
                                <Image src={project.images[0]} />

                                <Info>
                                    <Year>{project.year}</Year>
                                    <Name>{project.name}</Name>
                                </Info>
                            </Item>
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
    height: 100%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;

    margin-top: 100px;

    @media (max-width: 900px) {
        grid-template-columns: repeat(1, 1fr);
    }

    @media (max-width: 600px) {
        margin-top: 75px;
    }
`;

const Image = styled.img`
    position: absolute;
    left: 0px;
    top: 0px;

    width: 100%;
    height: 100%;

    object-fit: cover;

    transition: all 300ms;

    z-index: 1;
`;

const Info = styled.div`
    position: absolute;
    left: 0px;
    top: 0px;

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    padding: 35px;

    z-index: 3;

    @media (max-width: 900px) {
        padding: 20px;
    }
`;

const Year = styled.p`
    color: black;
    font-size: 15px;
    font-weight: 400;
    line-height: 15px;

    margin-bottom: 7px;

    opacity: 0.6;
`;

const Name = styled.p`
    color: black;
    font-size: 35px;
    font-weight: 700;
    line-height: 35px;
`;

const Item = styled.div`
    width: 100%;
    height: 500px;

    position: relative;

    border-radius: 5px;
    overflow: hidden;

    background-color: rgba(255, 255, 255, 0.04);

    cursor: pointer;

    &:hover ${Image} {
        transform: scale(1.05);
    }

    @media (max-width: 900px) {
        height: 50vh;
    }
`;
import { useRouter } from "next/router";
import styled from "styled-components";

import SmoothScroll from "./SmoothScroll";
import { redirect } from "./Transition";

export default function Footer() {

    const router = useRouter();

    return (
        <Container>
            <Main>
                <Top>
                    <Column>
                        <Logo onClick={() => redirect({ pathname: "/", callback: () => SmoothScroll.scroll("#landing"), router: router })}>Tomas Boda</Logo>
                        <Description>
                            Web developer and user interface designer based in Bratislava, Slovakia.
                        </Description>
                    </Column>

                    <Column>
                        <Title>SITEMAP</Title>

                        <Info onClick={() => redirect({ pathname: "/", callback: () => SmoothScroll.scroll("#landing"), router: router })}>Home</Info>
                        <Info onClick={() => redirect({ pathname: "/", callback: () => SmoothScroll.scroll("#about"), router: router })}>About</Info>
                        <Info onClick={() => redirect({ pathname: "/", callback: () => SmoothScroll.scroll("#help"), router: router })}>What I do</Info>
                        <Info onClick={() => redirect({ pathname: "/", callback: () => SmoothScroll.scroll("#work"), router: router })}>Projects</Info>
                        <Info onClick={() => redirect({ pathname: "/", callback: () => SmoothScroll.scroll("#testimonals"), router: router })}>Testimonals</Info>
                    </Column>

                    <Column>
                        <Title>PROJECTS</Title>

                        <Info onClick={() => redirect({ pathname: "/projects/exploited", router: router })}>Exploited</Info>
                        <Info onClick={() => redirect({ pathname: "/projects/hodzko", router: router })}>Hodzko</Info>
                        <Info onClick={() => redirect({ pathname: "/projects/imooptik", router: router })}>Imooptik</Info>
                        <Info onClick={() => redirect({ pathname: "/projects/renova-install", router: router })}>Renova Install</Info>
                    </Column>

                    <Column>
                        <Title>CONTACT</Title>

                        <Info>Bratislava, Slovakia</Info>
                        <a href="mailto: hello@tomasboda.dev" style={{ textDecoration: "none" }}><Info>hello@tomasboda.dev</Info></a>
                    </Column>

                    <Column>
                        <Title>SOCIAL</Title>

                        <a href="https://www.linkedin.com/in/tomas-boda-dev" style={{ textDecoration: "none" }}><Info>LinkedIn</Info></a>
                        <a href="https://github.com/TomasBoda" style={{ textDecoration: "none" }}><Info>GitHub</Info></a>
                    </Column>
                </Top>

                <Bottom>
                    <Copyright>© 2021 tomasboda.dev</Copyright>
                    <By>Design and development by Tomas Boda</By>
                </Bottom>
            </Main>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 100px;
    padding-bottom: 50px;

    background-color: black;

    @media (max-width: 1200px) {
        padding: 50px;
    }

    @media (max-width: 900px) {
        padding: 50px 20px;
    }
`;

const Main = styled.div`
    width: 100%;
    max-width: 1500px;

    display: flex;
    flex-direction: column;
`;

const Top = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 1100px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 50px;
    }
`;

const Bottom = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-top: 75px;

    @media (max-width: 700px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const Copyright = styled.p`
    color: white;
    font-size: 16px;
    font-weight: 300;
    line-height: 34px;

    opacity: 0.4;
`;

const By = styled.div`
    color: white;
    font-size: 16px;
    font-weight: 300;
    line-height: 34px;

    opacity: 0.4;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Logo = styled.h2`
    color: white;
    font-size: 40px;
    font-weight: 700;
    line-height: 40px;

    cursor: pointer;

    margin-bottom: 30px;
`;

const Description = styled.p`
    color: white;
    font-size: 16px;
    font-weight: 300;
    line-height: 30px;

    opacity: 0.4;

    width: 300px;
`;

const Title = styled.h3`
    color: white;
    font-size: 18px;
    font-weight: 700;
    line-height: 18px;

    margin-bottom: 20px;
`;

const Info = styled.h4`
    color: white;
    font-size: 16px;
    font-weight: 300;
    line-height: 34px;

    opacity: 0.4;

    transition: all 200ms;

    cursor: pointer;

    &:hover {
        opacity: 1;
    }
`;
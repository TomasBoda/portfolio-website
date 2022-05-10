import { useEffect } from "react";
import { useRouter } from "next/router";

import styled from "styled-components";

import SmoothScroll from "./SmoothScroll";
import { redirect } from "./Transition";
import { toggleMenu } from "./Menu";

export default function Header() {

    const router = useRouter();

    return (
        <Container id="header">
            <Main>
                <Logo onClick={() => redirect({ pathname: "/", callback: () => SmoothScroll.scroll("#landing"), router: router })}>Tomas Boda</Logo>

                <Menu>
                    <Item onClick={() => redirect({ pathname: "/", callback: () => SmoothScroll.scroll("#landing"), router: router })}>Home</Item>
                    <Item onClick={() => redirect({ pathname: "/", callback: () => SmoothScroll.scroll("#about"), router: router })}>About</Item>
                    <Item onClick={() => redirect({ pathname: "/", callback: () => SmoothScroll.scroll("#help"), router: router })}>How I can help</Item>
                    <Item onClick={() => redirect({ pathname: "/", callback: () => SmoothScroll.scroll("#work"), router: router })}>Projects</Item>
                    <Item onClick={() => redirect({ pathname: "/", callback: () => SmoothScroll.scroll("#testimonals"), router: router })}>Testimonals</Item>
                    <Item onClick={() => redirect({ pathname: "/", callback: () => SmoothScroll.scroll("#contact"), router: router })}>Get in touch</Item>
                </Menu>

                <Hamburger onClick={() => toggleMenu()}>
                    <Line id="line-1" />
                    <Line id="line-2" />
                    <Line id="line-3" />
                </Hamburger>
            </Main>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 20px;

    background-color: white;

    z-index: 9;
`;

const Main = styled.div`
    width: 100%;
    max-width: 1500px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.h2`
    color: black;
    font-size: 30px;
    font-weight: 700;
    line-height: 30px;

    cursor: pointer;

    @media (max-width: 800px) {
        font-size: 20px;
        line-height: 20px;
    }
`;

const Menu = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 1050px) {
        display: none;
    }
`;

const Item = styled.div`
    color: black;
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;

    padding: 20px 20px;

    cursor: pointer;
`;

const Hamburger = styled.div`
    width: 24px;
    height: 18px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    display: none;

    cursor: pointer;

    @media (max-width: 1050px) {
        display: flex;
    }
`;

const Line = styled.div`
    width: 100%;
    height: 3px;

    border-radius: 100px;

    background-color: black;

    transition: all 400ms;
`;
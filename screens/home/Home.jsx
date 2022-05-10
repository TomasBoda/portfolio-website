import React, { useEffect } from "react";
import styled from "styled-components";
import OnImagesLoaded from "react-on-images-loaded";

import Landing from "./views/Landing";
import About from "./views/About";
import Help from "./views/Help";
import Work from "./views/Work";
import Testimonals from "./views/Testimonals";
import Contact from "./views/Contact";
import Footer from "../../components/Footer";

import { hideTransition } from "../../components/Transition";

export default function Home() {
    return (
        <OnImagesLoaded onLoaded={() => hideTransition()}>
            <Landing />
            <About />
            <Help />
            <Work />
            <Testimonals />
            <Contact />
            <Footer />
        </OnImagesLoaded>
    )
}

export const Container = styled.section`
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 100px;

    @media (max-width: 1200px) {
        padding: 50px;
    }

    @media (max-width: 900px) {
        padding: 50px 20px;
    }
`;

export const Main = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1500px;
`;

export const Gradient = styled.span`
    background: -webkit-linear-gradient(-70deg, #2188ff 0%, #804eda 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const SubHeading = styled.h3`
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

export const Title = styled.h2`
    color: ${props => props.black && "black"};
    color: ${props => props.white && "white"};
    font-size: 80px;
    font-weight: 700;
    line-height: 90px;
    text-align: left;

    @media (max-width: 1450px) {
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

export const Button = styled.div`
    color: ${props => props.black && "white"};
    color: ${props => props.white && "black"};
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;

    padding: 18px 35px;

    background-color: ${props => props.black && "black"};
    background-color: ${props => props.white && "white"};

    cursor: pointer;

    @media (max-width: 800px) {
        font-size: 14px;
        line-height: 14px;

        padding: 15px 30px;
    }
`;
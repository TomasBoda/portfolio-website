import { useRouter } from "next/router";
import styled from "styled-components";

import { redirect } from "./Transition";
import SmoothScroll from "./SmoothScroll";

export default function Menu() {

    const router = useRouter();

    function menuRedirect(pathname, target) {
        hideMenu();

        var line1 = document.getElementById("line-1");
        var line2 = document.getElementById("line-2");
        var line3 = document.getElementById("line-3");

        line1.style.transform = "none";
        line2.style.opacity = "1";
        line3.style.transform = "none";

        setTimeout(() => {
            redirect({ pathname: pathname, callback: () => SmoothScroll.scroll(target), router: router });
        }, 710);
    }

    return (
        <Container id="menu">
            <Main>
                <Item onClick={() => menuRedirect("/", "#landing")}>Home</Item>
                <Item onClick={() => menuRedirect("/", "#about")}>About</Item>
                <Item onClick={() => menuRedirect("/", "#help")}>How I can help</Item>
                <Item onClick={() => menuRedirect("/", "#work")}>Projects</Item>
                <Item onClick={() => menuRedirect("/", "#testimonals")}>Testimonals</Item>
                <Item onClick={() => menuRedirect("/", "#contact")}>Get in touch</Item>
            </Main>
        </Container>
    )
}

export const toggleMenu = () => {
    const app = document.getElementById("app-container");

    if (app.style.overflow === "hidden") {
        hideMenu();

        var line1 = document.getElementById("line-1");
        var line2 = document.getElementById("line-2");
        var line3 = document.getElementById("line-3");

        line1.style.transform = "none";
        line2.style.opacity = "1";
        line3.style.transform = "none";
    } else {
        showMenu();

        var line1 = document.getElementById("line-1");
        var line2 = document.getElementById("line-2");
        var line3 = document.getElementById("line-3");

        line1.style.transform = "rotate(45deg) translateY(10px)";
        line2.style.opacity = "0";
        line3.style.transform = "rotate(-45deg) translateY(-11px)";
    }
}

export const showMenu = () => {
    var app = document.getElementById("app-container");
    var body = document.getElementsByTagName("body")[0];
    var menu = document.getElementById("menu");

    menu.style.backgroundColor = "black";

    body.style.overflow = "hidden";

    app.style.overflow = "hidden";
    app.style.height = "100vh";
    app.style.transform = "scale(0.9)";
    app.style.borderRadius = "20px";

    setTimeout(() => {
        app.style.transform = "translateX(-70vw) scale(0.9)";
    }, 300);
}

export const hideMenu = () => {
    var app = document.getElementById("app-container");
    var body = document.getElementsByTagName("body")[0];
    var menu = document.getElementById("menu");

    app.style.transform = "translateX(0px) scale(0.9)";

    setTimeout(() => {
        app.style.transform = "translateX(0px) scale(1)";
        app.style.borderRadius = "0px";
        
        setTimeout(() => {
            app.style.removeProperty("overflow");
            app.style.removeProperty("height");

            body.style.removeProperty("overflow");

            menu.style.backgroundColor = "white";
        }, 410);
    }, 300);
}

const Container = styled.div`
    position: fixed;
    left: 0px;
    top: 0px;

    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    background-color: black;

    z-index: 1;
`;

const Main = styled.div`
    width: 70vw;
`;

const Item = styled.h4`
    color: white;
    font-size: 9vw;
    margin: 5px 0px;
`;

const Arrow = styled.img`
    width: 40px;
    height: 40px;
`;
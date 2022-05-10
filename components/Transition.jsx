import { route } from "next/dist/next-server/server/router";
import styled, { keyframes } from "styled-components";

export default function Transition() {
    return (
        <Container id="transition">
            <Loading id="loading" />
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    left: 0px;
    bottom: 0px;

    width: 100vw;
    height: 0px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: black;

    transition: all 500ms;

    z-index: 10;
`;

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;

const Loading = styled.div`
    width: 34px;
    height: 34px;

    border-radius: 50%;

    border: 5px solid rgb(255, 255, 255, 0.1);
    border-top: 5px solid white;
    border-left: 5px solid white;

    animation: ${spin} 1s ease-in-out infinite;

    display: none;
    opacity: 0;

    transition: all 300ms;
`;

export const redirect = ({ pathname, as, query, router, callback }) => {
    if (router.pathname === pathname) {
        if (callback) callback();
        return;
    }

    showTransition();

    setTimeout(() => {
        router.push({
            pathname: pathname,
            as: as,
            query: query
        }).then(() => {
            if (callback) callback();
        });
    }, 710);
}

export const showTransition = () => {
    var transition = document.getElementById("transition");
    var loading = document.getElementById("loading");

    transition.style.transition = "none";
    transition.style.removeProperty("top");
    transition.style.bottom = "0px";
    transition.style.left = "0px";
    transition.style.height = "0px";

    transition.style.display = "flex";
    transition.style.transition = "all 500ms";

    transition.style.height = "100vh";

    setTimeout(() => {
        loading.style.display = "flex";
        loading.style.opacity = "1";
    }, 510);
}

export const hideTransition = () => {
    var transition = document.getElementById("transition");
    var loading = document.getElementById("loading");

    loading.style.opacity = "0";
    
    setTimeout(() => {
        loading.style.display = "none";

        transition.style.removeProperty("bottom");
        transition.style.top = "0px";
        transition.style.height = "0px";
    }, 310);
}
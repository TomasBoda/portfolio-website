import styled from "styled-components";

import Transition, { hideTransition } from "./Transition";
import Menu from "./Menu";

export default function Layout({ children }) {
    return (
        <Container>
            <App id="app-container">
                {children}
            </App>

            <Menu />

            <Transition />
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
`;

const App = styled.div`
    width: 100%;

    position: relative;

    z-index: 2;

    background-color: white;

    transition: all 400ms;
`;
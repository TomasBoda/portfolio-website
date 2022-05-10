import { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import styled from "styled-components";

import { Container, Main, Title, Button, SubHeading, Gradient } from "../Home";

export default function Contact() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [budget, setBudget] = useState("");
    const [message, setMessage] = useState("");

    const [error, setError] = useState("");

    function sendMessage() {
        const data = JSON.stringify({
            name: firstName + " " + lastName,
            email: email,
            budget: budget,
            message: message
        });

        if (firstName.trim() === "" || lastName.trim() === "" || email.trim() === "" || budget.trim() === "" || message.trim() === "") {
            setError("Please fill in all the fields");
            return;
        }

        fetch("https://tomasboda.dev/mailer.php", {
            method: "POST",
            body: data
        }).then((response) => {
            if (response.ok) {
                setError("Message sent successfully!");
                setFirstName("");
                setLastName("");
                setEmail("");
                setBudget("");
                setMessage("");
            } else {
                setError("An error occured sending the message...")
            }
        });
    }

    return (
        <Container style={{ backgroundColor: "black", height: "auto", paddingBottom: 100 }} id="contact">
            <Main>
                <Content>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce offset={0}>
                        <SubHeading><Gradient>CONTACT</Gradient></SubHeading>
                        <Title white>Let's<br/>work together</Title>
                    </ScrollAnimation>

                    <Grid>
                        <Left>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce offset={0}>
                                <Description>
                                    Interested in my work and have a great project in mind? Write me a message and let's start a new project together!
                                </Description>
                            </ScrollAnimation>

                            <ScrollAnimation animateIn="fadeInUp" animateOnce offset={0}>
                                <Details>
                                    <Info href="mailto: hello@tomasboda.dev">
                                        <Icon src={require("../../../public/assets/mail.svg")} />
                                        <Text>hello@tomasboda.dev</Text>
                                    </Info>

                                    <Info href="https://www.linkedin.com/in/tomas-boda-dev">
                                        <Icon src={require("../../../public/assets/linkedin.svg")} />
                                        <Text>LinkedIn</Text>
                                    </Info>

                                    <Info href="https://github.com/TomasBoda">
                                        <Icon src={require("../../../public/assets/github.svg")} />
                                        <Text>GitHub</Text>
                                    </Info>
                                </Details>
                            </ScrollAnimation>
                        </Left>

                        <Right>
                            {/*<ScrollAnimation animateIn="fadeInUp" animateOnce offset={0}>*/}
                                <Form>
                                    <Row>
                                        <Input type="text" name="first_name" value={firstName} onChange={(event) => setFirstName(event.target.value)} placeholder="First name" />

                                        <div style={{ width: 40 }} />

                                        <Input type="text" name="last_name" value={lastName} onChange={(event) => setLastName(event.target.value)} placeholder="Last name" />
                                    </Row>

                                    <Row>
                                        <Input type="text" name="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="E-mail" />
                                    </Row>

                                    <Row>
                                        <Input type="text" name="budget" value={budget} onChange={(event) => setBudget(event.target.value)} placeholder="Estimated budget" />
                                    </Row>

                                    <Row>
                                        <Area rows={10} name="message" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Message" />
                                    </Row>

                                    <Error>{error}</Error>

                                    <Button white style={{ marginTop: 20 }} onClick={() => sendMessage()}>Send message</Button>
                                </Form>
                            {/*</Right></ScrollAnimation>*/}
                        </Right>
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
    grid-template-columns: 1fr 1fr;
    gap: 100px;

    margin-top: 50px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Description = styled.p`
    color: white;
    font-size: 22px;
    font-weight: 300;
    line-height: 32px;

    opacity: 0.4;

    @media (max-width: 600px) {
        font-size: 20px;
        line-height: 30px;
    }
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-top: 75px;
`;

const Info = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-bottom: 25px;

    text-decoration: none;
`;

const Icon = styled.img`
    width: 30px;
    height: 30px;

    object-fit: contain;

    margin-right: 15px;
`;

const Text = styled.div`
    color: white;
    font-size: 18px;
    font-weight: 300;
    line-height: 18px;

    opacity: 0.4;
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Form = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 1200px) {
        width: 100%;
        max-width: 700px;
    }
`;

const Row = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;

    margin-bottom: 20px;
`;

const Input = styled.input`
    width: 100%;

    color: white;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;

    padding: 15px;

    border: none;
    outline: none;
    border-radius: 0px;

    background-color: rgba(255, 255, 255, 0.1);

    @media (max-width: 1200px) {
        width: 100%;
    }

    @media (max-width: 600px) {
        font-size: 14px;
        line-height: 14px;
    }
`;

const Area = styled.textarea`
    flex: 1;

    color: white;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;

    padding: 15px;

    border: none;
    outline: none;
    resize: none;
    border-radius: 0px;

    background-color: rgba(255, 255, 255, 0.1);

    @media (max-width: 1200px) {
        width: 100%;
    }

    @media (max-width: 600px) {
        font-size: 14px;
        line-height: 24px;
    }
`;

const Error = styled.div`
    color: white;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
`;
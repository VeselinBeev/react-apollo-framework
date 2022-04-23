import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { ThemeContext } from "styled-components";
import { useContext } from "react";

function App() {
    const Button = styled.button`
        background: transparent;
        border-radius: 3px;
        border: 2px solid palevioletred;
        color: palevioletred;
        margin: 0.5em 1em;
        padding: 0.25em 1em;
    `;

    const Container = styled.div`
        text-align: center;
    `;
    const themeContext = useContext(ThemeContext);

    return (
        <div className="Layout">
            <header className="header">
                <Container>
                    <Button primary>Primary Button</Button>
                </Container>
            </header>
        </div>
    );
}

export default App;

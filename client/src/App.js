import "./App.css";
import styled from "styled-components";

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

    return (
        <div className="Layout">
            <header className="header">
                <Container>
                    <h1>SpaceX</h1>
                    <Button primary>Primary Button</Button>
                </Container>
            </header>
        </div>
    );
}

export default App;

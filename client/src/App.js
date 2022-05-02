import "./App.css";
import styled from "styled-components";
import Launches from "./components/Launches";
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    
} from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache()

});

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
        <ApolloProvider client={client}>
            <div className="Layout">
                <header className="header">
                    <Container>
                        <h1>SpaceX</h1>
                        <Launches/>
                        <Button primary>Button</Button>
                    </Container>
                </header>
            </div>
        </ApolloProvider>
    );
}

export default App;

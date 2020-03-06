import { Card, Container, Header } from 'semantic-ui-react'

function TemperatureDisplay({ temp }) {
    return (
        <Container id="brewFormContainer">
            <Header content={temp}>
                
            </Header>
        </Container>
    )
}

export default TemperatureDisplay;

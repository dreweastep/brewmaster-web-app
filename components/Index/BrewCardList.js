import { Card, Container } from 'semantic-ui-react'

function BrewCardList({ brews }) {
    function mapBrewsToItems(brews) {
        return brews.map(brew => ({
            header: brew.name,
            image: (brew.type == "beer") ? ("images/beer.jpg") : (brew.type == "wine") ? ("images/wine.jpg") : ("images/cider.jpg"),
            meta: `${brew.type}`,
            color: 'teal',
            fluid: true,
            size: "small",
            inverse: "true"
        }))
    }
    return (
        <Container id="cardListContainer">
            <Card.Group itemsPerRow='4' stackable centered items={mapBrewsToItems(brews)} />
        </Container>
    )
}

export default BrewCardList;

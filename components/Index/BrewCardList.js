import { Card, Container } from 'semantic-ui-react'

function BrewCardList({ brews }) {
    function mapBrewsToItems(brews) {
        return brews.map(brew => ({
            header: brew.name,
            image: (brew.type == "Beer") ? ("images/beer.jpg") : (brew.type == "Wine") ? ("images/wine.jpg") : ("images/Cider.jpg"),
            meta: `${brew.type}`,
            color: 'teal',
            fluid: true,
            size: "small",
            inverse: "true"
        }))
    }
    return (
        <Container id="cardListContainer">
            <Card.Group itemsPerRow='3' stackable centered items={mapBrewsToItems(brews)} />
        </Container>
    )
}

export default BrewCardList;

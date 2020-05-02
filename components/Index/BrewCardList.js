import { Card, Container } from 'semantic-ui-react'
import React from 'react'

import axios from 'axios'
import baseUrl from '../../utils/baseUrl'


function BrewCardList({ brews }) {


    function mapBrewsToItems(brews) {

        // Card Props
        return brews.map(brew => ({
            header: brew.name,
            // Ternary that dictates picture based on berverage type
            image: (brew.type == "beer") ? ("images/beer.jpg") : (brew.type == "wine") ? ("images/wine.jpg") : ("images/cider.jpg"),
            meta: `Created By: ${brew.userName}`,
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

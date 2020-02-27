import { Table, Container, TableHeader, TableHeaderCell, Icon, Image, TableCell, TableBody, TableRow, Button } from 'semantic-ui-react'
import { useState, useEffect } from 'react'

function BrewTable({ brews }) {
    function MapBrewsToRows({ brews }) {
        return (
            brews.map(brew => {
                return (
                    <TableRow>
                        <TableCell>{brew.name}</TableCell>
                        <TableCell>{brew.type}</TableCell>
                        <TableCell>{brew.brewStartDate}</TableCell>
                        <Button id="deleteBrewButton" style={{ marginRight: "1em" }}>Delete</Button>
                        <Button icon="pencil"></Button>
                        <input id="starWarsButton" type="image" src="images/yoda.jpg" />
                        <input id="starWarsButton" type="image" src="images/porg.jpg" />

                    </TableRow>
                )
            })
        )
    }

    return (
        <>
            <Container id="brewTable">
                <Table>
                    <TableHeader>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Type</TableHeaderCell>
                        <TableHeaderCell>Brew Start Date</TableHeaderCell>
                        {/* <TableHeaderCell>Brew End Date</TableHeaderCell> */}
                    </TableHeader>
                    <TableBody>
                        <MapBrewsToRows brews={brews} />
                    </TableBody>
                </Table>
            </Container>
        </>
    );
}

export default BrewTable;
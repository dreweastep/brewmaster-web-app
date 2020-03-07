import { Table, Container, TableHeader, TableHeaderCell, TableCell, TableBody, TableRow, Button } from 'semantic-ui-react'

function BrewTable({ brews }) {
    function MapBrewsToRows({ brews }) {
        return (
            brews.map(brew => {
                return (
                    <TableRow>
                        <TableCell>{brew.name}</TableCell>
                        <TableCell>{brew.type}</TableCell>
                        <TableCell>{brew.batches[0].brewStartDate}</TableCell>
                        <TableCell>
                            <Button id="deleteBrewButton" style={{ marginRight: "1em" }}>Delete</Button>
                            <Button icon="pencil"></Button>
                        </TableCell>
                    </TableRow>
                )
            })
        )
    }

    return (
        <>
            <Container id="brewTable">
                <Table celled padded >
                    <TableHeader>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Type</TableHeaderCell>
                        <TableHeaderCell>Brew Start Date</TableHeaderCell>
                        <TableHeaderCell />
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
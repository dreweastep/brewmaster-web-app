import { Table, Container, TableHeader, TableHeaderCell, TableCell, TableBody, TableRow, Button } from 'semantic-ui-react'
import baseUrl from '../../utils/baseUrl'
import axios from 'axios'
import React from 'react'
import { useRouter } from 'next/router'



function BrewTable({ brews }) {
    const router = useRouter()

    async function handleBrewDelete(brew) {

        console.log(brew)
        const _id = brew._id

        const url = `${baseUrl}/api/brew`;
        const payload = { params: { _id } };
        await axios.delete(url, payload)
        router.push('/brews');


    }

    function MapBrewsToRows({ brews }) {
        return (
            brews.map(brew => {
                const brewStartDate = new Date(Date.parse(brew.batches[0].brewStartDate))
                return (
                    <TableRow>
                        <TableCell>{brew.name}</TableCell>
                        <TableCell>{brew.type}</TableCell>
                        <TableCell>{brewStartDate.toLocaleDateString('en-US')}</TableCell>
                        <TableCell>
                            <Button onClick={handleBrewDelete.bind(this, brew)} id="deleteBrewButton" content='Delete' icon='trash' labelPosition='left' style={{ marginRight: "1em" }} />
                            {/* <Button  content='Edit' icon='pencil' labelPosition='left' /> */}
                            <a href={`/brew?_id=${brew._id}`}>Edit brew</a>
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
                        <TableHeaderCell>Actions</TableHeaderCell>
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
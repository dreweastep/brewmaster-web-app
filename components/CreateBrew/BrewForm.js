import { Container, Form, Icon, Image, Button, Input, TextArea, Select } from 'semantic-ui-react'
import { useState, useEffect } from 'react'

function BrewForm() {

    return (
        <>
            <Container id="brewFormContainer">
                <Form >
                    <Form.Group >
                        <h1 style={{ padding: "1em" }}>CRISPTATO</h1>
                    </Form.Group>
                    <Form.Group widths="equal" style={{ padding: "1em" }}>
                        <Form.Field
                            required
                            id="name"
                            label="Name"
                            control={Input}
                            placeholder="Name"
                        />
                        <Form.Field></Form.Field>
                    </Form.Group>
                </Form>

            </Container>
        </>
    );

}

export default BrewForm;
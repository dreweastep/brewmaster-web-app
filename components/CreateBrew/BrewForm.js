import { Container, Form, Icon, Image, Button, Input, TextArea, Select } from 'semantic-ui-react'
import { useState, useEffect } from 'react'

function BrewForm() {

    const options = [
        { key: 'w', text: 'Wine', value: 'wine' },
        { key: 'b', text: 'Beer', value: 'beer' },
        { key: 'k', text: 'Cider', value: 'cider' },
        { key: 'c', text: 'Kombucha', value: 'kombucha' }
    ]

    const [formFailed, setFormFailed] = useState(false)

    return (
        <>
            <Container id="brewFormContainer">
                <Form >
                    <Form.Group >
                        <h1 style={{ padding: "1em" }}>Create a new brew</h1>
                    </Form.Group>
                    <Form.Group widths="equal" style={{ padding: "1em", paddingTop: "0em" }}>
                        <Form.Field
                            required={formFailed}
                            id="name"
                            label="Name"
                            control={Input}
                            placeholder="Name"
                            width={2}
                        />
                        <Form.Field
                            required={formFailed}
                            id="type"
                            label="Type"
                            control={Select}
                            placeholder="Type"
                            options={options}
                            width={1}
                        />
                        <Form.Field
                            id="subtype"
                            label="Subtype"
                            control={Input}
                            placeholder="Subtype"
                            width={1}

                        />
                    </Form.Group>
                    <Form.Group widths="equal" style={{ padding: "1em", paddingTop: "0em" }}>
                        <Form.Field
                            id="description"
                            label="Description"
                            control={TextArea}
                            placeholder="Description"
                        />
                        <Form.Field
                            id="brewingInstructions"
                            label="Brewing Instructions"
                            control={TextArea}
                            placeholder="Brewing Instructions"
                        />

                    </Form.Group>
                </Form>

            </Container>
        </>
    );

}

export default BrewForm;
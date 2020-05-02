import axios from 'axios'
import React from 'react'

import baseUrl from '../utils/baseUrl.js'
import catchErrors from '../utils/catchErrors'

import { Container, Form, Button, Input, TextArea, Select, Message } from 'semantic-ui-react'
import SemanticDatepicker from 'react-semantic-ui-datepickers';

// Set initial object structure of DB objects
const INITIAL_BREW = {
  name: "",
  type: "",
  subType: "",
  batches: [],
  ingredients: [],
  description: "",
  brewingInstructions: "",
  userID: ""
}
const INITIAL_BATCH = {
  brewStartDate: "",
  brewEndDate: "",
  brewingModifications: "",
  ingredientModifications: [],
  tastingNotes: ""
}
const INITIAL_INGREDIENT = {
  name: "",
  price: "",
  unit: "",
  buyLocation: "",
  quantity: ""
}

const INITIAL_INGREDIENT_LIST = [INITIAL_INGREDIENT]

// Options for brew type dropdown
const TYPE_OPTIONS = [
  { key: 'w', text: 'Wine', value: 'wine' },
  { key: 'b', text: 'Beer', value: 'beer' },
  { key: 'k', text: 'Cider', value: 'cider' },
  { key: 'c', text: 'Kombucha', value: 'kombucha' }
]

function CreateBrew({user}) {

  function IngredientList({ ingredients }) {
    function MapIngredientsToFormGroup({ ingredients }) {
        return (
            // ingredients.map(ingredient => {
                < Form.Group widths="equal" style={{ padding: "1em", paddingTop: "0em", paddingBottom: "0em" }
                }>
                    <Form.Field
                        label="Name"
                        control={Input}
                        placeholder="Name"
                        width={1}
                        name="name"
                        value={ingredient.name}
                        onChange={handleIngredientChange}
                    />
                    <Form.Field
                        label="Price"
                        control={Input}
                        type="number"
                        placeholder="Price"
                        width={1}
                        name="price"
                        value={ingredient.price}
                        onChange={handleIngredientChange}
                    />
                    <Form.Field
                        label="Unit"
                        control={Input}
                        placeholder="Unit"
                        width={1}
                        name="unit"
                        value={ingredient.unit}
                        onChange={handleIngredientChange}
                    />
                    <Form.Field
                        label="Purchase Location"
                        control={Input}
                        placeholder="Purchase Location"
                        width={1}
                        name="buyLocation"
                        value={ingredient.buyLocation}
                        onChange={handleIngredientChange}
                    />
                    <Form.Field
                        label="Quantity"
                        control={Input}
                        placeholder="Quantity"
                        width={1}
                        name="quantity"
                        value={ingredient.quantity}
                        onChange={handleIngredientChange}
                    />
                </Form.Group >
            // })
        )
    }
    return (
        <>
            <MapIngredientsToFormGroup ingredients={ingredients} />
        </>
    )
}

  const [brew, setBrew] = React.useState(INITIAL_BREW)
  const [batch, setBatch] = React.useState(INITIAL_BATCH)
  // const [ingredient, setIngredient] = React.useState(INITIAL_INGREDIENT_LIST)
  const [ingredient, setIngredient] = React.useState(INITIAL_INGREDIENT)


  const [currentDate, setNewDate] = React.useState(null)

  const [success, setSuccess] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [disabled, setDisabled] = React.useState(true)
  const [error, setError] = React.useState('')

  // If all required values are filled out for brew, enable submit button
  React.useEffect(() => {
    var isBrew = false
    if (brew.name && brew.type && batch.brewStartDate) {
      isBrew = true
    }
    isBrew ? setDisabled(false) : setDisabled(true);
  }, [brew])

  // Whenever batch and ingredient state is modified, update brew with batch and ingredient state
  React.useEffect(() => {
    setBrew(prevState => ({ ...prevState, ["batches"]: [batch] }))
    setBrew(prevState => ({ ...prevState, ["ingredients"]: [ingredient] }))
  }, [batch, ingredient])

  // The following functions update brew state when form fields change
  function handleBrewChange(event) {
    const { name, value } = event.target
    setBrew(prevState => ({ ...prevState, [name]: value }))
  }
  function handleIngredientChange(event) {
    const { name, value } = event.target
    setIngredient(prevState => ({ ...prevState, [name]: value }))
  }
  function handleDropdownChange(event, { name, value }) {
    setBrew(prevState => ({ ...prevState, [name]: value }))
  }
  function handleCalendarChange(event, { name, value }) {
    setBatch(prevState => ({ ...prevState, [name]: value }))
  }

  async function handleSubmit(event) {
    try {
      //Prevents page refresh
      event.preventDefault();

      setLoading(true);
      setError('')

      brew.userID = user._id
      brew.userName = user.name
      brew.userEmail = user.email

      console.log(brew)

      const url = `${baseUrl}/api/brew`;
      const payload = brew;
      const response = await axios.post(url, payload)

      // Reset brew state to empty object
      setBrew(INITIAL_BREW)

      // Send form success
      setSuccess(true)

    } catch (error) {

      // Set form error
      catchErrors(error, setError)
      console.error("ERROR!", error)
    } finally {

      // Stop form loading, sleep 2 seconds, then refresh 
      setLoading(false)
      await new Promise(r => setTimeout(r, 2000));
      location.reload()
    }
  }


  return (
    <>
      <Container id="brewFormContainer">
        <Form loading={loading} error={Boolean(error)} success={success} onSubmit={handleSubmit}>
          <Message
            error
            header="Oops!"
            content="All of the required forms have not been entered"
          />
          <Message
            success
            icon="check"
            header="Success!"
            content="Your brew has been created!"
          />
          <Form.Group style={{ paddingLeft: "1em", paddingTop: "1em", paddingBottom: "1em" }}>
            <h1 >Create a new brew</h1>
          </Form.Group>
          <Form.Group widths="equal" style={{ padding: "1em", paddingTop: "0em", paddingBottom: "0em" }}>
            <Form.Field
              required
              label="Name"
              control={Input}
              placeholder="Name"
              width={2}
              name="name"
              value={brew.name}
              onChange={handleBrewChange}
            />
            <Form.Field
              required
              label="Type"
              control={Select}
              placeholder="Type"
              options={TYPE_OPTIONS}
              width={1}
              name="type"
              onChange={handleDropdownChange}
            />
            <Form.Field
              label="Subtype"
              control={Input}
              placeholder="Subtype"
              width={1}
              name="subType"
              value={brew.subType}
              onChange={handleBrewChange}
            />
          </Form.Group>
          <Form.Group widths="equal" style={{ padding: "1em", paddingTop: "0em", paddingBottom: "0em" }}>
            <Form.Field
              label="Description"
              control={TextArea}
              placeholder="Description"
              name="description"
              value={brew.description}
              onChange={handleBrewChange}
            />
            <Form.Field
              label="Brewing Instructions"
              control={TextArea}
              placeholder="Brewing Instructions"
              name="brewingInstructions"
              value={brew.brewingInstructions}
              onChange={handleBrewChange}
            />
          </Form.Group>
          <Form.Group style={{ paddingLeft: "1em", paddingBottom: "1em" }}>
            <h3>Ingredients</h3>
          </Form.Group>
          <IngredientList ingredients={ingredient} />
          <Form.Group style={{ paddingLeft: "1em", paddingBottom: "1em" }}>
            <h3>First Batch</h3>
          </Form.Group>
          <Form.Group widths="equal" style={{ padding: "1em", paddingTop: "0em", paddingBottom: "0em" }}>
            <Form.Field
              required
              label="Brew Start Date"
              control={Input}
            >
              <SemanticDatepicker
                name="brewStartDate"
                value={batch.brewStartDate}
                onChange={handleCalendarChange}
                pointing="top left"
              />
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal" style={{ padding: "1em", paddingTop: "0em" }}>
            <Form.Field
              control={Button}
              color="blue"
              icon="pencil alternate"
              content="Submit"
              type="submit"
              disabled={disabled}
            />
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}


export default CreateBrew;

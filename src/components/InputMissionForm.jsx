import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { useState, useEffect } from 'react'
import { swal } from '../helpers/swal'
import { useDispatch } from 'react-redux'
import { setMission } from '../store/actions'

function InputMissionForm(props) {
  const dispatch = useDispatch()
  const [isSubmitable, setIsSubmitable] = useState(false)

  const [input, setInput] = useState({
    contributor: '',
    title: '',
    experience: 5,
    description: '',
    awareness: false,
  })

  useEffect(() => {
    if (
      !input.contributor ||
      !input.title ||
      !input.description ||
      !input.awareness ||
      input.experience < 1 ||
      input.experience > 10
    ) {
      console.log('setfalse')
      setIsSubmitable(false)
    } else {
      setIsSubmitable(true)
    }
  }, [input])

  const handleInput = (e) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value

    setInput({
      ...input,
      [e.target.name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      !input.contributor ||
      !input.title ||
      !input.description ||
      !input.awareness ||
      input.experience < 1 ||
      input.experience > 10
    ) {
      swal('Please fill the form', 'error')
    } else {
      dispatch(
        setMission({
          contributor: input.contributor,
          title: input.title,
          description: input.description,
          experience: +input.experience,
        })
      )

      props.submitHandler()
    }
  }

  return (
    <div className="col">
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Contributor name</Form.Label>
            <Form.Control
              value={input.contributor}
              name="contributor"
              type="text"
              placeholder="Enter contributor name"
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Mission Title</Form.Label>
            <Form.Control
              value={input.title}
              name="title"
              type="text"
              placeholder="Enter mission title"
              onChange={handleInput}
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formBasicRange">
          <Form.Label>Experience gained: {input.experience}</Form.Label>
          <Form.Control
            value={input.experience}
            name="experience"
            type="range"
            min="1"
            max="10"
            step="1"
            cols={4}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group controlId="formGridPassword">
          <Form.Label>Mission description</Form.Label>
          <Form.Control
            value={input.description}
            name="description"
            as="textarea"
            rows={3}
            placeholder="Description here"
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            checked={input.awareness}
            type="checkbox"
            name="awareness"
            label="I am aware this mission will not violate the health protocol during the pandemic"
            onChange={handleInput}
          />
        </Form.Group>

        {isSubmitable ? (
          <Button
            variant="primary"
            size="lg"
            type="submit"
            onClick={handleSubmit}
          >
            <div className="custom-button">Submit</div>
          </Button>
        ) : (
          <Button
            size="lg"
            variant="primary"
            type="submit"
            onClick={handleSubmit}
            disabled
          >
            <div className="custom-button">Submit</div>
          </Button>
        )}
      </Form>
    </div>
  )
}

export default InputMissionForm

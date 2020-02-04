import React, { useRef } from "react"
import { Radio, Switch, useRadioState } from "@smooth-ui/core-sc"
import Form from "./components/form/Form"
import InputField from "./components/form/InputField"
import FormCheck from "./components/form/FormCheck"
import CheckboxGroup from "./components/form/CheckboxGroup"
import SubmitButton from "./components/form/SubmitButton"

function SimpleForm({
  initialValues = {},
  onSubmit,
  submitLabel = "Submit",
  submittingLabel = "Submitting"
}) {
  const formRef = useRef(null)
  const radioState = useRadioState()

  return (
    <Form initialValues={initialValues} onSubmit={onSubmit} ref={formRef}>
      {renderProps => {
        return (
          <>
            <InputField
              label="Name"
              hint="This field is required"
              name="name"
              required
              horizontal
            />

            <CheckboxGroup label="Brand" id="brand" horizontal col={1 / 3}>
              <FormCheck name="Sony" label="Sony" />
              <FormCheck name="Sega" label="Sega" />
            </CheckboxGroup>

            <CheckboxGroup
              label="Fruits"
              id="fruits"
              horizontal
              col={1 / 3}
              radioState={radioState}
            >
              <FormCheck
                name="fruit"
                label="apple"
                value="apple"
                type="radio"
                input={Radio}
                radioState={radioState}
              />
              <FormCheck
                name="fruit"
                label="orange"
                value="Orange"
                type="radio"
                input={Radio}
                radioState={radioState}
              />
            </CheckboxGroup>

            <CheckboxGroup
              label="Hero"
              id="hero"
              horizontal
              col={1 / 3}
              radioState={radioState}
            >
              <FormCheck
                name="hero"
                label="Spiderman"
                value="spiderman"
                type="radio"
                input={Radio}
                radioState={radioState}
              />
              <FormCheck
                name="hero"
                label="Batman"
                value="batman"
                type="radio"
                input={Radio}
                radioState={radioState}
              />
            </CheckboxGroup>

            <CheckboxGroup label="Theme" id="theme" horizontal col={1 / 3}>
              <FormCheck name="dark" label="Dark mode" input={Switch} />
            </CheckboxGroup>

            <SubmitButton submittingLabel={submittingLabel}>
              {submitLabel}
            </SubmitButton>
          </>
        )
      }}
    </Form>
  )
}

export default SimpleForm

import React from "react"
import { Checkbox, FormCheck as SuiFormCheck } from "@smooth-ui/core-sc"
import { FormCheckLabel } from "@smooth-ui/core-sc"
import { useField } from "react-final-form"
import { mustBeFilled, composeValidators } from "../../utils/validators"

export default function FormCheck({
  label,
  name,
  required,
  value,
  radioState,
  input: ControledInput = Checkbox,
  id: idProp,
  ...props
}) {
  const id = idProp || name
  const type = props.type || "checkbox"

  const validators = []
  if (required) validators.push(mustBeFilled)

  const field = useField(name, {
    type: type,
    validate: validators.length ? composeValidators(...validators) : undefined,
    ...(value && { value })
  })

  return (
    <>
      <SuiFormCheck>
        <ControledInput
          name={name}
          required={required}
          {...radioState}
          {...props}
          {...field.input}
        />
        {label && <FormCheckLabel htmlFor={id}>{label}</FormCheckLabel>}
      </SuiFormCheck>
    </>
  )
}

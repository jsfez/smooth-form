import React from "react"
import { Input, Box, FormField } from "@smooth-ui/core-sc"
import { mustBeFilled, composeValidators } from "../../utils/validators"
import { useField } from "react-final-form"
import Label from "./Label"

export default function InputField({
  label,
  name,
  parse,
  format,
  validate,
  required,
  hint,
  horizontal,
  input: ControledInput = Input,
  id: idProp,
  ...props
}) {
  const id = idProp || name
  const type = props.type

  const validators = []
  if (validate) validators.push(validate)
  if (required) validators.push(mustBeFilled)

  const field = useField(name, {
    type,
    validate: validators.length ? composeValidators(...validators) : undefined,
    parse,
    format
  })

  const error = field.meta.touched ? field.meta.error : null
  const isInvalid = field.meta.touched ? field.meta.invalid : null

  return (
    <FormField mt={2} {...(horizontal && { row: true })}>
      {label ? (
        <Label col={1 / 3} htmlFor={id} required={required} invalid={isInvalid}>
          {label}
        </Label>
      ) : null}

      <Box col={2 / 3}>
        <ControledInput
          col
          id={id}
          name={name}
          required={required}
          aria-invalid={isInvalid}
          {...props}
          {...field.input}
        />
        {hint && <Box>{hint}</Box>}
        {error && <Box color="danger">{error}</Box>}
      </Box>
    </FormField>
  )
}

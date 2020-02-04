import React from "react"
import { Checkbox, FormCheck as SuiFormCheck, Box } from "@smooth-ui/core-sc"
import { FormCheckLabel } from "@smooth-ui/core-sc"
import { useField } from "react-final-form"

function CheckLabel({ children, required, invalid, ...props }) {
  return (
    <FormCheckLabel color={invalid ? "red" : "black"} {...props}>
      {children}
      {required && (
        <Box forwardedAs="span" color="red">
          *
        </Box>
      )}
    </FormCheckLabel>
  )
}

export default function FormCheck({
  label,
  name,
  required,
  hint,
  value,
  radioState,

  input: ControledInput = Checkbox,
  id: idProp,
  ...props
}) {
  const id = idProp || name
  const type = props.type || "checkbox"
  const field = useField(name, {
    type: type,
    validate: required,
    ...(value && { value })
  })

  const error = field.meta.touched ? field.meta.error : null
  const isInvalid = field.meta.touched ? field.meta.invalid : null

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
        {label && (
          <CheckLabel htmlFor={id} invalid={isInvalid} required={required}>
            {label}
          </CheckLabel>
        )}

        {hint && <Box>{hint}</Box>}
        {error && <Box color="red">{error}</Box>}
      </SuiFormCheck>
    </>
  )
}

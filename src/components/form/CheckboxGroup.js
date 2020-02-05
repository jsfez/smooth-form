import React from "react"
import Label from "./Label"
import {
  FormField,
  CheckboxGroup as SuiCheckboxGroup,
  Box
} from "@smooth-ui/core-sc"
import { useField } from "react-final-form"

function CheckboxGroup({
  children,
  label,
  horizontal,
  radioState,
  id: idProp,
  hint,
  name,
  ...props
}) {
  const id = idProp || name
  const field = useField(id, { subscription: { error: true, touched: true } })

  const error = field.meta.touched ? field.meta.error : null

  return (
    <FormField {...(horizontal && { row: true })}>
      {label && (
        <Label col py={0} id={id} invalid={error} {...props}>
          {label}
        </Label>
      )}
      <SuiCheckboxGroup col aria-labelledby={id}>
        {children}
        {error && <Box color="red">{error}</Box>}
        {hint && <Box>{hint}</Box>}
      </SuiCheckboxGroup>
    </FormField>
  )
}

export default CheckboxGroup

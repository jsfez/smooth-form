import React from "react"
import Label from "./Label"
import {
  FormField,
  CheckboxGroup as SuiCheckboxGroup
} from "@smooth-ui/core-sc"

function CheckboxGroup({
  children,
  label,
  horizontal,
  radioState,
  id: idProp,
  name,
  ...props
}) {
  const id = idProp || name
  return (
    <FormField {...(horizontal && { row: true })}>
      {label && (
        <Label col py={0} id={id} {...props}>
          {label}
        </Label>
      )}
      <SuiCheckboxGroup col aria-labelledby={id}>
        {children}
      </SuiCheckboxGroup>
    </FormField>
  )
}

export default CheckboxGroup

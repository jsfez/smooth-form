import React from 'react'
import { FormFieldLabel, Box } from '@smooth-ui/core-sc'

export default function Label({
  children,
  htmlFor,
  required,
  invalid,
  ...props
}) {
  return (
    <FormFieldLabel name={htmlFor} color={invalid ? 'red' : 'black'} {...props}>
      {children}
      {required && (
        <Box forwardedAs="span" color="red">
          *
        </Box>
      )}
    </FormFieldLabel>
  )
}

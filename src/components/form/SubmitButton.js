import React from "react"
import { Button } from "@smooth-ui/core-sc"
import { useFormState } from "react-final-form"

export default function SubmitButton({
  children,
  submittingLabel = "Submitting",
  ...props
}) {
  const { valid, submitting } = useFormState({
    subscription: { valid: true, submitting: true }
  })

  return (
    <Button
      type="submit"
      onClick={() => valid}
      disabled={submitting}
      mx={0}
      {...props}
    >
      {submitting ? submittingLabel : children}
    </Button>
  )
}

import React from 'react'
import { FORM_ERROR } from 'final-form'
import { Form as ReactFinalForm } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import createFocusDecorator from 'final-form-focus'

export { FORM_ERROR }

const Form = React.forwardRef(
  (
    {
      name,
      children,
      onSubmit,
      defaultError = 'Oups, an error as occured...',
      ...props
    },
    ref,
  ) => {
    const focusOnErrors = React.useMemo(() => createFocusDecorator(), [])

    return (
      <ReactFinalForm
        onSubmit={async (...args) => {
          if (!onSubmit) {
            // eslint-disable-next-line no-console
            console.error('Please add "onSubmit" in Form component')
            return undefined
          }
          try {
            return await onSubmit(...args)
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error)

            return {
              [FORM_ERROR]: defaultError,
            }
          }
        }}
        mutators={arrayMutators}
        decorators={[focusOnErrors]}
        {...props}
      >
        {renderProps => {
          if (ref) ref.current = renderProps.form
          return (
            <form
              name={name}
              noValidate
              onSubmit={renderProps.handleSubmit}
              style={renderProps.style}
            >
              {children(renderProps)}
            </form>
          )
        }}
      </ReactFinalForm>
    )
  },
)

export default Form

import React from "react"
import { ThemeProvider } from "styled-components"
import { theme, Box } from "@smooth-ui/core-sc"
import SimpleForm from "./SimpleForm"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box mx="auto" mt={20} width={800} p={20}>
        <SimpleForm />
      </Box>
    </ThemeProvider>
  )
}

export default App

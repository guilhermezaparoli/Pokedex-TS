import {GlobalStyle} from "../globalStyles"
import { Header } from "./components/Layout/Header"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { Body } from "./components/Layout/Body"
import { Footer } from "./components/Layout/Footer"


export function App() {


  return (
    <>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Header/>
      <Body />
      <Footer/>
    </ThemeProvider>
    </>
  )
}



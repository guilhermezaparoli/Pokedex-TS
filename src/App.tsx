import {GlobalStyle} from "../globalStyles"
import { Header } from "./components/Layout/Header"
import { Search } from "./components/Search"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"


export function App() {

  return (
    <>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Header/>
      <Search/>
    </ThemeProvider>
    </>
  )
}



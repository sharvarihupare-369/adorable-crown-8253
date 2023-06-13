import { ColorModeScript,ChakraProvider,theme } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { App } from "./App"
import reportWebVitals from "./reportWebVitals"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./Redux/store"


const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

root.render(
  <ChakraProvider theme={theme}>
    <Provider store={store}>

    <BrowserRouter>
    <ColorModeScript />
    <App />
    </BrowserRouter>
    </Provider>
  
  </ChakraProvider>
)

serviceWorker.unregister()
reportWebVitals()


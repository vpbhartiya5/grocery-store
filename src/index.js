import { createRoot } from "react-dom/client"

import { Provider } from "react-redux"
import store from "./redux/store"

import App from "./components/App"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

const styleLink = document.createElement("link")
styleLink.rel = "stylesheet"
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css"
document.head.appendChild(styleLink)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

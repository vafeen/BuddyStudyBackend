import { Provider } from "react-redux";
import { GlobalStyles } from "./common/GlobalStyles";
import RoutesProvider from "./router/RoutesProvider";
import { store } from "./store/store";

function App() {

  return (
    <Provider store={store}>
      <GlobalStyles />
      <RoutesProvider />
    </Provider>
  )
}

export default App;

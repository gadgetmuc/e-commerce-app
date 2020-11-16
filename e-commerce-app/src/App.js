import { Route, Switch } from "react-router-dom";
import Customer from "./Customer";
import Footer from "./Footer";
import Header from "./Header";
import Orders from "./Orders";
import Products from "./Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route path="/customer">
          <Customer />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

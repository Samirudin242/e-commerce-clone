import "./App.css";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import client from "./config/graphql";
//Page
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import ProdukDetail from "./pages/ProdukDetail";
import Register from "./components/Register";

import "./App.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/product/:id">
              <ProdukDetail />
            </Route>
            <Route path="/all-products">
              <AllProducts />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

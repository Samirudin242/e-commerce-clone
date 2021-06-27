import "./App.css";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import client from "./config/graphql";
import AuthRoute from "./util/AuthRoute";
//Page
import { AuthProvider } from "./context/auth";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import ProductDetail from "./pages/ProdukDetail";
import Register from "./components/Register";
import BuyProduct from "./pages/BuyProduct";
import "./App.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Router>
          <div className="App">
            <Route exact path="/" component={Home} />
            <AuthRoute exact path="/register" component={Register} />
            <Route exact path="/all-products" component={AllProducts} />
            <Route exact path="/product/:id" component={ProductDetail} />
            <Route exact path="/buy-product" component={BuyProduct} />
          </div>
        </Router>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;

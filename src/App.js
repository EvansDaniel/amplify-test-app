import logo from "./logo.svg";
import "./App.css";

import Amplify from "aws-amplify";
import config from "./aws-exports";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

Amplify.configure(config);

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We changed stuff</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);

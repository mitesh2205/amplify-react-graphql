import "./App.css";
import Form from "./Form";
import Header from "./Header";
// import Posts from "./Posts";
import TodoLists from "./TodoLists";

import "@aws-amplify/ui-react/styles.css";

import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  const name = "React";
  return (
    <div className="App">
      <Header name={name} />
      <TodoLists />
      {/* <Posts /> */}
      <Form />

      <View width="100%">
        <Heading level={3}>Amplify UI Components</Heading>
        <Card>
          <Image
            src="https://aws-amplify.github.io/images/Logos/Amplify-Logo-White.svg"
            alt="Amplify Framework Logo"
          />
          <Heading level={4}>Amplify Framework</Heading>
          <p>
            The Amplify Framework is a comprehensive library for building
            cloud-powered mobile and web apps.
          </p>
          <Button onClick={signOut}>Sign Out</Button>
        </Card>
      </View>
    </div>
  );
}

export default withAuthenticator(App);

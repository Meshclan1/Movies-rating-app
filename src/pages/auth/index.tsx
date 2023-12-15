import { Grid, Header, Form, Segment, Button } from "semantic-ui-react";
import { useMutation } from "@tanstack/react-query";
import { mutationLogin } from "./mutation";

export const Auth = () => {
  const { data, mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: mutationLogin,
  });

  const handleLogin = async () => {
    await mutate();
  };

  return (
    <Grid textAlign="center" verticalAlign="middle" style={{ height: "100vh" }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="violet" textAlign="center">
          Welcome! Login by reigstering as a Guest below.
        </Header>
        <Form size="large">
          <Segment stacked>
            <Button color="violet" size="large" fluid onClick={handleLogin}>
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

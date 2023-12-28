import { Grid, Header, Form, Segment, Button } from "semantic-ui-react";
import { useMutation } from "@tanstack/react-query";
import { mutationLogin } from "./mutation";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const { data, mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: mutationLogin,
  });

  const navigate = useNavigate();

  // const handleLogin = async () => {
  //   await mutate();
  //   localStorage.setItem("guest_session_id", data.guest_session_id);
  //   navigate("/");
  // };

  const handleLogin = async () => {
    // Wait for the mutation to complete
    await mutate();
    // Access the updated data
    const updatedData = data;

    if (updatedData && updatedData.guest_session_id) {
      localStorage.setItem("guest_session_id", updatedData.guest_session_id);
      navigate("/");
    } else {
      console.error("Guest session data loading!");
    }
  };

  return (
    <Grid textAlign="center" verticalAlign="middle" style={{ height: "100vh" }}>
      <Grid.Column style={{ maxWidth: 550 }}>
        <h1>Welcome!</h1>
        <Header as="h2" color="violet" textAlign="center">
          Login by clicking the button below.
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

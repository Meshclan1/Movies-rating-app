import { Menu, Button } from "semantic-ui-react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const isLoggedIn = localStorage.getItem("guest_session_id") !== null;

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("guest_session_ud");
    navigate("/auth");
  };

  return (
    <Menu fixed="top" size="huge">
      <Menu.Item as={Link} to="/" style={{ fontSize: "1.5rem" }}>
        Home
      </Menu.Item>
      <Menu.Item as={Link} to="/rated" style={{ fontSize: "1.5rem" }}>
        Rated
      </Menu.Item>

      <Menu.Menu position="right">
        {isLoggedIn ? (
          <Menu.Item
            as={Button}
            style={{ fontSize: "1.5rem" }}
            onClick={logout}
          >
            Logout
          </Menu.Item>
        ) : (
          <Menu.Item as={Link} to="/auth" style={{ fontSize: "1.5rem" }}>
            Auth
          </Menu.Item>
        )}
      </Menu.Menu>
    </Menu>
  );
};

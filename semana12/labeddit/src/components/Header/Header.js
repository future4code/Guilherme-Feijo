import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { StyledToolbar } from "./styled";
import Button from "@material-ui/core/Button";
import { goToFeed, goToLogin } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";

const Header = () => {
  const token = localStorage.getItem("token");
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
  };

  const rightButtonAction = () => {
    if (token) {
      logout();
      goToLogin(history);
    } else {
      goToLogin(history);
    }
  };

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button onClick={() => goToFeed(history)} color="inherit">
          LabEddit
        </Button>
        <Button onClick={rightButtonAction} color="inherit">
          LOGOUT
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;

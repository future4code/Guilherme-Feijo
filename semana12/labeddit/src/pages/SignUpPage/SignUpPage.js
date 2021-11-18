import React from "react";
import { ScreenContainer } from "./styled";
import SignUpForm from "./SignUpForm";
import useUnprotectedPage from "../../hooks/UseUnprotectedPage";

const SignUpPage = ({ setRightButtonText }) => {
  useUnprotectedPage();
  return (
    <ScreenContainer>
      <SignUpForm setRightButtonText={setRightButtonText} />
    </ScreenContainer>
  );
};

export default SignUpPage;

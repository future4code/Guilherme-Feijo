import { Button } from "@material-ui/core";
import React from "react";
import useProtectedPage from "../../hooks/UseProtectedPage";

const FeedPage = () => {
  useProtectedPage();
  return (
    <div>
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </div>
  );
};

export default FeedPage;

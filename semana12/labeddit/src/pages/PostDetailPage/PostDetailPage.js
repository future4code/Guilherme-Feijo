import React from "react";
import useProtectedPage from "../../hooks/UseProtectedPage";

const PostDetailPage = () => {
  useProtectedPage();
  return <div>PostDetailPage</div>;
};

export default PostDetailPage;

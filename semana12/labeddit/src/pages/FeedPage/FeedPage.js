import { PostDiv } from "./styled";
import React from "react";
import useProtectedPage from "../../hooks/UseProtectedPage";
import useRequestData from "../../hooks/UseRequestData";
import { BASE_URL } from "../../constants/urls";
import PostCreator from "../../components/PostCreator/PostCreator";
import PostBox from "../../components/PostBox/PostBox";
import Loading from "../../components/Loading/Loading";
import Header from "../../components/Header/Header";

const FeedPage = () => {
  const [posts, getPosts] = useRequestData([], `${BASE_URL}/posts`);
  useProtectedPage();

  const postComponents = posts.map((post) => {
    return (
      <PostBox
        key={post.id}
        postId={post.id}
        username={post.username}
        text={post.body}
        commentsCount={post.commentCount}
        votesCount={post.voteSum}
        getPost={getPosts}
      />
    );
  });

  return (
    <div>
      <Header />
      <PostCreator getPosts={getPosts} />
      <PostDiv>
        {postComponents.length > 0 ? postComponents : <Loading />}
      </PostDiv>
    </div>
  );
};

export default FeedPage;

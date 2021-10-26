import { PostDiv } from "./styled";
import React, { useEffect, useState } from "react";
import axios from "axios";
import useProtectedPage from "../../hooks/UseProtectedPage";
import useRequestData from "../../hooks/UseRequestData";
import { BASE_URL } from "../../constants/urls";
import PostCreator from "../../components/PostCreator/PostCreator";
import PostBox from "../../components/PostBox/PostBox";

const FeedPage = () => {
  const [posts, getPosts] = useRequestData([], `${BASE_URL}/posts`);
  console.log(posts);
  useProtectedPage();

  // const getPosts = async () => {
  //   try {
  //     const response = await axios.get(`${BASE_URL}/posts`, {
  //       headers: {
  //         Authorization: localStorage.getItem("token"),
  //       },
  //     });
  //     setPosts(response.data);
  //   } catch (erro) {
  //     console.log(erro.response.data.message);
  //   }
  // };

  // useEffect(() => {
  //   getPosts();
  // }, [posts.length]);
  console.log(posts);
  const postComponents = posts.map((post) => {
    return (
      <PostBox
        key={post.id}
        postId={post.id}
        username={post.username}
        text={post.body}
        commentsCount={post.commentCount}
        votesCount={post.voteSum}
      />
    );
  });

  return (
    <div>
      <PostCreator getPosts={getPosts} />
      <PostDiv>{postComponents}</PostDiv>
    </div>
  );
};

export default FeedPage;

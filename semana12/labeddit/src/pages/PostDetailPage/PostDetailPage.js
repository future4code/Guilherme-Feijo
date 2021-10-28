import React, { useState } from "react";
import { useParams } from "react-router";
import useProtectedPage from "../../hooks/UseProtectedPage";
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/UseRequestData";
import PostBox from "../../components/PostBox/PostBox";
import CommentBox from "../../components/CommentBox/CommentBox";
import Button from "@material-ui/core/Button";
import useForm from "../../hooks/UseForm";
import { createComment } from "../../services/user";
import CircularProgress from "@material-ui/core/CircularProgress";
import Loading from "../../components/Loading/Loading";
import Header from "../../components/Header/Header";
import { PostDiv, CommentsDiv } from "../PostDetailPage/styled";

const PostDetailPage = () => {
  useProtectedPage();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const initialState = {
    body: "",
  };
  const [form, onChange, clear] = useForm(initialState);

  const onSubmitForm = (e) => {
    e.preventDefault();
    createComment(form, params.id, clear, getComments, setIsLoading);
  };

  const [post, getPost] = useRequestData([], `${BASE_URL}/posts`);

  const postsComponents =
    post.length > 0 &&
    post.map((item) => {
      if (item.id === params.id) {
        console.log("esse item aqui", item);
        return (
          <PostBox
            key={item.id}
            postId={item.id}
            username={item.username}
            text={item.body}
            commentsCount={item.commentCount}
            votesCount={item.voteSum}
            getPost={getPost}
          />
        );
      }
    });

  const [comments, getComments] = useRequestData(
    [],
    `${BASE_URL}/posts/${params.id}/comments`
  );

  const commentsComponents = comments.map((comment) => {
    return (
      <CommentBox
        key={comment.id}
        username={comment.username}
        body={comment.body}
        voteSum={comment.voteSum}
        id={comment.id}
        getComments={getComments}
        post={post}
      />
    );
  });
  return (
    <div>
      <Header />
      <PostDiv>{post ? postsComponents : <Loading />}</PostDiv>
      <CommentsDiv>
        <h2>Faça um comentário</h2>
        <form onSubmit={onSubmitForm}>
          <input
            type={"body"}
            label={"Comentario"}
            variant={"outlined"}
            fullWidth
            name={"body"}
            value={form.text}
            onChange={onChange}
            margin={"normal"}
            required
          />
          <Button
            type={"submit"}
            variant="contained"
            margin={"normal"}
            color="primary"
          >
            {isLoading ? (
              <CircularProgress color={"inherit"} size={24} />
            ) : (
              <>Enviar comentário</>
            )}
          </Button>
        </form>
        <h2>Comentários</h2>
        {comments && commentsComponents}
      </CommentsDiv>
    </div>
  );
};

export default PostDetailPage;

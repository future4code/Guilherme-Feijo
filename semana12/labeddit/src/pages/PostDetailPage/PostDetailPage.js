import React, { useEffect } from "react";
import { useParams } from "react-router";
import useProtectedPage from "../../hooks/UseProtectedPage";
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/UseRequestData";
import PostBox from "../../components/PostBox/PostBox";
import CommentBox from "../../components/CommentBox/CommentBox";
import Button from "@material-ui/core/Button";
import useForm from "../../hooks/UseForm";
import { createComment } from "../../services/user";

const PostDetailPage = () => {
  useProtectedPage();
  const params = useParams();

  const initialState = {
    body: "",
  };
  const [form, onChange, clear] = useForm(initialState);

  const onSubmitForm = (e) => {
    e.preventDefault();
    createComment(form, params.id, clear);
  };

  const post = useRequestData([], `${BASE_URL}/posts`)[0];
  console.log("esse aqui", post);
  const getPost = post.map((item) => {
    if (item.id === params.id) {
      return (
        <PostBox
          key={item.id}
          postId={item.id}
          username={item.username}
          text={item.body}
          commentsCount={item.commentCount}
          votesCount={item.voteSum}
        />
      );
    }
  });

  const [comments, getComments] = useRequestData(
    [],
    `${BASE_URL}/posts/${params.id}/comments`
  );

  // useEffect(() => {
  //   getComments();
  // });

  const commentsComponents = comments.map((comment) => {
    return (
      <CommentBox
        key={comment.id}
        username={comment.username}
        body={comment.body}
        voteSum={comment.voteSum}
        id={comment.id}
        getComments={getComments}
      />
    );
  });
  console.log("comentarios", comments);
  return (
    <div>
      {getPost}
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
          Enviar Comentário
        </Button>
      </form>
      <h2>Comentários</h2>
      {comments && commentsComponents}
    </div>
  );
};

export default PostDetailPage;

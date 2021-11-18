import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Button from "@material-ui/core/Button";
import { useEffect } from "react";
import { CommentContainer } from "./styled";

const CommentBox = (props) => {
  const vote = async (direction) => {
    const body = {
      direction: direction,
    };

    try {
      await axios.post(`${BASE_URL}/comments/${props.id}/votes`, body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      props.getComments();
    } catch (erro) {
      console.log(erro.response.data);
    }
  };

  return (
    <CommentContainer>
      <h3>{props.username}</h3>
      <p>{props.body}</p>
      <div>
        <Button onClick={() => vote(1)}>
          <ArrowUpwardIcon />
        </Button>
        {props.voteSum > 0 ? `${props.voteSum}` : 0}
        <Button onClick={() => vote(-1)}>
          <ArrowDownwardIcon />
        </Button>
      </div>
    </CommentContainer>
  );
};

export default CommentBox;

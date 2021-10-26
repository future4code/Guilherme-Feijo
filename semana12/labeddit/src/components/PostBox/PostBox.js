import React, { useState } from "react";
import { goToDetail } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { Posts, CardStyle, CardContentStyle, PostText } from "./styled";
import { CardActionArea } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const PostBox = (props) => {
  const history = useHistory();

  const vote = async (direction) => {
    const body = {
      direction: direction,
    };

    try {
      await axios.post(`${BASE_URL}/posts/${props.postId}/votes`, body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
    } catch (erro) {
      console.log(erro.response.data);
    }
  };

  return (
    <Posts>
      <CardStyle>
        <CardActionArea onClick={() => goToDetail(history, props.postId)}>
          <CardContentStyle>
            <b>{props.username}</b>
            <PostText>{props.text}</PostText>
          </CardContentStyle>
        </CardActionArea>
        <div>
          <div>
            <Button onClick={() => vote(1)}>
              <ArrowUpwardIcon />
            </Button>
            {props.votesCount ? `${props.votesCount}` : 0}
            <Button onClick={() => vote(-1)}>
              <ArrowDownwardIcon />
            </Button>
          </div>
          <div>
            {props.commentsCount
              ? `${props.commentsCount} Comentário(s)`
              : "Não há comentários"}
          </div>
        </div>
      </CardStyle>
    </Posts>
  );
};

export default PostBox;

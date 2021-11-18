import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { MainContainerCreatePost } from "./styled";
import Button from "@material-ui/core/Button";
import useForm from "../../hooks/UseForm";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { CircularProgress } from "@material-ui/core";

const PostCreator = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [form, onChangeInput, clearFields] = useForm({ body: "", title: "" });
  const onSubmitForm = (event) => {
    event.preventDefault();
    createPost();
  };

  const createPost = () => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/posts`, form, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        alert("Seu post foi criado com sucesso!");
        clearFields();
        props.getPosts();
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data);
        console.log(form);
        setIsLoading(false);
      });
  };

  return (
    <MainContainerCreatePost>
      <h3>Crie seu post</h3>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"title"}
          onChange={onChangeInput}
          label={"Titulo do Post"}
          variant={"outlined"}
          margin={"normal"}
          required
          type={"text"}
          value={form.title}
        />
        <textarea
          name={"body"}
          onChange={onChangeInput}
          value={form.body}
        ></textarea>
        <Button variant={"contained"} color={"primary"} type={"submit"}>
          {isLoading ? (
            <CircularProgress color={"inherit"} size={24} />
          ) : (
            <>Criar Post</>
          )}
        </Button>
      </form>
    </MainContainerCreatePost>
  );
};

export default PostCreator;

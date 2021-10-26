import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { MainContainerCreatePost } from "./styled";
import Button from "@material-ui/core/Button";
import useForm from "../../hooks/UseForm";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

const PostCreator = (props) => {
  const [form, onChangeInput, clearFields] = useForm({ body: "", title: "" });
  const onSubmitForm = (event) => {
    event.preventDefault();
    createPost();
  };

  const createPost = () => {
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
      })
      .catch((err) => {
        console.log(err.response.data);
        console.log(form);
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
          Criar
        </Button>
      </form>
    </MainContainerCreatePost>
  );
};

export default PostCreator;

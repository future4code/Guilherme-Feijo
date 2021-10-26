import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/coordinator";

export const login = (
  body,
  clear,
  history,
  //   setRightButtonText
  setIsLoading
) => {
  // setIsLoading(true);
  axios
    .post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      // setIsLoading(false);
      goToFeed(history);
      //   setRightButtonText("Logout");
    })
    .catch((err) => {
      // setIsLoading(false);
      alert(err.response.data.message);
    });
};

export const signUp = (
  body,
  clear,
  history
  //   setRightButtonText
  // setIsLoading
) => {
  // setIsLoading(true);
  axios
    .post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      // setIsLoading(false);
      goToFeed(history);
      //   setRightButtonText("Logout");
      console.log(body);
    })
    .catch((err) => {
      // setIsLoading(false);
      alert(err.response.data.message);
      console.log(err.response.data);
      console.log(body);
    });
};

export const createComment = async (body, id, clear, getData) => {
  try {
    await axios.post(`${BASE_URL}/posts/${id}/comments`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    alert("Comentário realizado com sucesso");
    // getData();
    clear();
  } catch (erro) {
    alert(erro.response.data.message);
  }
};

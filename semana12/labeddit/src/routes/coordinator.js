export const goToLogin = (history) => {
  history.push("/login");
};

export const goToFeed = (history) => {
  history.push("/");
};

export const goToDetail = (history, id) => {
  history.push(`/detail/${id}`);
};

export const goToSignUp = (history) => {
  history.push("/signup");
};

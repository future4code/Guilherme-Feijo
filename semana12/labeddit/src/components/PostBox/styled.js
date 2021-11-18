import styled from "styled-components";
import CardContent from "@material-ui/core/CardContent";

export const Posts = styled.div`
  width: 40vw;
  display: flex;
  height: 30vh;
  flex-direction: column;
  margin: 10px 0;
  align-items: center;
  justify-content: center;
`;
export const CardStyle = styled.div`
  width: 100%;
  border: 1px solid black;
  display: flex;
  min-height: 20vh;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardContentStyle = styled(CardContent)`
  display: flex;
  flex-direction: column;
`;

export const PostText = styled.div`
  display: flex;
  justify-content: center;
`;
export const PostComents = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

import { useRequestData } from "../../hooks/useRequestData";
import { GlobalContext } from "./GlobalContext";

const GlobalState = ({ children }) => {
  const [users, requestUsers] = useRequestData(
    [],
    "https://case-cubo-back.herokuapp.com/user/all"
  );
  const states = { users };
  const request = { requestUsers };
  return (
    <GlobalContext.Provider value={{ states, request }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;

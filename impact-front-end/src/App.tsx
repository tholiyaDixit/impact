import "./App.css";
import Router from "./router/Router";

import { useLoginUserMutation } from "./redux/userApi/UserApi";
import { useEffect } from "react";
import Testing from "./popup/Testing";

function App() {
  let userData = {
    email: "testing123@gmail.com",
    password: "testing@213",
  };
  // const { data, error, isLoading } = useLoginUserMutation();  // for get method

  const [
    updatePost, // This is the mutation trigger
    { isLoading: isUpdating, data: data }, // This is the destructured mutation result
  ] = useLoginUserMutation();
  console.log("allData ---", data);
  console.log("isUpdating ---", isUpdating);

  useEffect(() => {
    const userLogin = async () => {
      console.log("call ---");
      
      let userData = {
        email: "testing123@gmail.com",
        password: "testing@213",
      };

      await updatePost(userData);
    };
    userLogin()
  }, []);

  // console.log("data ---", data);
  // console.log("error ---", error);
  // console.log("isLoading ---", isLoading);

  return (
    <div className="App">
      <Router />
      {/* <Testing /> */}
    </div>
  );
}

export default App;

import { useState } from "react";
import { UserContext } from "./UserContext";

// const user = {
//   name: "Eduardo",
//   email: "riv.edu10@gmail.com",
//   done: true,
// };

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

import { UserProps } from "../types/user";

import React from "react";
import Search from "../components/Search";
import User from "../components/User";
import Error from "../components/Error";

export default function Home() {
  const [user, setUser] = React.useState<UserProps | null>(null);
  const [error, setError] = React.useState<boolean>(false);

  const loadUser = async (userName: string) => {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    const { avatar_url, login, location, followers, following } = data;
    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    if (res.status === 404) {
      setError(true);
      setUser(null);
      return;
    }

    setError(false);
    setUser(userData);
  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
      {error && (
        <Error
          avatar_url={""}
          login={""}
          location={""}
          followers={0}
          following={0}
        />
      )}
    </div>
  );
}

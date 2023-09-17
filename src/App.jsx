import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const App = () => {
  function fetchData() {
    return new Promise(function (resolve, reject) {
      fetch("https://api.github.com/users")
        .then((response) => response.json())
        .then((data) => resolve(data));
    });
  }

  function handleData(users) {
    setUsers(users);
  }

  function onError(err) {
    console.log(`ERROR : ${err}`);
  }

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData().then(handleData).catch(onError);
  }, []);

  console.log(users);

  return (
    <>
      <h2>Fetch data example</h2>
      <h3>Github Users</h3>
      <div className="container">
        <ul className="users">
          {users.map((user) => {
            const { id, login, avatar_url, html_url } = user;
            return (
              <li key={id}>
                <img src={avatar_url} alt={login} />
                <div>
                  <h5>{login}</h5>
                  <a href={html_url}>Profile</a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default App;

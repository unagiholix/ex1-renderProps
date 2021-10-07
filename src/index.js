import React from "react";
import ReactDOM from "react-dom";

import WithDataFetching from "./data-fetching-render-props";

const Repo2 = ({ loading, results, error }) => {
  if (loading || error) {
    return loading ? "Loading..." : error.message;
  }

  return (
    <ol>
      {results.map(({ id, html_url, full_name }) => (
        <li key={id}>
          <a href={html_url} target="_blank" rel="noopener noreferrer">
            {full_name}
          </a>
        </li>
      ))}
    </ol>
  );
};

function App() {
  return (
    <div className="App">
      <h1>My Github repos</h1>

      <WithDataFetching dataSource="https://api.github.com/users/paul-phan/repos">
        {({ loading, results, error }) => (
          <Repo2 loading={loading} results={results} error={error} />
        )}
      </WithDataFetching>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

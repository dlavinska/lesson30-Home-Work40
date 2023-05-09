import logo from './logo.svg';
import React from 'react';
import './App.css';
import articles from './data/articles.json'

const AsideNav = () => {
  return (
    <aside className="aside-nav">
      <Navigation />
    </aside>
  );
}

const Header = () => {
  return (
    <div className="header">
      <img src={logo} className="App-logo" alt="logo" />
      <h3>This is my first React-app</h3>
    </div>
  );
}

const Main = () => {
  return (
    <div className="main">
      <h1>Main Section</h1>
      {articles.map(item =>
        <section key={item.id}>
          <h2>{item.title}</h2>
          <div>{item.body}</div>
        </section>)}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <AsideNav/>
    </div>
  );
}

export default App;

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: articles
    }
  }

  render() {
    return (
      <nav>
        <ul>
          {this.state.data.map((item, index) => {

            const number = index + 1;

            return (
              <ListItems
                key={item.id}
                number={number}
                href={item.href}
                title = {item.title}
            />
            )
          })}
        </ul>
      </nav>
    ) 
  }

}

function ListItems(props) {
  return (
    <li>
      <span>
        {props.number} {"article: "}
      </span>
      <a href={props.href} target="_blank" rel="noopener noreferrer">{props.title}</a>
    </li>
  );
}
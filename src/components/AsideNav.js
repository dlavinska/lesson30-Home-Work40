import React from 'react';
import articles from '../data/articles.json'

const AsideNav = () => {
  return (
    <aside className="aside-nav">
      <Navigation />
    </aside>
  );
}

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

export default AsideNav;
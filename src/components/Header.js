import logo from '../logo.svg';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} className="App-logo" alt="logo" />
      <h3>This is my first React-app</h3>
    </div>
  );
}

export default Header;
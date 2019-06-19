import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h2>Tekken 7 Frame Data</h2>
        <h3>{this.props.char.toUpperCase()}</h3>
      </header>
    );
  }
}

export default Header;
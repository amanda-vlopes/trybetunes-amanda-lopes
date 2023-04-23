import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import icone from '../imagens/icone.png';
import { getUser } from '../services/userAPI';
import Carregando from './Carregando';

export default class Header extends Component {
  state = {
    loading: true,
    nameUser: '',
  };

  async componentDidMount() {
    const { name } = await getUser();
    this.setState({
      loading: false,
      nameUser: name,
    });
  }

  render() {
    const { loading, nameUser } = this.state;
    return (
      <header data-testid="header-component" className="header_component">
        <div className="login__title header__title">
          <img src={ icone } alt="icone" />
          <h2>onMusic</h2>
        </div>
        <Link to="/search" data-testid="link-to-search" className="search-header">
          <span className="material-symbols-outlined icon-header">search</span>
          <span>Search</span>
        </Link>
        <Link to="/favorites" data-testid="link-to-favorites" className="search-header">
          <span className="material-symbols-outlined icon-header">favorite</span>
          <span>Favorites</span>
        </Link>
        <Link to="/profile" data-testid="link-to-profile" className="search-header">
          <span className="material-symbols-outlined icon-header">person</span>
          <span>Profile</span>
        </Link>
        {loading
          ? (<Carregando />)
          : (
            <div className="user_div">
              <span className="material-symbols-outlined icon-header">
                account_circle
              </span>
              <p data-testid="header-user-name">{ nameUser }</p>
            </div>
          )}
      </header>
    );
  }
}

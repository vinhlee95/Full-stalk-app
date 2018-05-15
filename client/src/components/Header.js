import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
   render() {
      const { currentUser } = this.props;
      let login;
      if(currentUser) {
         login = <li><a href="/surveys">Welcome</a></li>;
      } else {
         login = <li><a className="waves-effect waves-light btn-large" href="/auth/google" >Login with Google</a></li>;
      }
      return(
         <nav>
            <div className="nav-wrapper blue lighten-2">
               <a href="/" className="brand-logo">Emaily</a>
               <ul id="nav-mobile" className="right hide-on-med-and-down">
                  {login}
               </ul>
            </div>
         </nav>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      currentUser: state.authReducer
   }
}

export default connect(mapStateToProps)(Header);
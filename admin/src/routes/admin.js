import React, { Component, Fragment } from 'react'
import { NavLink, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import AddUsersForm from '../components/admin/add-users-form'
import { addUser } from '../ducks/users'

class AdminRoute extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <h2>Auth Page</h2>
        {this.navMenu}
        <Route path="/admin/add-user" render={this.addUsersForm} />
        <Route path="/admin/list-users" render={this.addUsersForm} />
      </div>
    )
  }

  get navMenu() {
    return (
      <Fragment>
        <div>
          <NavLink to="/admin/add-user" activeStyle={{ color: 'red' }}>
            Add user
          </NavLink>
        </div>
        <div>
          <NavLink to="/admin/list-users" activeStyle={{ color: 'red' }}>
            List users
          </NavLink>
        </div>
      </Fragment>
    )
  }

  addUsersForm = () => <AddUsersForm onSubmit={this.addUser} />
  addUser = ({ firstName, lastName, email }) => {
    debugger
    this.props.addUser(firstName, lastName, email)
  }
}

export default connect(
  null,
  { addUser }
)(AdminRoute)

import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import emailValidator from 'email-validator'
import ErrorField from '../common/error-field'

class AddUsersForm extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <h3>Add Users</h3>
        <form onSubmit={this.props.handleSubmit}>
          <Field name="firstName" label="FirstName" component={ErrorField} />
          <Field name="lastName" label="LastName" component={ErrorField} />
          <Field name="email" label="Email" component={ErrorField} />
          <button type="submit">Add Users</button>
        </form>
      </div>
    )
  }
}

const validate = ({ firstName, lastName, email }) => {
  const errors = {}

  const requiredMessage = 'is a required field'

  if (!firstName) errors.firstName = `firstName ${requiredMessage}`
  if (!lastName) errors.lastName = `lastName ${requiredMessage}`
  if (!email) errors.email = `email ${requiredMessage}`

  //else if (!emailValidator.validate(email)) errors.email = 'invalid email'

  return errors
}

export default reduxForm({
  form: 'addUsers',
  validate
})(AddUsersForm)

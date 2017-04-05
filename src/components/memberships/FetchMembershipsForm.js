import React from 'react';
import TextInput from '../common/TextInput';
// http://zippyui.com/docs/react-date-picker
import { Calendar } from 'react-date-picker'
import 'react-date-picker/index.css'

class FetchMembershipsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_email: null,
      f2f_date: null
    };
    this.onUserEmailChange = this.onUserEmailChange.bind(this);
    this.onF2fDateChange = this.onF2fDateChange.bind(this);
    this.onFetch = this.onFetch.bind(this);
  }
  onUserEmailChange(event) {
    // TODO: set new value for user_email to state
    this.setState({ user_email: event.value });
  }
  onF2fDateChange(date, _dateDetails, _proxy) {
    this.setState({ f2f_date: date });
  }
  onFetch(event) {
    event.preventDefault();
    history.push(`/memberships?user_email=${this.state.user_email}&f2f_date=${this.state.f2f_date}`);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFetch}>
          <TextInput
            name="user_email"
            label="user_email"
            value={this.props.membership.user_email}
            onChange={this.onUserEmailChange}/>

          <p className='calendar__title'>Date of your last F2F with this person</p>
          <Calendar
            onChange={this.props.onChange}
            weekStartDay={1}
            weekNumbers={false}
          />

          <input
            type="submit"
            disabled={this.props.saving}
            className="btn btn-primary"/>
        </form>
      </div>
    );
  }
}

export default FetchMembershipsForm;

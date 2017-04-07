import React from 'react';
import {connect} from 'react-redux';
import TextInput from '../common/TextInput';
// http://zippyui.com/docs/react-date-picker
import { Calendar } from 'react-date-picker';
import 'react-date-picker/index.css';
import { Row, Col, Button } from 'reactstrap';

class FetchMembershipsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_email: '',
      f2f_date: ''
    };
    this.onUserEmailChange = this.onUserEmailChange.bind(this);
    this.onF2fDateChange = this.onF2fDateChange.bind(this);
    this.onFetch = this.onFetch.bind(this);
  }
  onUserEmailChange(event) {
    this.setState({ user_email: event.target.value });
  }
  onF2fDateChange(date, _dateDetails, _proxy) {
    this.setState({ f2f_date: date });
  }
  onFetch(event) {
    event.preventDefault();
    this.props.history.push({pathname: `/memberships/${this.state.user_email}/${this.state.f2f_date}`})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFetch}>
          <Row>
            <Col xs={{ size: 4, push: 4, pull: 4 }}>
              <TextInput
                name="user_email"
                label="user_email"
                value={this.state.user_email}
                onChange={this.onUserEmailChange}
                type='email'
                placeholder='Email who you want to collect fedback for'
                required
              />
            </Col>
          </Row>
          <Row>
            <Col xs={{ size: 4, push: 4, pull: 4 }}>
              <p className='calendar__title'>Date of your last F2F with this person for</p>
              <Calendar
                onChange={this.onF2fDateChange}
                weekStartDay={1}
                weekNumbers={false}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={{ size: 4, push: 4, pull: 4 }}>
              <Button
                className="btn-full-width"
                color="secondary"
                type="submit"
                disabled={!this.state.f2f_date || !this.state.user_email}
              >
              Fetch people
              </Button>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}

export default connect(
  state => ({
    memberships: state.membeships,
  })
)(FetchMembershipsForm);

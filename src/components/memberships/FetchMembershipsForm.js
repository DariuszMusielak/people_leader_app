import React from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import { Calendar } from 'react-date-picker';
import 'react-date-picker/index.css';
import { Row, Col, Button } from 'reactstrap';
import GravatarWithTooltip from '../common/GravatarWithTooltip'

class FetchMembershipsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      f2f_date: ''
    };
    this.onF2fDateChange = this.onF2fDateChange.bind(this);
    this.onFetch = this.onFetch.bind(this);
  }
  onF2fDateChange = (date, _dateDetails, _proxy) => {
    this.setState({ f2f_date: date });
  }
  onFetch = (event) => {
    const { user_email, team_name } = this.props;
    event.preventDefault();
    this.props.history.push({pathname: `/${team_name}/${user_email}/${this.state.f2f_date}`})
  }

  renderBackLink = () => {
    const { team_name } = this.props;
    return (
      <Link to={`/${team_name}`} className="btn btn-secondary btn-sm btn-full-width">
        Select different person
      </Link>
    )
  }

  renderGravatar = () => {
    const { user_email } = this.props;
    return (
      <div className="gravatar--center-img">
        <GravatarWithTooltip
          email={user_email}
          showTooltip={false}
          size={100}
        />
      </div>
    );
  }

  render = () => {
    return (
      <div>
        <Row>
          <Col xs={{ size: 4, push: 4, pull: 4 }}>
            {this.renderGravatar()}
            <hr/>
            {this.renderBackLink()}
          </Col>
        </Row>
        <form onSubmit={this.onFetch}>
          <Row>
            <Col xs={{ size: 4, push: 4, pull: 4 }}>
              <p className='calendar__title'>Date of your last F2F with this person</p>
              <Calendar
                onChange={this.onF2fDateChange}
                weekStartDay={1}
                weekNumbers={false}
              />
              <hr/>
            </Col>
          </Row>
          <Row>
            <Col xs={{ size: 4, push: 4, pull: 4 }}>
              <Button
                className="btn-full-width"
                color="secondary"
                type="submit"
                disabled={!this.state.f2f_date}
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

function mapStateToProps(state, ownProps) {
  const { user_email, team_name } = ownProps.match.params
  return {
    memberships: state.memberships,
    user_email: user_email,
    team_name: team_name
  };
}

export default connect(mapStateToProps)(FetchMembershipsForm);

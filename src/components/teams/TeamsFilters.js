import React from 'react';
import { connect } from 'react-redux';
import * as teamActions from '../../actions/teamActions';
import TextInput from '../common/TextInput';

class TeamsFilters extends React.Component {
  render = () => {
    return (
      <TextInput
        name='team_name'
        onChange={(event) => this.props.toggleTeam(event.target.value)}
        className="btn--filter"
        placeholder="Type name of your team"
      />
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {};
}


export default connect(mapStateToProps, { toggleTeam: teamActions.toggleTeam })(TeamsFilters);

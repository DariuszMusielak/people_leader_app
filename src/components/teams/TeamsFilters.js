import React from 'react';
import { connect } from 'react-redux';
import { toggleTeam } from '../../actions/teamActions';
import TextInput from '../common/TextInput';

const TeamsFilters = ({ toggleTeam }) => (
  <TextInput
    name='team_name'
    onChange={(event) => toggleTeam(event.target.value)}
    className="btn--filter"
    placeholder="Browse below or type to find your team"
  />
)

export default connect(null, { toggleTeam })(TeamsFilters);

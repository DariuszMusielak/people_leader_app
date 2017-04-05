import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class MembershipPage extends React.Component {
  render() {
    return (
      <div className="col-md-8 col-md-offset-2">
        <h1>{this.props.membership.user_name}</h1>
        <p>email: {this.props.membership.user_email}</p>
        <p>project: {this.props.membership.project_name}</p>
        <p>role: {this.props.membership.user_role}</p>
      </div>
    );
  }
};

MembershipPage.propTypes = {
  membership: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  let membership = { project_name: '', user_name: '', user_email: '', user_role: '' };
  // TODO: check if id is provided by react or we should add it in API endpoint
  const membershipId = ownProps.params.id;
  if (state.memberships.length > 0) {
    membership = Object.assign({}, state.memberships.find(membership => membership.id ==
      id)
  }
  return {membership: membership};
};

export default connect(mapStateToProps)(MembershipPage);

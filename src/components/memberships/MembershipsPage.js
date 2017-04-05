import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as membershipActions from '../../actions/membershipActions';
import MembershipList from './MembershipList';

class MembershipsPage extends React.Component {
  componentDidMount() {
    this.props.loadMemberships(this.props.user_email, this.props.f2f_date)
  }
  render() {
    return (
      <div className="col-md-12">
        <h1>Memberships</h1>
        <div className="col-md-4">
          <MembershipList memberships={this.props.memberships} />
        </div>
        <div className="col-md-8">
          {this.props.children}
        </div>
      </div>
    );
  }
}

MembershipsPage.propTypes = {
  memberships: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    memberships: state.memberships,
    user_email: ownProps.user_email,
    f2f_date: ownProps.f2f_date
  };
}

export default connect(mapStateToProps, { loadMemberships: membershipActions.loadMemberships })(MembershipsPage);

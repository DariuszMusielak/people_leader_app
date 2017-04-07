import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as membershipActions from '../../actions/membershipActions';
import MembershipList from './MembershipList';
import MembershipsFiltersPage from './MembershipsFiltersPage';
import { Row, Col, Button } from 'reactstrap';
import { CSSGrid, layout, easings, enterExitStyle } from 'react-stonecutter';

class MembershipsPage extends React.Component {
  componentDidMount() {
    this.props.loadMemberships(this.props.user_email, this.props.f2f_date)
  }
  render() {
    const groups = {};
    this.props.memberships.forEach(membership => {
      groups[membership.user_role] = groups[membership.user_role] || []
      groups[membership.user_role].push(membership)
    });

    const cardHeight = (elements) => {
      const levelsCount = Math.ceil(elements.length / 3);
      const firstLevelHeight = 282;
      const nextLevelHeight = 102;
      if (levelsCount < 1 ) {
        return firstLevelHeight;
      }else{
        return firstLevelHeight + (levelsCount-1) * nextLevelHeight
      }
    }

    const { quartInOut } = easings;
    const { enter, entered, exit } = enterExitStyle.fromLeftToRight;

    return (
      <Row>
        <Col xs="12">
          <hr/>
          <Row>
            <Col xs="10">
              <MembershipsFiltersPage />
            </Col>
            <Col xs="2">
              <Button
                className="pull-right"
                color="secondary"
                onClick={() => this.props.history.push('/')}
              >
                Go Back
              </Button>
            </Col>
          </Row>
          <hr/>
        </Col>
          <div className="css-grid">
            <CSSGrid
              component="ul"
              columns={3}
              columnWidth={370}
              gutterWidth={5}
              gutterHeight={5}
              layout={layout.pinterest}
              duration={800}
              easing={quartInOut}
              enter={enter}
              entered={entered}
              exit={exit}
            >
              {Object.keys(groups).map(roleName => {
                return (
                  <li key={roleName} itemHeight={cardHeight(groups[roleName])}>
                    <MembershipList memberships={groups[roleName]} roleName={roleName} />
                  </li>
                )
              })}
            </CSSGrid>
          </div>
        <div className="col-md-8">
          {this.props.children}
        </div>
      </Row>
    );
  }
}

MembershipsPage.propTypes = {
  memberships: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  const { user_email, f2f_date } = ownProps.match.params
  const activeProjects = state.projects.filter(project => project.visible).map(project => project.name);
  return {
    memberships: state.memberships.filter(membership => activeProjects.includes(membership.project_name)),
    user_email: user_email,
    f2f_date: f2f_date
  };
}

export default connect(mapStateToProps, { loadMemberships: membershipActions.loadMemberships })(MembershipsPage);

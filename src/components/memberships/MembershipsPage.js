import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { loadMemberships } from '../../actions/membershipActions';
import MembershipList from './MembershipList';
import MembershipsFilters from './MembershipsFilters';
import { Row, Col, Button } from 'reactstrap';
import { CSSGrid, layout, easings, enterExitStyle } from 'react-stonecutter';
import { extractEmailsFromMemberships, getFilteredMemberships } from './../../helpers/membershipsHelper';
import { Link } from 'react-router-dom'

class MembershipsPage extends React.Component {
  componentDidMount = () => {
    this.props.loadMemberships(this.props.user_email, this.props.f2f_date)
  }

  copyEmails = () => {
    this.input.select();
    document.execCommand('copy');
    this.input.blur();
  }

  cardHeight = (elements) => {
    const levelsCount = Math.ceil(elements.length / 3);
    const firstLevelHeight = 284;
    const nextLevelHeight = 102;
    if (levelsCount < 1 ) {
      return firstLevelHeight;
    }else{
      return firstLevelHeight + (levelsCount-1) * nextLevelHeight
    }
  }

  renderGrid = (groups) => {
    const { quartInOut } = easings;
    const { enter, entered, exit } = enterExitStyle.fromLeftToRight;

    return (
      <CSSGrid
        component="ul"
        columns={3}
        columnWidth={374}
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
            <li key={roleName} itemHeight={this.cardHeight(groups[roleName])}>
              <MembershipList memberships={groups[roleName]} roleName={roleName} />
            </li>
          )
        })}
      </CSSGrid>
    )
  }

  render = () => {
    const groups = {};
    const { memberships, user_email, team_name } = this.props;
    memberships.forEach(membership => {
      groups[membership.user_role] = groups[membership.user_role] || []
      groups[membership.user_role].push(membership)
    });
    const emails = extractEmailsFromMemberships(memberships);

    return (
      <Row>
        <Col xs="12">
          <hr/>
          <Row>
            <Col xs="10">
              <MembershipsFilters memberships={memberships} />
            </Col>
            <Col xs="2">
              <Link to={`/${team_name}/${user_email}`} className="pull-right btn btn-secondary">
                Change date
              </Link>
            </Col>
          </Row>
          <hr/>
        </Col>
        <div className="css-grid">
          {this.renderGrid(groups)}
        </div>
        <Col xs="12">
          <Button
            className="btn-full-width"
            onClick={this.copyEmails}
            color="secondary"
          >
            Click to copy ALL emails
          </Button>
        </Col>
        <input
          className="push-behind-screen"
          value={emails}
          ref={(input) => this.input = input }
          readOnly
        />
      </Row>
    );
  }
}

MembershipsPage.propTypes = {
  memberships: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const { team_name, user_email, f2f_date } = ownProps.match.params;
  const { memberships, projects } = state;
  return {
    memberships: getFilteredMemberships(memberships, projects),
    user_email: user_email,
    f2f_date: f2f_date,
    team_name: team_name,
  };
}

export default connect(mapStateToProps, { loadMemberships })(MembershipsPage);

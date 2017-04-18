import React, {PropTypes} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { loadTeamMembers } from '../../actions/teamMemberActions';
import { Row, Col } from 'reactstrap';
import { CSSGrid, layout, easings, enterExitStyle } from 'react-stonecutter';
import GravatarWithTooltip from '../common/GravatarWithTooltip'

class TeamMembersPage extends React.Component {
  componentDidMount = () => {
    this.props.loadTeamMembers(this.props.team_name)
  }

  renderGravatar = (teamMember) => {
    const { email, full_name } = teamMember;
    return (
      <GravatarWithTooltip email={email} full_name={full_name} size={200}/>
    );
  }

  renderGrid = (teamMembers) => {
    const { quartInOut } = easings;
    const { enter, entered, exit } = enterExitStyle.fromLeftToRight;

    return (
      <CSSGrid
        component="ul"
        columns={4}
        columnWidth={262}
        gutterWidth={25}
        gutterHeight={25}
        layout={layout.pinterest}
        duration={800}
        easing={quartInOut}
        enter={enter}
        entered={entered}
        exit={exit}
      >
        {teamMembers.map(teamMember => {
          return (
            <li key={teamMember.id} itemHeight={262} className="gravatar__container">
              <Link to={`/${this.props.team_name}/${teamMember.email}`}>
                {this.renderGravatar(teamMember)}
              </Link>
            </li>
          )
        })}
      </CSSGrid>
    )
  }

  render = () => {
    const { teamMembers, team_name } = this.props;
    return (
      <Row>
        <Col xs="12">
          <hr/>
          <h3 className="pull-left"> {team_name} team </h3>
          <Link to={`/`} className="pull-right btn btn-secondary">
            Select different team
          </Link>
        </Col>
        <div className="css-grid">
          <hr/>
          {this.renderGrid(teamMembers)}
          <hr/>
        </div>
      </Row>
    );
  }
}

TeamMembersPage.propTypes = {
  teamMembers: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const { team_name } = ownProps.match.params;
  return {
    teamMembers: state.team_members,
    team_name,
  };
}

export default connect(mapStateToProps, { loadTeamMembers })(TeamMembersPage);

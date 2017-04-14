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

  renderGravatar = (team_member) => {
    const { email, full_name } = team_member;
    return (
      <GravatarWithTooltip email={email} full_name={full_name} size={200}/>
    );
  }

  renderGrid = (team_members) => {
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
        {team_members.map(team_member => {
          return (
            <li key={team_member.id} itemHeight={262} className="gravatar__container">
              <Link to={`/${this.props.team_name}/${team_member.email}`}>
                {this.renderGravatar(team_member)}
              </Link>
            </li>
          )
        })}
      </CSSGrid>
    )
  }

  render = () => {
    const { team_members, team_name } = this.props;
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
          {this.renderGrid(team_members)}
          <hr/>
        </div>
      </Row>
    );
  }
}

TeamMembersPage.propTypes = {
  team_members: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const { team_name } = ownProps.match.params;
  return {
    team_members: state.team_members,
    team_name: team_name,
  };
}

export default connect(mapStateToProps, { loadTeamMembers })(TeamMembersPage);

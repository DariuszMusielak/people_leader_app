import React, {PropTypes} from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import * as teamActions from '../../actions/teamActions';
import Team from './Team'
import { Row, Col } from 'reactstrap';
import { CSSGrid, layout, easings, enterExitStyle } from 'react-stonecutter';
import TeamsFilters from './TeamsFilters';

class TeamsPage extends React.Component {
  componentDidMount() {
    this.props.loadTeams()
  }

  renderGrid = (teams) => {
    const { quartInOut } = easings;
    const { enter, entered, exit } = enterExitStyle.fromLeftToRight;

    return (
      <CSSGrid
        component="ul"
        columns={6}
        columnWidth={180}
        gutterWidth={15}
        gutterHeight={15}
        layout={layout.pinterest}
        duration={500}
        easing={quartInOut}
        enter={enter}
        entered={entered}
        exit={exit}
      >
        {teams.map(team => {
          return (
            <li itemHeight={180} key={team.id}>
              <Link to={`/${team.name}`}>
                <Team team={team}/>
              </Link>
            </li>
          )
        })}
      </CSSGrid>
    )
  }

  render() {
    const { teams } = this.props;
    return (
      <Row>
        <Col xs="12">
          <TeamsFilters />
        </Col>
        <div className="css-grid">
          <hr/>
          {this.renderGrid(teams)}
        </div>
      </Row>
    );
  }
}

TeamsPage.propTypes = {
  teams: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  const activeTeams = state.teams.filter(team => team.visible);
  const sortedTeams = activeTeams.sort((a,b) => {
    return (
        a.name.toUpperCase() > b.name.toUpperCase()
      ) ? 1 : (
        (b.name.toUpperCase() > a.name.toUpperCase()
      ) ? -1 : 0
    );
  });

  return {
    teams: sortedTeams
  };
}

export default connect(mapStateToProps, { loadTeams: teamActions.loadTeams })(TeamsPage);

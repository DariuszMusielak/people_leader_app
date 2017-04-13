import React, { PropTypes, Component } from 'react';
import {
  Button, Col, Card, CardBlock, CardTitle
} from 'reactstrap';
import GravatarWithTooltip from '../common/GravatarWithTooltip'
import { CSSGrid, layout, easings, enterExitStyle } from 'react-stonecutter';
import { extractEmailsFromMemberships } from './../../helpers/helper'

class MembershipList extends Component {
  copyEmails = () => {
    this.input.select();
    document.execCommand('copy');
    this.input.blur();
  }

  renderGravatar = (membership) => {
    const { user_name, user_email, project_name } = membership;
    return (
      <GravatarWithTooltip
        email={user_email}
        full_name={user_name}
        project_name={project_name}
      />
    );
  }

  render() {
    const { memberships, roleName } = this.props;
    const emails = extractEmailsFromMemberships(memberships);
    const { quartInOut } = easings;
    const { enter, entered, exit } = enterExitStyle.fromTop;

    return (
      <Col xs="12">
        <Card>
          <CardBlock>
            <CardTitle>{roleName}</CardTitle>
            <hr/>
            <div className="css-grid">
              <CSSGrid
                component="ul"
                columns={3}
                columnWidth={100}
                gutterWidth={1}
                gutterHeight={1}
                layout={layout.pinterest}
                duration={600}
                easing={quartInOut}
                enter={enter}
                entered={entered}
                exit={exit}
              >
                {memberships.map(membership =>
                  <li key={membership.id} itemHeight={100}>
                    {this.renderGravatar(membership)}
                  </li>
                )}
              </CSSGrid>
            </div>
            <Button
              className="btn-full-width"
              onClick={this.copyEmails}
              color="secondary"
            >
              Click to copy emails
            </Button>
          </CardBlock>
        </Card>
        <hr/>
        <input
          className="push-behind-screen"
          value={emails}
          ref={(input) => this.input = input }
          readOnly
        />
      </Col>
    );
  }
};

MembershipList.propTypes = {
  memberships: PropTypes.array.isRequired
};

export default MembershipList;

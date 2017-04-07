import React, { PropTypes, Component } from 'react';
import {
  Button, Col, Card, CardBlock, CardTitle
} from 'reactstrap';
import MembershipTooltip from './MembershipTooltip';
import { CSSGrid, layout, easings, enterExitStyle } from 'react-stonecutter';

class MembershipList extends Component {
  copyEmails = () => {
    this.input.select();
    document.execCommand('copy');
    this.input.blur();
  }

  render() {
    const { memberships, roleName } = this.props;
    const emails = memberships.map(m => m.user_email).join(', ')
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
                    <MembershipTooltip membership={membership} />
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
          className='push-behind-screen'
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

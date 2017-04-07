import React, { Component } from 'react';
import Gravatar from 'react-gravatar';
import { Tooltip } from 'reactstrap';

class MembershipTooltip extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    const { membership } = this.props;

    return (
      <div>
        <Gravatar id={membership.user_email} email={membership.user_email} size={100} />
        <Tooltip
          placement="top"
          isOpen={this.state.tooltipOpen}
          target={membership.user_email}
          toggle={this.toggle}
        >
          <div>
            {membership.user_name}
          </div>
          <div>
            <b>Project: </b>
            {membership.project_name}
          </div>
        </Tooltip>
      </div>
    );
  }
};

export default MembershipTooltip;

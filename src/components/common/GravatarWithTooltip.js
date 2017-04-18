import React, { Component } from 'react';
import Gravatar from 'react-gravatar';
import { Tooltip } from 'reactstrap';

class GravatarWithTooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltipOpen: false,
      showTooltip: props.showTooltip,
    };
  }

  toggle = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen && this.state.showTooltip
    });
  }

  projectDetails = () => {
    const { project_name } = this.props;
    if (!project_name) { return null; }

    return (
      <div>
        <b>Project: </b>
        {project_name}
      </div>
    );
  }

  renderTooltip = () => {
    const { email, full_name } = this.props;
    const { showTooltip, tooltipOpen } = this.state;

    if(!showTooltip){ return null; }

    return (
      <Tooltip
        placement="top"
        isOpen={tooltipOpen}
        target={email}
        toggle={this.toggle}
      >
        <div>
          {full_name}
        </div>
        {this.projectDetails()}
      </Tooltip>
    )
  }

  render() {
    const { email, size } = this.props;
    return (
      <div>
        {this.renderTooltip()}
        <Gravatar id={email} email={email} size={size} />
      </div>
    );
  }
};

GravatarWithTooltip.defaultProps = {
  size: 100,
  showTooltip: true,
}

export default GravatarWithTooltip;

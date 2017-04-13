import React, { Component } from 'react';
import Gravatar from 'react-gravatar';
import { Tooltip } from 'reactstrap';

class GravatarWithTooltip extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false,
      showTooltip: typeof this.props.showTooltip !== 'undefined' ? this.props.showTooltip : true
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen && this.state.showTooltip
    });
  }

  projectDetails() {
    if(this.props.project_name){
      return (
        <div>
          <b>Project: </b>
          {this.props.project_name}
        </div>
      )
    }else{
      return '';
    }
  }

  renderTooltip = () => {
    const { email, full_name } = this.props;
    if(!this.state.showTooltip){ return; }
    return (
      <Tooltip
        placement="top"
        isOpen={this.state.tooltipOpen}
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
    const { email } = this.props;
    const size = typeof this.props.size !== 'undefined' ? this.props.size : 100;
    return (
      <div>
        {this.renderTooltip()}
        <Gravatar id={email} email={email} size={size} />
      </div>
    );
  }
};

export default GravatarWithTooltip;

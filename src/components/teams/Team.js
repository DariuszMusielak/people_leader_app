import React from 'react';

class Team extends React.Component {
  render() {
    const { color, name } = this.props.team;

    const nameStyle = () => {
       return {
         "borderColor": color
       }
     }

    return (
      <div className='team' style={nameStyle()}>
        <h5 className='team__name'>{name}</h5>
      </div>
    )
  }
}

export default Team;

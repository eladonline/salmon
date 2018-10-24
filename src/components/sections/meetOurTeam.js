import React, { PureComponent } from 'react';
import Hexagon from 'src/components/helpers/hexagonCreator';

const dotted = 'static/image/dotted.png';
const profile = 'static/image/user2.png';
const profile2 = 'static/image/user1.png';

export default class meetOurTeam extends PureComponent {
  parseData(list) {
    return list.map((data, i) => {
      return (
        <ProfileBlock
          key={`ProfileBlock_${i}`}
          name={data.name}
          title={data.title}
          description={data.description}
          profile={data.image}
          index={i}
        />
      );
    });
  }
  render() {
    return (
      <div className="MeetOurTeam">
        <h1>Meet our team</h1>
        <div className="teamProfiles">{this.parseData(this.props.data)}</div>
      </div>
    );
  }
}

const ProfileBlock = p => (
  <div className="profileBlock">
    <div className="profilePicOuter">
      <img className="dotted" src={dotted} alt="dotted hexagon" />
      <Hexagon index={p.index} image={p.profile} className="float-hexagon" />
    </div>
    <header>
      <h3>{p.name}</h3>
      <h4>{p.title}</h4>
    </header>
    <p>{p.description}</p>
  </div>
);

meetOurTeam.defaultProps = {
  data: [
    {
      name: 'elad NA',
      title: 'senior backoffice',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt u',
      image: profile
    },
    {
      name: 'elad NA',
      title: 'senior backoffice',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt u',
      image: profile2
    },
    {
      name: 'elad NA',
      title: 'senior backoffice',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt u',
      image: profile
    }
  ]
};

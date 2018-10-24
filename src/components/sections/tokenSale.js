import React, { PureComponent } from 'react';
// import StaticTimeline from 'components/helpers/staticTimeline';

export default class TokenSale extends PureComponent {
  listSpread(list) {
    return list.map((item, i) => {
      return <Timeline time={item.time} stage={i + 1} bold={item.bold} text={item.text} />;
    });
  }
  render() {
    return (
      <div className="TokenSale">
        <section>
          <div>
            <div className="line" />
            <h2>Token Sale</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labre
          </p>
        </section>
        <div className="timeline-mainCon">{this.listSpread(this.props.data)}</div>
      </div>
    );
  }
}

const Timeline = p => {
  return (
    <div className="tokenSale-timeline">
      <div className="timeline-year">{p.time}</div>

      <div className="timeline-holder">
        <div className="Timeline-bullet-out">
          <div className="Timeline-bullet-inner" />
        </div>
        <div className="dotted-border" />
      </div>

      <div className="Timeline-text">
        <h3>{`Stage ${p.stage}`}</h3>
        <h5>{p.bold}</h5>
        <p>{p.text}</p>
      </div>
    </div>
  );
};

TokenSale.defaultProps = {
  data: [
    {
      time: 2018,
      bold: 'vip somthing',
      text: 'some italic dolor that needs to be in two lines'
    },
    {
      time: 2018,
      bold: 'vip somthing',
      text: 'some italic dolor that needs to be in two lines'
    },
    {
      time: 2018,
      bold: 'vip somthing',
      text: 'some italic dolor that needs to be in two lines'
    },
    {
      time: 2019,
      bold: 'vip somthing',
      text: 'some italic dolor that needs to be in two lines'
    }
  ]
};

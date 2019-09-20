import React from 'react';
import './style.css';


class EstWaitTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          estWaitTime: '10 mins',
          cars: '02'
        };
    }
    render() {
      return (

        <div className="est-wait-time-display">
            <div className="est-wait-time">
                {this.state.estWaitTime}
            </div>
            <div className="est-wait-time-message">
                {this.state.cars} cars ahead of you
            </div>
        </div>

      );
    }
  }

export default EstWaitTime;
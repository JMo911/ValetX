import React from 'react';
import './style.css';
import one from './one.jpg';
import two from './two.jpg';
import three from './three.jpg';
import check from './check.jpg';

class StatusNumberCheckmarkInRoute extends React.Component {
    render() {
        return (
            <div id="dashboard-view-inroute">
                <div className="status-container">
                    <div className="status-block">
                        <div className="status-number-checkmark">
                            <div id="parked">
                                <img className="unchecked" src={one} alt="one"></img>
                                <img className="checked" src={check} alt="check"></img>
                            </div>
                            <span className="status-text">Parked</span>
                        </div>
                    </div>
                    <div className="status-block">
                        <div className="status-number-checkmark">
                            <div id="paid">
                                <img className="unchecked" src={two} alt="two"></img>
                                <img className="checked" src={check} alt="check"></img>
                            </div>
                            <span className="status-text">Paid</span>
                        </div>
                    </div>
                    <div className="status-block">
                        <div className="status-number-checkmark">
                            <div id="inroute">
                                <img className="unchecked" src={three} alt="three"></img>
                                <img className="checked" src={check} alt="check"></img>
                            </div>
                            <span className="status-text">In Route</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default StatusNumberCheckmarkInRoute;
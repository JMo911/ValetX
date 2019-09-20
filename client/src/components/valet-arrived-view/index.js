import React from 'react';
import './style.css';
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";

class ValetArrivedView extends React.Component {

    render() {
      return (
        <div className="valet-arrived-view">
            <p className="guestname">Guest: Greg Gilpatrick</p>
            <p className="message">Let the guest know you've arrived</p>
            <Link to="/valet-homepage">
                <Button className="btn-lg btn-primary" id="valet-arrived-button">Arrived</Button>
            </Link>
        </div>
      );
    }
  }

export default ValetArrivedView;
import React from 'react';
import './style.css';
import { Link } from "react-router-dom";

class ArrivedModal extends React.Component {
    
    state = {
        smileOpen: true,
        sadOpen: true
      }
      toggleSmileImage = (event) => {
        event.preventDefault();
        this.setState(state => ({ smileOpen: !state.smileOpen }))
      }

      toggleSadImage = (event) => {
        event.preventDefault();
        this.setState(state => ({ sadOpen: !state.sadOpen }))
      }
    
      getSmileImageSrc = () => this.state.smileOpen ? 'smileOpen' : 'smileYellow'
      getSadImageSrc = () => this.state.sadOpen ? 'sadOpen' : 'sadYellow'

    render() {
        const smileImagePath = {
            smileOpen: "../images/smile.png",
            smileYellow: "../images/smile-yellow.png"
        }

        const sadImagePath = {
            sadOpen: "../images/sad.png",
            sadYellow: "../images/sad-yellow.png"
        }
        
        const smileImageSrc= this.getSmileImageSrc();
        const sadImageSrc= this.getSadImageSrc();

        return (

        <div className="arrived-modal">
            <p>Your car<br/>has arrived!</p>
            <p className="thank-you">Thank you for your business!</p>
            <p className="how">How did we do?</p>
            <div className="smile-container">
              <Link to="/">
                <div className="smile">
                  <img src={sadImagePath[sadImageSrc]} onClick={this.toggleSadImage} alt="sad"></img>
                </div>
              </Link>
              <Link to="/">
                <div className="smile">
                  <img src={smileImagePath[smileImageSrc]} onClick={this.toggleSmileImage} alt="happy"></img>
                </div>
              </Link>
            </div>
        </div>

      );
    }
  }

export default ArrivedModal;
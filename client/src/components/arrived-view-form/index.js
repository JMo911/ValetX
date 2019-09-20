import React from 'react';
import './style.css';
import { Redirect } from 'react-router-dom';
import ReactTimeout from 'react-timeout';

class ArrivedViewForm extends React.Component {
    state = {
        smileOpen: true,
        sadOpen: true,
        redirect: false,
        message: 'How did we do?'
      }

      setRedirect = () => {
        this.setState({
          redirect: true
        })
      }

      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/' />
        }
      }

      toggleSmileImage = () => {
        this.setState(state => ({ smileOpen: !state.smileOpen }))
      }

      toggleSadImage = () => {
        this.setState(state => ({ sadOpen: !state.sadOpen }))
      }
    
      getSmileImageSrc = () => this.state.smileOpen ? 'smileOpen' : 'smileYellow'
      getSadImageSrc = () => this.state.sadOpen ? 'sadOpen' : 'sadYellow'

      handleSmileClick = () => {
        this.toggleSmileImage();
        this.setState({message: 'Thank you for your business!'});
        this.props.setTimeout(this.setRedirect, 3000);
      }

      handleSadClick = () => {
        this.toggleSadImage();
        this.setState({message: 'So sorry, we will be touch to fix this!'});
        this.props.setTimeout(this.setRedirect, 3000);
      }


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
            <p className="how">{this.state.message}</p>
            <div className="smile-container">
                {this.renderRedirect()} 
                <div className="smile">
                  <img src={sadImagePath[sadImageSrc]} onClick={this.handleSadClick} alt="sad"></img>
                </div>
                <div className="smile">
                  <img src={smileImagePath[smileImageSrc]} onClick={this.handleSmileClick} alt="happy"></img>
                </div>
            </div>
        </div>
        
      );
    }
  }

export default ReactTimeout(ArrivedViewForm);
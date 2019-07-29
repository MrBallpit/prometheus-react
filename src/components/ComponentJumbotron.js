import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

class BuildJumbotron extends React.Component {
    render () {
      return (
        <Jumbotron fluid>
          <Container>
            <h1>
                {this.props.CompVars.textTitle}
            </h1>
            <p>
              {this.props.CompVars.textBody}
            </p>
          </Container>
        </Jumbotron>
      );
    }
  }

export default BuildJumbotron;
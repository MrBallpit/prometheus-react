import React from 'react'
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function NavBarLinks(props) {
  let LinkList=[];

  console.log("hello");
  for (var Link in props.CompVars.listLinks)
  {
    
    LinkList.push(<Nav.Link href={props.CompVars.listLinks[Link].url}>{props.CompVars.listLinks[Link].name}</Nav.Link>)
    console.log(props.CompVars.listLinks[Link].name);
    console.log("added");
  }

  return LinkList;
}



class BuildNavBar extends React.Component 
{
  
  render () 
  {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href={this.props.CompVars.textLink}>{this.props.CompVars.textTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <NavBarLinks CompVars={this.props.CompVars}/>
      </Navbar>
    );
  }
}

export default BuildNavBar;




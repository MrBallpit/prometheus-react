import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import ComponentConstructor from './ComponentConstructor';
import * as serviceWorker from './serviceWorker';


const pageComponents=
    {
        "page":
        {
            "href": "home"
        },
        "header": 
        [
            {
                "Jumbotron": 
                {
                    "textTitle": "SRE Webpage",
                    "textBody": "SRE Body"
                }
            }
        ],
        "navbar": 
        [
            {
                "NavBar": 
                {
                    "textTitle": "SRE Webpage",
                    "linkTitle": "#home",
                    "listLinks":
                    [
                        {
                            "name": "Home",
                            "url": "#home"
                        },
                        {
                            "name": "testgoogle",
                            "url": "https://www.google.com"
                        }
                    ]
                }
            }
        ],
        "body": 
        [
            {
                "Table": 
                {
                    
                    "items": [
                        {
                            "id": 1,
                            "name": "cdes",
                            "type": "wdo"
                        },
                        {
                            "id": 2,
                            "name": "dan",
                            "type": "fired"
                        },
                        {
                            "id": 3,
                            "name": "scrub",
                            "type": "doop"
                        }
                    ]
                    
                }
            }
        ]
    }


class Header extends React.Component {
    render(){
        return(
            <div>
                <ComponentConstructor pageComponents={pageComponents.header} />
            </div>
        );
    }
}

class NavBar extends React.Component {
    render(){
        return(
            <div>
                <ComponentConstructor pageComponents={pageComponents.navbar} />
            </div>
        );
    }
}

class Body extends React.Component {
    render(){
        return(
            <div>
                <ComponentConstructor pageComponents={pageComponents.body} />
            </div>
        );
    }
}

class Footer extends React.Component {
    render(){
        return(
            <div>
            </div>
        );
    }
}

function tick() {


    ReactDOM.render(<Header />, document.getElementById('head'));
    ReactDOM.render(<NavBar />, document.getElementById('nav'));
    ReactDOM.render(<Body />, document.getElementById('bod'));
    ReactDOM.render(<Footer />, document.getElementById('foot'));
  }
  
setInterval(tick, 1000);






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

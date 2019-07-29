import React from 'react';
import ComponentJumbotron from './components/ComponentJumbotron';
import ComponentTable from './components/ComponentTable.js'
import ComponentNavBar from './components/ComponentNavBar.js'

function BuildComponent(props) {
    let ComponentReturn=[];
    for (var key in props.compObject) {
        var compVars=props.compObject[key];
        switch (key) {
            case "Jumbotron":
                ComponentReturn.push(<ComponentJumbotron CompVars={compVars} />)
                break;
            case "Table":
                ComponentReturn.push(<ComponentTable CompVars={compVars} />)
                break;
            case "NavBar":
                ComponentReturn.push(<ComponentNavBar CompVars={compVars} />)
                break;
            default:
                break;
        }
    }
    
    return ComponentReturn;
}

function UnpackComponents(props) {
    let AllComponents=[];
    for (var EachComponent in props.pageComponents) {
        AllComponents.push(<BuildComponent compObject={props.pageComponents[EachComponent]} />)
    }
    return AllComponents;
}

export default UnpackComponents;
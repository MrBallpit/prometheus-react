import React from 'react'
import Table from 'react-bootstrap/Table'

function BuildTableHead(props) {
  let listItems = props.elements.map((item, index) =>
    <th key={item + index}>
      {item}
    </th>
    );
  return (
    <thead>
      <tr>{listItems}</tr>
    </thead>
  );
}

function BuildTableBodySub(props) {
  let listItems = props.elements.map((item, index) =>
    <td key={item + index}>
      {item}
    </td>
    );
  return (
    <tr>{listItems}</tr>
  );
}

function BuildTableBody(props) {
  var fullList=[];
  var fullOut = [];
  var i;
  var j;
  for (i in props.elements) {
    var itemList=[];
    for (j in props.elements[i]) {
      itemList.push(props.elements[i][j])
    }
    fullList.push(itemList);
  }
  for (i in fullList) {
    fullOut.push(<BuildTableBodySub elements={fullList[i]} key={fullList[i] + fullList.index} />);
  }

  return (
    <tbody>
      {fullOut}
    </tbody>
  );
}

function BuildTable(props) {
  var inputHead = [];
  var inputBody = [];
  console.log(props.CompVars);
  for (var i in props.CompVars.items) {
    inputBody.push(props.CompVars.items[i]);
  }
  for (var k in props.CompVars.items[0]) {
    inputHead.push(k);
  }

  return (
    <Table striped bordered hover>
      <BuildTableHead elements={inputHead} />
      <BuildTableBody elements={inputBody} />
    </Table>
  );
}
export default BuildTable;
// @ts-check
import React = require('react')
import ReactDOM = require('react-dom')
const h = React.createElement
import { view } from "../views";
function render(){
  ReactDOM.render(
    view,
    document.getElementById('app')
  )
}
render()
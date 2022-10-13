import { render } from "@testing-library/react";
import { Component } from "react";

 export default class Nav extends Component(){
    render(){
    return(
        <div className="header">
        <a href="#default" class="logo">NPE BANK</a>
      </div>
    );
    }
}

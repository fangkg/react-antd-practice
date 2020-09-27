import React, { Component } from "react";

export default class Field extends Component {
    render() {
        const { children } = this.props;
        // return (
        //     <div>
        //         <h3>Field</h3>
        //     </div>
        // )
        return children;
    }
}
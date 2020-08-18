import React, { Component } from 'react'

export default class MyComponent extends Component {
    styles = {
        fontSize:20,
        fontWeight:"bold"
    }
    render() {
        return (
            <div>
                <p style={this.styles}>안뇽하세요</p>
                <p style={{fontSize:40,fontWeight:"bold"}}>안뇽안하세요</p>
                안녕요? ㅎ 
                <h1>인생시바꺼같네</h1>
                
            </div>
        )
    }
}

import React, { Component } from 'react'
import Square from './Square'

export default class Board extends Component {

    takeSquare = (input)=>{
        return <Square value={this.props.squares[input]} onClick={()=>this.props.onClick(input)}
    }
    render() {
        return (
            <div>
                <div className="border-row">
                    {this.takeSquare(0)}
                    {this.takeSquare(1)}
                    {this.takeSquare(2)}
                </div>
                 <div className="border-row">
                    {this.takeSquare(3)}
                    {this.takeSquare(4)}
                    {this.takeSquare(5)}
                </div>
                 <div className="border-row">
                    {this.takeSquare(6)}
                    {this.takeSquare(7)}
                    {this.takeSquare(8)}
                </div>
            </div>
        )
    }
}

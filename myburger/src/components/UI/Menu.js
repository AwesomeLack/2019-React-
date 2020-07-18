import React from 'react';
import './Style.css';

class Menu extends React.Component {
    render() {
        const LessClick={
            backgroundColor:'#d43200'
        }
        const LessUnclick={
            backgroundColor:'#7c7c7c'
        }
        return (
            <div>
                <table className="Table">
                    <tr>
                        <td className="td">{this.props.name}</td>
                        <td><button 
                        className="MenuBtn" onClick={this.props.sub} disabled={this.props.isNull} style={this.props.isNull?LessUnclick:LessClick}>Less</button></td>
                        <td><button 
                        className="MenuBtn" onClick={this.props.add}>More</button></td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default Menu;

import React from 'react';
import Menu from './Menu';
import './Style.css';


class Order extends React.Component {
    state = {
        garnishs: [
            { name: 'Bacon' },
            { name: 'Salad' },
            { name: 'Meat' },
            { name: 'Cheese' },
        ],
    }
    render() {
        return (
            <div>
                <p>Current&nbsp;Price:{this.props.price}$</p>
                {this.state.garnishs.map((menus, index) => {
                    return (
                        <Menu
                            name={menus.name}
                            index={index}
                            isNull={this.props.states[index] === 0}
                            sub={() => this.props.sub(index + 1)}
                            add={() => this.props.add(index + 1)} />
                    )
                })}
                <div >
                    <button className='CheckBtn' onClick={this.props.shown}>Check Order</button>
                </div>
            </div>
        )
    }

}
export default Order;
import React from 'react';
import './Burger/Burger.css';
import Nav from './UI/Navigation';
import Hamburger from './Burger/Hamburger';
import Information from './Information';


class Orders extends React.Component {
    state = {
        isshow: false,
    }

    cancel = () => {
        this.props.history.push(
            {
                pathname: '/'
            }
        )
    }
    confirm = () => {
        this.setState({
            isshow: true
        })
    }
    render() {
        let information = null;

        console.log(this.props.location.state.garnish);
        if (this.state.isshow)
            information = <Information garnish={this.props.location.state.garnish}
                tot={this.props.location.state.tot}
                mainindex={()=>{this.props.history.push({
                    pathname:'/'
                })}}
            />

        return (
            <div className="App">
                <div><Nav /></div>
                <p></p>
                <h1 className="H1">确认你的订单</h1>
                <div className="Burger">
                    <div className="OrderBurger">
                        <Hamburger states={this.props.location.state.hamburger} />
                    </div>
                </div>
                <div className='Buttons'>
                    <button className='ButtonCancel' onClick={this.cancel}>取消</button>
                    <button className='ButtonConfirm' onClick={this.confirm}>确认</button>
                </div>
                {information}
            </div>
        )
    }
}

export default Orders;
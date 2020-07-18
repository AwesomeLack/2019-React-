import React from 'react';
import './Burger/Burger.css';
import Nav from './UI/Navigation';
import Burger from './Burger/Burger';
import Order from './UI/order';
import Confirm from './Burger/Confirm';
import { connect } from 'react-redux';
import { addBurgerAction, supBurgerAction } from '../components/action/action';

class BurgerBuilder extends React.Component {
    state = {
        hamburger: this.props.hamburger,//汉堡配菜的顺序以及限制数量
        garnish: this.props.garnish,//分辨是哪个材料
        price: [4, 1, 3, 1],//价格
        str: [null, null, null, null, null],
        isshown: false,
    }

    shown = () => {//弹出对话框
        let str1, str2, str3, str4, str5;
        str1 = this.state.garnish[0];
        str2 = this.state.garnish[1];
        str3 = this.state.garnish[2];
        str4 = this.state.garnish[3];
        str5 = this.getCost();
        this.setState({
            str: [str1, str2, str3, str4, str5],
        });
        this.setState({
            isshown: true
        })
    }

    confirm = () => {//确定按钮
        this.setState({
            isshown: false
        })
        this.props.history.push(
            {
                pathname: '/Order',
                state:
                {
                    hamburger: this.state.hamburger,
                    garnish: this.state.garnish,
                    tot: this.getCost()
                }
            }
        )
    }

    cancle = () => {//取消按钮
        this.setState({
            isshown: false
        })
    }

    add = (index) => {//添加配菜
        this.props.add(index);
        this.forceUpdate();
    }


    getCost = () => {//计算价格
        let res = 2;
        for (let i = 0; i < 4; i++) {
            res += this.state.price[i] * this.state.garnish[i];
        }
        return res;
    }

    sub = (index) => {//减少配菜
        this.props.sub(index);
        this.forceUpdate();//刷新页面
    }

    /*测试confirm函数
    alert = () => {
      window.confirm('Order Check:');
    }*/

    render() {
        let confirm = null;
        if (this.state.isshown) {
            confirm = <Confirm str={this.state.str} confirm={this.confirm} cancle={this.cancle} />
        }
        return (
            <div className="App">
                <div>  <Nav /> </div>
                <div className="Burger">
                    <div className="P"> <Burger states={this.state.hamburger} /> </div>
                </div>
                <div>{confirm}</div>
                <div className="App-header">
                    <Order
                        add={this.add}
                        sub={this.sub}
                        states={this.state.garnish}
                        price={this.getCost()}
                        shown={this.shown} />
                </div>
            </div>
        );
    }
}
const mapStateProps = state => {
    console.log(state)
    return {
        hamburger: state.BurgerAdd.hamburger,//汉堡顺序
        garnish: state.BurgerAdd.garnish//每个材料
    };
}
const mapDisoatchToProps = (dispatch) => {
    return {
        add: (index) => dispatch(addBurgerAction(index)),
        sub: (index) => dispatch(supBurgerAction(index)),
    }
}
export default connect(mapStateProps, mapDisoatchToProps)(BurgerBuilder);
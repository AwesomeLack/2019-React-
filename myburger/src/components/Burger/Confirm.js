import React from 'react';
import './Confirm.css';

class Confirm extends React.Component {
    addressConfirm = {
        title: '订单确认',
        desc: [
            'Bacon: ',
            'Salad: ',
            'Meat:  ',
            'Cheese:',
            'Total Price:',
        ],
        leftBtn: {
            text: '确认'
        },
        rightBtn: {
            text: '取消'
        }
    };

    render() {
        return (
            <div className="wrap-dialog">
                <div className="dialog">
                    <div className="dialog-header">{this.addressConfirm.title}</div>
                    <div className="dialog-body">
                        <div>{this.addressConfirm.desc[0]}{this.props.str[0]}</div>
                        <div>{this.addressConfirm.desc[1]}{this.props.str[1]}</div>
                        <div>{this.addressConfirm.desc[2]}{this.props.str[2]}</div>
                        <div>{this.addressConfirm.desc[3]}{this.props.str[3]}</div>
                        <div>{this.addressConfirm.desc[4]}{this.props.str[4]}</div>
                    </div>
                    <div className="dialog-btn">
                        <button className="btn" onClick={this.props.confirm}>{this.addressConfirm.leftBtn.text}</button>
                        <button className="btn ml50" onClick={this.props.cancle}>{this.addressConfirm.rightBtn.text}</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Confirm;
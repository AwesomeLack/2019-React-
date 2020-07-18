import React from 'react';
import '../Burger/Confirm.css';

class Dialog extends React.Component {
    addressConfirm = {
        title: '订单确认',
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
                        <div>{this.props.str[0]}</div>
                        <div>{this.props.str[1]}</div>
                        <div>{this.props.str[2]}</div>
                        <div>{this.props.str[3]}</div>
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
export default Dialog;
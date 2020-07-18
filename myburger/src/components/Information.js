import React from 'react'
import './UI/Information.css'
import './App'
import Dialog from './UI/dialog'

class Information extends React.Component {

    state = {
        data:
        {
            MCH_ID: "41712239",
            ORDER_BACON: 2,
            ORDER_CHEESE: 2,
            ORDER_MEAT: 1,
            ORDER_SALAD: 3,
            TOTAL_FEE: 260,
            ORDER_REMARK: "   no",
            USER_ADDRESS: "",
            USER_NAME: "",
            USER_PHONE: "",
        },
        visible: false,
        phone: true,
        name: true,
        address: true,
        str: [null, null, null, null],
    }
    showModal = () => {
        let ph = document.getElementById("USER_PHONE").value;
        let flat = true;
        var phone_reg = /^1[34578]\d{9}$/;
        var telphone_reg = /^((0\d{2,4})-)(\d{7,8})(-(\d{3,}))?$/;
        if (phone_reg.test(ph) || telphone_reg.test(ph)) {
            this.setState({
                phone: true
            })
        }
        else {

            flat = false;
            this.setState({
                phone: false
            })
        }

        let na = document.getElementById("USER_NAME").value;
        var name_reg = /[^\\u0000-\\u00FF]/;
        if (name_reg.test(na)) {
            this.setState({
                name: true
            })
        }
        else {

            flat = false;
            this.setState({
                name: false
            })
        }

        let ad = document.getElementById("USER_ADDRESS").value;
        var ad_reg = /\S/;
        if (ad_reg.test(ad)) {
            this.setState({
                address: true
            })
        }
        else {

            flat = false;
            this.setState({
                address: false
            })
        }

        if (flat === true) {
            this.setState(
                {
                    data:
                    {
                        MCH_ID: "41712239",
                        ORDER_BACON: this.props.garnish[0],
                        ORDER_CHEESE: this.props.garnish[1],
                        ORDER_MEAT: this.props.garnish[2],
                        ORDER_SALAD: this.props.garnish[3],
                        TOTAL_FEE: this.props.tot,
                        ORDER_REMARK: document.getElementById("ORDER_REMARK").value,
                        USER_ADDRESS: document.getElementById("USER_ADDRESS").value,
                        USER_NAME: document.getElementById("USER_NAME").value,
                        USER_PHONE: document.getElementById("USER_PHONE").value
                    }
                });
            let str1, str2, str3, str4;
            str1 = "Name : " + document.getElementById("USER_NAME").value;
            str2 = "Address : " + document.getElementById("USER_ADDRESS").value;
            str3 = "Phone ：" + document.getElementById("USER_PHONE").value;
            str4 = "Remark : " + document.getElementById("ORDER_REMARK").value
            this.setState({
                str: [str1, str2, str3, str4],
            });
            this.setState({
                visible: true,
            });
        }
    };

    getInfm = () => {
        let AV = global.constants.AV
        let TestObject = AV.Object.extend('BurgerOrders');
        let testObject = new TestObject();
        testObject.set('Address', document.getElementById("USER_ADDRESS").value);
        testObject.set('Bacon', this.props.garnish[0]);
        testObject.set('Cheese', this.props.garnish[1]);
        testObject.set('Meat', this.props.garnish[2]);
        testObject.set('Salad', this.props.garnish[3]);
        testObject.set('Total', this.props.tot);
        testObject.set('Name', document.getElementById("USER_NAME").value);
        testObject.set('OrderId', '11111');
        testObject.set('Phone', document.getElementById("USER_PHONE").value);
        testObject.set('Remark', document.getElementById("ORDER_REMARK").value);
        testObject.save().then(function (testObject) {
            console.log('保存成功。')
        });
        this.props.mainindex();//用于返回主页。
    }

    cancle = () => {//取消按钮
        this.setState({
            visible: false
        })
    }

    render() {
        let phone = <div>&nbsp;</div>;
        if (this.state.phone === false)
            phone = <div>电话不符合要求</div>

        let name = <div>&nbsp;</div>;
        if (this.state.name === false)
            name = <div>名字需要为中文</div>

        let address = <div>&nbsp;</div>;
        if (this.state.address === false)
            address = <div>地址不能为空</div>

        let dialog = null;
        if (this.state.visible) {
            dialog = <Dialog str={this.state.str} confirm={this.getInfm} cancle={this.cancle} />
        }

        return (
            <div>
                <div className='information'>
                    <h3>请输入你的联系信息</h3>
                    <div><input placeholder='Your Name' id="USER_NAME"></input></div><div className="check">{name}</div>
                    <div><input placeholder='Address' id="USER_ADDRESS"></input></div><div className="check">{address}</div>
                    <div><input placeholder="Order remark" id="ORDER_REMARK"></input></div><div className="check">&nbsp;</div>
                    <div><input placeholder='Phone' id="USER_PHONE"></input></div><div className="check">{phone}</div>
                    <button onClick={this.showModal}>下单</button>
                </div>
                <div>{dialog}</div>
            </div>
        )
    }
}

export default Information
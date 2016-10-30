/**
 * Created by pie on 2016-10-30.
 */
import React, {Component} from 'react';
export default class AccountBar extends  Component{
    render(){
        return (
            <span className="account"><span className="register">注册</span> / <span className="login">登录</span></span>
        )
    }
}
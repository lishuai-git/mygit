import React from 'react'
import './css/collect.css'
class Collect extends React.Component{
    render(){
        console.log(this.props.history.location.state.img)
        console.log(this.props.history.location.state.title)
        return (
            <div>
                {/*top*/}
                <div className="topimg">
                    <img src={require('../images/top_01.jpg')} alt="" />
                </div>
                {/*收藏*/}
                <div className="coll_nav">
                    <img src={require('../images/nav_04.jpg')} onClick={this.ret.bind(this)} alt=""/>
                    <span>{document.getElementsByClassName('cont').length}条</span>
                    <span>收藏</span>
                </div>
                {/*内容*/}
                <div className="cont">
                    <span className="character">{this.props.history.location.state.title}</span>
                    <img src={this.props.history.location.state.img} alt=""/>
                </div>
                {/*<div className="cont">*/}
                    {/*<span className="character">{this.props.history.location.state.title}</span>*/}
                    {/*<img src={require('../images/f_weixin_03.jpg')} alt=""/>*/}
                {/*</div>*/}
            </div>
        )
    }
    ret(){
        this.props.history.go(-1)
    }
}

export default Collect
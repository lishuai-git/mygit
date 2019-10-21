import React from 'react'
import './css/xiangqing.css'
import './css/news_qa.auto.css'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
class Xiang extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:'',
            img:'',
            title:''
        }
    }
    render(){
        //console.log(this.props.history.location.state.sid)
        return(
            <div>
                {/*top*/}
                <div className="topimg">
                    <img src={require('../images/top_01.jpg')} alt="" />
                </div>
                {/*nav*/}
                <div className="x_nav">
                    <span className="retu" onClick={this.retu.bind(this)}><img src={require('../images/x_retu_03.jpg')} alt=""/></span>
                    <span className="retu_one" onClick={this.show.bind(this)}><img src={require('../images/x_fenx_03.jpg')} alt=""/></span>
                    <span className="retu" onClick={this.shouc.bind(this,this.state.img,this.state.title)}><img ref="huan" src={require('../images/x_shouc_03.jpg')} alt=""/></span>
                    <NavLink to="/pinglun">
                        <span className="retu">
                        <img src={require('../images/x_pingl_05.jpg')} alt=""/>
                    </span>
                    </NavLink>
                    <span className="zihao">6</span>
                    <span className="retu"><img src={require('../images/x-dianz_03.jpg')} alt=""/></span>
                    <span className="zihao">25</span>
                </div>
                {/*banner*/}
                <div className="x_banner">
                    <img src={this.state.img} alt=""/>
                    <span>{this.state.title}</span>
                </div>
                <div id="main">
                    <div dangerouslySetInnerHTML={{__html: this.state.data}}/>
                </div>
                {/*分享*/}
                <div className="show" ref='xian'>
                    <p>分享</p>
                    <div className="con">
                        <div>
                            <img src={require('../images/f_weibo_03.jpg')} alt=""/>
                            <span>新浪微博</span>
                        </div>
                        <div>
                            <img src={require('../images/f_weixin_03.jpg')} alt=""/>
                            <span>微信</span>
                        </div>
                        <div>
                            <img src={require('../images/f_pengy_03.jpg')} alt=""/>
                            <span>微信朋友圈</span>
                        </div>
                        <div>
                            <img src={require('../images/f_yinx_03.jpg')} alt=""/>
                            <span>印象笔记</span>
                        </div>
                        <div>
                            <img src={require('../images/f_youd_03.jpg')} alt=""/>
                            <span>有道云笔记</span>
                        </div>
                        <div>
                            <img src={require('../images/f_qq_03.jpg')} alt=""/>
                                <span>qq</span>
                        </div>
                        <div>
                            <img src={require('../images/f_gengd_03.jpg')} alt=""/>
                            <span>更多分享</span>
                        </div>

                    </div>

                </div>
                <div className="bodd" ref="yin" onClick={this.xiao.bind(this)}></div>
            </div>
        )
    }
    retu(){
         //this.props.history.go(-1)
        this.props.history.push({
            pathname: "/index",

        })
    }
    show(){
        this.refs.xian.style.display='block'
        this.refs.yin.style.display='block'
    }
    xiao(){
        this.refs.xian.style.display='none'
        this.refs.yin.style.display='none'
    }
    shouc(i,d){
        alert('收藏成功');
        this.refs.huan.src=require('../images/x_shouc_04.jpg')
        // localStorage.setItem(1,)
        this.props.history.push({
            pathname:'/collect',
            state:{
                img:i,
                title:d
            }

        })

    }
    componentWillMount(){
        axios.get('/api/4/news/'+this.props.history.location.state.sid).then((res)=>{
            console.log(res);
            this.setState({
                data:res.data.body,
                img:res.data.image,
                title:res.data.title
            })
            document.getElementById('main').innerHTML = res.data.body
        })

    }

}
export default Xiang
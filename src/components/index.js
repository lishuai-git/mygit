import React from 'react'
import './css/index.css'
import { Carousel, WingBlank } from 'antd-mobile';
import {NavLink} from 'react-router-dom'
import axios from 'axios'
class Index extends React.Component{
    state = {
        //`data:[],
        imgHeight: 176,
        title:[],
        banarr:[],
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                 //data: [  'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
                banarr:this.state.banarr
            });
        }, 100);
    }
    render (){

        return (
            <div>
                {/*top*/}
                <div className="topimg">
                    <img src={require('../images/top_01.jpg')} alt="" />
                </div>
                {/*nav*/}
                <div className="nav">
                    <img className="nav_img_one" onClick={this.zuoce.bind(this)} src={require('../images/nav_04.jpg')} alt=""/>
                    <span className="index">首页</span>
                    <img className="nav_img_two" src={require('../images/ling_03.jpg')} alt=""/>
                    <img className="nav_img_three" src={require('../images/sandian_03.jpg')} alt=""/>
                </div>
                {/*左侧导航*/}
                <div className="zuoce" ref="xianshi">
                    <div className="top">
                        <div className="top_one">
                            <img src={require('../images/x_bann_02.jpg')} alt=""/>
                            <div className="name">李帅</div>
                        </div>
                        <div className="top_two">
                            <div className="two_left" >
                                <NavLink to="/collect">
                                    <img src={require('../images/x_shouc_03.jpg')} alt=""/>
                                    <span>我的收藏</span>
                                </NavLink>
                            </div>
                            <div className="two_right">
                                <img src={require('../images/zuo_xiaz_03.jpg')} alt=""/>
                                <span>离线下载</span>
                            </div>
                        </div>
                    </div>
                    <div className="shouye" onClick={this.shouye.bind(this)}>
                        <img src={require('../images/top_shouye_07.jpg')} alt=""/>
                        <span>首页</span>
                    </div>
                </div>
                <div className="ying" ref="ying" onClick={this.ying.bind(this)}></div>
                {/*banner*/}
                <div className="bigban">
                    <Carousel
                        autoplay={false}
                        infinite
                        // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        // afterChange={index => console.log('slide to', index)}
                    >
                        {this.state.banarr.map((val,ind) => (
                            <a
                                key={ind}
                                href="#"
                                style={{display: 'inline-block', width: '100%', height: this.state.imgHeight}}
                            >
                                <img className="ban_img_imp"
                                    key={ind}
                                    src={val.image}
                                    alt=""
                                    style={{width: '100%', verticalAlign: 'top'}}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({imgHeight: 'auto'});
                                    }}
                                />
                                <p className="ban_wenzi">{val.title}</p>

                            </a>

                        ))}
                    </Carousel>
                </div>
                {/*content*/}
                <div>
                    <h2 className="todaynews">今日新闻</h2>
                    <ul>
                        {
                            this.state.title.map((val,ind)=>{
                                return <li onClick={this.xiangq.bind(this,val.id)} key={ind}>
                                    {/*<NavLink to="/xiang">*/}
                                        <div className="cont">
                                            <span className="character" key={ind}>{val.title}</span>
                                            <img src={val.images} alt=""/>
                                        </div>
                                    {/*</NavLink>*/}
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
    zuoce(){
        this.refs.xianshi.style.display='block';
        this.refs.ying.style.display='block'
    }
    ying(){
        this.refs.ying.style.display='none';
        this.refs.xianshi.style.display='none';
    }
    shouye(){
        this.refs.ying.style.display='none';
        this.refs.xianshi.style.display='none';
    }
    xiangq(i){
        this.props.history.push({
             pathname: "/xiang",
            state: {
                sid: i
            }
        })
    }
    componentWillMount(){
        axios.get('/api/4/news/latest').then((res)=>{
            console.log(res.data)
            this.setState({
                title:res.data.stories,
                banarr:res.data.top_stories,

            })
        })

    }
}
export default Index
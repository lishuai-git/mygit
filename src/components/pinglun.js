import React from 'react'
import './css/pinglun.css'
class Pinglun extends React.Component{
    render(){
        return (
            <div>
                {/*top*/}
                <div className="topimg">
                    <img src={require('../images/top_01.jpg')} alt="" />
                </div>
                <div className="topcoll">
                    <span className="p_retu" onClick={this.retu.bind(this)}>
                        <img src={require('../images/x_retu_03.jpg')} alt=""/>
                    </span>
                    <span className="p_wenz">39</span>
                    <span className="p_wenz">条点评</span>
                    <img className="p_bianji" src={require('../images/p_bianji_03.jpg')} alt=""/>
                </div>
                {/*点评数量*/}
                <div className="p_shul">
                    <span className="p_wenz">39</span>
                    <span className="p_wenz">条点评</span>
                </div>
                {/*点评内容*/}
                <div className="p_collent">
                    <div className="p_coll_left">
                        <img src={require('../images/p_touxiang_07.jpg')} alt=""/>
                    </div>
                    <div className="p_coll_right">
                        <strong>穆森阿</strong>
                        <p>矫情</p>
                        <span>01-18 18:56</span>
                    </div>
                </div>
                <div className="p_collent">
                    <div className="p_coll_left">
                        <img src={require('../images/p_touxiang_07.jpg')} alt=""/>
                    </div>
                    <div className="p_coll_right">
                        <strong>穆森阿</strong>
                        <p>矫情</p>
                        <span>01-18 18:56</span>
                    </div>
                </div>
            </div>
        )
    }
    retu(){
        this.props.history.go(-1)
    }
}

export default Pinglun
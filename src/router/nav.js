import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Xiang from '../components/xiangqing'
// import App from '../App'
const Router=()=>{
    const arr = [
        {
            path:'/xiang',
            component:Xiang,
        },
        {
            path:'*',
            redirect:'/index' ,
        },
    ]

        return (
            <div>
                <Switch>
                    {
                        arr.map((val,ind)=>{
                            if(val.path==='*'){
                                return <Route key={ind} component={val.redirect} />
                            }else{
                                return <Route key={ind}  path={val.path} component={val.component}/>
                            }
                        })
                    }
                    <Route path="/xiang" component={Xiang} />
                </Switch>
            </div>
        )


}

export default Router
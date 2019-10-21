
import Xiang from '../components/xiangqing'
import Index from '../components/index'
import Collect from '../components/collect'
import Pinglun from '../components/pinglun'
const qq = [
    {
        path:'/xiang',
        component:Xiang,
    },
    {
        path:'/index',
        component:Index,
    },
    {
      path:'/collect',
      component:Collect
    },
    {
        path:'/pinglun',
        component:Pinglun,
    },
    {
        path:'*',
        redirect:'/index'
    }
]
export default qq
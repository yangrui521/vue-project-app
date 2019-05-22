import Home from '../pages/Home/Home'
import Sort from '../pages/Sort/Sort'
import Article from '../pages/Article/Article'
import Personal from '../pages/Personal/Personal'
import ShopCard from '../pages/ShopCard/ShopCard'
import Search from '../pages/Home/Search/Search'
import PhoneLogin from '../pages/Personal/phoneLogin/phoneLogin'
import EmailLogin from '../pages/Personal/EmailLogin/EmailLogin'
import FaXian from '../pages/Article/faxian/faxian'
import ZhenXuan from '../pages/Article/zhenxuan/zhenxuan'


export default [
  {
    path:'/home',
    component:Home,
    meta:{

    }
  },
  {
    path:'/sort',
    component:Sort
  },
  {
    path:'/article',
    component:Article,
    children: [
      {
        path:'/article/faxian',
        component:FaXian,
      },
      {
        path:'/article/zhenxuan',
        component:ZhenXuan,
      },
      {
        path:'',
        redirect: '/article/faxian'
      },
    ]
  },
  {
    path:'/personal',
    component:Personal,
    children:[
      {
        path:'/personal/phoneLogin',
        component:PhoneLogin,
      },
      {
        path:'/personal/EmailLogin',
        component:EmailLogin,
      }
    ]
  },
  {
    path:'/shopcard',
    component:ShopCard
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'',
    redirect:'/home'
  }
]

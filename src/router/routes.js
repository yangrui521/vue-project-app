import Home from '../pages/Home/Home'
import Sort from '../pages/Sort/Sort'
import Article from '../pages/Article/Article'
import Personal from '../pages/Personal/Personal'
import ShopCard from '../pages/ShopCard/ShopCard'
import Search from '../pages/Home/Search/Search'
import PhoneLogin from '../pages/Personal/phoneLogin/phoneLogin'
import EmailLogin from '../pages/Personal/EmailLogin/EmailLogin'



export default [
  {
    path:'/home',
    component:Home
  },
  {
    path:'/sort',
    component:Sort
  },
  {
    path:'/article',
    component:Article
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

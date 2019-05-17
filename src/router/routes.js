import Home from '../pages/Home/Home'
import Sort from '../pages/Sort/Sort'
import Article from '../pages/Article/Article'
import Personal from '../pages/Personal/Personal'
import ShopCard from '../pages/ShopCard/ShopCard'
import Search from '../pages/Home/Search/Search'




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
    component:Personal
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

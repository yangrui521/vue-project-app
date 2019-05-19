import Mock from 'mockjs'
import shouye from './shouye.json'
import fenlei from './fenlei.json'
import list from './list.json'

// 1. 定义 模拟数据 路由接口接口 - ajax("/mock/home")  会得到 {code:0, data: homeData}
Mock.mock('/home', {
  code: 0,
  data: shouye
});

Mock.mock('/fenlei', {
  code: 0,
  data: fenlei
});

Mock.mock('/list', {
  code: 0,
  data: list
});

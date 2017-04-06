const _overlay=[
{ "id":1,
   "title":"菜单",
   "className":"fa fa-bars"
},
{ "id":2,
   "title":"收藏",
   "className":"fa fa-heart"
},
{
  "id":3,
  "title":"购物",
  "className":"fa fa-cart-plus"
},
{
  "id":4,
  "title":"个人中心",
  "className":"fa fa-address-book"
},
{
  "id":5,
  "title":"设置",
  "className":"fa fa-gear"
},
{
  "id":6,
  "title":"帮助",
  "className":"fa fa-question-circle"
}
];


export default{
  getOverlays(){
    return _overlay;
  }
}

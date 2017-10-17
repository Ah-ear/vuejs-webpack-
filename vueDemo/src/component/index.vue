<template>
  <div class="view">
    <header class="header">
      <div class="headerWrap">
        <div class="searchContent">
          <span><i class="el-icon-search" style="margin-right:5px;"></i>寻找宝贝店铺</span>
        </div>
      </div>
    </header>
    <section class="container">
      <div class="banner">
        <el-carousel class="bannerWrap">
          <el-carousel-item v-for="item in bannerImg" :key="item.id">
            <img :src="item.url" />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="sortsList">
        <ul class="flex">
          <li class="sortLi" v-for="item in sortsLists" :key="item.id">
            <img class="sortImg" :src="item.url" />
            <p class="name txt-center mb20">{{item.name}}</p>
          </li>
        </ul>
      </div>
      <div class="topLine">
        <span class="topLeft"></span>
      </div>
    </section>
    <footer class="footer">
      <ul class="flex">
          <li class="sortLi txt-center" v-for="item in footerLists" :key="item.id">
            <i :class="['el-icon','fa', item.url]"></i>
            <p class="name txt-center">{{item.name}}</p>
          </li>
        </ul>
    </footer>
    <!-- <router-view></router-view> -->
  </div>
  
</template>
<script>
export default {
  data(){
    return {
      bannerImg:[
        {
          id:1,
          url:'dist/assets/img/banner1.jpg'
        },{
          id:2,
          url:'dist/assets/img/banner2.jpg'
        }
      ],
      sortsLists:[
        {id:1,url:'dist/assets/img/1.png',name:'天猫'},
        {id:2,url:'dist/assets/img/2.png',name:'聚划算'},
        {id:3,url:'dist/assets/img/3.png',name:'天猫国际'},
        {id:4,url:'dist/assets/img/4.png',name:'外卖'},
        {id:5,url:'dist/assets/img/5.png',name:'天猫超市'},
        {id:6,url:'dist/assets/img/6.png',name:'充值中心'},
        {id:7,url:'dist/assets/img/7.png',name:'飞猪旅行'},
        {id:8,url:'dist/assets/img/8.png',name:'领金币'},
        {id:9,url:'dist/assets/img/9.png',name:'拍卖'},
        {id:10,url:'dist/assets/img/10.png',name:'分类'},
      ],
      footerLists:[
        {id:1,url:'fa-home',name:'首页'},
        {id:1,url:'fa-truck',name:'物流'},
        {id:1,url:'fa-shopping-basket',name:'购物车'},
        {id:1,url:'fa-user-o',name:'我的淘宝'},
        {id:1,url:'el-icon-more',name:'更多'}
      ],
    }
  },
  methods:{
    changColor(){
    }
  }
}
</script>
<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 28px;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .bannerWrap{
    height:3.125rem;
  }
  .el-carousel__container{
    height:100%;
  }
  .el-carousel__container img{
    height:100%;
  }
  .sortsList{
    padding:20px;
    background-color:#fff;
  }
  .sortImg{
    width:1.6rem;
  }
  .name{
    font-size:24px;
  }
  .sortLi{
    flex:1;
    text-align:center;
    min-width: 1.625rem;
  }
  .footer{
    padding:10px 0;
    font-size:20px;
    color:#5D656B !important;
    border-top:1px solid #E7E7E7;
    border-bottom:1px solid #F8F8F8;
  }
  .footer .el-icon{
    display: block;
    font-size:40px;
  }
  .footer .name{
    font-size:20px;
  }
</style>



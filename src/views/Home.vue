<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->

      <div class="productlist clearfix">
      <ul>
        <li v-for="pitem in list" :key="pitem.lid">
          <router-link :to="{path:'/productdetail',query: {lid:pitem.lid}}">
            <div class="pimg">
              <img :src="pitem.md" />
            </div>
            <div class="pinfo">
              <div class="pname">{{pitem.lname}}</div>
              <div class="ptag" v-if="pitem.tag !==''">{{pitem.tag}}</div>
              <div class="recommend_reason">{{pitem.subtitle}}</div>
            </div>
            <div class="pprice">￥{{pitem.price}}</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      list: []
    }
  },

  methods: {
    getData() {
      this.$axiosPostForm({
        method: "post",
        url: "/productlist",
        data: {
          id: "100001",
          name: "xxxxxx"
        }
      }).then(result=> {
        console.log(result.data);
        this.list = result.data;
        console.log(this.list);
      });
    }
  },
  created() {
    this.getData();
  }
};
</script>
<style lang="scss">

// 商品列表
.productlist {
  width: 34.5rem;
   margin: 0 auto;
   overflow: hidden;
  ul {
    float: left;
     width: 100%;

    li {
     
      width: 48%;
    padding: .5rem 0;
      font-size: 1.4rem;
      text-align: left;
       &:nth-of-type(odd){
        float: left;
        padding-right:.6rem;
      }
       &:nth-of-type(even){
        float: right;
          padding-left:.6rem;
      }
      a {
        color: #000;
      }
     
    }
  }

  .pimg {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .pinfo {
    height: 9rem;
  }
  .ptag {
    padding: 0 0.2rem;
    margin-top: 0.3rem;
    background: #cca976;
    color: #fff;
    font-size: 1.2rem;
    line-height: 1.8rem;
    height: 1.8rem;
    text-align: center;
    overflow: hidden;
    display: -webkit-box; //将对象作为弹性伸缩盒子模型显示。
    -webkit-box-orient: vertical; //从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
    -webkit-line-clamp: 1; //这个属性不是css的规范属性，需要组合上面两个属性，表示显示的行数。
  }
  .recommend_reason,
  .pname {
    padding: 0 0.2rem;
    margin-top: 0.3rem;
    color: #9c9c9c;
    font-size: 1.2rem;
    height: 3.2rem;
    line-height: 1.6rem;
    overflow: hidden;
    display: -webkit-box; //将对象作为弹性伸缩盒子模型显示。
    -webkit-box-orient: vertical; //从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）
    -webkit-line-clamp: 2; //这个属性不是css的规范属性，需要组合上面两个属性，表示显示的行数。
  }
  .pname {
    color: #000;
    font-size: 1.4rem;
  }
}
  
</style>

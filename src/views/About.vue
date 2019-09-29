<template>
  <div class="about">
    <h1>This is an about page</h1>

      <!--轮播图-->
    <mt-swipe id="banner" :auto="10000">
      <mt-swipe-item v-for="item in banner" :key="item.id">
        <router-link to>
          <img :src="item.img" />
        </router-link>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      banner: []
    };
  },
  methods: {
    getData() {
      this.$axiosPostForm({
        method: "post",
        url: "/banner",
        data: {
          id: "100001",
          name: "xxxxxx"
        }
      }).then(result => {
        console.log(result.data);
        this.banner = result.data;
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
#banner {
   
  margin: 4rem auto 0;
  width: 34.5rem;

  height: 43rem;

  img {
    width:100%;
    //  height: 100%;
 
  }
  .mint-swipe-indicator.is-active {
    background: pink;
    opacity: 1;
  }
}
  
</style>

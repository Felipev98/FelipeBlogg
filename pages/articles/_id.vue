<template>
  <div>
    <div class=" md:container md:mx-auto ">
       <div v-if="article.image" id="banner" :data-src="api_url + article.image.url" >
      <img :src="api_url + article.image.url" class="md:w-1/2 m-auto mt-8 px-4 md:px-0 w-full" alt="">
        <h1 class="text-center text-5xl	 md:text-6xl	font-bold text-article-title	">{{ article.title }}</h1>
      </div>
      <div >
        <div class="pb-20	 text-center px-4  md:px-0 md:text-left  md:w-3/5	md:m-auto">
            <div class="mt-6 text-content-article mb-14" v-if="article.content" id="editor" v-html="$md.render(article.content)">
            </div>
        </div>
      </div>
    </div>
      <Footer />
  </div>
</template>

<script>
import articleQuery  from '../../apollo/queries/articles/Article'
import Footer from '../../components/Footer.vue'

export default {
  data() {
    return {
      article: {},
      api_url: process.env.strapiBaseUri
    }
  },
  components:{
    Footer
  },
  apollo: {
    article: {
      prefetch: true,
      query: articleQuery,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  }
}
</script>
<style>
p{
  margin-top:1rem;
}
</style>
<template>
  <div>
    <div class="container mx-auto">
       <div v-if="article.image" id="banner" :data-src="api_url + article.image.url" uk-img>
      <img :src="api_url + article.image.url" class="w-1/2 m-auto mt-8" alt="">
        <h1 class="text-center text-6xl	font-bold text-article-title	">{{ article.title }}</h1>
      </div>
      <div >
        <div class="uk-container uk-container-small">
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
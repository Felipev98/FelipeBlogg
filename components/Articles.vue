<template>
  <div>
    <div>
            <h2 class="my-8	text-center	text-5xl font-bold">Últimos Post</h2>
          <div class="flex flex-row justify-around">
          <router-link v-for="article in articles" :to="{ name: 'articles-id', params: {id: article.id} }" :key="article.id">
                  <img :src="api_url + article.image.url" style="width:4rem;" alt="">
                  <span>{{article.category.name}}</span>
                   <p >{{article.title }}</p>
                   <p>{{article.content}}</p>
         </router-link>
          </div>
        <div>
        </div>
    </div>

  </div>
</template>

<script>
import articlesQuery  from '../apollo/queries/articles/Articles'
export default {
  data() {
    return {
      api_url: process.env.strapiBaseUri
    }
  },
  props: {
    articles:Array
  },
  computed: {
    // leftArticlesCount(){
    //   return Math.ceil(this.articles.length / 5)
    // },
    // leftArticles(){
    //   return this.articles.slice(0, this.leftArticlesCount)
    // },
    // rightArticles(){
    //   return this.articles.slice(this.leftArticlesCount, this.articles.length)
    // }
  }
}
</script>
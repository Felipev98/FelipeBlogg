<template>
  <div>
    <div>
        <div>
          <router-link v-for="article in articles" :to="{ name: 'articles-id', params: {id: article.id} }" :key="article.id">
            <div>
                 <!-- <div v-if="article.image" >
                     <img :src="api_url + article.image.url" alt="" height="100">
                 </div> -->
                 <div>
                   <!-- <p  v-if="article.category" >{{ article.category.name }}</p> -->
                   <p >{{article.title }}</p>
                   <p>{{article.content}}</p>
                   <img :src="api_url + article.image.url" style="width:4rem;" alt="">
                   <span>{{article.category.name}}</span>
                   <!-- <p>{{article.attributes.content}}</p>
                   <p>{{article.attributes.image.url}}</p> -->
                 </div>
             </div>
         </router-link>

        </div>
        <div>
          <div >
            <!-- <router-link v-for="article in rightArticles" :to="{ name: 'articles-id', params: {id: article.id} }" :key="article.id">
              <div>
                   <div v-if="article.image">
                       <img :src="api_url + article.image.url" alt="" height="100">
                   </div>
                   <div >
                     <p  v-if="article.category">{{ article.category.name }}</p>
                     <p >{{ article.title }}</p>
                   </div>
               </div>
             </router-link> -->
          </div>

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
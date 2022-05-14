<template>
    <div>
          <div class="flex flex-row justify-around flex-wrap	">
          <router-link class=" w-3/5	md:w-26% shadow-xl mt-4" v-for="article in articles" :to="{ name: 'articles-id', params: {id: article.id} }" :key="article.id">
                  <img class="mb-4	" :src="api_url + article.image.url"   alt="">
                  <div class="p-4">
                  <span class="p-0.4 bg-red-800 text-xs	 md:text-sm		text-white">{{article.category.name}}</span>
                   <p class="mt-4 md:text-2xl text-xl		 font-bold" >{{article.title }}</p>
                  </div>
         </router-link>
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

}
</script>
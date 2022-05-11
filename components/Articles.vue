<template>
    <div class="h-98	">
          <div class="flex flex-row justify-around">
          <router-link class="w-1/4 shadow-xl	" v-for="article in articles" :to="{ name: 'articles-id', params: {id: article.id} }" :key="article.id">
                  <img class="mb-4	" :src="api_url + article.image.url"   alt="">
                  <div class="p-4">
                  <span class="p-0.4 bg-red-800 text-sm		text-white">{{article.category.name}}</span>
                   <p class="mt-4 text-2xl	 font-bold" >{{article.title }}</p>
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
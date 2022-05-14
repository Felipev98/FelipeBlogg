<!-- Please remove this file from your project -->
<template>
<div>   
  <div>
    <h2 class="my-8 text-3xl 	text-center	md:text-5xl font-bold	">Categories</h2>
    <div class="flex flex-row justify-around flex-wrap">
      <div class="md:w-2/12 bg-red-800 w-80	 p-3 flex justify-center mt-4 md:mt-0	  items-center"  v-for="category in categories" :key="category.id">
            <router-link class="w-full" :to="{ name: 'categories-id', params: { id: category.id }}" tag="a">
            <p class="text-center text-white">{{category.name}}</p>
            </router-link> 
            </div>
    </div>
  </div>    
    <div >
    <nuxt />
</div>
</div>

</template>
<script>
import categories from '../apollo/queries/categories/categories'
export default {
  name: 'NuxtTutorial',
  data() {
    return {
      categories: []
    }
  },
  apollo: {
    categories: {
      prefetch: true,
      query:categories,
  },
  },

}
</script>

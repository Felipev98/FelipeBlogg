<!-- Please remove this file from your project -->
<template>
<div>   
  <div>
    <h2 class="my-8	text-center	text-5xl font-bold	">Categories</h2>
    <div class="flex flex-row justify-around	">
      <div class="w-2/12 bg-red-800	 p-3 flex justify-center	  items-center"  v-for="category in categories" :key="category.id">
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

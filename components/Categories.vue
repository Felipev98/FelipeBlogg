<!-- Please remove this file from your project -->
<template>
<div>
  
        <nav class="uk-navbar-container" uk-navbar>
              <li >

              </li>
              <div v-for="category in categories" :key="category.id">
               <router-link :to="{ name: 'categories-id', params: { id: category.id }}" tag="a">
                <p>{{category.name}}</p>
                </router-link> 

              </div>
    </nav>
    <div >
        <div >
            <button></button>
            <div >
                <div>
                    <h1>Strapi blog</h1>
                    <div >
                        <ul>
                          <!-- <li v-for="category in categories" :key="category.id">
                            <router-link class="uk-modal-close" :to="{ name: 'categories-id', params: { id: category.id }}" tag="a">{{ category.name }}
                            </router-link>
                          </li> -->
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <nuxt />
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

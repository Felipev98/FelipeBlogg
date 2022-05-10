<template>
<div>
   <div class="bg-hero-final h-screen bg-cover bg-center flex justify-center items-center flex-col	">
    <h1 class="text-5xl	text-white font-bold">{{Bienvenida}}</h1>
  <Button Entradas="Ver Entradas"/>
  </div>
  <div class="container mx-auto">
  <Categories />
  <Articles :articles="articles"/>
  </div>
</div>

</template>

<script>
import Articles from '../components/Articles.vue'
import Button from '../components/Button.vue'
import articlesQuery from '../apollo/queries/articles/Articles'
export default {
  name: 'IndexPage',
  data() {
    return {
      articles: [],
      Bienvenida: "Bienvenido a mi blog"
    }
  },
  components:{
Articles,Button
  },
    apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  }
}
</script>
<style>
h1{
font-family: 'Poppins', sans-serif;
}
</style>

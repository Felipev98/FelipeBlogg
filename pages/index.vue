<template>
<div>
   <div class="bg-hero-final h-screen bg-cover bg-center flex justify-center items-center flex-col	">
    <h1 class="  text-3xl	  md:text-5xl	text-white font-bold">{{Bienvenida}}</h1>
  <Button Entradas="Ver Entradas"/>
  </div>
  <div class="container mx-auto">
  <Categories />
  <h2 class="my-8	text-center text-3xl	md:text-5xl  font-bold">Últimos Post</h2>
  <Articles :articles="articles"/>
    <div class="text-center my-12	">
        <Button Entradas="Ver más"/>
        </div>
  </div>
  <Footer />
</div>

</template>

<script>
import Articles from '../components/Articles.vue'
import Footer from '../components/Footer.vue'
import articlesQuery from '../apollo/queries/articles/Articles'
import Button from '../components/Button.vue'

export default {
  name: 'IndexPage',
  data() {
    return {
      articles: [],
      Bienvenida: "Bienvenido a mi blog"
    }
  },
  components:{
Articles,Button,Footer,Button
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

</style>

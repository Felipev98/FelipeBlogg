<template>
  <div>
    <client-only>
    <div>
      <div class="container mx-auto">
      <h2 class="md:text-6xl text-4xl	 my-8 text-article-title font-bold  text-center">{{All}}</h2>
      <div class="mb-32	">
        <Articles :articles="articles"></Articles>
      </div>
      </div>
    </div>
  </client-only>
  <Footer/>
  </div>
</template>

<script>
import articlesQuery from '../../apollo/queries/articles/AllArticles'
import Articles from '../../components/Articles'
import Footer from '../../components/Footer'
export default {
  data() {
    return {
      start:0,
      amoutofArticles:3,
      All: "Todos los Articulos",
      loading:0
    }
  },
  components: {
Articles,Footer
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery,
    },
    
  },

}
</script>
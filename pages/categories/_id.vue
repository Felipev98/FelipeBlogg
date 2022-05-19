<template>
  <div>
    <client-only>
    <div>
      <div class="container mx-auto mb-32	">
        <h1 class="text-center my-12 text-4xl font-bold	md:text-6xl	text-article-title">{{ category.name }}</h1>
                <div v-if="category.articles" :data-src="category.articles.length">
                  <div v-if="category.articles.length !==0 ">
                <Articles :articles="category.articles || []"></Articles>
                  </div>
                     <div v-else>
                  <p class="text-center text-article-title text-2xl	">No hay articulos disponibles para esta categoría</p>
                </div>
                </div>
      </div>
    </div>
  </client-only>
  <Footer/>
  </div>
</template>

<script>
import articlesQuery from '../../apollo/queries/articles/articles--categories'
import Articles from '../../components/Articles'
import Footer from '../../components/Footer'
export default {
  data() {
    return {
      category: [],
    }
  },
  components: {
    Articles,Footer
  },
  apollo: {
    category: {
      prefetch: true,
      query: articlesQuery,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      },
    }
  },
  computed: {
    categoryName() {
      return console.log(this.category.articles.length)
    }
  }
}
</script>
<template>
  <div>
    <client-only>
    <div>
      <div class="container mx-auto">
      <h2 class="md:text-6xl text-4xl	 my-8 text-article-title font-bold  text-center">{{All}}</h2>
        <Articles :articles="articles"></Articles>
      </div>
    </div>
    <div class="text-center my-12	">
    <button class="w-44 p-4 rounded-3xl bg-button-color text-white" @click="showMore">Más articulos</button>

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
      All: "Todos los Articulos"
    }
  },
  components: {
Articles,Footer
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery,
      variables () {
        return { id: parseInt(this.$route.params.id), 
                limit: this.amoutofArticles
        }
      },
    },
    
  },
   methods: {
    showMore () {
      // Fetch more data and transform the original result
      this.$apollo.queries.articles.fetchMore({
        // New variables
        variables: {
          start:this.start += this.amoutofArticles
        },
        // Transform the previous result with new data
        updateQuery: (previousResult, { fetchMoreResult }) => {
          return {
              __typename: previousResult.articles.__typename,
              // Merging the tag list
              articles: [...previousResult.articles, ...fetchMoreResult.articles]
          }
        },
        
      })
    },
        }
}
</script>
<template>
<div>
  <Categories />
  <Articles :articles="articles"/>
</div>

</template>

<script>
import Articles from '../components/Articles.vue'
import articlesQuery from '../apollo/queries/articles/Articles'
export default {
  name: 'IndexPage',
  data() {
    return {
      articles: []
    }
  },
  components:{
Articles
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

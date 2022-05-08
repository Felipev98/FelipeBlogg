<template>
  <div>

      <div v-if="article.image" id="banner" :data-src="api_url + article.image.url" uk-img>
      <img :src="api_url + article.image.url" style="width:4rem" alt="">
        <h1>{{ article.title }}</h1>
      </div>

      <div >
        <div class="uk-container uk-container-small">
            <div v-if="article.content" id="editor" v-html="$md.render(article.content)"></div>
            <p v-if="article.published_at">{{ moment(article.published_at).format("MMM Do YY") }}</p>
        </div>
      </div>

  </div>
</template>

<script>
import articleQuery  from '../../apollo/queries/articles/Article'
var moment = require('moment')

export default {
  data() {
    return {
      article: {},
      moment: moment,
      api_url: process.env.strapiBaseUri
    }
  },
  apollo: {
    article: {
      prefetch: true,
      query: articleQuery,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  }
}
</script>
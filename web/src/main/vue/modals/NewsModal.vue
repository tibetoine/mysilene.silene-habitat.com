<template>
    <div class="news" style="margin-top:50px;">
        <div class="loading" v-if="loading">
        Chargement...
        </div>

        <div v-if="error" class="error">
        {{ error }}
        </div>

        <div v-if="selectedNews" class="content">
            <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                <v-card>                    
                    <v-list-tile >
                        <div v-html="selectedNews.content"></div>
                    </v-list-tile>
                </v-card>
                </v-flex>
            </v-layout>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "newsModal",
  data() {
    return {
      loading: false,
      error: null
    };
  },
  computed: {
    ...mapState({
      selectedNews: state => state.selectedNews
    }),
    selectedNews: {
      get: function() {
        return this.$store.state.selectedNews;
      },
      set: function(value) {
        this.$store.state.selectedNews = value;
      }
    }
  },
  watch: {
    // appeler encore la méthode si la route change
    $route: "fetchData"
  },
  created() {
    this.fetchData();
  },
  methods: {
    imgsrc: news =>
      "/img/ad-photos/" +
      (news.thumbnailPhoto ? news.sAMAccountName : "default") +
      ".jpg",
    fetchData() {
      console.log("--> Fetching data");
      this.error = this.news = null;
      this.loading = true;
      if (this.$store.state.selectedNews != null) {
        this.news = this.$store.state.selectedNews;
        this.loading = false;
      } else {
        this.error = "Impossible de charger le news";
        console.error("MySilene : Can not load news !");
      }
    },
    sendMail(mail) {
        window.location = "mailto:"+mail;
    },
    callBryan(mobile) {
        window.location = "tel:"+mobile;
    },
    textBryan(mobile) {
        window.location = "sms:"+mobile;
    }
  }
};
</script>
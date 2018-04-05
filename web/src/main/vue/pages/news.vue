<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout row>
                <v-flex xs12 md9>
                    <v-list two-line>
                        <template v-for="(aNews, index) in news">
                            <v-card style="margin:20px 10px 20px 10px;">
                                <v-card-title>
                                    <v-avatar
                                size="36px"
                                slot="activator"
                                >
                                    <img
                                        :src="findAvatar(aNews.author)"
                                        alt=""                                        
                                    >
                                    
                                </v-avatar>
                                <span style="padding-left:10px;">{{aNews.author?aNews.author:'Auteur Inconnu'}}</span>
                                    <!-- Photo Author --> 
                                    <!-- Author --> 
                                    <!-- Photo Author --> 
                                </v-card-title>
                                <v-card-media
                                class="black--text"
                                height="200px"
                                :src="imgsrc(aNews)"
                                >
                                <v-container fill-height fluid>
                                    <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline">{{aNews.title}}</span>
                                    </v-flex>
                                    </v-layout>
                                </v-container>
                                </v-card-media>
                                <v-card-title>
                                    <div>
                                        <span class="grey--text">{{aNews.resume}}</span>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn flat color="orange">Share</v-btn>
                                    <v-btn flat color="orange">Explore</v-btn>
                                </v-card-actions>
                            </v-card>
                        </template>
                    </v-list>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import On from "../../const/on";

export default {
  name: "news",
  computed: {
    ...mapGetters({ news: "filteredNews" })
  },
  methods: {
    imgsrc: news => {
      var imgSource = "/img/flashInfo-1.jpeg";
      if (news.image != null && news.image != "") {
        imgSource = news.image;
      } else {
        switch (news.type) {
          case "flashInfo":
            imgSource = "/img/flashInfo-2.jpeg";
            break;
          case "actualites":
            imgSource = news.image;
            break;
          case "mouvementsRH":
            imgSource = news.image;
            break;
          default:
            break;
        }
      }
      return imgSource;
    },
    findAvatar: function(author) {
      //console.log("Author : " + author);
      var contact = this.$store.getters.searchContact(author);
      if (contact == null) return "/img/ad-photos/default.jpg";
      //console.dir("contact : " + contact);
      console.log("contact : " + contact + " contact.thumbnailPhoto :  " + contact.thumbnailPhoto + " contact.givenName " + contact.givenName) ;

      var imgSource = "/img/ad-photos/" +
        (contact.thumbnailPhoto ? contact.sAMAccountName : "default") +
        ".jpg"
        console.log("imgSource : " + imgSource);
      return imgSource
        
    }
  }
};
</script> 
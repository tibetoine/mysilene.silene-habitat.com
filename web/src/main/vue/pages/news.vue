<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout row>
                <v-flex xs12 md9>
                    <v-list two-line>
                        <template v-for="(aNews, index) in news">
                            <v-card style="margin:10px;">
                                <v-card-media
                                class="white--text"
                                height="200px"
                                src="/img/contact.jpg"
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
                                    <span class="grey--text">Number 10</span><br>
                                    <span>Whitehaven Beach</span><br>
                                    <span>Whitsunday Island, Whitsunday Islands</span>
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
import { mapGetters } from "vuex";

export default {
  name: "news",
  computed: {
    ...mapGetters({ news: "filteredNews" })
  }
};
</script> 
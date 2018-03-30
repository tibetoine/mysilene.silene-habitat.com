<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <!--<v-btn @click="ajoutContact"><v-icon>edit</v-icon></v-btn>-->
          <v-list two-line>
            <template v-for="(contact, index) in contacts">
              <v-divider  :key="index"></v-divider>
              <v-list-tile avatar  :key="contact._id" @click="">
                <v-list-tile-avatar>
                  <img :src="imgsrc(contact)">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title v-html="contact.sn+' '+contact.givenName"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="contact.title"></v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action class="hidden-sm-and-down">
                  <v-icon :color="contact.mail ? 'teal' : 'grey'">email</v-icon>
                </v-list-tile-action>
                <v-list-tile-action>
                  <v-icon :color="contact.telephoneNumber ? 'teal' : 'grey'">phone</v-icon>
                </v-list-tile-action>
                <v-list-tile-action>
                  <v-icon :color="contact.mobile ? 'teal' : 'grey'">chat</v-icon>
                </v-list-tile-action>
                <v-list-tile-action>
                  <v-icon :color="contact.mobile ? 'teal' : 'grey'">phonelink_ring</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import {mapState, mapActions} from 'vuex';
  import On from "../../const/on";
  
  export default {
    name : "contacts",
    
    computed: {
      ...mapState(['contacts']),
    },
    methods: {
      imgsrc:contact => "/img/ad-photos/"+(contact.thumbnailPhoto?contact.sAMAccountName:"default")+".jpg"
     
    }
  }
</script>
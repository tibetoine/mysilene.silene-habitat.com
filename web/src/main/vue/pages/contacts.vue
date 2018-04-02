<template>
  <v-container style="margin-top:50px;">
    <v-layout row>
      <v-flex xs12 md9 offset-md3>
        <v-card>
          <!--<v-btn @click="ajoutContact"><v-icon>edit</v-icon></v-btn>-->
          <!--<input type="text" v-model="search">-->
          <v-container fluid>
            <v-layout row>
              <v-flex xs12 sm8>
                <v-text-field
                  name="input-1-3"
                  label="Rechercher .."
                  single-line
                  append-icon="search"
                  v-model="search"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm4>
                <v-btn
                  @click=""
                  color="green"
                  class="white--text"
                >
                  SST
                  <v-icon right dark>local_hospital</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
          <v-list two-line>
            <template v-for="(contact, index) in filteredContacts">
              <v-divider  :key="index"></v-divider>
              <v-list-tile avatar  :key="contact._id" @click="">
                <v-badge color="green" left v-if="contact.silenesst == '1'" overlap>
                  <v-icon slot="badge" dark small>local_hospital</v-icon>
                  <v-list-tile-avatar>
                    <img :src="imgsrc(contact)">
                  </v-list-tile-avatar>
                </v-badge>
                <v-list-tile-avatar v-else>
                  <img :src="imgsrc(contact)">
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title v-html="contact.sn+' '+contact.givenName"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="contact.title"></v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action class="hidden-xs-only">
                  <v-icon :color="contact.mail ? 'blue' : 'grey'">email</v-icon>
                </v-list-tile-action>
                <v-list-tile-action class="hidden-xs-only">
                  <v-icon :color="contact.telephoneNumber ? 'blue' : 'grey'">phone</v-icon>
                </v-list-tile-action>
                <v-list-tile-action class="hidden-xs-only">
                  <v-icon :color="contact.mobile ? 'blue' : 'grey'">chat</v-icon>
                </v-list-tile-action>
                <v-list-tile-action class="hidden-xs-only">
                  <v-icon :color="contact.mobile ? 'blue' : 'grey'">phonelink_ring</v-icon>
                </v-list-tile-action>
                <v-menu class="hidden-sm-and-up" >
                  <v-btn icon slot="activator">
                    <v-icon>expand_more</v-icon>
                  </v-btn>
                  <v-list>
                    <!-- Mobile -->
                    <v-list-tile>
                      <v-list-tile-action>
                        <v-icon :color="contact.mobile ? 'blue' : 'grey'">phonelink_ring</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>Mobile</v-list-tile-title>
                      </v-list-tile-content>                      
                    </v-list-tile>

                    <!-- Phone -->
                    <v-list-tile>
                      <v-list-tile-action>
                        <v-icon :color="contact.telephoneNumber ? 'blue' : 'grey'">phone</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>Fixe</v-list-tile-title>
                      </v-list-tile-content>                      
                    </v-list-tile>

                    <!-- SMS -->
                    <v-list-tile>
                      <v-list-tile-action>
                        <v-icon :color="contact.mobile ? 'blue' : 'grey'">chat</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>SMS</v-list-tile-title>
                      </v-list-tile-content>                      
                    </v-list-tile>
                    
                    <!-- Mail -->
                    <v-list-tile>
                      <v-list-tile-action>
                        <v-icon :color="contact.mail ? 'blue' : 'grey'">mail</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>Mail</v-list-tile-title>
                      </v-list-tile-content>                      
                    </v-list-tile>

                    
                  </v-list>
                </v-menu>
              </v-list-tile>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import On from "../../const/on";

export default {
  name: "contacts",
  data: () => ({
    search: "",
    items: [
      { icon: "email", title: "Mail" },
      { icon: "phone", title: "Phone" },
      { icon: "chat", title: "Chat" },
      { icon: "phonelink_ring", title: "Mobile" }
    ]
  }),
  computed: {
    ...mapState(["contacts"]),
    filteredContacts() {
      return this.$store.state.contacts;
    }
    /*filteredContacts() {
      return this.$store.state.contacts.filter(contact => {
        var isFiltered = false;
        isFiltered =
          isFiltered ||
          contact.sn.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
        if (contact.givenName != null) {
          isFiltered =
            isFiltered ||
            contact.givenName.toLowerCase().indexOf(this.search.toLowerCase()) >
              -1;
        }
        if (this.search.toLowerCase() == "sst" && contact.silenesst == "1") {
          isFiltered = true;
        }
        return isFiltered;
      });
    }*/
  },
  methods: {
    imgsrc: contact =>
      "/img/ad-photos/" +
      (contact.thumbnailPhoto ? contact.sAMAccountName : "default") +
      ".jpg"
  }
};
</script>
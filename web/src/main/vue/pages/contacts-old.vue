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
                  @click="doFilterSst"
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
            <template v-for="(contact, index) in contacts">
              <v-divider  :key="index"></v-divider>
              <v-list-tile avatar  :key="contact._id" @click="goToContact(contact, contact._id)" :to="'/contacts/'+contact.id">
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
                  <a v-bind:href="'/contacts/'+contact._id"> 
                  <v-list-tile-title v-html="contact.sn+' '+contact.givenName"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="contact.title"></v-list-tile-sub-title>
                  </a>
                </v-list-tile-content>
                <v-list-tile-action class="hidden-xs-only">
                  <a v-if="contact.mail" style="text-decoration:none;" v-bind:href="'mailto:' + contact.mail"><v-icon :color="contact.mail ? 'blue' : 'grey'" >email</v-icon></a>
                  <v-icon v-else :color="contact.mail ? 'blue' : 'grey'" >email</v-icon>
                </v-list-tile-action>
                <v-list-tile-action class="hidden-xs-only">
                  <a v-if="contact.telephoneNumber"  style="text-decoration:none;" v-bind:href="'tel:' + contact.telephoneNumber"><v-icon :color="contact.telephoneNumber ? 'blue' : 'grey'">phone</v-icon></a>
                  <v-icon v-else :color="contact.telephoneNumber ? 'blue' : 'grey'" >phone</v-icon>
                </v-list-tile-action>
                <v-list-tile-action class="hidden-xs-only">
                  <a v-if="contact.mobile" style="text-decoration:none;" v-bind:href="'sms:' + contact.mobile"><v-icon :color="contact.mobile ? 'blue' : 'grey'">chat</v-icon></a>
                  <v-icon v-else :color="contact.mobile ? 'blue' : 'grey'">chat</v-icon></a>
                </v-list-tile-action>
                <v-list-tile-action class="hidden-xs-only">
                  <a v-if="contact.mobile" style="text-decoration:none;" v-bind:href="'tel:' + contact.mobile"><v-icon :color="contact.mobile ? 'blue' : 'grey'">phonelink_ring</v-icon></a>
                  <v-icon v-else :color="contact.mobile ? 'blue' : 'grey'">phonelink_ring</v-icon>
                </v-list-tile-action>
                <v-menu class="hidden-sm-and-up" >
                  <v-btn icon slot="activator">
                    <v-icon>expand_more</v-icon>
                  </v-btn>
                  <v-list>
                    <!-- Mobile -->
                    <v-list-tile >
                      <v-list-tile-action>
                        <a v-if="contact.mobile" style="text-decoration:none;" v-bind:href="'tel:' + contact.mobile"><v-icon :color="contact.mobile ? 'blue' : 'grey'">phonelink_ring</v-icon></a>
                  <v-icon v-else :color="contact.mobile ? 'blue' : 'grey'">phonelink_ring</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <a v-if="contact.mobile" style="text-decoration:none;" v-bind:href="'tel:' + contact.mobile"><v-list-tile-title>Mobile</v-list-tile-title></a>
                        <v-list-tile-title v-else>Mobile</v-list-tile-title>
                      </v-list-tile-content>                      
                    </v-list-tile>

                    <!-- Phone -->
                    <v-list-tile>
                      <v-list-tile-action>
                        <a v-if="contact.telephoneNumber"  style="text-decoration:none;" v-bind:href="'tel:' + contact.telephoneNumber"><v-icon :color="contact.telephoneNumber ? 'blue' : 'grey'">phone</v-icon></a>
                  <v-icon v-else :color="contact.telephoneNumber ? 'blue' : 'grey'" >phone</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <a v-if="contact.telephoneNumber"  style="text-decoration:none;" v-bind:href="'tel:' + contact.telephoneNumber"><v-list-tile-title>Fixe</v-list-tile-title></a>
                        <v-list-tile-title v-else>Fixe</v-list-tile-title>
                      </v-list-tile-content>                      
                    </v-list-tile>

                    <!-- SMS -->
                    <v-list-tile>
                      <v-list-tile-action>
                        <a v-if="contact.mobile" style="text-decoration:none;" v-bind:href="'sms:' + contact.mobile"><v-icon :color="contact.mobile ? 'blue' : 'grey'">chat</v-icon></a>
                  <v-icon v-else :color="contact.mobile ? 'blue' : 'grey'">chat</v-icon></a>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <a v-if="contact.mobile" style="text-decoration:none;" v-bind:href="'sms:' + contact.mobile"><v-list-tile-title>SMS</v-list-tile-title></a>
                        <v-list-tile-title v-else>SMS</v-list-tile-title>
                      </v-list-tile-content>                      
                    </v-list-tile>
                    
                    <!-- Mail -->
                    <v-list-tile>
                      <v-list-tile-action>
                        <a v-if="contact.mail" style="text-decoration:none;" v-bind:href="'mailto:' + contact.mail"><v-icon :color="contact.mail ? 'blue' : 'grey'" >email</v-icon></a>
                  <v-icon v-else :color="contact.mail ? 'blue' : 'grey'" >email</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <a v-if="contact.mail" style="text-decoration:none;" v-bind:href="'mailto:' + contact.mail"><v-list-tile-title>Mail</v-list-tile-title></a>
                        <v-list-tile-title v-else>Mail</v-list-tile-title>
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
import { mapState, mapActions, mapGetters } from "vuex";
import On from "../../const/on";


export default {
  name: "contacts",
  data: () => ({
    items: [
      { icon: "email", title: "Mail" },
      { icon: "phone", title: "Phone" },
      { icon: "chat", title: "Chat" },
      { icon: "phonelink_ring", title: "Mobile" }
    ]
  }),
  computed: {
    ...mapState({
      search: state => state.contacts.search,
      filterSst: state => state.contacts.filterSst,
      selectedContact: state => state.selectedContact
    }),
    ...mapGetters({contacts: 'filteredContacts'}),
    search: {
        get: function () {
            return this.$store.state.contacts.search
        },
        set: function (value) {
            this.$store.state.contacts.search = value;
        }
    },
    filterSst: {
        get: function () {
            return this.$store.state.contacts.filterSst
        },
        set: function (value) {
            this.$store.state.contacts.filterSst = value;
        }
    },
    selectedContact: {
        get: function () {
            return this.$store.state.selectedContact
        },
        set: function (value) {
            this.$store.state.selectedContact = value;
        }
    }
  },
  methods: {
    imgsrc: contact =>
      "/img/ad-photos/" +
      (contact.thumbnailPhoto ? contact.sAMAccountName : "default") +
      ".jpg",
    doFilterSst:any => {
      //console.log("Test doFilter")
      //TODO à compléter
      //this.filterSst?this.filsterSst=false:this.filterSst=true;
      search = ""
    },
    goToContact: function(contact, contactId) {
      console.log("Contact : " + contact + " contactId : " + contactId);
      this.$store.state.selectedContact = contact;
      //this.$router.push({ path: 'contactModal', params: { contactId }})
      //this.$router.push({ name: 'contactModal', params: { contactId }})
      this.$router.push({ path: `/contacts/${contactId}` })
    }
  }
};
</script>
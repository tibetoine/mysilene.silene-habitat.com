<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout justify-center align-center>
                <v-card>
                    <p>Contact {{ $route.params.id }}</p>
                </v-card>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import On from "../../const/on";

export default {
  name: "contact"
};
</script>
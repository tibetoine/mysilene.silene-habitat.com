<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout justify-center align-center>
                <v-card>
                    <v-list two-line>
                        <template v-for="(aNews, index) in news">
                            <v-list-tile>
                                <v-divider :key="index"></v-divider>
                                <v-list-tile-content>
                                    <v-list-tile-title v-html="aNews.content"></v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </template>
                    </v-list>
                </v-card>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>

    import {mapGetters} from 'vuex';

    export default {
        name: "news",
        computed: {
            ...mapGetters({news: 'filteredNews'}),
        },
    }
</script> 
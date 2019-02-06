<template>
    <v-card :color="options.color" class="pa-4" >
        <v-layout align-content-center align-center>

            <v-icon class="pr-2 icon">
                {{options.icon}}
            </v-icon>

            <div class="pl-3">
                <h1 class="text-xs-left text-uppercase">
                    {{options.header}}
                </h1>
                <p class="text-xs-left">
                    {{options.header2}}
                </p>
            </div>

        </v-layout>
    </v-card>
</template>

<script>
    export default {
        name: "Home_top_cards",
        props: ['options'],

    }
</script>

<style scoped>
    .icon {
        font-size: 70px;
    }

    p {
        font-size: 16px;
        font-weight: 600;
    }
</style>
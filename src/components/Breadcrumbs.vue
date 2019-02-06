<template>
    <div>
        <v-breadcrumbs class="pt-0 white--text" :items="items" divider="-"></v-breadcrumbs>
    </div>
</template>

<script>
    export default {
        name: "Breadcrumbs",
        data(){
            return {
                items:[
                    {
                        text: 'Dashboard',
                        disabled: false,
                        href: '#'
                    },
                    {
                        text: 'Link 1',
                        disabled: false,
                        href: '#'
                    },
                    {
                        text: 'Link 2',
                        disabled: true,
                        href: '#'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
.white--text a
{
    color: #fff !important;
}
</style>Toolbar.vue
<script>

    import {Bar} from 'vue-chartjs'


    export default {
        extends: Bar,
        name: 'barchart',
        props: ['data', 'options'],
        mounted() {
            this.renderChart(this.data, this.options)
        }
    }
</script>
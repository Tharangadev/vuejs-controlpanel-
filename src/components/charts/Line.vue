<script>

    import {Line} from 'vue-chartjs'


    export default {
        extends: Line,
        name: 'linechart',
        props: ['data', 'options'],
        mounted() {
            let ctx=this.$refs.canvas.getContext("2d");
            var gradientFill = ctx.createLinearGradient(500, 0, 100, 0);
            gradientFill.addColorStop(0, "rgba(128, 182, 244, 0.6)");
            gradientFill.addColorStop(1, "rgba(244, 144, 128, 0.6)");
            this.options.backgroundColor=gradientFill
            this.renderChart(this.data, this.options)

        }
    }
</script>
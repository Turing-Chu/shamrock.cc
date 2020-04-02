<template>
  <div id="KLine" class="container-fluid">
    <div class="row">
      <label>Coin Pair: </label><input type="text" v-model="coinPair" placeholder="123" />
      <label>Group Minute: </label><input type="number" v-model="group" placeholder="group minute" />
      <label>Range Hour: </label><input type="number" v-model="range" placeholder="range hour" />
    </div>
    <div>{{ coinPair }} {{group}}{{range}}</div>
    <canvas id="planet-chart" />
    <div class="row">
      <div class="col-2">
        <input required type="text" v-on:blur="check(moddel)" value="" :v-model="moddel" placeholder="提示符">
      </div>

    </div>
    <div>
      3333{{moddel}}
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  name: 'KLine',
  data() {
    return {
      info: null,
      moddel: '',
      coinPair: 'btc_usdt',
      group: 1,
      range: 1,
      klineData: {
        open: [],
        close: [],
        high: [],
        low: [],
        volume: [],
        timeInt: [],
        timeStr: [],
      },
      options: {
        responsive: true,
        lineTension: 1,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              padding: 25,
            },
          }],
        },
      },
    };
  },
  methods: {
    check(value) {
      if (!value.startsWith('http')) {
        console.log(222);
        this.moddel = '';
      }
    },
    draw(dataset, labels) {
      const ctx = document.getElementById('planet-chart');
      const data = {
        labels,
        datasets: [
          { // another line graph
            label: 'open price',
            data: dataset,
            backgroundColor: [
              'rgba(00, 00,00,.2)', // Green
            ],
            borderColor: [
              '#FF0000',
            ],
            borderWidth: 1,
          },
        ],
      };
      const myChart = new Chart(ctx, {
        type: 'line',
        data,
        options: this.options,
      });
      return myChart;
    },
    loadData() {
      this.$axios.get('/api2/1/candlestick2/btc_usdt?group_sec=600&range_hour=1')
        .then((response) => {
          const rawData = response.data.data;
          const result = [];
          // eslint-disable-next-line no-restricted-syntax
          for (const item of rawData) {
            result.push({
              timeInt: parseInt(item[0], 10) / 1000,
              timeStr: new Date(parseInt(item[0], 10)).toLocaleDateString(),
              volume: parseFloat(item[1]),
              close: parseFloat(item[2]),
              high: parseFloat(item[3]),
              low: parseFloat(item[4]),
              open: parseFloat(item[5]),
            });
          }
          // eslint-disable-next-line no-restricted-syntax
          for (const item of result) {
            this.addData('open', item.open);
            this.addData('close', item.close);
            this.addData('high', item.high);
            this.addData('low', item.low);
            this.addData('volume', item.volume);
            this.addData('timeInt', item.timeInt);
            this.addData('timeStr', item.timeStr);
          }
        }).catch((err) => {
        // eslint-disable-next-line no-console
          console.error(err);
        });
    },
    addData(key, data) {
      this.klineData[key].push(data);
    },
    func(value) {
      if (value.startsWith('http://')) {
        return value;
      }
      return 'AAA';
    },
  },
  mounted() {
    this.loadData();
    this.draw(this.klineData.open, this.klineData.timeStr);
  },
  filter: {
    func(value) {
      if (value.startsWith('http://')) {
        return value;
      }
      return 'AAA';
    },
  },
  computed: {
    // https://cn.vuejs.org/v2/guide/computed.html
  },
};
</script>

<style scoped>

</style>

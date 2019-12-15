<template>
  <div id="KLine" class="container-fluid">
    <div class="row">
      <label>Coin Pair: </label><input type="text" v-model="coinPair" placeholder="123" />
      <label>Group Minute: </label><input type="number" v-model="group" placeholder="group minute" />
      <label>Range Hour: </label><input type="number" v-model="range" placeholder="range hour" />
    </div>
    <div>{{ coinPair }} {{group}}{{range}}</div>
    <canvas id="planet-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
  name: 'KLine',
  data: function () {
    return {
      info: null,
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
        timeStr: []
      },
      options: {
        responsive: true,
        lineTension: 1,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              padding: 25
            }
          }]
        }
      }
    }
  },
  methods: {
    draw: function (dataset, labels) {
      const ctx = document.getElementById('planet-chart')
      let data = {
        labels: labels,
        datasets: [
          { // another line graph
            label: 'open price',
            data: dataset,
            backgroundColor: [
              'rgba(00, 00,00,.2)' // Green
            ],
            borderColor: [
              '#FF0000'
            ],
            borderWidth: 1
          }
        ]
      }
      const myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: this.options
      })
      return myChart
    },
    loadData: function () {
      this.$axios.get('/api2/1/candlestick2/btc_usdt?group_sec=600&range_hour=1')
        .then(response => {
          let rawData = response.data.data
          let result = []
          for (let item of rawData) {
            result.push({
              'timeInt': parseInt(item[0], 10) / 1000,
              'timeStr': new Date(parseInt(item[0], 10)).toLocaleDateString(),
              'volume': parseFloat(item[1]),
              'close': parseFloat(item[2]),
              'high': parseFloat(item[3]),
              'low': parseFloat(item[4]),
              'open': parseFloat(item[5])
            })
          }
          for (let item of result) {
            this.addData('open', item['open'])
            this.addData('close', item['close'])
            this.addData('high', item['high'])
            this.addData('low', item['low'])
            this.addData('volume', item['volume'])
            this.addData('timeInt', item['timeInt'])
            this.addData('timeStr', item['timeStr'])
          }
        }).catch(function (err) {
          console.error(err)
        })
    },
    addData: function (key, data) {
      this.klineData[key].push(data)
    },
    splitObj: function (obj) {
      let queryParameters = ''
      for (let key in obj) {
        queryParameters = queryParameters + String(key) + '=' + String(obj[key]) + '&'
      }
      return queryParameters.slice(0, queryParameters.length - 1)
    }
  },
  mounted: function () {
    this.loadData()
    this.draw(this.klineData.open, this.klineData.timeStr)
  },
  computed: {
    // https://cn.vuejs.org/v2/guide/computed.html
  }
}
</script>

<style scoped>

</style>

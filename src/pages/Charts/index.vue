<template>
  <div class="Charts-page">
    <!-- 用于简单数据的模板展示 -->
    <DataDisplay />
    <LineChart />
    <LoveJuly />
  </div>
</template>
<script>
import DataDisplay from './components/DataDisplay';
import LineChart from './components/LineChart';
import LoveJuly from './components/LoveJuly'
export default {
  name: 'Charts',
  components: {
    DataDisplay,
    LineChart,
    LoveJuly
  },
};
</script>

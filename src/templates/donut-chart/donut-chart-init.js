import DonutChart from './donut-chart';

$(() => {
  $('.js-donut-chart').each((i, val) => {
    new DonutChart(val);
  });
});
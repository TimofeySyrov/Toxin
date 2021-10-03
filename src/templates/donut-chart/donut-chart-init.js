import DonutChart from './donut-chart';
import defaultDonutChartOptions from './donut-chartOptions';

const donutChartDOMs = document.querySelectorAll('.js-donut-chart');
donutChartDOMs.forEach((item) => new DonutChart(item, defaultDonutChartOptions));

import * as d3 from 'd3';

class DonutChart {
  constructor(domParent, options) {
    this.container = domParent.querySelector('.js-donut-chart');
    this.diagram = this.container.querySelector('.js-donut-chart__box-diagram');
    this.list = this.container.querySelector('.js-donut-chart__list');
    this.options = options;

    this._render();
  }

  _render() {
    const { data, options } = this.options;

    this._initChart();
    this._createChartTextInside(data, options);
    this._createChartLabelsList(data);
  }

  _initChart() {
    const { size, data } = this.options;
    const chart = this._createChart();
    const chartDataGradients = this._createChartGradients(chart);
    const radiusOutSide = size.radius.outside;
    const radiusInSide = size.radius.inside;

    const chartData = {};
    data.forEach((item) => {
      chartData[item.id] = Number(item.value);
    });

    const isRadiusOutSide = radiusOutSide !== undefined && radiusInSide !== null;
    const calcRadiusOutSide = Math.min(size.width, size.height) / 2 - size.margin;
    const chartOutsideRadius = isRadiusOutSide ? radiusOutSide : calcRadiusOutSide;
    const calcRadiusInside = Number(radiusInSide || 50) * (chartOutsideRadius / 100);

    const color = d3.scaleOrdinal()
      .domain(chartData)
      .range(chartDataGradients);

    const pie = d3.pie().value((d) => d.value);
    const dataReady = pie(d3.entries(chartData));

    chart
      .selectAll('whatever')
      .data(dataReady)
      .enter()
      .append('path')
      .attr('d', d3.arc().innerRadius(calcRadiusInside).outerRadius(chartOutsideRadius))
      .attr('fill', (d) => (color(d.data.key)))
      .attr('stroke', 'white')
      .style('stroke-width', '2px');
  }

  _createChart() {
    const { size } = this.options;
    const svg = d3.select(this.diagram)
      .append('svg')
      .attr('class', 'donut-chart__diagram')
      .attr('width', size.width)
      .attr('height', size.height)
      .append('g')
      .attr('transform', `translate(${size.width / 2},${size.height / 2})`);

    return svg;
  }

  _createChartGradients(chart) {
    const { data } = this.options;
    const defs = chart.append('defs');
    const dataGradients = [];

    data.map((item) => {
      const gradient = defs.append('linearGradient')
        .attr('id', `${item.id}gradientColor` || 'svgGradient')
        .attr('x1', '0%')
        .attr('x2', '100%')
        .attr('y1', '0%')
        .attr('y2', '100%');

      // Start gradient color
      gradient.append('stop')
        .attr('class', 'start')
        .attr('offset', item.colors.start.offset || '0%')
        .attr('stop-color', item.colors.start.color || '#fff')
        .attr('stop-opacity', item.colors.start.opacity || 1);

      // End gradient color
      gradient.append('stop')
        .attr('class', 'end')
        .attr('offset', item.colors.end.offset || '100%')
        .attr('stop-color', item.colors.end.color || '#000')
        .attr('stop-opacity', item.colors.end.opacity || 1);

      return dataGradients.push(`url(#${item.id}gradientColor)`);
    });

    return dataGradients;
  }

  _createChartTextInside(data, options) {
    let total = 0;
    data.forEach((item) => {
      total += Number(item.value);
    });
    const templateTextInside = `
      <div class='donut-chart__text-inside'>
        <span class='donut-chart__number'>${total}</span>
        <span class='donut-chart__label'>${options.textInside}</span>
      </div>`;

    this.diagram.innerHTML += templateTextInside;
  }

  _createChartLabelsList(data) {
    const items = data.map((item) => `
      <li class='donut-chart__list-item'>
        <svg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <circle cx='5' cy='5' r='5' fill='url(#${item.id}gradientColor)'/>
          <defs>
            <linearGradient id='${item.id}gradientColor' x1='5' y1='0' x2='5' y2='10' gradientUnits='userSpaceOnUse'>
              <stop stop-color='${item.colors.start.color}'/>
              <stop offset='1' stop-color='${item.colors.end.color}'/>
            </linearGradient>
          </defs>
        </svg>
        <span class='donut-chart__list-text'>${item.label}</span>
      </li>
      `);

    this.list.innerHTML += items.join('');
  }
}

export default DonutChart;

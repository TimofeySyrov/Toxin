import * as d3 from "d3";

class DonutChart {
  constructor(elem, options) {
    this.$el = elem
    this.$chartBox
    this.options = options

    this.#render()
  }

  #render() {
    const {size, data, options} = this.options

    this.$el.innerHTML += `<div class="donut-chart__box-diagram"></div>`
    this.$chartBox = this.$el.querySelector('.donut-chart__box-diagram')

    this.#initChart(size, data)
    this.#createChartTextInside(data, options)
    this.#createChartLabelsList(data)
  }

  #initChart(size, data) {
    const chart = this.#createChart(this.$chartBox, size)
    const chartDataGradients = this.#createChartGradients(chart, data)

    const chartData = {}
    data.map(item => {
      chartData[item.id] = Number(item.value)
    })

    const chartOutsideRadius = size.radius.outside || Math.min(size.width, size.height) / 2 - size.margin
    const chartInsideRadius = (Number(size.radius.inside) || 50) * (chartOutsideRadius/100)

    const color = d3.scaleOrdinal()
      .domain(chartData)
      .range(chartDataGradients)

    const pie = d3.pie().value(function(d) {return d.value; })
    const data_ready = pie(d3.entries(chartData))

    chart
      .selectAll('whatever')
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(chartInsideRadius)
        .outerRadius(chartOutsideRadius))
      .attr('fill', function(d){ return(color(d.data.key)) })
      .attr("stroke", "white")
      .style("stroke-width", "2px")
  }

  #createChart(chart, size) {
    const svg = d3.select(chart)
      .append("svg")
        .attr("class", "donut-chart__diagram")
        .attr("width", size.width)
        .attr("height", size.height)
      .append("g")
        .attr("transform", "translate(" + size.width / 2 + "," + size.height / 2 + ")");

    return svg
  }

  #createChartGradients(chart, data){
    const defs = chart.append("defs");
    let dataGradients = []

    data.map(item => {
      const gradient = defs.append("linearGradient")
        .attr("id", item.id + 'gradientColor' || "svgGradient")
        .attr("x1", "0%")
        .attr("x2", "100%")
        .attr("y1", "0%")
        .attr("y2", "100%");

      // Start gradient color
      gradient.append("stop")
        .attr("class", "start")
        .attr("offset", item.colors.start.offset || "0%")
        .attr("stop-color", item.colors.start.color || "#fff")
        .attr("stop-opacity", item.colors.start.opacity || 1);

      // End gradient color
      gradient.append("stop")
        .attr("class", "end")
        .attr("offset", item.colors.end.offset || "100%")
        .attr("stop-color", item.colors.end.color || "#000")
        .attr("stop-opacity", item.colors.end.opacity || 1);

      return dataGradients.push(`url(#${item.id}gradientColor)`)
    })

    return dataGradients
  }

  #createChartTextInside(data, options){
    let total = 0;
    data.map(item => {
      return total += Number(item.value)
    })
    const templateTextInside = `
      <div class="donut-chart__text-inside">
        <span class="donut-chart__number">${total}</span>
        <span class="donut-chart__label">${options.textInside}</span>
      </div>`

    this.$chartBox.innerHTML += templateTextInside
  }

  #createChartLabelsList(data){
    const items = data.map(item => {
      return `
      <li class="donut-chart__list-item">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="5" cy="5" r="5" fill="url(${'#'+item.id+'gradientColor'})"/>
          <defs>
            <linearGradient id="${item.id+'gradientColor'}" x1="5" y1="0" x2="5" y2="10" gradientUnits="userSpaceOnUse">
              <stop stop-color="${item.colors.start.color}"/>
              <stop offset="1" stop-color="${item.colors.end.color}"/>
            </linearGradient>
          </defs>
        </svg>
        <span class="donut-chart__list-text">${item.label}</span>
      </li>
      `
    })
  
    this.$el.innerHTML += `
      <ul class="donut-chart__list">
        ${items.join('')}
      </ul
    `
  }
}

export default DonutChart
import * as d3 from "d3";

class DonutChart{
  constructor(elem){
    this.elem = elem;

    this.init();
  }

  init(){
    var width = 120,
    height = 120,
    margin = 0;

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    var radius = Math.min(width, height) / 2 - margin;

    // append the svg object to the div called 'my_dataviz'
    var svg = d3.select(this.elem)
      .append("svg")
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    
    var defs = svg.append("defs");

    var gradient_yellow = defs.append("linearGradient")
      .attr("id", "svgGradientYellow")
      .attr("x1", "0%")
      .attr("x2", "100%")
      .attr("y1", "0%")
      .attr("y2", "100%");
    
    gradient_yellow.append("stop")
    .attr("class", "start")
    .attr("offset", "0%")
    .attr("stop-color", "#FFE39C")
    .attr("stop-opacity", 1);
    
    gradient_yellow.append("stop")
    .attr("class", "end")
    .attr("offset", "100%")
    .attr("stop-color", "#FFBA9C")
    .attr("stop-opacity", 1);

    var gradient_green = defs.append("linearGradient")
      .attr("id", "svgGradientGreen")
      .attr("x1", "0%")
      .attr("x2", "100%")
      .attr("y1", "0%")
      .attr("y2", "100%");

    gradient_green.append("stop")
      .attr("class", "start")
      .attr("offset", "70%")
      .attr("stop-color", "#6FCF97")
      .attr("stop-opacity", 1);
    
    gradient_green.append("stop")
      .attr("class", "end")
      .attr("offset", "100%")
      .attr("stop-color", "#66D2EA")
      .attr("stop-opacity", 1);

    var gradient_purple = defs.append("linearGradient")
      .attr("id", "svgGradientPurple")
      .attr("x1", "0%")
      .attr("x2", "100%")
      .attr("y1", "0%")
      .attr("y2", "100%");

    gradient_purple.append("stop")
      .attr("class", "start")
      .attr("offset", "0%")
      .attr("stop-color", "#BC9CFF")
      .attr("stop-opacity", 1);
    
    gradient_purple.append("stop")
      .attr("class", "end")
      .attr("offset", "100%")
      .attr("stop-color", "#8BA4F9")
      .attr("stop-opacity", 1);

    var gradient_black = defs.append("linearGradient")
      .attr("id", "svgGradientBlack")
      .attr("x1", "0%")
      .attr("x2", "100%")
      .attr("y1", "0%")
      .attr("y2", "100%");

    gradient_black.append("stop")
      .attr("class", "start")
      .attr("offset", "0%")
      .attr("stop-color", "#919191")
      .attr("stop-opacity", 1);
    
    gradient_black.append("stop")
      .attr("class", "end")
      .attr("offset", "100%")
      .attr("stop-color", "#3D4975")
      .attr("stop-opacity", 1);

    // Create dummy data
    var data = {a: 130, b: 65, c:65, d: 0}

    // set the color scale
    var color = d3.scaleOrdinal()
      .domain(data)
      .range(["url(#svgGradientYellow)", "url(#svgGradientGreen)", "url(#svgGradientPurple)", "url(#svgGradientBlack)"])

    // Compute the position of each group on the pie:
    var pie = d3.pie()
      .value(function(d) {return d.value; })
    var data_ready = pie(d3.entries(data))

    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
      .selectAll('whatever')
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(54)        // This is the size of the donut hole
        .outerRadius(radius)
      )
      .attr('fill', function(d){ return(color(d.data.key)) })
      .attr("stroke", "white")
      .style("stroke-width", "2px")
  }
}

export default DonutChart
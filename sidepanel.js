// Select the SVG element where you want to render the chart
const svg = d3.select("body")
    .append("svg")
    .attr("width", 300)
    .attr("height", 400)
    .style("border", "1px solid black");

// Define your data
const data = [10, 40, 40, 40, 50];

// Create and bind data to visual elements (circles in this case)
const nodes = data.map((d, i) => ({ id: i, value: d }));
const links = [
    { source: 4, target: 3 },
    { source: 4, target: 2 },
    { source: 4, target: 1 },
    { source: 1, target: 0 }
];

const simulation = d3.forceSimulation(nodes)
    .force("charge", d3.forceManyBody().strength(-50))
    .force("link", d3.forceLink(links).distance(100))
    .force("center", d3.forceCenter(200, 150))
    .force("collision", d3.forceCollide().radius((d) => d.value))
    .on("tick", ticked);

const node = svg.selectAll(".node")
    .data(nodes)
    .enter()
    .append("circle")
    .attr("class", "node")
    .attr("r", (d) => d.value)
    .attr("fill", "steelblue")
    .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

const link = svg.selectAll(".link")
    .data(links)
    .enter()
    .append("line")
    .attr("class", "link")
    .attr("stroke", "gray");

function ticked() {
    node.attr("cx", (d) => {
        // Limit the x-coordinate within the SVG dimensions
        d.x = Math.max(d.value, Math.min(svg.attr("width") - d.value, d.x));
        return d.x;
    })
    .attr("cy", (d) => {
        // Limit the y-coordinate within the SVG dimensions
        d.y = Math.max(d.value, Math.min(svg.attr("height") - d.value, d.y));
        return d.y;
    });

    link.attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);
}

function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
    d3.selectAll(".node").attr("r", (d) => d.value); // Reset the radius of all nodes
    d3.select(this).attr("r", (d) => d.value * 1.5); // Increase the node's radius size
}

function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
}

function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
    //d3.select(this).attr("r", (d) => d.value); // Reset the node's radius size
}

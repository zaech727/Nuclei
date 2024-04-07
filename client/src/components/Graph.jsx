//import EventCard from "./EventCard"
import ProfileSidebar from "./ProfileSidebar";
import { useEffect } from 'react';
import * as d3 from 'd3';

function loadGraph() {

    // Generate the graph using D3
    const svg = d3.select("#graph")
        .append("svg")
        .attr("width", 985)
        .attr("height", 700)
        .style("border", "1px solid black");

    console.log("Graph component mounted");
    // Define your data
    const data = [
        { value: 30, text: "Member List", isDir:false, url:"https://example.com" },
        { value: 60, text: "S24", isDir:true, url:"" },
        { value: 40, text: "Budget", isDir:false, url:"https://example.com"},
        { value: 50, text: "Handbook", isDir:false, url:"https://example.com"},
        { value: 80, text: "Financials", isDir:true, url:""},
        { value: 40, text: "Signup", isDir:false, url:"https://example.com"},
        { value: 80, text: "Admin", isDir:true, url:""},
        { value: 40, text: "Treasurer", isDir:true, url:""},
        { value: 40, text: "Ledger", isDir:false, url:"https://example.com"}
    ];

    // Create and bind data to visual elements (circles and text in this case)
    const nodes = data.map((d, i) => ({ id: i, value: d.value, text: d.text, centered: false, isDir: d.isDir, url: d.url}));
    const links = [
        { source: 4, target: 3 },
        { source: 4, target: 2 },
        { source: 4, target: 1 },
        { source: 1, target: 0 },
        { source: 1, target: 5 },
        { source: 7, target: 8 },
        { source: 6, target: 7 }
        ];

    const simulation = d3.forceSimulation(nodes)
        //.force("charge", d3.forceManyBody().strength(-50))
        .force("link", d3.forceLink(links).distance(150))
        .force("center", d3.forceCenter(493, 350))
        .force("collision", d3.forceCollide().radius((d) => d.value))
        .on("tick", ticked);

    const link = svg.selectAll(".link")
        .data(links)
        .enter()
        .append("line")
        .attr("class", "link")
        .attr("stroke", "gray")
        .attr("stroke-width", 2)
        .attr("distance", 150); // Increase the link distance

    const node = svg.selectAll(".node")
        .data(nodes)
        .enter()
        .append("g")
        .attr("class", "node")
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended))
        .on("click", clicked); // Add click event listener to nodes

    node.append("circle")
        .attr("r", (d) => d.value)
        .attr("fill", (d) => d.isDir ? "steelblue" : "green");

    node.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", ".35em")
        .text((d) => d.text);

    function ticked() {
        node.attr("transform", (d) => `translate(${d.x},${d.y})`);

        link.attr("x1", (d) => d.source.x)
            .attr("y1", (d) => d.source.y)
            .attr("x2", (d) => d.target.x)
            .attr("y2", (d) => d.target.y);
    }

    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }

    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
            //d3.select(this).select("circle").attr("r", (d) => d.value); // Reset the node's radius size
    }

    function clicked(event, d) {
        if (d.centered && !d.isDir){
            window.open(d.url); // Replace with the desired URL
        } else {
            
            d3.selectAll(".node circle").attr("r", (d) => d.value); // Reset the radius of all nodes
            d3.selectAll(".node").each(function(node) {
                node.centered = false;
            });
            
            d.centered = true;
            d3.select(this).select("circle").attr("r", (d) => 100); // Increase the node's radius size
            // Recenter the graph around the centered node
            //simulation.force("center", d3.forceCenter(200, 150));
            //simulation.alpha(1).restart();
        }
    }
}

const Graph = () => {
    useEffect(() => {
        loadGraph();
    })

    return (
        <div className="flex h-screen w-full">
            <div className="flex-grow bg-gray-100 p-4">
                <div className="flex items-center w-full">
                    <h1 className="text-xl font-bold">Graph</h1>
                    <div className="ml-auto flex">
                        <p>search</p>
                        <p>notifications</p>
                    </div>
                </div>
                <div id="graph">
                   
                </div>
            </div>
            <ProfileSidebar />
        </div>
    );
};

export default Graph;
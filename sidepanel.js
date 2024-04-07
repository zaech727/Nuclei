// Select the SVG element where you want to render the chart
const svg = d3.select("body")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500)
    .style("border", "1px solid black");

// Define your data
const data = [
    { value: 15, text: "Member List", isDir:false, url:"https://example.com" },
    { value: 30, text: "S24", isDir:true, url:"" },
    { value: 20, text: "Budget", isDir:false, url:"https://example.com"},
    { value: 25, text: "Handbook", isDir:false, url:"https://example.com"},
    { value: 40, text: "Financials", isDir:true, url:""},
    { value: 20, text: "Signup", isDir:false, url:"https://example.com"},
    { value: 40, text: "Admin", isDir:true, url:""},
    { value: 20, text: "Treasurer", isDir:true, url:""},
    { value: 20, text: "Ledger", isDir:false, url:"https://example.com"},
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
    .force("link", d3.forceLink(links).distance(100))
    .force("center", d3.forceCenter(250, 250))
    .force("collision", d3.forceCollide().radius((d) => d.value))
    .on("tick", ticked);

const link = svg.selectAll(".link")
    .data(links)
    .enter()
    .append("line")
    .attr("class", "link")
    .attr("stroke", "gray");

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
    // node.attr("transform", (d) => `translate(${d.x},${d.y})`);
    svg.selectAll(".node")
    .attr("transform", d => `translate(${d.x},${d.y})`);

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
    console.log("clicked");
    if (d.centered && !d.isDir){
        window.open(d.url); // Replace with the desired URL
    } else {
        
        d3.selectAll(".node circle").attr("r", (d) => d.value); // Reset the radius of all nodes
        d3.selectAll(".node").each(function(node) {
            node.centered = false;
        });
        
        d.centered = true;
        d3.select(this).select("circle").attr("r", (d) => 50); // Increase the node's radius size
        // Recenter the graph around the centered node
        //simulation.force("center", d3.forceCenter(200, 150));
        //simulation.alpha(1).restart();
    }
}

document.getElementById("search-form").addEventListener("submit", (e) => {
    e.preventDefault();
    //const searchValue = document.getElementById("searchbar").value;
    searchValue = "Last year, our Economics Club experienced a notable 25% increase in membership. Additionally, our guest speaker events saw a remarkable 40% boost in attendance. Moreover, our fundraising efforts yielded a substantial 50% rise in funds raised. Can you say how well our Economics Club is doing?";
        fetch("http://localhost:3000/generate-response/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({ "query": searchValue })})
        .then(response => response.json())
        .then(data => {
            alert(`Response: ${data.response}`);
        })
        .catch(error => {
            console.error("Error:", error);
        })
});

document.getElementById("file-upload-form").addEventListener("submit", (e) => {
    e.preventDefault();

    // Update simulation with new nodes
    simulation.nodes(nodes).on("tick", ticked);
    simulation.alpha(1).restart();
    
    const zipFile = document.getElementById("file").files[0];
    const zip = new JSZip();
    const fileListElement = document.getElementById("file-list");

    zip.loadAsync(zipFile)
        .then(function(contents) {
            // Clear previous results
            fileListElement.innerHTML = '';

            // Create a list to display the file names
            const ul = document.createElement('ul');
            fileListElement.appendChild(ul);
            
            let folderLink = -1;
            // Loop through the files in the zip
            Object.keys(contents.files).forEach(function(filename) {
                const file = contents.files[filename];
                // Create an item for each file/folder
                const li = document.createElement('li');
                let newNode = null;
                // Check if the item is a folder
                if (file.dir) {
                    li.textContent = `[Folder] ${filename}`;
                    currFolder = filename;
                    newNode = { id: nodes.length, value: 20, text: filename, isDir:true, url:"", centered: false};
                    folderLink = nodes.length;
                } else {
                    li.textContent = `[File] ${filename}`;
                    newNode = { id: nodes.length, value: 20, text: filename, isDir:false, url:"https://example.com", centered: false};
                }
                if (folderLink != -1) {
                    let newLink = { source: folderLink, target: nodes.length };
                    
    links.push(newLink);
    const linkSelection = svg.selectAll(".link")
    .data(links)
    .append("line")
    .attr("class", "link")
    .attr("stroke", "gray");;
                }
    // Add the new node to the nodes array
    nodes.push(newNode);
    // Re-select nodes to apply the data join
    const nodeSelection = svg.selectAll(".node")
        .data(nodes, d => d.id); // Use the id for object constancy

    // Enter new nodes
    const newNodeSelection = nodeSelection.enter()
        .append("g")
        .attr("class", "node")
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended))
        .on("click", clicked);

    newNodeSelection.append("circle")
        .attr("r", d => d.value)
        .attr("fill", d => d.isDir ? "steelblue" : "green");

    newNodeSelection.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", ".35em")
        .text(d => d.text);
                node.enter()
                .data(nodes)
                .append("g")
                .attr("class", "node")
                .call(d3.drag()
                    .on("start", dragstarted)
                    .on("drag", dragged)
                    .on("end", dragended))
                .on("click", clicked); // Add click event listener to nodes

    simulation.nodes(nodes).on("tick", ticked);
                simulation.alpha(1).restart();

                ul.appendChild(li);
            });
        })
        .catch(function(err) {
            alert('Error reading zip file: ' + err.message);
        });
});
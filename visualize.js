let tree = new AVLTree()
let root = null
let svg = document.getElementById("tree")
let svgWidth = svg.clientWidth

function insertNode(){

let value=document.getElementById("value").value

if(value==="") return

root = tree.insert(root,parseInt(value))

drawTree()

document.getElementById("value").value=""
}

let index=0

function setPosition(node, depth){

if(node==null) return

setPosition(node.left, depth+1)

let center = svg.clientWidth / 2

node.x = center + (index - countNodes(root)/2) * 80
node.y = 80 + depth * 100

index++

setPosition(node.right, depth+1)
}

function countNodes(node){
if(node==null) return 0
return 1 + countNodes(node.left) + countNodes(node.right)
}

function drawTree(){

svg.innerHTML=""

index=0

setPosition(root,0)

drawEdges(root)

drawNodes(root)
}

function drawEdges(node){

if(node==null) return

if(node.left){
drawLine(node,node.left)
drawEdges(node.left)
}

if(node.right){
drawLine(node,node.right)
drawEdges(node.right)
}

}

function drawLine(p,c){

let line=document.createElementNS("http://www.w3.org/2000/svg","line")

line.setAttribute("x1",p.x)
line.setAttribute("y1",p.y)
line.setAttribute("x2",c.x)
line.setAttribute("y2",c.y)
line.setAttribute("stroke","black")

svg.appendChild(line)
}

function drawNodes(node){

if(node==null) return

let circle=document.createElementNS("http://www.w3.org/2000/svg","circle")

circle.setAttribute("cx",node.x)
circle.setAttribute("cy",node.y)
circle.setAttribute("r",25)
circle.setAttribute("fill","#79d37d")

svg.appendChild(circle)

let text=document.createElementNS("http://www.w3.org/2000/svg","text")

text.setAttribute("x",node.x)
text.setAttribute("y",node.y+5)
text.setAttribute("text-anchor","middle")

text.textContent=node.data

svg.appendChild(text)

drawNodes(node.left)
drawNodes(node.right)
}
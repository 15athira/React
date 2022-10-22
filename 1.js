const reactRoot = document.getElementById("root")
const fileHead = document.getElementById("heads")

const header=React.createElement("h1",null,"FRUITS")
const myFile=React.createElement('ol',null,[
    React.createElement("li",null,"ORANGE"),
    React.createElement("li",null,"APPLE"),
    React.createElement("li",null,"GRAPES"),
    React.createElement("li",null,"BANANA"),
    React.createElement("li",null,"PINE APLLE"),
])
ReactDOM.render(myFile,reactRoot)
ReactDOM.render(header,fileHead)

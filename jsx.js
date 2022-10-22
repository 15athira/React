const reactRoot = document.getElementById("root")
const fileHead = document.getElementById("heads")

const header=(<h1>FRUITS</h1>)
const myfile=(
    <ul>
        <li>ORANGE</li>
        <li>APPLE</li>
        <li>GRAPES</li>
        <li>BANANA</li>
        <li>GUVA</li>
    </ul>
)
ReactDOM.render(myfile,reactRoot)
ReactDOM.render(header,fileHead)
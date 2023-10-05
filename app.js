let h1 = React.createElement(
    'h1',
    null,
    "HELLO ! I AM RAHUL KONDI"
)
let para = React.createElement(
    'p',
    null,
    "This is Paragraph"
)
let wapper = React.createElement(
    'div',{},
    [h1,para]
)

// this type of code is very huge to store that they interduce  JSX Syntax

let index = document.getElementById('root');
let root = ReactDOM.createRoot(index);
root.render(wapper);
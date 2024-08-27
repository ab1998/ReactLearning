// const heading = React.createElement("h1", {}, "Hello");
const heading = React.createElement('div',{},[React.createElement('div',{},[React.createElement('h1',{},'Hello'),React.createElement('h1',{},'Hello World')]),React.createElement('div',{},[React.createElement('h1',{},'Hello'),React.createElement('h1',{},'Hello World')])]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)


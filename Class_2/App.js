/* 
* Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)
* Create the same element using JSX
* Create a functional component of the same with JSX
* Pass attributes into the tag in JSX
* Composition of Component(Add a component inside another)
* {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX
 */


import React from 'react';
import ReactDOM from 'react-dom/client';

// 1. Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)
const heading1 = React.createElement('h1', { id: 'heading1', key: 0 }, "Heading 1 ");

const heading2 = React.createElement('h2', { id: 'heading2', key: 1 }, "Heading 2 ");

const heading3 = React.createElement('h3', { id: 'heading3', key: 2 }, "Heading 3 ");

const title = React.createElement('div', {
    id: 'container', className: "title", key: 2, style: {
        backgroundColor: 'lightblue',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center'
    }
}, [heading1, heading2, heading3]);

// 2. Create the same element using JSX
const TitleJSX = (
    <div id="container" className="title" style={{
        backgroundColor: 'lightblue',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center'
    }}>
        <h1 id="heading1" key ="1">Heading 1</h1>
        <h2 id="heading2" key="9">Heading 2</h2>
        <h3 id="heading3" key="2">Heading 3</h3>
    </div>
)

// 3. Create a functional component of the same with JSX
const TitleComponent = () => {
    return (
        <div id="container" className="title" style={{
            backgroundColor: 'lightblue',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '150px'
        }}>
            <h1 id="heading1" key ="1">Heading 1</h1>
            <h2 id="heading2" key="9">Heading 2</h2>
            <h3 id="heading3" key="2">Heading 3</h3>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(title); => directly rendering the element created using React.createElement
// root.render(TitleJSX); => directly rendering the element created using JSX
root.render(<TitleComponent />); // => rendering the functional component



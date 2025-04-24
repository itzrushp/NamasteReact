import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement('h1', {
    id: 'heading1', style: {
        background: 'blue',
        key: 0,
    }, className: 'headingggs',
}, "Heading 1 ");

const heading2 = React.createElement('h2', { id: 'heading2' , key : 1 }, "Heading 2 ");

const container = React.createElement('div', { id: 'container' , key : 2}, [heading1, heading2]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);


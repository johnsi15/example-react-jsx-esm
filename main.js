import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client'

// https://lenguajejs.com/javascript/modulos/que-es-esm/
// https://esm.sh/

import App from './App.js'

// const html = React.createElement(
//   'div',
//   {
//     className: 'hola',
//   },
//   React.createElement('h3', null, 'Hola mundo')
// )

const el = React.createElement(App, null)

ReactDOM.createRoot(document.getElementById('app')).render(el)

# Example react ESM with esm.sh

The script has to be of type module ` <script type="module" src="./main.js"></script>`

# [CDN](https://esm.sh/)

# [ESM](https://lenguajejs.com/javascript/modulos/que-es-esm/)

```javascript
import React from "https://esm.sh/react@18.2.0"
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"

const appElement = document.getElementById('app')

const root = ReactDOM.createRoot(appElement)

const el = React.createElement("section",{class:"container"},React.createElement("h3",null,"Hello world"));

root.render(el)

```

```javascript
// main.js
import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client'

import App from './App.js'

const el = React.createElement(App, null)

ReactDOM.createRoot(document.getElementById('app')).render(el)

```

```javascript
// App.js
import React from 'https://esm.sh/react@18.2.0'

function HolaMundo() {
  return React.createElement(
    'div',
    { className: 'hola' },
    React.createElement('h3', null, 'Hola mundo')
  )
}

export default HolaMundo


```
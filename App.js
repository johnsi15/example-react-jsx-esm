import React from 'https://esm.sh/react@18.2.0'

function HolaMundo() {
  return React.createElement(
    'div',
    { className: 'hola' },
    React.createElement('h3', null, 'Hola mundo')
  )
}

export default HolaMundo

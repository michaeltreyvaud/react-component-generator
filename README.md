# react-component-generator
React dummy component generator

## Get Started

Install dependencies
```js
npm install
```

## How To

Generate a component using the following command
```js
node index.js generate DirectoryName ComponentName
```

Where DirectoryName is the location you would like to place your new component and ComponentName is the name of the component you want to generate

## Example

The following command
```
node index.js generate MyDirectoy MyComponent
```

Will generate the following files

- MyDirectoy
    - MyComponent
        - index.js
        - MyComponent.js
        - MyComponent.module.css


### index.js content

The contents of the index.js file are as follows
```js
import MyComponent from './MyComponent';

export default MyComponent;
```

### MyComponent.js content

The contents of the MyComponent.js file are as follows
```js
import React from 'react';
import PropTypes from 'prop-types';

import styles from './MyComponent.module.css';

function MyComponent() {
  return (
    <div className={styles.container}>
      MyComponent
    </div>
  );
}

MyComponent.propTypes = {

};

MyComponent.defaultProps = {

};

export default MyComponent;
```

### MyComponent.module.css content

The contents of the MyComponent.module.css file are as follows
```js
.container {}
```

# TODO

- Make globally available
- Publish to npm
- Component options
    - No index
    - No dir
    - No style
    - Typescript options
# react-component-generator
React dummy component generator

## Get Started

Install dependencies

```js
npm install
```

## Example

Generate a component using the following command
```js
node index.js generate MyComponent
```

This will generate the following files

- MyComponent.js
- MyComponent.module.css


## Options

You can view the available options as follows
```js
node index.js generate --help
```

| Option   |      Description      |  Default |
|----------|:-------------|------:|
| -d, --directory <directory> |  Directory to place component | Directory where command was issued |
| --subdir |    Places component into its own directory location   |   false |


## Example using -d

Generate a component using the following command
```js
node index.js generate MyComponent -d MyDirectory
```

This will generate the following files

- MyDirectory
  - MyComponent.js
  - MyComponent.module.css


## Example using -d and --subdir

Generate a component using the following command
```js
node index.js generate MyComponent -d MyDirectory --subdir
```

This will generate the following files

- MyDirectory
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

- Make installable
- Publish to npm
- Additional options
    - No style
    - Typescript
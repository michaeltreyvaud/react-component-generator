const generateComponentContent = (name) => `import React from 'react';
import PropTypes from 'prop-types';

import styles from './${name}.module.css';

function ${name}() {
  return (
    <div className={styles.container}>
      ${name}
    </div>
  );
}

${name}.propTypes = {

};

${name}.defaultProps = {

};

export default ${name};
`;

module.exports = generateComponentContent;

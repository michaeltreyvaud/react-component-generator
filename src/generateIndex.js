const generateIndex = (name) => `import ${name} from './${name}';

export default ${name};
`;

module.exports = generateIndex;

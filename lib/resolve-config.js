const { isNil } = require("lodash");

module.exports = ({ packageRoot, projectRoot, output }) => ({
    packageRoot,
    projectRoot: isNil(projectRoot) ? "./" : projectRoot,
    output
});
const glob = require("glob");
const createPackage = require("unitypackage").default;

module.exports = ({packageRoot, projectRoot, output}, context) => {
    const { logger } = context;

    var metaFiles = [`${packageRoot}.meta`];
    glob.sync(`${packageRoot}/**/*.meta`, {}).map(file => {
        metaFiles.push(file);
    });
    
    createPackage(metaFiles, projectRoot, output, logger.log);
};
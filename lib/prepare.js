const glob = require("glob");

module.exports = ({packageRoot, projectRoot, output}, context) => {
    const { logger } = context;

    const metaFiles = [`${packageRoot}.meta`];
    glob.sync(`${packageRoot}/**/*.meta`, {}).map(file => {
        metaFiles.push(file);
    });

    let createUnityPackage = import("unitypackage").default;
    logger.log("T: " + createUnityPackage);
    createUnityPackage(metaFiles, projectRoot, output, logger.log);
};
import glob from "glob";
import createUnityPackage from "unitypackage";

export default function preparePackage({packageRoot, projectRoot, output}, context)
{
    const { logger } = context;

    const metaFiles = [`${packageRoot}.meta`];
    glob.sync(`${packageRoot}/**/*.meta`, {}).map(file => {
        metaFiles.push(file);
    });

    createUnityPackage(metaFiles, projectRoot, output, logger.log);
}
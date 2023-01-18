import verifyPackage from "./lib/verify.js";
import preparePackage from "./lib/prepare.js";

let verified;

export async function verifyConditions(pluginConfig, context) {
    const { options } = context;
    if (options.prepare) {
        const preparePlugin = castArray(options.prepare).find(config => config.path && config.path === "@iam1337/create-unitypackage") || {};

        pluginConfig.packageRoot = defaultTo(pluginConfig.packageRoot, preparePlugin.packageRoot);
        pluginConfig.projectRoot = defaultTo(pluginConfig.projectRoot, preparePlugin.projectRoot);
        pluginConfig.output = defaultTo(pluginConfig.output, preparePlugin.output);
    }

    verifyPackage(pluginConfig, context);
    verified = true;
}

export async function prepare(pluginConfig, context) {
    if (!verified) {
        verifyPackage(pluginConfig, context);
        verified = true;
    }

    preparePackage(pluginConfig, context);
}
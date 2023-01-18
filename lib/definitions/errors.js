import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

const pkg = require("../../package.json");
const [homepage] = pkg.homepage.split("#");
const linkify = (file) => `${homepage}/blob/master/${file}`;

export function EINVALIDPACKAGEROOT ({ packageRoot }) {
    return {
        message: "Invalid `packageRoot` option.",
        details: `The [packageRoot option](${linkify('README.md#packageRoot')}) option, must be a non empty \`String\`.
Your configuration for the \`packageRoot\` option is \`${packageRoot}\`.`
    }
}

export function EINVALIDPROJECTEROOT ({ projectRoot })
{
    return {
        message: "Invalid `projectRoot` option.",
        details: `The [projectRoot option](${linkify('README.md#projectRoot')}) option, if defined must be a non empty \`String\`.
Your configuration for the \`projectRoot\` option is \`${projectRoot}\`.`
    }
}

export function EINVALIDOUTPUT ({ output }) {
    return {
        message: "Invalid `output` option.",
        details: `The [output option](${linkify('README.md#output')}) option, must be a non empty \`String\` and must end with \`.unitypackage\`.
Your configuration for the \`output\` option is \`${output}\`.`
    }
}
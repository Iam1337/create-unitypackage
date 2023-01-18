import {isNil} from "lodash-es";

export default function resolveConfig({ packageRoot, projectRoot, output }) {
    return {
        packageRoot,
        projectRoot: isNil(projectRoot) ? "./" : projectRoot,
        output
    }
}
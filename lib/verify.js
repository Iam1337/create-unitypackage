import {isNil, isString} from "lodash-es";
import AggregateError from "aggregate-error";
import getError from "./get-error.js";
import resolveConfig from "./resolve-config.js";

const isNonEmptyString = (value) => !isNil(value) && isString(value) && value.trim();
const isEndWithUnitypackage = (value) => isNonEmptyString(value) && value.endsWith(".unitypackage");

const VALIDATORS = {
    packageRoot: isNonEmptyString,
    projectRoot: isNonEmptyString,
    output: isEndWithUnitypackage
};

export default function preparePackage(pluginConfig, context) {
    const options = resolveConfig(pluginConfig);
    const errors = Object.entries(options).reduce(
        (errors, [option, value]) => !VALIDATORS[option](value)
            ? [...errors, getError(`EINVALID${option.toUpperCase()}`, {[option]: value}, context)]
            : errors,
        []
    );

    if (errors.length > 0) {
        throw new AggregateError(errors);
    }
}
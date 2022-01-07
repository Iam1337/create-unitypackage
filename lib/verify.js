const { isString, isNil } = require("lodash");
const AggregateError = require("aggregate-error");
const getError = require("./get-error");
const resolveConfig = require("./resolve-config");

const isNonEmptyString = (value) => !isNil(value) && isString(value) && value.trim();
const isEndWithUnitypackage = (value) => isNonEmptyString(value) && value.endsWith(".unitypackage");

const VALIDATORS = {
    packageRoot: isNonEmptyString,
    projectRoot: isNonEmptyString,
    output: isEndWithUnitypackage
};

module.exports = (pluginConfig, context) => {
    const options = resolveConfig(pluginConfig);
    const errors = Object.entries(options).reduce(
        (errors, [option, value]) => !VALIDATORS[option](value)
            ? [...errors, getError(`EINVALID${option.toUpperCase()}`, { [option]: value }, context)]
            : errors,
        []
    );

    if (errors.length > 0) {
        throw new AggregateError(errors);
    }
};
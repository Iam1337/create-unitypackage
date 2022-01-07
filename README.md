# @iam1337/create-unitypackage

[**semantic-release**](https://github.com/semantic-release/semantic-release) plugin to create a [unitypackage](https://docs.unity3d.com/Manual/AssetPackages.html). Based on [unitypackage](https://github.com/pCYSl5EDgo/unitypackage) npm package.

[![⚙ Release](https://github.com/Iam1337/create-unitypackage/actions/workflows/ci.yml/badge.svg)](https://github.com/Iam1337/create-unitypackage/actions/workflows/ci.yml)
[![npm latest version](https://img.shields.io/npm/v/@iam1337/create-unitypackage/latest.svg)](https://www.npmjs.com/package/@iam1337/create-unitypackage)

| Step               | Description |
|--------------------|-------------|
| `verifyConditions` | Verify the `packageRoot`, `projectRoot` and `output` options configuration. |
| `prepare`          | Сreation unitypackage file. |

## Install

```bash
$ npm i @iam1337/create-unitypackage
```

## Usage

The plugin can be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

```json
{
  "plugins": [
    ["@iam1337/create-unitypackage", {
			"packageRoot": "Assets/Package",
			"projectRoot": "./",
			"output": "Package.unitypackage"
		}],
    ["@semantic-release/github", {
			"assets": [
				{"path": "Package.unitypackage", "label": "Package v${nextRelease.version}"}
			]
		}]
  ]
}
```

## Configuration

### Options

| Options | Description | Default |
|---------|-------------|---------|
| `packageRoot` | Path to the directory you want to archive to unitypackage inside the Assets directory. | - |
| `projectRoot` | Unity project directory. | `./` |
| `output` | Output unitypackage path. Must end with .unitypackage. | - |

**Note**: The `packageRoot` directory must have own .meta file.

# @iam1337/create-unitypackage

[**semantic-release**](https://github.com/semantic-release/semantic-release) plugin to create a [unitypackage](https://docs.unity3d.com/Manual/AssetPackages.html).

[![Build Status](https://github.com/semantic-release/npm/workflows/Test/badge.svg)](https://github.com/semantic-release/npm/actions?query=workflow%3ATest+branch%3Amaster)
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

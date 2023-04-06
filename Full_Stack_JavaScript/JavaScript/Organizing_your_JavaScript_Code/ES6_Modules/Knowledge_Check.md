## Explain what npm is and where it was commonly used before being adopted on the frontend.

Npm stands for node package manager and it was used on the backend.  It helps mantain your libraries up to date.

## Describe what npm init does and what package.json is.

`npm init` creates a package.json file according to your preferences. Package.json stores your configuration for the libraries.

## Know how to install packages using npm.

`npm install <package name>`

## Describe what a JavaScript module bundler like webpack is.

A JS module bundler takes all your modules and puts it into one file.

## Explain what the concepts “entry” and “output” mean as relates to webpack.

An entry is a path to the file based on which webpack should build it's bundle. The output is the path to your bundle file.

## Briefly explain what a development dependency is.

A development dependecy is used only in development and it is not needed on deployment.

## Explain what “transpiling code” means and how it relates to frontend development.

Transpiling code means making your code compatible with older browser version.

## Briefly describe what a task runner is and how it’s used in frontend development.

A task runner is a npm script which automates things like building.

## Describe how to write an npm automation script.

Add a new property to the `"scripts"` object inside package.json.

## Explain one of the main benefits of writing code in modules.

Writing code in modules helps us organize the code and improve performance. Re-usability is the main benefit of writing code in modules.

## Explain “named exports” and “default exports”.

Named exports are usually multiplae exports while default exports are exports that can be exported once.
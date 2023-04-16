const fs = require('fs');
const path = require('path');
const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const resolve = require("resolve");

// TODO: accept ast as paramenter instead of parsing file with babel.
function getAllComponentsFromFile(ast) {
    const exported = []
    traverse(ast, {
        ExportDefaultDeclaration(path) {
            const defaultDeclaration = path.node.declaration;
        exported.push({name:defaultDeclaration.name, default: true})
        },
    });
    return exported
}

module.exports.getAllComponentsFromFile = getAllComponentsFromFile

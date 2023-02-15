/* eslint-disable @typescript-eslint/no-var-requires */
const Assets = require("@washingtonpost/wpds-assets");
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const rule = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Encourages developers to use "@washingtonpost/wpds-assets" when adding an SVG to React code.',
        },
        hasSuggestions: true,
    },
    create: function (context) {
        return {
            JSXElement: function (node) {
                if (node.openingElement.name.name === 'svg') {
                    const svgChildren = node.children.filter(child => child.type === 'JSXElement');
                    const isInlineSvg = svgChildren.every(child => child.openingElement.name.name === 'path' || child.openingElement.name.name === 'rect' || child.openingElement.name.name === 'circle' || child.openingElement.name.name === 'line' || child.openingElement.name.name === 'polyline' || child.openingElement.name.name === 'polygon');
                    if (isInlineSvg) {
                        context.report({
                            node,
                            message: 'Please use "@washingtonpost/wpds-assets" instead of inline SVG.',
                            suggest: [
                                {
                                    desc: 'Add "@washingtonpost/wpds-assets" to your imports.',
                                    fix: function (fixer) {
                                        // suggest fix to use icon from wpds-assets after analyzing the SVG path data and finding the closest match
                                        // get path data from svgChildren
                                        // find closest match in wpds-assets
                                        // suggest fix to use wpds-assets icon
                                        const svgPathData = svgChildren.map(child => child.openingElement.attributes.find(attr => attr.name.name === 'd').value.value).join(' ').replace(' M1 1h10L6 6 1 1zM0 0h12v1H0V0z', '');
                                        const wpdsAssetsIcon = findClosestMatch(svgPathData);
                                        // add component to the an existing import statement or create a new import statement
                                        const importStatement = context.getSourceCode().ast.body.find(node => node.type === 'ImportDeclaration' && node.source.value === '@washingtonpost/wpds-assets');
                                        if (importStatement) {
                                            // add component to the existing import statement
                                            const existingImport = importStatement.specifiers.find(specifier => specifier.type === 'ImportSpecifier' && specifier.imported.name === wpdsAssetsIcon);
                                            if (existingImport) {
                                                return;
                                            }
                                            return fixer.insertTextAfter(importStatement.specifiers[importStatement.specifiers.length - 1], `, ${wpdsAssetsIcon}`);
                                        }
                                        return fixer.insertTextBefore(node, `import { ${wpdsAssetsIcon} } from '@washingtonpost/wpds-assets';`);
                                    }
                                },
                                {
                                    desc: 'Replace svg with wpds-assets asset.',
                                    fix: function (fixer) {
                                        // suggest fix to use icon from wpds-assets after analyzing the SVG path data and finding the closest match
                                        // get path data from svgChildren
                                        // find closest match in wpds-assets
                                        // suggest fix to use wpds-assets icon
                                        const svgPathData = svgChildren.map(child => child.openingElement.attributes.find(attr => attr.name.name === 'd').value.value).join(' ').replace(' M1 1h10L6 6 1 1zM0 0h12v1H0V0z', '');
                                        const wpdsAssetsIcon = findClosestMatch(svgPathData);
                                        return fixer.replaceText(node, `<${wpdsAssetsIcon} />`);
                                    }
                                },
                            ],
                        });
                    }
                }
            },
        };
    },
};

const findClosestMatch = (svgPathData) => {
    let closestMatch = '';
    Object.keys(Assets).map((iconName) => {
        const IconComponent = Assets[iconName];
        // d is the path data
        // use react to render the icon and get the path data but don't use jsx because it will be a string
        const boop = ReactDOMServer.renderToStaticMarkup(React.createElement(IconComponent));
        // get the path data from the rendered icon
        // compare the path data to the svgPathData
        // if the path data is the same, return the iconName
        const iconPathData = boop.match(/d="([^"]*)"/)[1];

        if (iconPathData === svgPathData) {
            console.log({ iconName })
            closestMatch = iconName;
        }
    });

    console.log(closestMatch)

    return closestMatch;
};

module.exports = rule;
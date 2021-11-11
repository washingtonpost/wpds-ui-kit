const template = require("@babel/template");

const buildAssign = template.smart(
	"Object.assign(COMPONENT, { displayName: DISPLAY_NAME });"
);

export const pureDisplayNames = () => ({
	visitor: {
		AssignmentExpression(path) {
			if (
				path.node.left.type === "MemberExpression" &&
				path.node.left.property.name === "displayName" &&
				path.node.right.name
			) {
				const COMPONENT = path.node.left.object.name;
				const DISPLAY_NAME = path.node.right.name;
				const ast = buildAssign({ COMPONENT, DISPLAY_NAME });
				path.replaceWith(ast);
				path.addComment("leading", "#__PURE__");
			}
		},
	},
});

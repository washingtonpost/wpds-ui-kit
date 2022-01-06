module.exports = function (plop) {
	plop.setGenerator("component", {
		description: "Create a new WPDS UI kit component",
		prompts: [
			{
				type: "input",
				name: "packageName",
				message:
					"What is the name of the package? (Don't include the @wpds- prefix)",
				validate: function (value) {
					// test if the value has "wpds-" prefix
					if (value.indexOf("wpds-") === 0) {
						return "Please don't include the 'wpds-' prefix in the package name";
					}

					if (/.+/.test(value)) {
						return true;
					}

					return "package name is required";
				},
			},
			{
				type: "input",
				name: "componentName",
				message:
					"What is the name of the component? i.e. VisuallyHidden",
				validate: function (value) {
					if (/.+/.test(value)) {
						return true;
					}

					return "component name is required";
				},
			},
		],
		actions: [
			{
				type: "addMany",
				destination: `../ui/{{ packageName }}`,
				base: "../plop-templates/component",
				templateFiles: "../plop-templates/component/**/*",
				data: {
					packageName: "{{ packageName }}",
					componentName: "{{ componentName }}",
				},
			},
		],
	});
};

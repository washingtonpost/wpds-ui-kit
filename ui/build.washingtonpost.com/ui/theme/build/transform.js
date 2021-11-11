// transform
const fs = require('fs');
const path  =require ("path").resolve;
const Tokens = require ('../src/wpds.tokens');


// put your code here to be transformed
const dark={};
const light={};
const staticColors = {};
const theme={};
const sizes = {};
const spaces = {};
const radii = {};
const fonts = {};
const fontSizes = {};
const fontWeights = {};
const lineHeights = {};
const shadows = {};
let base;

// const motion = {}; need to figure out best format

// Builds out light tokens
function buildTokens(){
	//Light color tokens
	for(var key in Tokens){
		switch(key){
			case "color":
				handleColor();
				break;
			case "size":
				loopAndAdd(Tokens[key],sizes);
				break;
			case "space":
				loopAndAdd(Tokens[key],spaces);
				break;
			case "fonts":
				loopAndAdd(Tokens[key],fonts);
				break;
			case "fontSize":
				loopAndAdd(Tokens[key],fontSizes);
				break;
			case "fontWeights":
				loopAndAdd(Tokens[key],fontWeights);
				break;
			case "lineHeight":
				loopAndAdd(Tokens[key],lineHeights);
				break;
			case "radii":
				loopAndAdd(Tokens[key],radii);
				break;
			case "shadow":
				loopAndAdd(Tokens[key],shadows);
				break;
			case "baseSize":
				base=Tokens[key].value;
				break;
			// case "Motion":
			// 	loopAndAdd(Tokens[key],motion);
			// 	break;
			default:
				break;
		}
	}
}
function handleColor(){
	for(var colorGroup in Tokens.color){
		switch(colorGroup){
			case 'light':
				loopAndAdd(Tokens.color[colorGroup],light)
				break;
			case 'dark':
				loopAndAdd(Tokens.color[colorGroup],dark)
				break;
			case 'static':
				loopAndAdd(Tokens.color[colorGroup],staticColors,"-static")
				break;
			case 'theme':
				loopAndAdd(Tokens.color[colorGroup],theme)
				break;
			default:
				break;
		}
	}
}
/** Loops through tokens and maps to js object*/
function loopAndAdd(tokens,ToObject,hyphen){
	for(var token in tokens){
		if(tokens[token].hasOwnProperty("value")){
			let value=tokens[token].value
			//Checks to see if it is a reference to another token
			if(value[0]=="{"){
				//If contains stitches specific syntax
				if(tokens[token].hasOwnProperty("stitches")){
					ToObject[token]=tokens[token].stitches;
				}else{
					value=value.substring(1,value.length-1);
					const lookedUpValue=lookupValue(value);
					ToObject[`${token}${hyphen?hyphen:""}`]=lookedUpValue;
				}
			}
			else{
				ToObject[`${token}${hyphen?hyphen:""}`]=value;
			}
		}
	}
}

/** Looks up the value of a token alias path depth supported up to 3 token[1][2][3]*/
function lookupValue(lookUpToken){
	const path=lookUpToken.split('.');
	let value;
	switch(path.length){
		case 1:
			value=Tokens[path[0]].value;
			break;
		case 2:
			value=Tokens[path[0]][path[1]].value;
			break;
		case 3:
			value=Tokens[path[0]][path[1]][path[2]].value;
			break;
		default:
			break;
	}
	return value;
}


createTransformTokens();
function createTransformTokens(){
	try {
		buildTokens();
		fs.mkdir(path(__dirname,'../src/dist'),(err,data)=>{
			// const TokenArray=[light,dark,staticColors,theme,sizes,space,radii,fonts,fontSizes,fontWeights,shadow]
			// let JSONArray = JSON.stringify(TokenArray, null, 2);
			let Data=`
			export const base=${JSON.stringify(base)}
			export const light=${JSON.stringify(light)}
			export const dark=${JSON.stringify(dark)}
			export const staticColors=${JSON.stringify(staticColors)}
			export const defaultTheme=${JSON.stringify(theme)}
			export const sizes=${JSON.stringify(sizes)}
			export const spaces=${JSON.stringify(spaces)}
			export const radii=${JSON.stringify(radii)}
			export const fonts=${JSON.stringify(fonts)}
			export const fontSizes=${JSON.stringify(fontSizes)}
			export const fontWeights=${JSON.stringify(fontWeights)}
			export const lineHeights=${JSON.stringify(lineHeights)}
			export const shadows=${JSON.stringify(shadows)}
			`
			fs.writeFile(path(__dirname,'../src/dist/tokens.js'), Data, "utf8", (err, data) => {
			  console.log("Created token file in ../src/dist/tokens.js");
			});
		  })
	} catch (error) {
		console.log(error);
	}
}
// end of file

/**
 * jsonDataSet [Json Oject] @version 1.0
 *  
 * Made with ❤️ By Dibesh Raj Subedi(https://github.com/itSubeDibesh)
 * 
 * This File Sends the Json Dataset For application
 */
const
	appName = 'Calculator Web App',
	version = '<code>v1.0</code>',
	authorName = "Dibesh Raj Subedi",
	authorLink = "https://github.com/itSubeDibesh",
	github = "https://github.com/itSubeDibesh/Calculator",
	android = "#",
	ios = "#",
	windows = "#",
	linux = "#",
	mac = "#",
	extension = "#",
	commonClass = "btn w-100 h5 text-center text-uppercase font-weight-bolder",
	aboutSvg = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-info-circle-fill"fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd"d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" /></svg>`,
	settingSvg = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-sliders"fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd"d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z" /></svg>`,
	historySvg = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-clock-history"fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd"d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" /><path fill-rule="evenodd"d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" /><path fill-rule="evenodd"d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" /></svg>`,
	themeSvg = `<svg width="1em" height="1em" viewBox="0 0 16 16"class="bi bi-brush-fill text-warning" fill="currentColor"xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd"d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.117 8.117 0 0 1-3.078.132 3.658 3.658 0 0 1-.563-.135 1.382 1.382 0 0 1-.465-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.393-.197.625-.453.867-.826.094-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.2-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.175-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04z" /></svg>`
	;

export const
	jsonDataSet = {
		"calculatorButton": {
			"0": [
				{
					"identity": "OMOD",
					"value": "%",
					"class": `${commonClass} btn-operator`,
					"buttonColSize": "col-3"
				},
				{
					"identity": "ODIV",
					"value": "/",
					"class": `${commonClass} btn-operator`,
					"buttonColSize": "col-3"
				},
				{
					"identity": "OMUL",
					"value": "*",
					"class": `${commonClass} btn-operator`,
					"buttonColSize": "col-3"
				},
				{
					"identity": "SAC",
					"value": "AC",
					"class": `${commonClass} btn-danger`,
					"buttonColSize": "col-3"
				}
			],
			"1": [
				{
					"identity": "N7",
					"value": "7",
					"class": `${commonClass} btn-button`,
					"buttonColSize": "col-3"
				},
				{
					"identity": "N8",
					"value": "8",
					"class": `${commonClass} btn-button`,
					"buttonColSize": "col-3"
				},
				{
					"identity": "N9",
					"value": "9",
					"class": `${commonClass} btn-button`,
					"buttonColSize": "col-3"
				},
				{
					"identity": "OSUB",
					"value": "-",
					"class": `${commonClass} btn-operator`,
					"buttonColSize": "col-3"
				}
			],
			"2": [
				{
					"identity": "N4",
					"value": "4",
					"class": `${commonClass} btn-button`,
					"buttonColSize": "col-3"
				},
				{
					"identity": "N5",
					"value": "5",
					"class": `${commonClass} btn-button`,
					"buttonColSize": "col-3"
				},
				{
					"identity": "N6",
					"value": "6",
					"class": `${commonClass} btn-button`,
					"buttonColSize": "col-3"
				},
				{
					"identity": "OSUM",
					"value": "+",
					"class": `${commonClass} btn-operator h-200`,
					"buttonColSize": "col-3"
				}
			],
			"3": [
				{
					"identity": "N1",
					"value": "1",
					"class": `${commonClass} btn-button`,
					"buttonColSize": "col-3"
				},
				{
					"identity": "N2",
					"value": "2",
					"class": `${commonClass} btn-button`,
					"buttonColSize": "col-3"
				},
				{
					"identity": "N3",
					"value": "3",
					"class": `${commonClass} btn-button`,
					"buttonColSize": "col-3"
				}
			],
			"4": [
				{
					"identity": "N0",
					"value": "0",
					"class": `${commonClass} btn-button`,
					"buttonColSize": "col-3"
				},
				{
					"identity": "SDOT",
					"value": ".",
					"class": `${commonClass} btn-dot`,
					"buttonColSize": "col-3"
				},
				{
					"identity": "SEQ",
					"value": "=",
					"class": `${commonClass} btn-result`,
					"buttonColSize": "col-6"
				}
			],
			"length": 5
		},
		"calculatorInputAttributes": [
			{ "Key": "type", "Value": "text" },
			{ "Key": "name", "Value": "result" },
			{ "Key": "id", "Value": "result" },
			{ "Key": "disabled" }
		],
		"appInformation": {
			version,
			appName,
			"github": {
				"name": "@Github",
				"link": github,
			},
			"android": {
				"name": "@Android",
				"link": android,
			},
			"ios": {
				"name": "@IOS",
				"link": ios,
			},
			"windows": {
				"name": "@Windows",
				"link": windows,
			},
			"linux": {
				"name": "@Linux",
				"link": linux,
			},
			"mac": {
				"name": "@Mac OS",
				"link": mac,
			},
			"extension": {
				"name": "@Extensions",
				"link": extension,
			}
		},
		"svg": {
			aboutSvg,
			settingSvg,
			historySvg,
			themeSvg
		},
		"authorDetails": {
			"attributes": [
				{ "Key": "href", "Value": authorLink },
				{ "Key": "target", "Value": "blank" }
			],
			authorName
		}
	}
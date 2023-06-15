const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cucumber-json/',
	reportPath: './cucumber-report/',
});
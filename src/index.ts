import { q1 } from './questions/q1-login';
import { q2 } from './questions/services/q2-services';
import { q3 } from "./questions/q3-homepage";
import { q5 } from "./questions/q5-admindash";
import { q6 } from './questions/digital-wallet/q6-identification';
import { q7 } from './questions/q7-userDash';
import { q4 } from './questions/datapanel/q4-datapanel';
import chalk from 'chalk';

export const baseUrl = 'http://localhost:3002';




async function start() {
	/// Display welcome message


	console.log();
	console.log();

	let figlet = require('figlet');
	figlet.text('Twakkalna  services', {
		font: 'Doom',

		horizontalLayout: 'default',
		verticalLayout: 'default',
		width: 90,
		whitespaceBreak: true
	}, function (err: any, data: any) {
		if (err) {
			console.log('Something went wrong...');
			console.dir(err);
			return;
		}
		console.log(data);
	});


	console.log(chalk.bgBlueBright.bgBlue('Welcome to Twakkalna services website'));
	console.log();
	console.log();

	const role = await q1();
	console.log(role)

	while (true) {
		if (role == 'Admin') {

			await q5();
			console.log();
			console.log();

			await q2();
			console.log();
			console.log();



			await q4();
			console.log(q6);
			console.log();

			await q6();
			console.log();
			console.log();




		} else {

			await q7();
			console.log();
			console.log();

			await q3();
			console.log();
			console.log();
		}
	}
}

start();

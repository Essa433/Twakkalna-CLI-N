import { prompt } from 'inquirer';
import { q2 } from './services/q2-services';
import { q3 } from './q3-homepage';
import { q4 } from '../questions/datapanel/q4-datapanel';
import { q6 } from './digital-wallet/q6-identification';

export async function q5() {
    const { q5Answer } = await prompt({
        type: 'list',
        name: 'q5Answer',
        message: 'Please choose one!',
        choices: [
            '1-  Services ',
            '2- Data Panel',
            '3- Home Page ',
            '4- Digital Wallet 🐬',
            '5- Quit app 🤬',
        ],
        filter: (val) => +val[0],
    });


    switch (q5Answer) {
        case 1:
            await q2();
            break;

        case 2:
            await q4();
            break;

        case 3:
            await q3();
            break;


        case 4:
            console.log();
            return;


        case 5:
            console.log('Byyyye and see you soon!');
            process.exit(0);



        default:
            break;
    }
}

// function createContact() {
//     throw new Error('Function not implemented.');
// }


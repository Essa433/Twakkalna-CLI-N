import { prompt } from 'inquirer';
import { searchServices } from '../../controllers/Services/search-service';

import { q10 } from './q10-health-serv';
import { q11 } from './q11-education-serv';
import { q9 } from './q9-puplic-serv';

export async function q8() {
    const { q8Answer } = await prompt({
        type: 'list',
        name: 'q8Answer',
        message: 'Please choose a service!',
        choices: [
            '1- Shearch for service with service name ',
            '2- Public_service ',
            '3- Health_service ',
            '4- Education_service ',
            '5- go back'
        ],
        filter: (val) => +val[0],
    });

    switch (q8Answer) {

        case 1:
            await searchServices();
            break;

        case 2:
            await q9();
            break;

        case 3:
            await q10();
            break;

        case 4:
            await q11();
            break;

        case 5:
            console.log('go back');
            return;

        default:
            break;
    }
}
// function createContact() {
//     throw new Error('Function not implemented.');
// }


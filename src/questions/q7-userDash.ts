import { prompt } from 'inquirer';
import { getDataPanel } from '../controllers/dataPanel/get-dataPanel';
import { getFeaturedServices } from '../controllers/Services/featured-service';
import { getService } from '../controllers/Services/get-service';
import { searchServices } from '../controllers/Services/search-service';
import { q15 } from './datapanel/q15-bookDatapanel';
import { q20 } from './digital-wallet/q20-digitalWallet';

import { q3 } from './q3-homepage';
import { q5 } from './q5-admindash';
import { q8 } from './services/q8-bookservice';


export async function q7() {
    const { q7Answer } = await prompt({
        type: 'list',
        name: 'q7Answer',
        message: 'hello to twakkalna homepage !',
        choices: [
            '1- Home page ',
            '2- Featured service',
            '3- service ',
            '4- Data panel ',
            '5- Digital Wallet ',
            '6- Quit app '


        ],
        filter: (val) => +val[0],
    });

    switch (q7Answer) {
        case 1:
            await q3();
            break;

        case 2:
            await getFeaturedServices();
            break;

        case 3:
            await q8();
            break;

        case 4:
            await q15();
            break;

        case 5:
            await q20();
            break;


        case 6:
            console.log('Byyyye and see you soon!');
            process.exit(0);



        default:
            break;
    }
}
// function createContact() {
//     throw new Error('Function not implemented.');
// }


import { prompt } from 'inquirer';
import Choices from 'inquirer/lib/objects/choices';
import { getPassport } from '../../controllers/dataPanel/passport/get-passport';
import { getVehicles } from '../../controllers/dataPanel/vehicles/get-vehicles';
import { q13 } from './q13-dataAppoitment';


export async function q15() {
    const { q15Answer } = await prompt({
        type: 'list',
        name: 'q15Answer',
        message: 'Please choose a service!',
        choices: [
            '1- Appoitment ',
            '2- Passport ',
            '3- vehicles ',
            '4- go back'
        ],
        filter: (val) => +val[0],
    });

    switch (q15Answer) {
        case 1:
            await q13();
            break;

        case 2:
            await getPassport();
            break;

        case 3:
            await getVehicles();
            break;

        // case 4:
        //     await deleteService();
        //     break;

        // case 5:
        //     await searchServices();
        //     break;


        case 4:
            console.log('go back');
            return;

        default:
            break;
    }
}
// function createContact() {
//     throw new Error('Function not implemented.');
// }


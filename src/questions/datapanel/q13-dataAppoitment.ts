import { prompt } from 'inquirer';
import Choices from 'inquirer/lib/objects/choices';
import { appoitmentQias } from '../../controllers/dataPanel/appoitmentDatapanel.ts/appoitment';
import { ramzTwakalna } from '../../controllers/Services/public-services.ts/puplic';


export async function q13() {
    const { q13Answer } = await prompt({
        type: 'list',
        name: 'q13Answer',
        message: 'Please choose a Data !',
        choices: [
            '1- qias quiz ',
            '2- go back'
        ],
        filter: (val) => +val[0],
    });

    switch (q13Answer) {
        case 1:
            await appoitmentQias();
            break;


        // case 4:
        //     await deleteService();
        //     break;

        // case 5:
        //     await searchServices();
        //     break;


        case 2:
            console.log('go back');
            return;

        default:
            break;
    }
}
// function createContact() {
//     throw new Error('Function not implemented.');
// }


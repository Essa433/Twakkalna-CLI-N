import { prompt } from 'inquirer';
import Choices from 'inquirer/lib/objects/choices';
import { tabara } from '../../controllers/Services/health-services.ts/tabara';
import { ramzTwakalna } from '../../controllers/Services/public-services.ts/puplic';


export async function q10() {
    const { q10Answer } = await prompt({
        type: 'list',
        name: 'q10Answer',
        message: 'Please choose a Health service!',
        choices: [
            '1- tabara ',
            '2- go back'
        ],
        filter: (val) => +val[0],
    });

    switch (q10Answer) {
        case 1:
            await tabara();
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


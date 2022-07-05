import { prompt } from 'inquirer';
import Choices from 'inquirer/lib/objects/choices';
import { ramzTwakalna } from '../../controllers/Services/public-services.ts/puplic';


export async function q9() {
    const { q9Answer } = await prompt({
        type: 'list',
        name: 'q9Answer',
        message: 'Please choose a service!',
        choices: [
            '1- Ramz Twakkalna ',
            '2- go back'
        ],
        filter: (val) => +val[0],
    });

    switch (q9Answer) {
        case 1:
            await ramzTwakalna();
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


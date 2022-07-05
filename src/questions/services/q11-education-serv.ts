import { prompt } from 'inquirer';
import Choices from 'inquirer/lib/objects/choices';
import { cheldrenGrade } from '../../controllers/Services/Education-services.ts/puplic';


export async function q11() {
    const { q11Answer } = await prompt({
        type: 'list',
        name: 'q11Answer',
        message: 'Please choose a Health service!',
        choices: [
            '1- cheldren grade ',
            '2- go back'
        ],
        filter: (val) => +val[0],
    });

    switch (q11Answer) {
        case 1:
            await cheldrenGrade();
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


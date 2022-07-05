import { prompt } from 'inquirer';
import { createIdentification } from '../../controllers/Identification.ts/create-identification';
import { deleteIdentification } from '../../controllers/Identification.ts/delete-identification';
// import { getiIdentification } from '../../controllers/Identification.ts/get-identification';
import { updateIdentification } from '../../controllers/Identification.ts/update-identification';
import { q5 } from '../q5-admindash';

export async function q6() {
    const { q6Answer } = await prompt({
        type: 'list',
        name: 'q6Answer',
        message: 'Please choose one!',
        choices: [
            '1- View Identification ',
            '2- Add new Identification 🐊',
            '3- Update Identification 🐬',
            '4- Delete Identification ❌',
            '5- Quit app 🤬',
            '6- go back'
        ],
        filter: (val) => +val[0],
    });

    switch (q6Answer) {
        // case 1:
        //     await getiIdentification();
        //     break;

        case 2:
            await createIdentification();
            break;

        case 3:
            await updateIdentification();
            break;

        case 4:
            await deleteIdentification();
            break;

        case 5:
            console.log('Byyyye and see you soon!');
            process.exit(0);

        case 6:
            console.log('go back');
            return q5();

        default:
            break;
    }
}
// function createContact() {
//     throw new Error('Function not implemented.');
// }


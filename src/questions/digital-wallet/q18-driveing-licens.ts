import { prompt } from 'inquirer';
import { q5 } from '../q5-admindash';
import { createLicens } from '../../controllers/licens/create-Licen';
// import { getLicens } from '../../controllers/licens/get-Licen';
import { deleteLicen } from '../../controllers/licens/delete-Licen';
import { updateLicen } from '../../controllers/licens/update-Licen';

export async function q18() {
    const { q18Answer } = await prompt({
        type: 'list',
        name: 'q18Answer',
        message: 'Please choose one!',
        choices: [
            '1- View Driving Licens ',
            '2- Add new Driving Licens 🐊',
            '3- Update Driving Licens 🐬',
            '4- Delete Driving Licens ❌',
            '5- Quit app 🤬',
            '6- go back'
        ],
        filter: (val) => +val[0],
    });

    switch (q18Answer) {
        // case 1:
        //     await getLicens();
        //     break;

        case 2:
            await createLicens();
            break;

        case 3:
            await updateLicen();
            break;

        case 4:
            await deleteLicen();
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


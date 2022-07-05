import { prompt } from 'inquirer';
import { createService } from '../../controllers/Services/create-service';
import { deleteService } from '../../controllers/Services/delete-service';
import { getService } from '../../controllers/Services/get-service';
import { searchServices } from '../../controllers/Services/search-service';
import { updateService } from '../../controllers/Services/update-service';
import { q5 } from '../q5-admindash';

export async function q2() {
    const { q2Answer } = await prompt({
        type: 'list',
        name: 'q2Answer',
        message: 'Please choose one!',
        choices: [
            '1- View Services ',
            '2- Add new service 🐊',
            '3- Update service 🐬',
            '4- Delete service ❌',
            '5- Search service by name 🔍',
            '6- Quit app 🤬',
            '7- go back'
        ],
        filter: (val) => +val[0],
    });

    switch (q2Answer) {
        case 1:
            await getService();
            break;

        case 2:
            await createService();
            break;

        case 3:
            await updateService();
            break;

        case 4:
            await deleteService();
            break;

        case 5:
            await searchServices();
            break;

        case 6:
            console.log('Byyyye and see you soon!');
            process.exit(0);

        case 7:
            console.log('go back');
            return q5();

        default:
            break;
    }
}
// function createContact() {
//     throw new Error('Function not implemented.');
// }


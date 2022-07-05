import axios from 'axios';
import { prompt } from 'inquirer';
import { v4 } from 'uuid';
import { baseUrl } from '../..';

export async function bookService() {

    const serviceData = await prompt([
        {
            type: 'input',
            name: 'type',
            message: 'Public_service 📱 ',
        },


        // await axios.post(baseUrl + '/services', {
        // 	id: v4(),
        // 	...serviceData,
        // });

    ]);
    console.log(`Service for ${serviceData.type}, has been added ✅`);
}


export async function bookService2() {

    const serviceData = await prompt([
        {
            type: 'input',
            name: 'type',
            message: 'Education_service 📱 ',
        },


        // await axios.post(baseUrl + '/services', {
        // 	id: v4(),
        // 	...serviceData,
        // });

    ]);
    console.log(`Service for ${serviceData.type}, has been added ✅`);
}


export async function bookService3() {

    const serviceData = await prompt([
        {


            type: 'input',
            name: 'type',
            message: 'Health_service 📱 ',
        }


        // await axios.post(baseUrl + '/services', {
        // 	id: v4(),
        // 	...serviceData,
        // });
    ]);
    console.log(`Service for ${serviceData.type}, has been added ✅`);
}



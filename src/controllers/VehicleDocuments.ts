export function createNewVehicleDocument(vehicles: any[], newVehicle: { id: any; }){

    const vehicleInndex = vehicles.findIndex((el: { id: any; }) => el.id == newVehicle.id)
if (vehicleInndex === -1){
    vehicles.push(newVehicle);
}else{
    vehicles[vehicleInndex] = {
        ...vehicles[vehicleInndex],
        ...newVehicle,
    };
}
return vehicles;
}






// import { Document } from "mongoose"

// // External Dependancies
// // Get Data Models
// const Car = require('../models/VehicleDocuments')

// // Get all cars
// exports.getCars = async (req: any, reply: any) => {
//   try {
//     const cars = await Car.find()
//     return cars
//   } catch (err) {
//     throw boom.boomify(err)
//   }
// }

// // Get single car by ID
// exports.getSingleCar = async (req: { params: { id: any } }, reply: any) => {
//   try {
//     const id = req.params.id
//     const car = await Car.findById(id)
//     return car
//   } catch (err) { }
// }


// Add a new car
// exports.addVehicleDocuments = async (req: { body: any }, reply: any) => {
//     try {
//         const doc = new Document(req.body)
//         return doc.save()
//     } catch (err) { }
// }



// // // Update an existing car
// // exports.updateCar = async (req: { params: { id: any }; body: any }, reply: any) => {
// //   try {
// //     const id = req.params.id
// //     const car = req.body
// //     const { ...updateData } = car
// //     const update = await Car.findByIdAndUpdate(id, updateData, { new: true })
// //     return update
// //   } catch (err) {
// //     throw boom.boomify(err)
// //   }
// // }

// // // Delete a car
// // exports.deleteCar = async (req: { params: { id: any } }, reply: any) => {
// //   try {
// //     const id = req.params.id
// //     const car = await Car.findByIdAndRemove(id)
// //     return car
// //   } catch (err) {
// //     throw boom.boomify(err)
// //   }
// // }

import { Static, Type } from '@sinclair/typebox';
import { FastifyInstance } from 'fastify';
import { createNewVehicleDocument } from '../controllers/VehicleDocuments';
import { server } from '../server';

const Vehicle = Type.Object({
    id: Type.String(),
    Release_Date: Type.String(),
    Expire_Date: Type.String(),
    Type: Type.String(),
    limitations: Type.String()
});
type Vehicle = Static<typeof Vehicle>;

const GetVehicleQuery = Type.Object({
    Type: Type.Optional(Type.String()),
});
type GetVehicleQuery = Static<typeof GetVehicleQuery>;

export let vehicles: Vehicle[] = [
    { id: '1', Release_Date: '23/6/2022', Expire_Date: '22/2/2024', Type: 'fff', limitations: 'no' },
    { id: '2', Release_Date: '23/6/2022', Expire_Date: '22/2/2024', Type: 'fff', limitations: 'no' },
    { id: '3', Release_Date: '23/6/2022', Expire_Date: '22/2/2024', Type: 'fff', limitations: 'no' },

];

export default async function (server: FastifyInstance) {
    server.route({
        method: 'PUT',
        url: '/VehicleDocuments',
        schema: {
            summary: 'Creates new VehicleDocuments',
            tags: ['VehicleDocuments'],
            body: Vehicle,
        },
        handler: async (request, reply) => {
            const newVehicle: any = request.body;
            return createNewVehicleDocument(vehicles, newVehicle);
        },
    });


    server.route({
        method: 'PATCH',
        url: '/VehicleDocuments/:id',
        schema: {
            summary: 'Update a VehicleDocuments by id',
            tags: ['VehicleDocuments'],
            body: Type.Partial(Vehicle),
            params: Type.Object({
                id: Type.String(),
            }),
        },
        handler: async (request, reply) => {
            const newVehicle: any = request.body;
            return createNewVehicleDocument(vehicles, newVehicle);
        },
    });

    server.route({
        method: 'DELETE',
        url: '/VehicleDocuments/:id',
        schema: {
            summary: 'Deletes a VehicleDocuments',
            tags: ['VehicleDocuments'],
            params: Type.Object({
                id: Type.String(),
            }),
        },
        handler: async (request, reply) => {
            const id = (request.params as any).id as string;

            vehicles = vehicles.filter((c) => c.id !== id);

            return vehicles;
        },
    });


    server.route({
        method: 'GET',
        url: '/VehicleDocuments/:id',
        schema: {
            summary: 'Returns one VehicleDocuments or null',
            tags: ['VehicleDocuments'],
            params: Type.Object({
                id: Type.String(),
            }),
            response: {
                '2xx': Type.Union([Vehicle, Type.Null()]),
            },
        },
        handler: async (request, reply) => {
            const id = (request.params as any).id as string;

            return vehicles.find((c) => c.id === id) ?? null;
        },
    });


    server.route({
        method: 'GET',
        url: '/allVehicleDocuments',
        schema: {
            summary: 'Gets all VehicleDocuments',
            tags: ['VehicleDocuments'],
            querystring: GetVehicleQuery,
            response: {
                '2xx': Type.Array(Vehicle),
            },
        },
        handler: async (request, reply) => {
            const query = request.query as GetVehicleQuery;

            if (query.Type) {
                return vehicles.filter((c) => c.Type.includes(query.Type ?? ''));
            } else {
                return vehicles;
            }
        },
    });
}

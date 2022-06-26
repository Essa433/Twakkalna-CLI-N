import { FastifyInstance } from "fastify";

export default async function (server: FastifyInstance) {


}


// export default async (instance) => {
//     const {Movie} = instance; // mongoose model provided by the db plugin
     
//     // CREATE
//     instance.route({
//         method:'POST',
//         url:'/',
//         schema:{ /* ... */ } // validation schema
//         async handler(req, res){
//             const newMovie = new Movie(req.body);
//             const existingMovie = await Movie.findOne({
//                 title:newMovie.title
//             });
//             instance.assert(!existingMovie, 409, 'Movie already exists');
//             res.statusCode = 201;
//             return newMovie.save();
//         }
//     });
//     // FETCH ONE
//     instance.route({
//         method: 'GET',
//         url: '/:movieSlug',
//         async handler(req, res) {
//             const movie = await Movie.findOne({
//                 slug: req.params.movieSlug
//             });
//             instance.assert(movie, 404);
//             return movie;
//         }
//     });
    
//     // DELETE ONE
    
//     instance.route({
//         method: 'DELETE',
//         url: '/:movieSlug',
//         async handler(req, res) {
//             const movie = await Movie.findOne({
//                 slug: req.params.movieSlug
//             });
//             instance.assert(movie, 404);
//             await movie.delete();
//         }
//     });
//     // ETC
// }
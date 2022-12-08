const Location = require('./Location');
const Traveller = require('./Traveller');
const Trip = require('./Trip');

// Traveller.hasMany(Location, {
//     foreignKey: 'reader_id',
//     onDelete: 'CASCADE',
// });

module.exports = { Location, Traveller, Trip };
/**
 * Patient.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        first_name: {
            type: 'string',
            unique: true
        },

        middle_name: {
            type: 'string',
        },

        last_name: {
            type: 'string',
            unique: true
        },

        civil_status: {
            type: 'string',
            unique: true
        },

        date_of_birth: {
            type: 'date',
        },


        gender: {
            type: 'string',
        },


        occupation: {
            type: 'string',
        },

        address: {
            type: 'string',
        },

        city: {
            type: 'string',
        },

        contact_number: {
            type: 'string',
        },



        // Add a reference to customer / FK
        // customer: {
        //     model: 'customer'
        // },

    }
};
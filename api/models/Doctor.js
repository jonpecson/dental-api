/**
 * Doctor.js
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

        date_of_birth: {
            type: 'date',
        },

        birth_place: {
            type: 'date',
        },

        sex: {
            type: 'string',
        },

        civil_status: {
            type: 'string',
        },

        spouse_name: {
            type: 'string',
        },

        spouse_contact: {
            type: 'string',
        },



        specialization: {
            type: 'string',
        },

        license_no: {
            type: 'string',
        },

        medical_suffix: {
            type: 'string',
        },


        address: {
            type: 'string',
        },

        city: {
            type: 'string',
        },

        zipcode: {
            type: 'string',
        },

        state: {
            type: 'string',
        },

        country: {
            type: 'string',
        },

        home_phone: {
            type: 'string',
        },

        mobile_phone: {
            type: 'string',
        },

        email: {
            type: 'string',
            required: true,
            unique: true
        },

    }
};
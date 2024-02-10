'use strict';

/**
 * prodotti service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::prodotti.prodotti');

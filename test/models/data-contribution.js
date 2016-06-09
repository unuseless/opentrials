'use strict';

const should = require('should');
const DataContribution = require('../../models/data-contribution');

describe('DataContribution', () => {
  describe('virtuals', () => {
    describe('filename', () => {
      it('is the filename of a file uploaded to S3', () => {
        return factory.build('dataContribution')
          .then((dataContribution) => {
            should(dataContribution.attributes.data_url).endWith(dataContribution.filename);
          });
      });

      it('is undefined if there\'s no URL', () => {
        return factory.build('dataContribution', { data_url: null })
          .then((dataContribution) => {
            should(dataContribution.filename).be.undefined();
          });
      });
    });
  });
});

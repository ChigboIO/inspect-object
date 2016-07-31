/* eslint-disable no-undef, func-names, prefer-arrow-callback */

const chai = require('chai');
const expect = chai.expect;
const path = require('path');
const indexFile = path.resolve('lib', 'index.js');
const Inspector = require(indexFile);

describe('lib/index', function () {
  describe('Inspector class', function () {
    const obj = {
      func1: () => {},
      func2: () => {},
      prop1: 'this is a string',
      prop2: 515,
    };

    describe('#all()', function () {
      it('should return an array', function () {
        expect(Inspector.all(obj)).to.be.an('array');
      });

      it('should contain all the keys of obj', function () {
        expect(Inspector.all(obj)).to.have.length(Object.keys(obj).length);
      });

      describe('when the argument is a string', function () {
        const nonObj = 'i am a string';

        it('should return a string containg STRING', function () {
          expect(Inspector.all(nonObj)).to.be.a('string');
          expect(Inspector.all(nonObj)).to.contain('STRING');
        });
      });
    });

    describe('#functions()', function () {
      it('should return an array', function () {
        expect(Inspector.functions(obj)).to.be.an('array');
      });

      it('should contain the functions in obj', function () {
        expect(Inspector.functions(obj)).to.have.length(2);
      });

      describe('when the argument is a number', function () {
        const nonObj = 42;

        it('should return a string containg NUMBER', function () {
          expect(Inspector.all(nonObj)).to.be.a('string');
          expect(Inspector.all(nonObj)).to.contain('NUMBER');
        });
      });
    });

    describe('#properties()', function () {
      it('should return an array', function () {
        expect(Inspector.properties(obj)).to.be.an('array');
      });

      it('should contain the keys of obj that are not functions', function () {
        expect(Inspector.properties(obj)).to.have.length(2);
      });

      describe('when no argument is passed', function () {
        it('should return a string containg UNDEFINED', function () {
          expect(Inspector.all()).to.be.a('string');
          expect(Inspector.all()).to.contain('UNDEFINED');
        });
      });
    });
  });
});

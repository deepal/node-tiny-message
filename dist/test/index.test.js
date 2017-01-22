'use strict';

var should = require('should');
var message = require('../index');

describe('message test suite', function () {
    it('should create a success message with necessary details when all details are provided', function (done) {
        var successMessage = message.success('test', { test: 123 }, 1234);
        successMessage.code.should.equal(1234);
        successMessage.message.should.equal('test');
        successMessage.data.should.have.property('test', 123);
        done();
    });

    it('should create a success message with default values when all details are not provided', function (done) {
        var successMessage = message.success('test', { test: 123 });
        successMessage.code.should.equal(0);
        successMessage.message.should.equal('test');
        successMessage.data.should.have.property('test', 123);
        done();
    });

    it('should create a error message with necessary details when all details are provided', function (done) {
        var errorMessage = message.error('test', new Error('error'), 1234);
        errorMessage.code.should.equal(1234);
        errorMessage.message.should.equal('test');
        errorMessage.data.should.be.instanceOf(Error);
        errorMessage.data.message.should.equal('error');
        done();
    });

    it('should create a error message with default values when all details are not provided', function (done) {
        var errorMessage = message.success('test', new Error('error'));
        errorMessage.code.should.equal(0);
        errorMessage.message.should.equal('test');
        errorMessage.data.should.be.instanceOf(Error);
        errorMessage.data.message.should.equal('error');
        done();
    });
});
//# sourceMappingURL=index.test.js.map
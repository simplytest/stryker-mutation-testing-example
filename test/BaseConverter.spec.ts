import { expect } from 'chai';
import 'mocha';
import { convert_binary_to_decimal, convert_decimal_to_binary } from '../src/BaseConverter';

describe('Base Converter Tests', () => {

    it('Should convert positive decimal to binary.', () => {
        expect(convert_decimal_to_binary(8))
            .to.equal('01000', 'Converted number was not as expected!');
    });

    it('Should convert negative decimal to binary.', () => {
        expect(convert_decimal_to_binary(-8))
            .to.equal('11000', 'Converted number was not as expected!');
    });

    it('Should convert negative binary to decimal.', () => {
        expect(convert_binary_to_decimal('11000'))
            .to.equal(-8, 'Converted number was not as expected!');
    });

    it('Should convert positive binary to decimal.', () => {
        expect(convert_binary_to_decimal('01000'))
            .to.equal(8, 'Converted number was not as expected!');
    });

    it('Should convert decimal zero to binary.', () => {
        expect(convert_decimal_to_binary(0))
            .to.equal('0', 'Converted number was not as expected!');
    });

});
function convert_decimal_to_binary(n: number): string {
    const sign: string = n < 0 ? '1' : '0';

    let absoluteNumber: number = Math.abs(n);
    let convertedDecimal = '';

    while(absoluteNumber > 0) {
        const reminder: number = absoluteNumber % 2;
        convertedDecimal += reminder.toString();
        absoluteNumber = Math.floor(absoluteNumber / 2);
    }
    convertedDecimal += sign;
    const separator = '';
    return convertedDecimal.split(separator).reverse().join(separator);
}

function convert_binary_to_decimal(binaryNumber: string): number {
    let multiplier: number;
    if (binaryNumber.at(0) === '1') {
        multiplier = -1;
    } else {
        multiplier = 1;
    }
    const absoluteBinary: string = binaryNumber.slice(1);
    const absoluteDecimal: number = absoluteBinary.split('').reverse()
        .reduceRight((_, curr, index) => _ + Math.pow(2, index) * parseInt(curr), 0);
    return multiplier * absoluteDecimal;
}

export {
    convert_decimal_to_binary,
    convert_binary_to_decimal
};
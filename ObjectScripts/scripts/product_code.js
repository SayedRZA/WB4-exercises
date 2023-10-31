function parsePartCode(partCode) {
    const parts = partCode.split(':');
    const supplierCode = parts[0];
    const productSize = parts[1].split('-');
    const productNumber = productSize[0];
    const size = productSize[1];

    return {
        supplierCode,
        productNumber,
        size
    };
}

let partCode1 = "XYZ:1234-L";
let part1 = parsePartCode(partCode1);

console.log("Supplier: " + part1.supplierCode + " Product Number: " + part1.productNumber + " Size: " + part1.size);

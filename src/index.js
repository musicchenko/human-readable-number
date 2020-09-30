module.exports = function toReadable(number) {
    let numbers = new Map([
        ['0', 'zero'], ['1', 'one'], ['2', 'two'], ['3', 'three'], ['4', 'four'], ['5', 'five'], ['6', 'six'], ['7', 'seven'],
        ['8', 'eight'], ['9', 'nine'], ['10', 'ten'], ['11', 'eleven'], ['12', 'twelve'], ['13', 'thirteen'], ['14', 'fourteen'],
        ['15', 'fifteen'], ['16', 'sixteen'], ['17', 'seventeen'], ['18', 'eighteen'], ['19', 'nineteen'], ['20', 'twenty'],
        ['30', 'thirty'], ['40', 'forty'], ['50', 'fifty'], ['60', 'sixty'], ['70', 'seventy'], ['80', 'eighty'], ['90', 'ninety'],
    ]);
    if (number === 0) {
      return 'zero';
    }
    let result = '';
    let hundreds = Math.floor(number / 100);
    let dozens = Math.floor((number - hundreds * 100) / 10);
    let units = number % 10;
    if (hundreds !== 0) {
        result += numbers.get(hundreds.toString()) + ' hundred';
        if (dozens !== 0 || units !== 0) {
            result += ' ';
        }
    }
    if (dozens === 1) {
        result += numbers.get(dozens.toString() + units.toString())
    }
    else {
        if (dozens !== 0) {
            result += numbers.get(dozens.toString() + '0');
            if (units !== 0) {
                result += ' ';
            }
        }
        if (units !== 0) {
            result += numbers.get(units.toString());
        }
    }
    return result;
}

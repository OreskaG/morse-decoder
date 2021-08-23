const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = [];
    for ( let i = 0 ; i < expr.length ; i = i + 10 ) {
        let oneSymbol = expr.slice( i, i + 10 );
        let morseSymbol = '';  
        let binarySymbol = ''; 
        if ( oneSymbol === '**********' ) { 
            result.push(' ');
            continue;
        };
        for ( let j = 0 ; j < 10 ; j = j + 2 ) {
            binarySymbol = oneSymbol.slice( j, j + 2 );
            if ( binarySymbol === 00 ) { morseSymbol =  morseSymbol };
            if ( binarySymbol === 10 ) { morseSymbol =  morseSymbol + '.' };
            if ( binarySymbol === 11 ) { morseSymbol =  morseSymbol + '-' }; 
        }
        result.push(MORSE_TABLE[morseSymbol]);
    };
    return result.join('');
}

module.exports = {
    decode
}
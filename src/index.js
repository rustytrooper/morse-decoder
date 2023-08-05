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
    // write your solution here
    let arrFromExpr = Array.from(expr)
    console.log(arrFromExpr);
    let matrix=[]
    let arrSize=10
    for (let i=0; i<arrFromExpr.length; i+=arrSize) {
      matrix.push(arrFromExpr.slice(i,i+arrSize))
    }
    console.log(matrix);
  
    let slicedStr
  
    let joined = matrix.map(el=>{
     return el.join('')
    })
  console.log(joined);
  
    joined.map(el=>{
      console.log(el);
          for (let i in el) {
            // console.log(el[i]);
            if(el[i]==1){
              // console.log(el);
              slicedStr=el.slice(i, el.length)
              
            }
          }
    })
  
}

module.exports = {
    decode
}
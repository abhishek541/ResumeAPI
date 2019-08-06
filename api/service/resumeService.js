const resumeData = require('./data');

module.exports = {
    getTextResponse,
    getQueryAnswer
};

function getTextResponse(query) {
    return resumeData[query];
}

function getQueryAnswer(queryStr) {
    let symbolStr = queryStr.substring(queryStr.indexOf(':') + 1);
    let strArr = symbolStr.split(`\n`);
    let symbolArr = [];
    
    for(let i=2; i<strArr.length; i++) {
      let temp = strArr[i].split("");
      symbolArr.push(temp.slice(1));
    }

    let row = symbolArr.length;
    let col = symbolArr[0].length;

    for(let i=0; i<row; i++){
      for(let j=0; j<col; j++){
        if(i === j){ 
          symbolArr[i][j] = '=';
        }else if(symbolArr[i][j] === '<'){ 
          symbolArr[j][i] = '>';
        }else if(symbolArr[i][j] === '>'){
          symbolArr[j][i] = '<';
        }
      }
    }

    for(let i=0; i<row; i++){
      for(let j=0; j<col; j++){
        if(symbolArr[i][j] === '-'){
          if(isGreaterCount(symbolArr[i])){
            symbolArr[i][j] = '>';
            symbolArr[j][i] = '<';
          } else if(!isGreaterCount(symbolArr[i])) {
            symbolArr[i][j] = '<';
            symbolArr[j][i] = '>';
          }
        }
      }
    }

  let answer = ` ABCD\n`;
  for(let i=0; i<row; i++){ 
    symbolArr[i] = strArr[1].charAt(i+1) + symbolArr[i].join("");
  }
  answer += symbolArr.join(`\n`);
  return answer;
}

function isGreaterCount(symbolRow) {
  let count1 = 0;
  let count2 = 0;

  for (let i=0; i<symbolRow.length; i++){
    if(symbolRow[i] === '<'){
      count1++;
    }
    if(symbolRow[i] === '>'){
      count2++;
    }
  }

  if(count2 > count1){
    return true;
  } else if(count1 > count2){
    return false;
  }
}
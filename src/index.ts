import { CsvFileReader } from './CsvFileReader';
import { MatchPossibility } from './matchResults'


const matches = new CsvFileReader('football.csv');
matches.read();


let manUwins = 0;

for(let match of matches.data) {
  if( match[1] === 'Man United' && match[5] === MatchPossibility.HomeWin) {
    manUwins++
  }else if (match[2] === 'Man United' && match[5] === MatchPossibility.AwayWin) {
    manUwins++
  }
}


console.log(`Man United has won ${manUwins} times`)



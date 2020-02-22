import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchPossibility } from './matchResults'

const readCsv = new CsvFileReader('football.csv');

const matchReader = new MatchReader(readCsv);

matchReader.load();


let manUwins = 0;

for(let match of matchReader.matches) {
  if( match[1] === 'Man United' && match[5] === MatchPossibility.HomeWin) {
    manUwins++
  }else if (match[2] === 'Man United' && match[5] === MatchPossibility.AwayWin) {
    manUwins++
  }
}


console.log(`Man United has won ${manUwins} times`)



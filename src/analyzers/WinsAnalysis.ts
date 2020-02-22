import { Analyzer } from '../Summary'
import { MatchData } from '../MatchData';
import { MatchPossibility } from '../matchResults';

export class WinsAnalysis implements Analyzer {

  constructor(public team: string) {}

  run(matches: MatchData[]): string {

    let wins = 0;

    for(let match of matches) {
      if( match[1] === 'Man United' && match[5] === MatchPossibility.HomeWin) {
        wins++
      }else if (match[2] === 'Man United' && match[5] === MatchPossibility.AwayWin) {
        wins++
      }
    }

    return `Team ${this.team} has ${wins} wins`

  }




}
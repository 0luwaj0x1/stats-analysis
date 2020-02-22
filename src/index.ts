import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import {Summary} from './Summary';
import { ConsoleReport } from './reportTargets/ConsoleReport'
import {WinsAnalysis} from './analyzers/WinsAnalysis'


const readCsv = new CsvFileReader('football.csv');

const matchReader = new MatchReader(readCsv);

matchReader.load();

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);





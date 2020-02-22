import { MatchReader } from './MatchReader';
import {Summary} from './Summary';



const matchReader = MatchReader.fromCsv()
const summary = Summary.analysisAndReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);





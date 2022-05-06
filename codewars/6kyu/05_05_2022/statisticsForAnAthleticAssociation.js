// You are the "computer expert" of a local Athletic Association (C.A.A.). Many teams of runners come to compete. Each time you get a string of all race results of every team who has run. For example here is a string showing the individual results of a team of 5 runners:
// "01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"
// Each part of the string is of the form: h|m|s where h, m, s (h for hour, m for minutes, s for seconds) are positive or null integer (represented as strings) with one or two digits. Substrings in the input string are separated by , or ,.
// To compare the results of the teams you are asked for giving three statistics; range, average and median.
// Range : difference between the lowest and highest values. In {4, 6, 9, 3, 7} the lowest value is 3, and the highest is 9, so the range is 9 − 3 = 6.
// Mean or Average : To calculate mean, add together all of the numbers in a set and then divide the sum by the total count of numbers.
// Median : In statistics, the median is the number separating the higher half of a data sample from the lower half. The median of a finite list of numbers can be found by arranging all the observations from lowest value to highest value and picking the middle one (e.g., the median of {3, 3, 5, 9, 11} is 5) when there is an odd number of observations. If there is an even number of observations, then there is no single middle value; the median is then defined to be the mean of the two middle values (the median of {3, 5, 6, 9} is (5 + 6) / 2 = 5.5).
// Your task is to return a string giving these 3 values. For the example given above, the string result will be
// "Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"
// of the form: "Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"`
// where hh, mm, ss are integers (represented by strings) with each 2 digits.
// Remarks:
// if a result in seconds is ab.xy... it will be given truncated as ab.
// if the given string is "" you will return ""

function stat(strg) {
  class Run {
    constructor(rawResults) {
      this._rawResults = rawResults;
      this._runners = this.runners;
      this._results = this.rawResults === '' ? '' : this.runners.map(runner => runner.secResult);
    }

    get rawResults() {
      return this._rawResults;
    }
    
    get runners() {
      if (this.rawResults !== '') {
        const separator = this.rawResults.includes(',') ? ',' : ', ';
        const resArr = this.rawResults.split(separator).map(runner => {
          class Runner {
            constructor(rawResult) {
              this._rawResult = rawResult;
              this._secResult = this.secResult;
            }
      
            get rawResult() {
              return this._rawResult;
            }
            
            get secResult() {
              const runnerArr = this.rawResult.split('|');
              function hmsToSec(h, m, s) {
                return h * 3600 + m * 60 + +s
              }
              return hmsToSec(runnerArr[0], runnerArr[1], runnerArr[2])
            }
          }
          return new Runner(runner)
        });
        return resArr;
      }
      
      return '';
    }

    get results() {
      return this._results;
    }

    _convert(sec) {
      const h = Math.floor(sec / 3600)
      const m = Math.floor(sec / 60) % 60
      const s = sec % 60
      return `${`${h}`.padStart(2, '0')}|${`${m}`.padStart(2, '0')}|${`${s}`.padStart(2, '0')}`
    }

    range() {
      if (this.rawResults !== '') {
        const sortedResults = this.results.sort((a, b) => a - b);
        const sec = sortedResults[sortedResults.length - 1] - sortedResults[0];
        return this._convert(sec);
      }

      return ''
    }

    average() {
      if (this.rawResults !== '') {
        const sumResults = this.results.reduce((acc, curr) => acc + curr);
        const mean = Math.trunc(sumResults / this.runners.length);
        return this._convert(mean);
      }

      return ''
    }

    median() {
      if (this.rawResults !== '') {
        const midInd = this.results.length / 2 - 1;
        const medi =  midInd % 1 === 0 ? Math.trunc((this.results[midInd] + this.results[midInd + 1]) / 2): this.results[Math.ceil(midInd)];
        return this._convert(medi);
      }

      return ''
    }

    result() {
      return this.rawResults === '' ? '' : `Range: ${this.range()} Average: ${this.average()} Median: ${this.median()}`
    }
  }

  const run = new Run(strg)
  return run.result()
}

console.log(stat(""))
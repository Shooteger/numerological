import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

//NOCH NICHT IMPLEMENTIERT: LUCKY DAYS BEI SCHLATJAHREN FEBRUAR...
//Y - Regel ka wie die geht, nachlesen...
//Ausgleich Expression -> keine Schulzahl und meisterzahl reduziert...
interface Lessons {
  times_learned: number;
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {

  birthday = new Date().toISOString();
  isenabled: boolean;
  lessons: number[];
  buttonClicked: boolean;

  fullname: string;
  titles: string;
  dayofbirth: string;
  lifejouney: string;
  expression: string;
  soulwish: string;
  soulfocus: string;
  compensation: string;
  strengthday: string;
  lessonstolearn: string;
  lessons_of_occuring: string;
  personalyear: string;
  luckydays: string;
  careerpath: string[][];

  constructor(public actionSheetController: ActionSheetController) { }

  //return the crossum of the given number
  //the parameter is a string
  crosssumOne(num) {
    let help: number = 0;
    let res: number[] = []; 
    for (var i = 0; i < num.length; i += 1) { 
      res.push(Number(num.charAt(i)));
    } 
    for (var i = 0; i < res.length; i += 1) {
      help += (Number(res[i]));
    }
    return help;
  }

  //return the equivalent number of given letter
  letterToNumber(letter) {
    letter = letter.toUpperCase();
    letter = letter.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (letter == 'A' || letter == 'J' || letter == 'S' || letter == 'Ä')
      return 1;
    else if (letter == 'B' || letter == 'K' || letter == 'T')
      return 2; 
    else if (letter == 'C' || letter == 'L' || letter == 'U' || letter == 'Ü')
      return 3;
    else if (letter == 'D' || letter == 'M' || letter == 'V')
      return 4;
    else if (letter == 'E' || letter == 'N' || letter == 'W')
      return 5;
    else if (letter == 'F' || letter == 'O' || letter == 'X' || letter == 'Ö')
      return 6;
    else if (letter == 'G' || letter == 'P' || letter == 'Y')
      return 7;
    else if (letter == 'H' || letter == 'Q' || letter == 'Z')
      return 8;
    else if (letter == 'I' || letter == 'R')
      return 9;
    else
      return 0;
  }


  //gets 3 string, day, month and year (given date of the datepicker)
  //and returns the the "lifejourney numerologic digit"
  crosssumBirthday(day, month, year) {
    let dayCross: number;
    let monthCross: number;

    if (day == 11) {
      dayCross = 11;
    } else if (day == 22) {
      dayCross = 22;
    } else if (day == 33) {
      dayCross = 33;
    } else  {
      dayCross = this.crosssumOne(day.toString());
    }

    if (month == 11) {
      monthCross = 11
    } else {
      monthCross = this.crosssumOne(month.toString());;
    }
    let yearCross: number = this.crosssumOne(year.toString());
    if (day == 10) {
      dayCross = 1;
    }

    while(true) {
      if (yearCross <= 9) {
        break;
      } else if (yearCross == 11) {
        break;
      } else if (yearCross == 13) {
        yearCross = 4;
        break;
      } else if (yearCross == 14) {
        yearCross = 5;
        break;
      } else if (yearCross == 16) {
        yearCross = 7;
        break;
      } else if (yearCross == 19) {
        yearCross = 1;
        break;
      } else if (yearCross == 22) {
        break;
      } else if (yearCross == 33) {
        break;
      } else {
        yearCross = this.crosssumOne(yearCross.toString());
      }
    }

    let cross: number = (dayCross + monthCross + yearCross);
    
    while(true) {
      if (cross <= 9) {
        return cross.toString();
      } else if (cross == 11) {
        return "11/2";
      } else if (cross == 13) {
        return "13/4";
      } else if (cross == 14) {
        return "14/5";
      } else if (cross == 16) {
        return "16/7";
      } else if (cross == 19) {
        return "19/10/1";
      } else if (cross == 22) {
        return "22/4";
      } else if (cross == 33) {
        return "33/6";
      } else {
        cross = this.crosssumOne(cross.toString());
      }
    }
  }

  setBirthday(date) {
    //sets all varibales null for new calculation
    this.lessons = [];
    this.lessons_of_occuring = "";
    this.lifejouney = '';

    //sets date
    this.birthday = date;
  }

  setName(name) {
    //sets all varibales null for new calculation
    this.buttonClicked = false;
    this.lessons = [];
    this.lessons_of_occuring = "";
    this.lifejouney = '';

    //sets name
    this.fullname = name;
    if (this.fullname.length > 0)
      this.isenabled = false;
    else
      this.isenabled = true;
  }

  setTitles(title) {
    //sets all varibales null for new calculation
    this.buttonClicked = false;
    this.lessons = [];
    this.lessons_of_occuring = "";
    this.lifejouney = '';

    //sets name
    this.titles = title;
  }

  //return expression get one parameter a atring
  expressionCal(name: string) {
    let res: string[] = []; 
    let cnt: number = 0;

    if (this.titles != "") {
      name += " " + this.titles;
    }

    while (true) {
      if (name.split(' ')[cnt] !== undefined) {
        res.push(name.split(' ')[cnt]);
      } else {
        break;
      }
      cnt++;
    }

    
    cnt = 0;
    let nameToNum: number[] = [];
    let tmpNumber: number;
    while (cnt < res.length) {
      tmpNumber = 0;
      for (var i = 0; i < res[cnt].length; i++) {
        tmpNumber += this.letterToNumber(res[cnt].charAt(i));
        this.lessons.push(this.letterToNumber(res[cnt].charAt(i)));
      }
      nameToNum.push(tmpNumber);
      cnt++;
    }
     
    cnt = 0;
    let oneNameCalculated: number[] = [];
    for (var i = 0; i < nameToNum.length; i++) {
      while(true) {
        if (nameToNum[i] <= 9 || nameToNum[i] == 11 || nameToNum[i] == 13 || nameToNum[i] == 14 ||
            nameToNum[i] == 16 || nameToNum[i] == 19 || nameToNum[i] == 22 || nameToNum[i] == 33) {
          oneNameCalculated.push(nameToNum[i]);
          break;
        } else {
          nameToNum[i] = this.crosssumOne(nameToNum[i].toString());
        }
      }
    }

    let expresss: number = 0;
    for (var i = 0; i < oneNameCalculated.length; i++) {
      expresss += oneNameCalculated[i];
    }

    while(true) {
      if (expresss <= 9) {
        return expresss.toString();
      } else if (expresss == 11) {
        return "11/2";
      } else if (expresss == 13) {
        return "13/4";
      } else if (expresss == 14) {
        return "14/5";
      } else if (expresss == 16) {
        return "16/7";
      } else if (expresss == 19) {
        return "19/10/1";
      } else if (expresss == 22) {
        return "22/4";
      } else if (expresss == 33) {
        return "33/6";
      } else {
        expresss = this.crosssumOne(expresss.toString());
      }
    }
  }

  syllableCal (word) {
    word = word.toLowerCase();                                     
    word = word.replace(/(?:[^laeiouy]|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    var syl = word.match(/[aeiouy]{1,2}/gi);
    if(syl)
    {
        return syl;
    }
  }

  //still big error here IN SOULD WISH WITH SYL AND W
  //returns numerological soul wish 
  soulWishCal(name) {
    let res: string[] = []; 
    let cnt: number = 0;

    if (this.titles != "") {
      name += " " + this.titles;
    }

    //get every name split with " "
    while (true) {
      if (name.split(' ')[cnt] !== undefined) {
        res.push(name.split(' ')[cnt]);
      } else {
        break;
      }
      cnt++;
    }

    //iteration over every name which was split before and
    //check if vocal and add every digit to nameToNum
    cnt = 0;
    let nameToNum: number[] = [];
    let tmpNumber: number;
    let tmpSyl: string[];
    
    while (cnt < res.length) {
      tmpNumber = 0;
      tmpSyl = this.syllableCal(res[cnt]);
      if (tmpSyl) {
        for (var i = 0; i < tmpSyl.length; i++) {
          if (tmpSyl[i].length == 2) {
            if ((tmpSyl[i].charAt(0)) == 'a' && tmpSyl[i].charAt(1) == 'y') {
              tmpNumber += 8;
            } else if ((tmpSyl[i].charAt(0)) == 'e' && tmpSyl[i].charAt(1) == 'y') {
              tmpNumber += 12;
            }  else if ((tmpSyl[i].charAt(0)) == 'i' && tmpSyl[i].charAt(1) == 'y') {
              tmpNumber += 16;
            }  else if ((tmpSyl[i].charAt(0)) == 'o' && tmpSyl[i].charAt(1) == 'y') {
              tmpNumber += 13;
            }  else if ((tmpSyl[i].charAt(0)) == 'u' && tmpSyl[i].charAt(1) == 'y') {
              tmpNumber += 10;
            }
          } else {
            if (tmpSyl[i] == 'y') {
              tmpNumber += 7;
            } else if (tmpSyl[i] == 'a') {
              tmpNumber += 1;
            } else if (tmpSyl[i] == 'e') {
              tmpNumber += 5;
            } else if (tmpSyl[i] == 'i') {
              tmpNumber += 9;
            } else if (tmpSyl[i] == 'o') {
              tmpNumber += 6;
            } else if (tmpSyl[i] == 'u') {
              tmpNumber += 3;
            }
          }
        }

        for (var i = 0; i < res[cnt].length; i++) {
          if ((res[cnt].charAt(i)).toUpperCase() == 'A') {
            if ((res[cnt].charAt(i+1)).toUpperCase() == 'W') {
              tmpNumber += 5;
            }
            //tmpNumber += 1;
          } else if ((res[cnt].charAt(i)).toUpperCase() == 'E') {
            if ((res[cnt].charAt(i+1)).toUpperCase() == 'W') {
              tmpNumber += 5;
            }
            //tmpNumber += 5;
          } else if ((res[cnt].charAt(i)).toUpperCase() == 'I') {
            if ((res[cnt].charAt(i+1)).toUpperCase() == 'W') {
              tmpNumber += 5;
            }
            //tmpNumber += 9;
          } else if ((res[cnt].charAt(i)).toUpperCase() == 'O' || (res[cnt].charAt(i)).toUpperCase() == 'Ö') {
            if ((res[cnt].charAt(i+1)).toUpperCase() == 'W') {
              tmpNumber += 5;
            }
            //tmpNumber += 6;
          } else if ((res[cnt].charAt(i)).toUpperCase() == 'U' || (res[cnt].charAt(i)).toUpperCase() == 'Ü') {
            if ((res[cnt].charAt(i+1)).toUpperCase() == 'W') {
              tmpNumber += 5;
            }
            //tmpNumber += 3;
          }
        }
      }
      nameToNum.push(tmpNumber);
      cnt++;
    }

    cnt = 0;
    let oneNameCalculated: number[] = [];
    for (var i = 0; i < nameToNum.length; i++) {
      while(true) {
        if (nameToNum[i] <= 9 || nameToNum[i] == 11 || nameToNum[i] == 13 || nameToNum[i] == 14 || 
          nameToNum[i] == 16 || nameToNum[i] == 19 || nameToNum[i] == 22 || nameToNum[i] == 33) {
          oneNameCalculated.push(nameToNum[i]);
          break;
        } else {
          nameToNum[i] = this.crosssumOne(nameToNum[i].toString());
        }
      }
    }
    
    let expresss: number = 0;
    for (var i = 0; i < oneNameCalculated.length; i++) {
      expresss += oneNameCalculated[i];
    }
    while(true) {
      if (expresss <= 9) {
        return expresss;
      } else if (expresss == 11) {
        return "11/2";
      } else if (expresss == 13) {
        return "13/4";
      } else if (expresss == 14) {
        return "14/5";
      } else if (expresss == 16) {
        return "16/7";
      } else if (expresss == 19) {
        return "19/10/1";
      } else if (expresss == 22) {
        return "22/4";
      } else if (expresss == 33) {
        return "33/6";
      } else {
        expresss = this.crosssumOne(expresss.toString());
      }
    }
  }

  //returns numerological soul Focus 
  soulFocusCal() {
    let name: string = this.fullname.split(' ')[0];

    for (var i = 0; i < name.length; i++) {
      console.log(name.charAt(i));
      if ((name.charAt(i)).toUpperCase() == 'A') { //only here A returns a 2 !!
        return 2;
      } else if ((name.charAt(i)).toUpperCase() == 'E') {
        return 5;
      } else if ((name.charAt(i)).toUpperCase() == 'I') {
        return 9;
      } else if ((name.charAt(i)).toUpperCase() == 'O') {
        return 6;
      } else if ((name.charAt(i)).toUpperCase() == 'U') {
        return 3;
      } else if ((name.charAt(i)).toUpperCase() == 'Y') {
        return 7;
      }
    }
    return 0;
  }

  //calculates and returns the compensation of a person, gets the finish
  //calculated of lifejourney and expression as parameter
  compensationCal() {
    let tmpEx: number = Number(this.expression);;
    let tmpLJ: number = Number(this.lifejouney);;
    if (this.lifejouney == "33/6") {
      tmpLJ = 33;
    }
    if (this.lifejouney == "11/2") {
      tmpLJ = 11;
    }
    if (this.lifejouney == "13/4") {
      tmpLJ = 4;
    }
    if (this.lifejouney == "14/5") {
      tmpLJ = 5;
    } 
    if (this.lifejouney == "16/7") {
      tmpLJ = 7;
    } 
    if (this.lifejouney == "19/10/1") {
      tmpLJ = 1;
    } 
    if (this.lifejouney == "22/4") {
      tmpLJ = 22;
    } 
    if (this.expression == "11/2") {
      tmpEx = 11;
    } 
    if (this.expression == "13/4") {
      tmpEx = 4;
    } 
    if (this.expression == "14/5") {
      tmpEx = 5;
    } 
    if (this.expression == "16/7") {
      tmpEx = 7;
    } 
    if (this.expression == "19/10/1") {
      tmpEx = 1;
    } 
    if (this.expression == "22/4") {
      tmpEx = 22;
    } 
    if (this.expression == "33/6") {
      tmpEx = 33;
    }
    let tmpComp: number = tmpLJ + tmpEx;
    while(true) {
      if (tmpComp <= 9) {
        return tmpComp;
      } else {
        tmpComp = this.crosssumOne(tmpComp.toString());
      }
    }
  }

  //calculates and returns lessons which perosn has to learn AND
  //sets the count of how much lessons someone has in a global variabel
  lessonsToLearnCal() {
    let lesson_zero: string = "";
    let lesson: { [id: string] : Lessons; } = {};
    lesson["l1"] = { times_learned: 0};
    lesson["l2"] = { times_learned: 0};
    lesson["l3"] = { times_learned: 0};
    lesson["l4"] = { times_learned: 0};
    lesson["l5"] = { times_learned: 0};
    lesson["l6"] = { times_learned: 0};
    lesson["l7"] = { times_learned: 0};
    lesson["l8"] = { times_learned: 0};
    lesson["l9"] = { times_learned: 0};

    for (var i = 0; i < this.lessons.length; ++i) {
      if (this.lessons[i] == 1)
        lesson["l1"].times_learned += 1;
      else if (this.lessons[i] == 2)
        lesson["l2"].times_learned += 1;
      else if (this.lessons[i] == 3)
        lesson["l3"].times_learned += 1;
      else if (this.lessons[i] == 4)
        lesson["l4"].times_learned += 1;
      else if (this.lessons[i] == 5)
        lesson["l5"].times_learned += 1;
      else if (this.lessons[i] == 6)
        lesson["l6"].times_learned += 1;
      else if (this.lessons[i] == 7)
        lesson["l7"].times_learned += 1;
      else if (this.lessons[i] == 8)
        lesson["l8"].times_learned += 1;
      else if (this.lessons[i] == 9)
        lesson["l9"].times_learned += 1;
    }

    this.lessons_of_occuring += "\n1 occurs " + lesson["l1"].times_learned + " times\n";
    this.lessons_of_occuring += "2 occurs " + lesson["l2"].times_learned + " times\n";
    this.lessons_of_occuring += "3 occurs " + lesson["l3"].times_learned + " times\n";
    this.lessons_of_occuring += "4 occurs " + lesson["l4"].times_learned + " times\n";
    this.lessons_of_occuring += "5 occurs " + lesson["l5"].times_learned + " times\n";
    this.lessons_of_occuring += "6 occurs " + lesson["l6"].times_learned + " times\n";
    this.lessons_of_occuring += "7 occurs " + lesson["l7"].times_learned + " times\n";
    this.lessons_of_occuring += "8 occurs " + lesson["l8"].times_learned + " times\n";
    this.lessons_of_occuring += "9 occurs " + lesson["l9"].times_learned + " times";

    if (lesson["l1"].times_learned == 0)
      lesson_zero += " 1,";
    if (lesson["l2"].times_learned == 0)
      lesson_zero += " 2,";
    if (lesson["l3"].times_learned == 0)
      lesson_zero += " 3,";
    if (lesson["l4"].times_learned == 0)
      lesson_zero += " 4,";
    if (lesson["l5"].times_learned == 0)
      lesson_zero += " 5,";
    if (lesson["l6"].times_learned == 0)
      lesson_zero += " 6,";
    if (lesson["l7"].times_learned == 0)
      lesson_zero += " 7,";
    if (lesson["l8"].times_learned == 0)
      lesson_zero += " 8,";
    if (lesson["l9"].times_learned == 0)
      lesson_zero += " 9,";
  
    //delete lesson["l9"];
    return lesson_zero;
  }

  //returns the lucky days and gets two parameter, day and month
  //the month because some monts have 31 days, some 30 and one ashole has 28
  lucky_days(day, month) {
    let luckdays: string = day.toString() + ', ';
    let tmpday: number = day;

    if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
      while(true) {
        if (tmpday + 9 <= 31) {
          tmpday += 9;
          luckdays += tmpday.toString() + ', ';
        } else {
          break;
        }
      }
      tmpday = day;
    } else if (month == 2) {
      while(true) {
        if (tmpday + 9 <= 28) {
          tmpday += 9;
          luckdays += tmpday.toString() + ', ';
        } else {
          break;
        }
      }
      tmpday = day;
    } else {
      while(true) {
        if (tmpday + 9 <= 30) {
          tmpday += 9;
          luckdays += tmpday.toString() + ', ';
        } else {
          break;
        }
      }
      tmpday = day;
    }
    while(true) {
      if (tmpday - 9 >= 1) {
        tmpday -= 9;
        luckdays += tmpday.toString() + ', ';
      } else {
        break;
      }
    }
    return luckdays;
  }

  dayofbirthCal() {
    let tmpDay: number = Number((this.birthday.split('T')[0]).split('-')[2]);
    while(true) {
      if (tmpDay <= 9) {
        return tmpDay.toString();
      } else if (tmpDay == 11) {
        return "11/2";
      } else if (tmpDay == 13) {
        return "13/4";
      } else if (tmpDay == 14) {
        return "14/5";
      } else if (tmpDay == 16) {
        return "16/7";
      } else if (tmpDay == 19) {
        return "19/10/1";
      } else if (tmpDay == 22) {
        return "22/4";
      } else if (tmpDay == 33) {
        return "33/6";
      } else {
        tmpDay = this.crosssumOne(tmpDay.toString());
      }
    }
  }

  calcAll() {
    //main numerological numbers
    this.dayofbirth = this.dayofbirthCal();
    this.lifejouney = (this.crosssumBirthday((this.birthday.split('T')[0]).split('-')[2], 
                          (this.birthday.split('T')[0]).split('-')[1], 
                          (this.birthday.split('T')[0]).split('-')[0])).toString();
    this.expression = (this.expressionCal(this.fullname)).toString();
    this.soulwish = (this.soulWishCal(this.fullname)).toString();
    this.soulfocus = (this.soulFocusCal()).toString();
    this.compensation = (this.compensationCal()).toString();
    this.strengthday = Number((this.birthday.split('T')[0]).split('-')[2]).toString();
    this.lessonstolearn = this.lessonsToLearnCal();
    this.personalyear = this.crosssumBirthday((this.birthday.split('T')[0]).split('-')[2], 
                                              (this.birthday.split('T')[0]).split('-')[1], new Date().getFullYear());
    this.luckydays = this.lucky_days(Number((this.birthday.split('T')[0]).split('-')[2]),
                                     Number((this.birthday.split('T')[0]).split('-')[1]));
    //NEEDS TO BE IMPLANTATED
    //this.careerpath;
    //displays and hides result card in html
    this.buttonClicked = !this.buttonClicked;
    if (this.buttonClicked == false) {
      this.lessons_of_occuring = "";
    }
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "Ergebnis: ",
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          this.lessons = [];
          this.lessons_of_occuring = "";
          this.lifejouney = '';
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  ngOnInit() {
    this.isenabled = true;
    this.lessons = [];
    this.buttonClicked = false;

    this.fullname = "";
    this.titles = ""
    this.dayofbirth = "";
    this.lifejouney = "";
    this.expression = "";
    this.soulwish = "";
    this.soulfocus = "";
    this.compensation = "";
    this.strengthday = "";
    this.lessonstolearn = "";
    this.lessons_of_occuring = "";
    this.personalyear = "";
    this.luckydays = "";
    this.careerpath = [];
  }

}

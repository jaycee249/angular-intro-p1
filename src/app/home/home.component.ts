import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  title: String = 'angular-into-p1';
  name: String = 'Jasmine Carbajal';
  currentDay: any = new Date().getDay();
  days: Object = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  };
  languages: Object[] = [
    {
      names: ['English', 'Spanish'],
      country: 'America'
    },
    {
      names: ['Spanish', 'Aribic'],
      country: 'Mexico'
    },
    {
      names: ['French', 'Basque'],
      country: 'France'
    },
    {
      names: ['German', 'English'],
      country: 'Germany'
    }
  ];

  constructor() { }

  ngOnInit() {
    console.log('hello');
  }

  renderThisDay(): String {
    return this.days[this.currentDay];
  }

  renderSpokenLanguages(languages): String {
    return languages.join(', and ');
  }

  ignorelanguage(language): Boolean {
    const languageToIgnore = 'English';
    return !language.names.includes(languageToIgnore);
  }

  ngOnDestroy() {
    console.log('Goodbye');
  }

}

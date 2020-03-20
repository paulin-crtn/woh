import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  searchValue: string = '';
  // TO DO : IMPORT REAL COUNTRIES DATA
  countriesList: string[] = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];
  countriesFiltered: string[]  = [];
  searchActive: Boolean = false;

  constructor(
    private titleService: Title,
    private meta: Meta,
  ) { }

  ngOnInit() {
    // PAGE TITLE
    this.titleService.setTitle('Search and find the travel experience that suits you | Worldhelpers');
    // META DESCRIPTION
    this.meta.updateTag({name: 'description', content: ''});
  }

  applyCountry(country: string) {
    this.closeList();
    this.searchValue = country;
    this.countriesFiltered  = [country];
    // TO DO : Update navbar parameters
    // TO DO : Observable & Subscription
    // TO DO : Call service, load & display data
  }

  closeList() {
    this.searchActive = false;
  }

  searchCountry(event: any) {
    this.searchValue = event.target.value.toLowerCase();
    this.countriesFiltered = this.countriesList.filter(country => country.toLowerCase().includes(this.searchValue));
  }

}

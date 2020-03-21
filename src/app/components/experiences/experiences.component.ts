import { Component, OnInit, HostListener } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { Experience_Preview } from 'src/app/core/experience/experience';
import { ExperienceMockService } from 'src/app/core/experience/experience.mock.service';

import { Country } from '../../core/country/country';
import { COUNTRIES_LIST } from '../../core/country/countries.data';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  searchValue: string = '';
  countriesList: Country[] = COUNTRIES_LIST;
  countriesFiltered: Country[]  = [];
  searchActive: Boolean = false;
  selectedCategories: string[] = [];
  experiences: Experience_Preview[] = [];
  startIndex: number = 0;
  stopIndex: number = 4;
  loading: Boolean;
  totalExperiencesAvailable: number = 16; // TO DO : Appel API pour compter le nombre total d'expériences dispo (16 est un mock-data)

  // Scroll to top
  showScroll: boolean;
  showScrollHeight = 300;
  hideScrollHeight = 10;

  constructor(
    private titleService: Title,
    private meta: Meta,
    private router: Router,
    private route: ActivatedRoute,
    private experienceService: ExperienceMockService,
  ) { }

  ngOnInit() {
    // PAGE TITLE
    this.titleService.setTitle('Search and find the travel experience that suits you | Worldhelpers');

    // META DESCRIPTION
    this.meta.updateTag({name: 'description', content: ''});

    // RETRIEVE COUNTRY FROM URL
    this.route.queryParams.subscribe(params => {
      const indexSearchValue = COUNTRIES_LIST.findIndex(country => country.alpha3 === params['country']);
      if (indexSearchValue !== -1) {
        this.countriesFiltered = [COUNTRIES_LIST[indexSearchValue]];
        this.searchValue = this.countriesFiltered[0].name;
      } else {
        this.countriesFiltered = [];
        this.searchValue = '';
      }
      this.loadExperiences();
    });

    // RETRIEVE CATEGORIES URL
    this.route.queryParams.subscribe(params => {
      this.selectedCategories = params['categories'] ? params['categories'].split(',') : [];
      // TO DO : Call service, load & display data
    });
  }

  applyCategory(filter: string) {
    const index = this.selectedCategories.indexOf(filter);
    if (index === -1) {
      this.selectedCategories.push(filter);
    } else {
      this.selectedCategories.splice(index, 1);
    }
    this.updateQueryParams();
  }

  applyCountry(country: Country) {
    this.closeList();
    this.countriesFiltered = [country];
    this.updateQueryParams();
  }

  closeList() {
    this.searchActive = false;
  }

  loadExperiences() {
    this.loading = true;
    this.experienceService.getExperiences(this.startIndex, this.stopIndex).subscribe(experiences => {
      for (const experience of experiences) {
        this.experiences.push(experience);
      };
      this.startIndex += 4;
      this.stopIndex += 4;
      this.loading = false;
      console.log(this.experiences);
    });
  }

  resetSearch() {
    this.startIndex = 0;
    this.stopIndex = 4;
    this.router.navigate(['.'], { relativeTo: this.route, queryParams: {}});
  }

  // Source : https://waterlooblue.com/scroll-to-top-with-angular-4-using-hostlistener/
  scrollToTop() { 
    (function smoothscroll() { 
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; 
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 5));
      }
    })();
  }

  searchCountry(event: any) {
    this.searchValue = event.target.value.toLowerCase();
    this.countriesFiltered = this.countriesList.filter(country => country.name.toLowerCase().includes(this.searchValue));
  }

  updateQueryParams() {
    if (this.countriesFiltered.length && this.selectedCategories.length) {
      this.router.navigate(['.'], { relativeTo: this.route, queryParams: {
        country: this.countriesFiltered[0].alpha3,
        categories: this.selectedCategories.toString(),
      }});
    } else if (this.countriesFiltered.length && !this.selectedCategories.length) {
      this.router.navigate(['.'], { relativeTo: this.route, queryParams: {
        country: this.countriesFiltered[0].alpha3,
      }});
    } else if (!this.countriesFiltered.length && this.selectedCategories.length) {
      this.router.navigate(['.'], { relativeTo: this.route, queryParams: {
        categories: this.selectedCategories.toString(),
      }});
    } else {
      this.router.navigate(['.'], { relativeTo: this.route, queryParams: {}});
    }
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    // LOAD MORE EXPERIENCES
    // In chrome and some browser scroll is given to body tag
    // Add 300 in order to trigger function a bit before end of page
    let currentPosition = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight + 300;
    let pageHeight = document.documentElement.scrollHeight;  
    if (currentPosition >= pageHeight) {
      this.loadExperiences();
      // TO DO : Call de la fonction uniquement quand il y a encore des données (dans un if par exemple)
      // if (totalExperiencesAvailable !== this.experiences.length)
    }

    // SCROLL TO TOP
    if (( window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight) {
      this.showScroll = true;
    } else if ( this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight) { 
      this.showScroll = false; 
    }
  }

}

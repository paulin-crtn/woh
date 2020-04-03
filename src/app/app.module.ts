import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms'; //
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; //
import { HttpRequestInterceptor } from './core/HttpRequestInterceptor';

import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar'; 
import { MatDialogModule } from '@angular/material/dialog'; //
import { MatDatepickerModule } from '@angular/material/datepicker'; 

import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';


import { SharedModule } from './shared/shared.module';

import { ClickOutsideDirective } from './directives/click-outside.directive';


import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { BecomeHostComponent } from './components/become-host/become-host.component';
import { BecomeHelperComponent } from './components/become-helper/become-helper.component';
import { SitemapComponent } from './components/sitemap/sitemap.component';
import { LegalNoticeComponent } from './components/legal/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './components/legal/privacy-policy/privacy-policy.component';
import { ConditionsOfSaleComponent } from './components/legal/conditions-of-sale/conditions-of-sale.component';
import { ConditionsOfUseComponent } from './components/legal/conditions-of-use/conditions-of-use.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    ClickOutsideDirective,
    HomepageComponent,
    ExperiencesComponent,
    ExperienceComponent,
    HowItWorksComponent,
    BecomeHostComponent,
    BecomeHelperComponent,
    SitemapComponent,
    LegalNoticeComponent,
    PrivacyPolicyComponent,
    ConditionsOfSaleComponent,
    ConditionsOfUseComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    MatProgressBarModule,
    MatDialogModule,
    MatDatepickerModule,
    SatDatepickerModule,
    SatNativeDateModule,
    SharedModule,
  ],
  exports: [
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

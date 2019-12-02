import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { ExperiencesComponent } from './features/experiences/experiences.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { HowItWorksComponent } from './features/how-it-works/how-it-works.component';
import { BecomeHostComponent } from './features/become-host/become-host.component';
import { BecomeHelperComponent } from './features/become-helper/become-helper.component';
import { SitemapComponent } from './features/sitemap/sitemap.component';
import { LegalNoticeComponent } from './features/legal/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './features/legal/privacy-policy/privacy-policy.component';
import { ConditionsOfSaleComponent } from './features/legal/conditions-of-sale/conditions-of-sale.component';
import { ConditionsOfUseComponent } from './features/legal/conditions-of-use/conditions-of-use.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

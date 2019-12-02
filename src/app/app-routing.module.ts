import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './features/homepage/homepage.component';
import { ExperiencesComponent } from './features/experiences/experiences.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { HowItWorksComponent } from './features/how-it-works/how-it-works.component';
import { BecomeHostComponent } from './features/become-host/become-host.component';
import { BecomeHelperComponent } from './features/become-helper/become-helper.component';
import { LegalNoticeComponent } from './features/legal/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './features/legal/privacy-policy/privacy-policy.component';
import { ConditionsOfUseComponent } from './features/legal/conditions-of-use/conditions-of-use.component';
import { ConditionsOfSaleComponent } from './features/legal/conditions-of-sale/conditions-of-sale.component';
import { SitemapComponent } from './features/sitemap/sitemap.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'experience/:id/:title', component: ExperienceComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'become-a-host', component: BecomeHostComponent },
  { path: 'become-a-helper', component: BecomeHelperComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'conditions-of-use', component: ConditionsOfUseComponent },
  { path: 'conditions-of-sale', component: ConditionsOfSaleComponent },
  { path: 'sitemap', component: SitemapComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

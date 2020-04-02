import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { BecomeHostComponent } from './components/become-host/become-host.component';
import { BecomeHelperComponent } from './components/become-helper/become-helper.component';
import { LegalNoticeComponent } from './components/legal/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './components/legal/privacy-policy/privacy-policy.component';
import { ConditionsOfUseComponent } from './components/legal/conditions-of-use/conditions-of-use.component';
import { ConditionsOfSaleComponent } from './components/legal/conditions-of-sale/conditions-of-sale.component';
import { SitemapComponent } from './components/sitemap/sitemap.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

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
  { path: 'account/helper', loadChildren: () => import('./components/account-helper/account-helper.module').then(m => m.AccountHelperModule) },
  { path: 'account/host', loadChildren: () => import('./components/account-host/account-host.module').then(m => m.AccountHostModule) },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
 })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

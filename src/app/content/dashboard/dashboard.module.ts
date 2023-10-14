import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ChartistModule } from 'ng-chartist';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardModule } from '../partials/general/card/card.module';
import { NgChartsModule } from 'ng2-charts';
import { SalesComponent } from './sales/sales.component';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from '../../_layout/blockui/block-template.component';
import { MatchHeightModule } from '../partials/general/match-height/match-height.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { HospitalComponent } from './hospital/hospital.component';
import { GrowerDetailsComponent } from 'src/app/components/grower-details/grower-details.component';
import { PopupComponent } from './popup/popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { PopupOldGrowerComponent } from './popup-old-grower/popup-old-grower.component';
// import { NumberFormatPipe } from './number-format.pipe';
import { SearchMegadelComponent } from 'src/app/components/search-megadel/search-megadel.component';
import { PopupMoreInfoGrowerComponent } from './popup-more-info-grower/popup-more-info-grower.component';
import { SharedModuleModule } from '../../shared-module/shared-module.module';
import { PopupIzavonComponent } from './popup-izavon/popup-izavon.component';
import { PopupGrowerOtherAddrComponent } from './popup-grower-other-addr/popup-grower-other-addr.component';
import { PopupOldGrowerNameComponent } from './popup-old-grower-name/popup-old-grower-name.component';
import { PopupPetemPartnersComponent } from './popup-petem-partners/popup-petem-partners.component';
import { PopupCertificatesComponent } from './popup-certificates/popup-certificates.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PopupGrowerCardComponent } from './popup-grower-card/popup-grower-card.component';
import { CertificatesPageComponent } from './certificates-page/certificates-page.component';
import { PopupRavShnatiComponent } from './popup-rav-shnati/popup-rav-shnati.component';
import { PopupPaymentComponent } from './popup-payment/popup-payment.component';
import { PopupMonthlySummaryComponent } from './popup-monthly-summary/popup-monthly-summary.component';
import { PopupPartnersHodimComponent } from './popup-partners-hodim/popup-partners-hodim.component';
import { PopupShowAllCertificateTransferComponent } from './popup-show-all-certificate-transfer/popup-show-all-certificate-transfer.component';
import { PopupMifkadimComponent } from './ecommerce/popup-mifkadim/popup-mifkadim.component';
import { PopupPinoyimComponent } from './ecommerce/popup-pinoyim/popup-pinoyim.component';
import { PopupHiclosBySiteComponent } from './ecommerce/popup-hiclos-by-site/popup-hiclos-by-site.component';
import { PopupOldFlocksComponent } from './ecommerce/popup-old-flocks/popup-old-flocks.component';
import { PopupMifkadimComponentPageComponent } from './ecommerce/popup-mifkadim-component-page/popup-mifkadim-component-page.component';
import { RouterModule, Routes } from '@angular/router';
import { PopupPageComponent } from './ecommerce/popup-page/popup-page.component';
import { PagePopupShowAllCertificateTransferComponent } from './ecommerce/page-popup-show-all-certificate-transfer/page-popup-show-all-certificate-transfer.component';
import { PagePopupPinoyimComponent } from './ecommerce/page-popup-pinoyim/page-popup-pinoyim.component';
import { PageHiclosBySiteComponent } from './ecommerce/page-hiclos-by-site/page-hiclos-by-site.component';
import { PageQuarantineComponent } from './ecommerce/page-quarantine/page-quarantine.component';
import { HazmadotHistoryPageComponent } from './ecommerce/hazmadot-history-page/hazmadot-history-page.component';
import { PageShivokimHatalaComponent } from './ecommerce/page-shivokim-hatala/page-shivokim-hatala.component';
import { PageShivokToNashchataComponent } from './ecommerce/page-shivok-to-nashchata/page-shivok-to-nashchata.component';
import { PageShivokimFromImonToEndSiteComponent } from './ecommerce/page-shivokim-from-imon-to-end-site/page-shivokim-from-imon-to-end-site.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { BsDatepickerConfig, BsDatepickerModule, BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { heLocale } from 'ngx-bootstrap/locale';

defineLocale('he', heLocale); // Define Hebrew locale
defineLocale('he', heLocale); // Define Hebrew locale
@NgModule({
  imports: [
    BsDatepickerModule.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    ChartistModule,
    FormsModule,
    NgChartsModule,
    CardModule,
    MatchHeightModule,
    NgxDatatableModule,
    PerfectScrollbarModule,
    MatDialogModule,
    MatIconModule,
    NgbModule,
    SharedModuleModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent,
    }),
    RouterModule.forChild([
      {
        path: 'HazmadotHistoryPageComponent',
        component: HazmadotHistoryPageComponent,
      },
      {
        path: 'PageShivokimHatalaComponent',
        component: PageShivokimHatalaComponent,
      },
      {
        path: 'PageQuarantineComponent',
        component: PageQuarantineComponent,
      },
      {
        path: 'ecommerce/:id',
        component: EcommerceComponent,
      },

      {
        path: 'ecommerce/:id/:flockid/:farmid',
        component: EcommerceComponent,
      },
      {
        path: 'PageShivokimFromImonToEndSiteComponent',
        component: PageShivokimFromImonToEndSiteComponent,
      },

      {
        path: 'GrowerDetailsComponent',
        component: GrowerDetailsComponent,
      },

      {
        path: 'CertificatesPageComponent',
        component: CertificatesPageComponent,
      },
      {
        path: 'PopupPageComponent',
        component: PopupPageComponent,
      },
      {
        path: 'PagePopupPinoyimComponent',
        component: PagePopupPinoyimComponent,
      },
      {
        path: 'PageHiclosBySiteComponent',
        component: PageHiclosBySiteComponent,
      },
      {
        path: 'PageShivokToNashchataComponent',
        component: PageShivokToNashchataComponent,
      },
      {
        path: 'PopupMifkadimComponentPageComponent',
        component: PopupMifkadimComponentPageComponent,
      },

      {
        path: 'PagePopupShowAllCertificateTransferComponent',
        component: PagePopupShowAllCertificateTransferComponent,
      },
      {
        path: 'sales',
        component: SalesComponent,
      },
      {
        path: 'hospital',
        component: HospitalComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ]),
  ],
  declarations: [
    EcommerceComponent,
    SalesComponent,
    HospitalComponent,
    GrowerDetailsComponent,
    PopupComponent,
    PopupOldGrowerComponent,
    PopupMoreInfoGrowerComponent,
    PopupIzavonComponent,
    PopupGrowerOtherAddrComponent,
    PopupOldGrowerNameComponent,
    PopupPetemPartnersComponent,
    PopupCertificatesComponent,
    PopupGrowerCardComponent,
    CertificatesPageComponent,
    PopupRavShnatiComponent,
    PopupPaymentComponent,
    PopupMonthlySummaryComponent,
    PopupPartnersHodimComponent,
    PopupShowAllCertificateTransferComponent,
    PopupMifkadimComponent,
    PopupPinoyimComponent,
    PopupHiclosBySiteComponent,
    PopupOldFlocksComponent,
    PopupMifkadimComponentPageComponent,
    PopupPageComponent,
    PagePopupShowAllCertificateTransferComponent,
    PagePopupPinoyimComponent,
    PageHiclosBySiteComponent,
    PageQuarantineComponent,
    HazmadotHistoryPageComponent,
    PageShivokimHatalaComponent,
    PageShivokToNashchataComponent,
    PageShivokimFromImonToEndSiteComponent,
  ],
  providers: [DatePipe],
  exports: [RouterModule],
})
export class DashboardModule {
    constructor(private bsLocaleService: BsLocaleService) {
        this.bsLocaleService.use('he'); // Set the locale to Hebrew
      }
    }
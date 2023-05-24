import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
import { NumberFormatPipe } from './number-format.pipe';
import { SearchMegadelComponent } from 'src/app/components/search-megadel/search-megadel.component';
import { PopupMoreInfoGrowerComponent } from './popup-more-info-grower/popup-more-info-grower.component';

@NgModule({
  imports: [
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
    BlockUIModule.forRoot({
      template: BlockTemplateComponent,
    }),
    RouterModule.forChild([
      {
        path: 'ecommerce/:id',
        component: EcommerceComponent,
      },

      {
        path: 'GrowerDetailsComponent',
        component: GrowerDetailsComponent,
      },

      {
        path: 'sales',
        component: SalesComponent,
      },
      {
        path: 'hospital',
        component: HospitalComponent,
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
    NumberFormatPipe,
    PopupMoreInfoGrowerComponent,
  ],

  exports: [RouterModule],
})
export class DashboardModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicinitialisationComponent } from './basicinitialisation/basicinitialisation.component';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';

import { StylingComponent } from './styling/styling.component';
import { ApiComponent } from './api/api.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';
import { CardModule } from '../../partials/general/card/card.module';
import { BreadcrumbModule } from 'src/app/_layout/breadcrumb/breadcrumb.module';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from '../../../_layout/blockui/block-template.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SearchMegadelComponent } from 'src/app/components/search-megadel/search-megadel.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    BreadcrumbModule,
    NgSelectModule,
    FormsModule,
    ClipboardModule,
    PerfectScrollbarModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent,
    }),
    RouterModule.forChild([
      {
        path: 'basicinitialisation',
        component: BasicinitialisationComponent,
      },
      {
        path: 'styling',
        component: StylingComponent,
      },

      {
        path: 'api',
        component: ApiComponent,
      },

      {
        path: 'SearchMegadelComponent',
        component: SearchMegadelComponent,
      },
    ]),
  ],
  declarations: [
    BasicinitialisationComponent,
    StylingComponent,
    ApiComponent,
    SearchMegadelComponent,
  ],
  exports: [RouterModule],
})
export class DatatablesModule {}

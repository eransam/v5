import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberFormatPipe } from '../content/dashboard/pipes/number-format.pipe/number-format.pipe';

@NgModule({
  declarations: [NumberFormatPipe],
  exports: [NumberFormatPipe], // Remove SharedModuleModule from the exports array

  imports: [CommonModule],
})
export class SharedModuleModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ConfirmComponent } from './components/confirm/confirm.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    SidenavComponent
  ],
  entryComponents: [
    ConfirmComponent
  ],
  declarations: [SidenavComponent, ConfirmComponent]
})
export class SharedModule { }

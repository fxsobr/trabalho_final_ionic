import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfessoresPage } from './professores.page';
import {SearchPipe} from '../../../pipes/search.pipe';

const routes: Routes = [
  {
    path: '',
    component: ProfessoresPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfessoresPage, SearchPipe]
})
export class ProfessoresPageModule {}

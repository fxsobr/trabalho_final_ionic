import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlteraProfessorPage } from './altera-professor.page';

const routes: Routes = [
  {
    path: '',
    component: AlteraProfessorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlteraProfessorPage]
})
export class AlteraProfessorPageModule {}

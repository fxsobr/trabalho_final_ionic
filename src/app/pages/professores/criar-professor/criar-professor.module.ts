import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CriarProfessorPage } from './criar-professor.page';

const routes: Routes = [
  {
    path: '',
    component: CriarProfessorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CriarProfessorPage]
})
export class CriarProfessorPageModule {}

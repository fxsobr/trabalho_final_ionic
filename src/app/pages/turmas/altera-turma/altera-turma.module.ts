import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlteraTurmaPage } from './altera-turma.page';

const routes: Routes = [
  {
    path: '',
    component: AlteraTurmaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlteraTurmaPage]
})
export class AlteraTurmaPageModule {}

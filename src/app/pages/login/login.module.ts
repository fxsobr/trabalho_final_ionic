import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';
import {ComponentsModule} from '../../components/components.module';
import {EsqueceuSenhaPage} from '../esqueceu-senha/esqueceu-senha.page';

const routes: Routes = [
    {
        path: '',
        component: LoginPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ComponentsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [LoginPage, EsqueceuSenhaPage],
    entryComponents: [EsqueceuSenhaPage]
})
export class LoginPageModule {}

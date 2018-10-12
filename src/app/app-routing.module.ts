import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
    { path: 'home', loadChildren: './pages/home/home.module#HomePageModule', canActivate: [AuthGuard] },
    { path: 'esqueceu-senha', loadChildren: './pages/esqueceu-senha/esqueceu-senha.module#EsqueceuSenhaPageModule' },
  { path: 'professores', loadChildren: './pages/professores/professores.module#ProfessoresPageModule' },
  { path: 'criar-professor', loadChildren: './pages/criar-professor/criar-professor.module#CriarProfessorPageModule' },
  { path: 'detalhes-professor', loadChildren: './pages/detalhes-professor/detalhes-professor.module#DetalhesProfessorPageModule' },
  { path: 'altera-professor', loadChildren: './pages/altera-professor/altera-professor.module#AlteraProfessorPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

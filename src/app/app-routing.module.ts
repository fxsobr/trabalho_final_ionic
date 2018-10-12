import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
    { path: 'home', loadChildren: './pages/home/home.module#HomePageModule', canActivate: [AuthGuard] },
    { path: 'esqueceu-senha', loadChildren: './pages/esqueceu-senha/esqueceu-senha.module#EsqueceuSenhaPageModule' },
    { path: 'lista-professores', loadChildren: './pages/professores/lista-professores/professores.module#ProfessoresPageModule' },
    { path: 'criar-professor', loadChildren: './pages/professores/criar-professor/criar-professor.module#CriarProfessorPageModule' },
    { path: 'detalhes-professor', loadChildren: './pages/professores/detalhes-professor/detalhes-professor.module#DetalhesProfessorPageModule' },
    { path: 'altera-professor/:id', loadChildren: './pages/professores/altera-professor/altera-professor.module#AlteraProfessorPageModule' },
    { path: 'lista-turmas', loadChildren: './pages/turmas/lista-turmas/turmas.module#TurmasPageModule' },
    { path: 'criar-turma', loadChildren: './pages/turmas/criar-turma/criar-turma.module#CriarTurmaPageModule' },
    { path: 'altera-turma/:id', loadChildren: './pages/turmas/altera-turma/altera-turma.module#AlteraTurmaPageModule' },
    { path: 'detalhes-turma/:id', loadChildren: './pages/turmas/detalhes-turma/detalhes-turma.module#DetalhesTurmaPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

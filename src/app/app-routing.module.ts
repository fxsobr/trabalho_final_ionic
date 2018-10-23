import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
    { path: 'esqueceu-senha', loadChildren: './pages/esqueceu-senha/esqueceu-senha.module#EsqueceuSenhaPageModule' },
    { path: 'lista-professores', loadChildren: './pages/professores/lista-professores/professores.module#ProfessoresPageModule', runGuardsAndResolvers: 'always', canActivate: [AuthGuard] },
    { path: 'criar-professor', loadChildren: './pages/professores/criar-professor/criar-professor.module#CriarProfessorPageModule', runGuardsAndResolvers: 'always', canActivate: [AuthGuard] },
    { path: 'detalhes-professor', loadChildren: './pages/professores/detalhes-professor/detalhes-professor.module#DetalhesProfessorPageModule', runGuardsAndResolvers: 'always', canActivate: [AuthGuard] },
    { path: 'altera-professor/:id', loadChildren: './pages/professores/altera-professor/altera-professor.module#AlteraProfessorPageModule', runGuardsAndResolvers: 'always', canActivate: [AuthGuard] },
    { path: 'lista-turmas', loadChildren: './pages/turmas/lista-turmas/turmas.module#TurmasPageModule', runGuardsAndResolvers: 'always', canActivate: [AuthGuard] },
    { path: 'criar-turma', loadChildren: './pages/turmas/criar-turma/criar-turma.module#CriarTurmaPageModule', runGuardsAndResolvers: 'always', canActivate: [AuthGuard] },
    { path: 'altera-turma/:id', loadChildren: './pages/turmas/altera-turma/altera-turma.module#AlteraTurmaPageModule', runGuardsAndResolvers: 'always', canActivate: [AuthGuard] },
    { path: 'detalhes-turma/:id', loadChildren: './pages/turmas/detalhes-turma/detalhes-turma.module#DetalhesTurmaPageModule', runGuardsAndResolvers: 'always', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

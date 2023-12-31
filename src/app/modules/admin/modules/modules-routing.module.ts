import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ModulesComponent} from "@app/modules/admin/modules/modules.component";


const routes: Routes = [
  { path: '', component:  ModulesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}

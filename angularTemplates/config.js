"use strict";

const { capitalize } = require("../utils");


module.exports = function(reqFile) {
  return `import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ${capitalize(reqFile.module)}Interactor } from "../domain/ports/in/${reqFile.module}.interactor";
import { ${capitalize(reqFile.module)}Service } from "../domain/ports/out/${reqFile.module}.service";
import { ${capitalize(reqFile.module)}InteractorAdapter } from "../infrastructure/adapters/in/${reqFile.module}.interactor.adapter";
import { ${capitalize(reqFile.module)}ServiceAdapter } from "../infrastructure/adapters/out/${reqFile.module}.service.adapter";

import { Add${capitalize(reqFile.module)}Component } from '../infrastructure/components/${reqFile.module}/add-${reqFile.module}.component';
import { ${capitalize(reqFile.module)}Component } from "../infrastructure/components/${reqFile.module}/${reqFile.module}.component";
import { UsersFiltered } from "../infrastructure/components/users/usersFilters/users-filtered.component";
import { AuthGuard } from "../infrastructure/shared/services/auth.guard";

const routes: Routes = [
    { path: 'core/${reqFile.module}s', component: ${capitalize(reqFile.module)}Component, canActivate: [AuthGuard]},
    { path: 'core/${reqFile.module}s/add', component: Add${capitalize(reqFile.module)}Component, canActivate: [AuthGuard]},
    { path: 'core/${reqFile.module}s/add/:id${capitalize(reqFile.module)}', component: Add${capitalize(reqFile.module)}Component, canActivate: [AuthGuard]}
];

export const ${capitalize(reqFile.module)}sComponents = [
    ${capitalize(reqFile.module)}Component,
    Add${capitalize(reqFile.module)}Component
];

/**
 * @author ${reqFile.author || 'nameless dev'}
 */
@NgModule({
    providers: [
        {
            provide: ${capitalize(reqFile.module)}Service,
            useClass: ${capitalize(reqFile.module)}ServiceAdapter
        },
        {
            provide: ${capitalize(reqFile.module)}Interactor,
            useClass: ${capitalize(reqFile.module)}InteractorAdapter
        }
    ],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class ${capitalize(reqFile.module)}Module {}
  `;
}
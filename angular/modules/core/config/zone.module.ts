import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ZoneInteractor } from "../domain/ports/in/zone.interactor";
import { ZoneService } from "../domain/ports/out/zone.service";
import { ZoneInteractorAdapter } from "../infrastructure/adapters/in/zone.iteractor.adapter";
import { ZoneServiceAdapter } from "../infrastructure/adapters/out/zone.service.adapter";

import { ZoneComponent } from "../infrastructure/components/zone/zone.component";
import { UsersFiltered } from "../infrastructure/components/users/usersFilters/users-filtered.component";
import { AuthGuard } from "../infrastructure/shared/services/auth.guard";

const routes: Routes = [
    { path: 'core/zones', component: ZoneComponent, canActivate: [AuthGuard]},
];

export const ZonesComponents = [
    ZoneComponent,
    UsersFiltered
];

/**
 * @author Alejandro Leyva
 */
@NgModule({
    providers: [
        {
            provide: ZoneService,
            useClass: ZoneServiceAdapter
        },
        {
            provide: ZoneInteractor,
            useClass: ZoneInteractorAdapter
        }
    ],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class ZoneModule {}
  
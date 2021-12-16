"use strict";

const { capitalize, iterateAutoForm } = require("../utils");

module.exports = function(reqFile) {
  const isFilter = true;
  return `
<mat-sidenav-container class="example-container"  >
  <mat-sidenav class=" mat-sidenav-filters" #sidenav [mode]="'side'"  position="end">
        <div class="input-group mb-3">
            <mat-icon>filter_list</mat-icon>
            &nbsp;
            <h4>
                Filtros
            </h4>
        </div>
        <mat-divider></mat-divider>
        <div class="row">
            ${iterateAutoForm(reqFile.properties, isFilter)}
            <div class="row">
                <div class="col">
                    <mat-form-field  class="fluid">
                        <mat-label>Estatus</mat-label>
                        <mat-select  [(ngModel)]="idStatus">
                            <mat-option value="">Seleccione...</mat-option>
                            <mat-option *ngFor="let status of statuses" [value]="status.idStatus">{{status.statusName}}</mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
            </div>
            <div class="footer" >
                <button mat-button class="btn btn-sm btn-secondary" (click)="cleanFilters()">Limpiar</button>
                &nbsp;
                <button type="button" class="btn btn-sm backgroundSecundary" (click)="getData()">Aplicar Filtros</button>
            </div>
        </div>
    </mat-sidenav>
    <mat-sidenav-content> 
        <div class="container-fluid">

            <div class="row">
                <div class="col-8">

                    <h3>
                        <button mat-button *ngIf="idStatus" class="btn btn-icon" title="Regresar" (click)="back()">
                            <mat-icon>keyboard_backspace</mat-icon>
                        </button>
                        Lista de Zonas
                    </h3>
                </div>
                <div class="col-4" align="right">
                    <a *ngIf="!id${capitalize(reqFile.module)}" [routerLink]="['add']" mat-button class="btn btn-success ">
                        <mat-icon>add</mat-icon>
                        <span>Nueva zona</span>
                    </a>
                    &nbsp;
                    <button (click)="sidenav.toggle()"  mat-button class="btn btn-white ">
                        <mat-icon>filter_list</mat-icon>
                        <span>Filtros</span>
                    </button>
                </div>
            </div>
            <mat-divider></mat-divider>
            <div class="container-table">

                <table mat-table [dataSource]="${(reqFile.module)}List" matSort class="mat-elevation-z8">

                    <ng-container matColumnDef="id${capitalize(reqFile.module)}">
                        <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>
                        <td mat-cell *matCellDef="let element"> {{element.id${capitalize(reqFile.module)}}} </td>
                    </ng-container>
                
                    <ng-container matColumnDef="name">
                        <th mat-header-cell *matHeaderCellDef mat-sort-header> Nombre </th>
                        <td mat-cell *matCellDef="let element"> {{element.name}} </td>
                    </ng-container>
                
                    <ng-container matColumnDef="status">
                        <th mat-header-cell *matHeaderCellDef  class="aling-center"> Estatus </th>
                        <td mat-cell *matCellDef="let element"  class="aling-center"> {{getStatusName(element.status)}} </td>
                    </ng-container>
                
                    <ng-container  matColumnDef="actions">
                        <th mat-header-cell *matHeaderCellDef class="aling-right"> Acciones </th>
                        <td mat-cell *matCellDef="let element"  class="aling-right">
                            <button
                                type="button"
                                mat-icon-button 
                                class="colorGray icon-action"
                                [routerLink]="['/core/${(reqFile.module)}s/add', element.id${capitalize(reqFile.module)}]"
                                title="Actualizar"
                                [disabled]="element.status == ${(reqFile.module)}Status.DISABLE || element.status == ${(reqFile.module)}Status.DELETE"
                            >
                                <mat-icon >edit</mat-icon>
                            </button>
                            <button
                                type="button"
                                mat-icon-button 
                                class="colorGray icon-action"
                                [disabled]="element.status == ${(reqFile.module)}Status.ENABLE || element.status == ${(reqFile.module)}Status.DELETE"
                                (click)="enable${capitalize(reqFile.module)}(element)"
                                title="Habilitar"
                            > 
                                <mat-icon >check</mat-icon>
                        </button>
                            <button
                                type="button"
                                mat-icon-button 
                                class="colorGray icon-action"
                                (click)="disable${capitalize(reqFile.module)}(element)"
                                title="Deshabilitar"
                                [disabled]="element.status == ${(reqFile.module)}Status.DISABLE  || element.status == ${(reqFile.module)}Status.DELETE"
                            >
                                <mat-icon >remove</mat-icon>
                            </button>
                            <button
                                type="button"
                                mat-icon-button
                                class="colorGray icon-action"                            
                                (click)="delete${capitalize(reqFile.module)}(element)"
                                title="Eliminar"
                                [disabled]="element.status == ${(reqFile.module)}Status.DELETE"
                            >
                                <mat-icon >delete</mat-icon>
                            </button>
                        </td>
                    </ng-container>
                
                    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
                    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
                
                </table>
                <mat-paginator [pageSizeOptions]="[10]" showFirstLastButtons></mat-paginator>
            </div>
        </div>
    </mat-sidenav-content>
 </mat-sidenav-container>
  `;
}
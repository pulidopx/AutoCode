"use strict";

const { iterateAutoForm } = require("../utils");


module.exports = function(reqFile) {
  return `<mat-card>
  <mat-card-header class="header">
      <mat-card-title>
          <button mat-button class="btn btn-icon" title="Regresar" (click)="back()">
              <mat-icon>keyboard_backspace</mat-icon>
          </button>
          Agregar Menú
      </mat-card-title>
  </mat-card-header>
  <form [formGroup]="${(reqFile.module)}Form" (ngSubmit)="save()">
      <mat-card-content>
          <div class="row">
              <div class="col-12">
                ${iterateAutoForm(reqFile.properties)}
              </div>
          </div>
          <br>
          <mat-divider></mat-divider>
          <br>
          <div class="row">
              <div class="col" align="right">
                  
                  <button mat-button class="btn backgroundSecundary ">
                      <mat-icon>check</mat-icon>
                      Guardar
                  </button>
              </div>
          </div>
      </mat-card-content>
  </form>
</mat-card>
  `;
}
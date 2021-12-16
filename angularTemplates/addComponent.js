"use strict";

const {
    capitalize,
    iterateCleanValuesFront,
    iterateValidatorsFront,
    iterateParamsForSaveFront
} = require("../utils");


module.exports = function(reqFile) {
  return `import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ${capitalize(reqFile.module)} } from "../../../domain/models/${capitalize(reqFile.module)}";
import { ${capitalize(reqFile.module)}Interactor } from "../../../domain/ports/in/${(reqFile.module)}.interactor";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Observable } from "rxjs";
import { map, startWith } from 'rxjs/operators';
import { ${capitalize(reqFile.module)}Status } from "../../../domain/models/statuses/${(reqFile.module)}.status";
import { TypeMessage } from "../../../domain/models/TypeMessage";
import { MessageService } from "../../../domain/ports/out/message.service";

@Component({
    templateUrl: './add-${(reqFile.module)}.component.html',
})

export class Add${capitalize(reqFile.module)}Component implements OnInit{
    ${(reqFile.module)}Form : FormGroup;
    ${(reqFile.module)}: ${capitalize(reqFile.module)};
    parents: ${capitalize(reqFile.module)}[] = [];
    statuses: ${capitalize(reqFile.module)}Status = new ${capitalize(reqFile.module)}Status();
    id${capitalize(reqFile.module)}: number;
    filteredOptions: Observable<${capitalize(reqFile.module)}[]>;

    /**
     * 
     * @param formBuilder 
     * @param ${(reqFile.module)}Interactor 
     * @param modal 
     * @param route 
     * @param location 
     * @author ${reqFile.author || 'nameless dev'}
     */
    constructor(
        private formBuilder: FormBuilder,
        private ${(reqFile.module)}Interactor: ${capitalize(reqFile.module)}Interactor,
        private modal: NgbModal,
        private route: ActivatedRoute,
        private location: Location,
        private message : MessageService
    ){
        this.createForm();
    }

    /**
     * @author ${reqFile.author || 'nameless dev'}
     * @description Inicializa el objeto menú y checa si recibe parametro para asignar valor
     */
    ngOnInit(){        
        this.${(reqFile.module)} = {
            id${capitalize(reqFile.module)}: null,
            status: ${capitalize(reqFile.module)}Status.ENABLE,
            ${iterateCleanValuesFront(reqFile.properties)}
        }
        
        this.route.params.subscribe( res => {
            if( res.id${capitalize(reqFile.module)} ){
                this.id${capitalize(reqFile.module)} = res.id${capitalize(reqFile.module)};
                this.${(reqFile.module)}Interactor.get${capitalize(reqFile.module)}ById( this.id${capitalize(reqFile.module)} ).then( ${(reqFile.module)} => {
                    this.${(reqFile.module)} = {...${(reqFile.module)}};
                    this.createForm();
                });
            } 
        })
        // this.getParents();
    }

    /**
     * @author ${reqFile.author || 'nameless dev'}
     */
    createForm() {
        this.${(reqFile.module)}Form = this.formBuilder.group({
            id${(reqFile.module)}:     [ this.${(reqFile.module)} ? this.${(reqFile.module)}.id${capitalize(reqFile.module)}  : null ],
            ${iterateValidatorsFront(reqFile.properties, reqFile)}
        });

        
    }

    /**
     * 
     * @param value 
     * @returns 
     * @author ${reqFile.author || 'nameless dev'}
     *
    private _filter(value: string | ${capitalize(reqFile.module)}): ${capitalize(reqFile.module)}[] {
        const filterValue = typeof value == "string" ? value.toLowerCase() : value.${(reqFile.module)}Name.toLowerCase();
        
        return this.parents.filter(option => option.${(reqFile.module)}Name.toLowerCase().includes(filterValue));
    }
    */

    /**
     * @author ${reqFile.author || 'nameless dev'}
     *
    getParents() {
        this.parents = [];
        this.${(reqFile.module)}Interactor.get${capitalize(reqFile.module)}s("", ${capitalize(reqFile.module)}tatus.ENABLE)
            .then( res => {
                if( res ) {
                    res.sort( (a, b) => a.id${capitalize(reqFile.module)} < b.id${capitalize(reqFile.module)} ? -1 : 0 );
                    this.parents = res;
                    this.filteredOptions = this.${(reqFile.module)}Form.controls.parent.valueChanges.pipe(
                        startWith(''),
                        map(value => this._filter(value))
                    );
                }
            });
    }
    */

    /**
     * 
     * @param ${capitalize(reqFile.module)} 
     * @returns 
     * @author ${reqFile.author || 'nameless dev'}
     *
    display${capitalize(reqFile.module)}Name( ${(reqFile.module)}: ${capitalize(reqFile.module)} ) {
        return ${(reqFile.module)} ? ${(reqFile.module)}.name : '';
    }
    */

    /**
     * @author ${reqFile.author || 'nameless dev'}
     */
    save() {
        if( this.${(reqFile.module)}Form.valid ) {
            ${iterateParamsForSaveFront(reqFile.properties, reqFile)}
            this.${(reqFile.module)}Interactor.save( this.${(reqFile.module)} )
                .then( res => {
                    this.${(reqFile.module)} = {...res};
                    const msg: TypeMessage = {
                        title: 'Guardar',
                        message: '${(reqFile.name)} guardada correctamente.'
                    }
                    this.message.confirm('success', msg);
                }).catch(err => err);
        }
    }

    /**
     * @author ${reqFile.author || 'nameless dev'}
     *
    addAction${(reqFile.module)}() {
        this.modalAction${capitalize(reqFile.module)}();

    }
    */
    /**
     * 
     * @param action${(reqFile.module)} 
     * @author ${reqFile.author || 'nameless dev'}
     *
    editAction${(reqFile.module)}( action${(reqFile.module)}: Action${(reqFile.module)} ) {
        this.modalAction${capitalize(reqFile.module)}(action${(reqFile.module)});
    }
    */
    /**
     * 
     * @param action${(reqFile.module)} 
     * @author ${reqFile.author || 'nameless dev'}
     *
    private modalAction${capitalize(reqFile.module)}( action${(reqFile.module)}?: Action${(reqFile.module)} ) {
        const modal = this.modal.open(AddAction${(reqFile.module)}Component, {centered: true});
        modal.componentInstance.action${(reqFile.module)} = action${(reqFile.module)};
        modal.result.then( resp => {
            if( resp ) {
                if( action${(reqFile.module)} && action${(reqFile.module)}.idAction${(reqFile.module)} ) {
                    this.${(reqFile.module)}.action${(reqFile.module)}s.map( res => {
                        if( res.idAction${(reqFile.module)} == resp.idAction${(reqFile.module)} ){
                            res.action${(reqFile.module)}Name = resp.action${(reqFile.module)}Name;
                        }
                    });
                } else {
                    this.${(reqFile.module)}.action${capitalize(reqFile.module)}s.push(resp);
                }
                this.${(reqFile.module)}.action${capitalize(reqFile.module)}s = [...this.${(reqFile.module)}.action${capitalize(reqFile.module)}s];
            }
        });
    }
    */
    /**
     * 
     * @param action 
     * @author ${reqFile.author || 'nameless dev'}
     *
    deleteAction${(reqFile.module)}( action: Action${(reqFile.module)} ) {
        for (let index = 0; index < this.${(reqFile.module)}.action${capitalize(reqFile.module)}s.length; index++) {
            if( this.${(reqFile.module)}.action${(reqFile.module)}s[index].idAction${(reqFile.module)} == action.idAction${(reqFile.module)}) {
                this.${(reqFile.module)}.action${(reqFile.module)}s.splice(index, 1);
            }            
        }
        this.${(reqFile.module)}.action${(reqFile.module)}s = [...this.${(reqFile.module)}.action${(reqFile.module)}s];
    }

    */
    /**
     * @author ${reqFile.author || 'nameless dev'}
     */
    back() {
        this.location.back()
    }
}
  `;
}
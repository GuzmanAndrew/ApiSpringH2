import { Component, OnInit } from '@angular/core';
import { Persona } from '../../Model/Persona';
import { ActivatedRoute, Router } from '@angular/router';

import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  persona: Persona = {
    id: 0,
    nombre: '',
    apellido: '',
    direccion: '',
    procesado: '',
    dni: 0,
    fecha: ''
  };

  edit: boolean = false;

  constructor(private service: ServiceService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.service.getPersonaId(params.id).subscribe(
        res => {
          console.log(res);
          this.persona = res;
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }

  savePerson() {
    delete this.persona.id;
    this.service.createPersona(this.persona).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/person']);
      },
      err => console.error(err)
    );
  }

  updatePerson() {
    this.service.updatePersona(this.persona.id, this.persona).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/person']);
      },
      err => console.error(err)
    );
  }
}

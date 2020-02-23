import { Component, OnInit } from '@angular/core';

import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  personas: any = [];

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.getPersons();
  }

  getPersons() {
    this.service.getPersonas().subscribe(
      res => {
        console.log(res);
        this.personas = res;
      },
      err => console.error(err)
    );
  }

  deletePerson(id: number) {
    this.service.deletePersona(id).subscribe(
      res => {
        console.log(res);
        this.getPersons();
      },
      err => console.error(err)
    );
  }
}

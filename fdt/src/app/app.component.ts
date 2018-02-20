import { Component } from '@angular/core';
import { Defect } from './defect';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defect: Defect;
  defects: Defect[];
  title = 'Fidelity Defect Tracker';
  asc = true;
  showFormVisible = false;
  constructor() {
    this.defect = new Defect(0, '', '', 0, '', []);
    this.defects = [];
    this.defects.push(new Defect(123, 'System is crashing for no reason', 'open', 1, 'No unit tests found', ['main.c', 'main.h']));
    this.defects.push(new Defect(245, 'System is crashing on Monday morning', 'resolved', 3, 'No unit tests found', ['main.c', 'main.h']));
    this.defects.push(new Defect(165, 'System is crashing before booting', 'closed', 2, 'No unit tests found', ['main.c', 'main.h']));
    this.defects.push(new Defect(789, 'System is never crashing', 'closed', 1, 'No unit tests found', ['main.c', 'main.h']));
    this.defects.push(new Defect(546, 'System is crashing when no power', 'open', 2, 'No unit tests found', ['main.c', 'main.h']));
    this.defects.push(new Defect(134, 'System is crashing with internet', 'open', 1, 'No unit tests found', ['main.c', 'main.h']));
    this.defects.push(new Defect(897, 'System is crashing immediately', 'open', 1, 'No unit tests found', ['main.c', 'main.h']));
    this.defects.push(new Defect(456, 'System is crashing sometimes', 'resolved',31, 'No unit tests found', ['main.c', 'main.h']));
    this.defects.push(new Defect(467, 'System is crashing on sundays ', 'open', 1, 'No unit tests found', ['main.c', 'main.h']));
  }

  sort(column) {
    this.defects.sort((f, s) => {
      if (this.asc === true) {
        return f[column] - s[column];
      } else {
        return s[column] - f[column];
      }
    });
    this.asc = !this.asc;
  }

  add() {
    this.defect.id = this.defects.length + 100;
    this.defect.status = 'new';
    this.defects.push(this.defect);
    this.defect = new Defect(0, '', '', 0, '', []);
  }

  showForm() {
    this.showFormVisible = true;
  }

  hideForm() {
    this.showFormVisible = false;
  }
}

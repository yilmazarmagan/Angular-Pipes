import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../core/model/user';
import { userData } from '../../core/utils/user-data';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
})
export class PipesComponent {
  observableData$: Observable<User.IUser> = of(userData);

  skills: { [k: string]: string } = {
    '=0': 'No Skill',
    '=1': 'One Skill',
    other: 'Has # Skills',
  };
}

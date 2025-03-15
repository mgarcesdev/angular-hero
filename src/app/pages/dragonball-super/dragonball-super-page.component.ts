import { Component, inject } from '@angular/core';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { DragonballService } from '../../services/dragonball.service';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'dragonball-page',
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class DragonballSuperPageComponent {
  public dragonballService = inject(DragonballService);
}

import { Component, computed, signal } from '@angular/core';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';

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
  addCharacter(newCharacter: Character) {
    this.characters.update((list) => [...list, newCharacter]);
  }

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);

  powerClasses = computed(() => {
    return {
      'text-danger': true,
    };
  });
}

import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'dragonball-page',
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent],
})
export class DragonballSuperPageComponent {
  addCharacter() {
    if (!this.name() || !this.power() || this.power() < 0) {
      return;
    }
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };
    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

  name = signal<string>('');
  power = signal<number>(0);

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

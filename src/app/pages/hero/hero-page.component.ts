import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe],
})
export class HeroPageComponent {
  public name = signal('Ironman');
  public age = signal(45);

  capitalizeName = computed(() => {
    return this.name().toUpperCase();
  });

  heroDescription = computed(() => {
    return `${this.name()} - ${this.age()}`;
  });

  changeHero(): void {
    this.name.set(this.name() === 'Ironman' ? 'Spiderman' : 'Ironman');
  }

  changeAge(): void {
    this.age.set(this.age() === 45 ? 30 : 45);
  }

  resetForm(): void {
    this.name.set('Ironman');
    this.age.set(45);
  }
}

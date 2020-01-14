import {Component} from '@angular/core';
import {ANIMALES} from '../data.animales';
import {Animal} from '../interface/animal';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    animales: Animal[] = [];

    constructor() {
        // Splice  crea una copìa del array animales
        this.animales = ANIMALES.splice(0);
    }

    reproducir(animal: Animal) {
        const audio = new Audio(); // Funcionalidad HTML
        audio.src = animal.audio;

        audio.load();
        audio.play();

        animal.reproduciendo = true;

        setTimeout(() => animal.reproduciendo = false,
            animal.duracion * 1000);
    }
}

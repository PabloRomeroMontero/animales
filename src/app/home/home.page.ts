import {Component} from '@angular/core';
import {ANIMALES} from '../data.animales';
import {Animal} from '../interface/animal';
import {AnimalServicesService} from '../services/animal-services.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    animales: Animal[] = [];

    constructor(private serviceanimales: AnimalServicesService, private router: Router) {
        // Splice  crea una copìa del array animales
        this.animales = this.serviceanimales.getAnimales();
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

    adirAnimal() {
        this.router.navigate(['crear']);
    }

    eliminarAnimal(i: number) {
        this.serviceanimales.deleteAnimales(i);
    }
}

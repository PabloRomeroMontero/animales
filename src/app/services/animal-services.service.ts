import {Injectable} from '@angular/core';
import {Animal} from '../interfaces/animal';
import {ANIMALES} from '../data.animales';

@Injectable({
    providedIn: 'root'
})
export class AnimalServicesService {
    animales: Animal[] = [];

    constructor() {
      this.animales = ANIMALES;
    }
    getAnimales() {
        return this.animales;
    }

    deleteAnimales(animal: Animal) {
        this.animales.
    }
}

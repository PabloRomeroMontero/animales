import {Injectable} from '@angular/core';
import {Animal} from '../interfaces/animal';
import {ANIMALES} from '../data.animales';

@Injectable({
    providedIn: 'root'
})
export class AnimalServicesService {
    animales: Animal[] = [];

    constructor() {
        this.animales = ANIMALES.splice(0);
    }

    getAnimales() {
        return this.animales;
    }

    deleteAnimales(id: number) {
        this.animales.splice(id, 1);
    }


    insertAnimales(animal: Animal) {
        this.animales.push(animal);
        console.log(ANIMALES);
    }
}

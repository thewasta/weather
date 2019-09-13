export class Store {
    constructor(city) {
        this.city;
        this.defaultCity = 'madrid';
    }

    getLocationData() {
        if (!localStorage.getItem('city')) {
            return {city: this.defaultCity};
        }
        return {city: localStorage.getItem('city')};
    }

    setLocationData(city) {
        localStorage.setItem('city', city);
    }
}
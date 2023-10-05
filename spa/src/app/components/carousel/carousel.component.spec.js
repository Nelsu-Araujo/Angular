"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const carousel_component_1 = require("./carousel.component");
describe('CarouselComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [carousel_component_1.CarouselComponent]
        });
        fixture = testing_1.TestBed.createComponent(carousel_component_1.CarouselComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

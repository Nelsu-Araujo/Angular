"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const imagetext_component_1 = require("./imagetext.component");
describe('ImagetextComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [imagetext_component_1.ImagetextComponent]
        });
        fixture = testing_1.TestBed.createComponent(imagetext_component_1.ImagetextComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

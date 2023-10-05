"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const accordion_1 = require("mdb-angular-ui-kit/accordion");
const carousel_1 = require("mdb-angular-ui-kit/carousel");
const checkbox_1 = require("mdb-angular-ui-kit/checkbox");
const collapse_1 = require("mdb-angular-ui-kit/collapse");
const dropdown_1 = require("mdb-angular-ui-kit/dropdown");
const forms_1 = require("mdb-angular-ui-kit/forms");
const modal_1 = require("mdb-angular-ui-kit/modal");
const popover_1 = require("mdb-angular-ui-kit/popover");
const radio_1 = require("mdb-angular-ui-kit/radio");
const range_1 = require("mdb-angular-ui-kit/range");
const ripple_1 = require("mdb-angular-ui-kit/ripple");
const scrollspy_1 = require("mdb-angular-ui-kit/scrollspy");
const tabs_1 = require("mdb-angular-ui-kit/tabs");
const tooltip_1 = require("mdb-angular-ui-kit/tooltip");
const validation_1 = require("mdb-angular-ui-kit/validation");
const animations_1 = require("@angular/platform-browser/animations");
const navbar_component_1 = require("./master/navbar/navbar.component");
const footer_component_1 = require("./master/footer/footer.component");
const cards_component_1 = require("./components/cards/cards.component");
const carousel_component_1 = require("./components/carousel/carousel.component");
const card_component_1 = require("./components/card/card.component");
const imagetext_component_1 = require("./components/imagetext/imagetext.component");
let AppModule = (() => {
    let _classDecorators = [(0, core_1.NgModule)({
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                footer_component_1.FooterComponent,
                cards_component_1.CardsComponent,
                carousel_component_1.CarouselComponent,
                card_component_1.CardComponent,
                imagetext_component_1.ImagetextComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                accordion_1.MdbAccordionModule,
                carousel_1.MdbCarouselModule,
                checkbox_1.MdbCheckboxModule,
                collapse_1.MdbCollapseModule,
                dropdown_1.MdbDropdownModule,
                forms_1.MdbFormsModule,
                modal_1.MdbModalModule,
                popover_1.MdbPopoverModule,
                radio_1.MdbRadioModule,
                range_1.MdbRangeModule,
                ripple_1.MdbRippleModule,
                scrollspy_1.MdbScrollspyModule,
                tabs_1.MdbTabsModule,
                tooltip_1.MdbTooltipModule,
                validation_1.MdbValidationModule,
                animations_1.BrowserAnimationsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var AppModule = _classThis = class {
    };
    __setFunctionName(_classThis, "AppModule");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AppModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AppModule = _classThis;
})();
exports.AppModule = AppModule;

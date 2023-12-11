import { Component } from "@angular/core";
import { TestComponent } from "../components/test.component";

@Component({ 
    selector: 'app-home',
    standalone: true,
    imports: [TestComponent],
    template: `Test <app-page></app-page>`
})

export default class HomeComponent { }
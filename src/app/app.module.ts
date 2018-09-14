import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { PaperComponent } from "./components/paper/paper.component";
import { CanvasComponent } from "./components/canvas/canvas.component";
import { ContentComponent } from './components/paper/content/content.component';

import {DataService} from "./data.service";
import { TabsComponent } from './components/paper/content/tabs/tabs.component'
const myRoutes: Routes = [
  { path: "", component: CanvasComponent },
  { path: "paper/:color", component: PaperComponent }
];

@NgModule({
  declarations: [AppComponent, PaperComponent, CanvasComponent, ContentComponent, TabsComponent],
  imports: [BrowserModule, RouterModule.forRoot(myRoutes)],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}

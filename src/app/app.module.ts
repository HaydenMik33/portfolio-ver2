import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { PaperComponent } from "./components/paper/paper.component";
import { CanvasComponent } from "./components/canvas/canvas.component";

const myRoutes: Routes = [
  { path: "", component: CanvasComponent },
  { path: "paper/:color", component: PaperComponent }
];

@NgModule({
  declarations: [AppComponent, PaperComponent, CanvasComponent],
  imports: [BrowserModule, RouterModule.forRoot(myRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

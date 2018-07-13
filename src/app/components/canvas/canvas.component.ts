import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../../data.service";

@Component({
  selector: "app-canvas",
  templateUrl: "./canvas.component.html",
  styleUrls: ["./canvas.component.scss"]
})
export class CanvasComponent implements OnInit {
  public colorPalette: string[];
  constructor(private data: DataService, private router: Router) {}
  ngOnInit() {
    this.colorPalette = this.data.colorPalette;
  }
  open(color) {
    this.router.navigate(["paper", color]);
  }
}

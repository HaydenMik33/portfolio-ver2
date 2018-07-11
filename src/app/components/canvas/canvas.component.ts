import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-canvas",
  templateUrl: "./canvas.component.html",
  styleUrls: ["./canvas.component.scss"]
})
export class CanvasComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit() {}
  open(color) {
    this.router.navigate(["paper", color]);
  }
}

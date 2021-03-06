import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "../../data.service";
@Component({
  selector: "app-paper",
  templateUrl: "./paper.component.html",
  styleUrls: ["./paper.component.scss"]
})
export class PaperComponent implements OnInit {
  public color: string;
  private sub: any;
  public colorPalette: string[];
  public titles :any;
  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.colorPalette = this.data.colorPalette;
    this.titles = this.data.titles;
    this.sub = this.route.params.subscribe(params => {
      this.color = params["color"];
      console.log(this.color);
    });
  }
  goBack() {
    this.router.navigate([""]);
  }
  ngOnDestroy() {
    this.sub.unsubscribe;
  }
}

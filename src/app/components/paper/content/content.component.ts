import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"]
})
export class ContentComponent implements OnInit {
  public color: string;
  private sub: any;
  public img : number;
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.img=0;
    this.sub = this.route.params.subscribe(params => {
      this.color = params["color"];
      console.log(this.color);
    });
  }
  changeImg(num){
    this.img = num;
    console.log(this.img)
  }
  ngOnDestroy() {
    this.sub.unsubscribe;
  }
}

import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root"
})
export class DataService {
  colorPalette = [
    "red",
    "yellow",
    "green",
    "lightgreen",
    "purple",
    "navy",
    "blue",
    "skyblue"
  ];
  titles ={
    "red":"Skills",
    "yellow":"About me",
    "green":"projects-'Ilgi'",
    "lightgreen":"projects-'EB-bed'",
    "skyblue":"projects-'Sacks Roofing'",
    "navy":"projects-'Nito'",
    "blue":"contact",
    "purple":"language"
  }
}

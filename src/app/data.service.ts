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
    "green":"Ilgi",
    "lightgreen":"EB care",
    "skyblue":"Sack's",
    "navy":"Nito",
    "blue":"contact",
    "purple":"mini apps"
  }
}

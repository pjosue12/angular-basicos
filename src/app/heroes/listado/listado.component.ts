import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent 
{
  public heroes: string[] = ["Spiderman", "IronMan", "Hulk", "Thor"];
  public heroeBorrado: string = "";


  public borrarHeroe(): void 
  {
    console.log("Borrando...");
    this.heroeBorrado = this.heroes.splice(0,1).toString();
  }

}

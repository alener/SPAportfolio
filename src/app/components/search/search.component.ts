import { Component } from '@angular/core';
import { ProductosService } from "../../services/productos.service";
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',

})
export class SearchComponent {
  termino:string = undefined;

  constructor(private route:ActivatedRoute,
              public _ps: ProductosService) {
    route.params.subscribe( parametros => {
      this.termino = parametros['termino'];
      console.log(this.termino);
      _ps.buscar_producto(this.termino)
    });

               }



}

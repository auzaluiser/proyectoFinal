import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomsegurosPipe } from '../../pipe/domseguros.pipe';
import { Router, RouterOutlet } from '@angular/router';
import { ProductosModel } from '../../models/productos.models';
import { SproductosService } from '../../services/sproductos.service';
import { ProcedureParam } from '../../models/procedureparam';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, DomsegurosPipe, RouterOutlet],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})

export class InicioComponent implements OnInit {
  videoUrl: string = 'https://www.youtube.com/embed/aVs2Y_mNMTc?autoplay=1&mute=1&controls=0';
  procedureParam: ProcedureParam = new ProcedureParam();
  productos: any[] = [];
  constructor(private sproducto: SproductosService, private router:Router) { }

  ngOnInit(): void {
    this.procedureParam.inicia();
    // this.procedureParam.pCampo0='Cnombre';
    // this.procedureParam.pValor0='a';

    this.sproducto.selProductos(this.procedureParam)
      .subscribe((resp: any) => {
        this.productos = resp;

      });
  }
  detalle(idproducto: number) {
    console.log(idproducto);
    this.router.navigate(['/producto', idproducto]);
  }
  banner(){
    this.router.navigate(['/producto', 2]);
  }
}

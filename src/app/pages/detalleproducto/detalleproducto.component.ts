// detalleproducto.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SproductosService } from '../../services/sproductos.service';
import { ProcedureParam } from '../../models/procedureparam';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cardproducto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalleproducto.component.html',
  styleUrls: ['./detalleproducto.component.css']
})
export class DetalleproductoComponent implements OnInit {
  parametros: ProcedureParam = new ProcedureParam();
  producto: any = [];
  imagenPrincipal: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private _sproductosService: SproductosService
  ) { }

  ngOnInit(): void {
    this.parametros.inicia();
    const id = this.activatedRoute.snapshot.paramMap.get('id') || '0';
    this.parametros.pCampo0 = 'Cidproducto';
    this.parametros.pValor0 = id;

    this._sproductosService.selProductos(this.parametros).subscribe((resp: any) => {
      this.producto = resp[0];
      this.imagenPrincipal = `../../../img/${this.producto.nombre}_1.png`;
    });
  }

  cambiarImagenPrincipal(nuevaSrc: string): void {
    this.imagenPrincipal = nuevaSrc;
  }
}
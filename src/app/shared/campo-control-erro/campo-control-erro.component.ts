import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-campo-control-erro",
  templateUrl: "./campo-control-erro.component.html",
  styleUrls: ["./campo-control-erro.component.css"],
})
export class CampoControlErroComponent implements OnInit {
  @Input()
  mostrarErro: boolean = false;
  @Input() msgErro: string | undefined;

  constructor() {}

  ngOnInit() {}
}

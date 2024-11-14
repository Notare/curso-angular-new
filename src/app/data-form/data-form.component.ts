import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-data-form",
  templateUrl: "./data-form.component.html",
  styleUrls: ["./data-form.component.css"],
})
export class DataFormComponent implements OnInit {
  formulario: FormGroup;
  flagEdicao: boolean = false;
  flagCancelar: boolean = false;
  initialFormValues: any = {};

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null),
    // });

    this.formulario = this.formBuilder.group({
      nome: ["renato", [Validators.required]],
      email: [null, [Validators.required, Validators.email]],

      endereco: this.formBuilder.group({
        cep: [null, [Validators.required]],
        numero: [null, [Validators.required]],
        complemento: [null],
        rua: [null, [Validators.required]],
        bairro: [null, [Validators.required]],
        cidade: [null, [Validators.required]],
        estado: [null, [Validators.required]],
      }),
    });

    this.formulario.disable();
    this.flagCancelar = false;
    this.initialFormValues = this.formulario.getRawValue();
  }

  onSubmit() {
    console.log(this.formulario.value);

    this.http
      .post("https://httpbin.org/post", JSON.stringify(this.formulario.value))
      .subscribe(
        (dados) => {
          console.log(dados);

          this.formulario.reset();
        },
        (error: any) => alert("erro")
      );
  }

  desabilitarInputs() {
    if (this.flagEdicao) {
      this.formulario.enable();
      this.flagCancelar = true;
    } else {
      this.formulario.disable();
      this.flagCancelar = false;
    }
  }

  alterar() {
    this.flagEdicao = !this.flagEdicao;
    this.desabilitarInputs();
  }

  salvar() {
    this.flagEdicao = false;
    this.desabilitarInputs();
  }

  cancelar() {
    this.flagEdicao = false;
    this.formulario.reset(this.initialFormValues);
    this.desabilitarInputs();
  }

  verificarValidTouched(campo: string) {
    return (
      this.formulario.get(campo).invalid && this.formulario.get(campo).touched
    );
  }

  verificarEmailInvalido() {
    const campoEmail = this.formulario.get("email");

    if (campoEmail.errors) {
      return campoEmail.errors["email"] && campoEmail.touched;
    }
  }

  aplicarCssErro(campo: string) {
    return {
      "is-invalid": this.verificarValidTouched(campo),
    };
  }
}

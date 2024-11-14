import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DataFormModule } from "./data-form/data-form.module";
import { DataFormComponent } from "./data-form/data-form.component";
import { FormDebugComponent } from "./shared/form-debug/form-debug.component";
import { CampoControlErroComponent } from "./shared/campo-control-erro/campo-control-erro.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DataFormComponent,
    FormDebugComponent,
    CampoControlErroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DataFormModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ApercuComponent } from './apercu/apercu.component';
import { provideHttpClient } from '@angular/common/http';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { XlsxReaderComponent } from './xlsx-reader/xlsx-reader.component';
import { MatTableModule } from '@angular/material/table' 

@NgModule({
	declarations: [
		AppComponent,
		NotFoundComponent,
		ApercuComponent,
  		DynamicTableComponent,
    XlsxReaderComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MatInputModule,
		MatTableModule
	],
	providers: [provideHttpClient()],
	bootstrap: [AppComponent]
})
export class AppModule { }

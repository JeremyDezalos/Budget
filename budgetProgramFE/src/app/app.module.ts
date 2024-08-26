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
import { MatTableModule } from '@angular/material/table';
import { CreateAccountDialogComponent } from './create-account-dialog/create-account-dialog.component' 
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AccountViewComponent } from './account-view/account-view.component';

@NgModule({
	declarations: [
		AppComponent,
		NotFoundComponent,
		ApercuComponent,
  		DynamicTableComponent,
    	XlsxReaderComponent,
     CreateAccountDialogComponent,
     AccountViewComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MatInputModule,
		MatTableModule,
		MatDialogModule,
		FormsModule,
        ReactiveFormsModule
	],
	providers: [provideHttpClient(), provideAnimations()],
	bootstrap: [AppComponent]
})
export class AppModule { }

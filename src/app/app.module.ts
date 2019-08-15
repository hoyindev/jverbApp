import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { StudyComponent } from './home/study/study.component';
import { TestComponent } from './home/test/test.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { VerbsComponent } from './home/verbs/verbs.component';
import { VerbsDetailsComponent } from './home/verbs/verbs-details/verbs-details.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTabsModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule } from '@angular/material';
import { MatListModule, MatExpansionModule, MatPaginatorModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    StudyComponent,
    TestComponent,
    HeaderComponent,
    SidenavListComponent,
    VerbsComponent,
    VerbsDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

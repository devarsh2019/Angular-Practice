import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Profile } from './profile/profile';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tasks } from './tasks/tasks';
import { Changecolor } from './changecolor';
import { PipeData } from './pipe-data/pipe-data';
import { PipeDataListPipe } from './pipe-data-list-pipe';
import { PipeChild } from './pipe-data/pipe-child/pipe-child';
@NgModule({
  declarations: [App, Profile, Tasks, Changecolor, PipeData, PipeDataListPipe, PipeChild],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}

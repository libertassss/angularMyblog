// 模块
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgZorroAntdModule, NZ_I18N, NZ_MESSAGE_CONFIG} from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// 服务
import {StorageService} from './service/storage.service';

// 组件
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './home/login/login.component';
import { LeftNavComponent } from './commons/left-nav/left-nav.component';
import { HeaderComponent } from './commons/header/header.component';
import { RegisterComponent } from './home/register/register.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { ArticleCategoryComponent } from './article/article-category/article-category.component';
import { ArticleTagsComponent } from './article/article-tags/article-tags.component';
import { TagsComponent } from './commons/tags/tags.component';



@NgModule({
  // 模块
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LeftNavComponent,
    HeaderComponent,
    RegisterComponent,
    ArticleListComponent,
    ArticleCategoryComponent,
    ArticleTagsComponent,
    TagsComponent,
  ],
  // 组件
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule.forRoot(),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  // 服务
  providers: [{ provide: NZ_I18N, useValue: {nzDuration: 3000}},StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

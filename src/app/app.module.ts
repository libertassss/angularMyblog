// 模块
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgZorroAntdModule, NZ_I18N, NZ_MESSAGE_CONFIG} from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditorModule } from '@tinymce/tinymce-angular';
import { MarkdownModule,MarkedOptions } from 'ngx-markdown';



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
import { NewArticleComponent } from './article/new-article/new-article.component';
import { ParentsComponent } from './parents/parents.component';
import { BlogNavComponent } from './navigation/blog-nav/blog-nav.component';
import { IndexPageComponent } from './homePages/index-page/index-page.component';
import { IndexHeaderComponent } from './homePages/commons/index-header/index-header.component';
import { BlogIndexComponent } from './homePages/blog-index/blog-index.component';




@NgModule({
  // 组件
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
    NewArticleComponent,
    ParentsComponent,
    BlogNavComponent,
    IndexPageComponent,
    IndexHeaderComponent,
    BlogIndexComponent,
    
  ],
//  模块
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule.forRoot(),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    EditorModule,
    MarkdownModule.forRoot(),

  ],
  // 服务
  providers: [{ provide: NZ_I18N, useValue: {nzDuration: 3000}},StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

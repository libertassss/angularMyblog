import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import {LoginComponent } from './home/login/login.component';
import {RegisterComponent} from './home/register/register.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { ArticleCategoryComponent } from './article/article-category/article-category.component';
import { ArticleTagsComponent } from './article/article-tags/article-tags.component';
import { NewArticleComponent } from './article/new-article/new-article.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'articleList',component:ArticleListComponent,
    children:[
      {
        path:'newArticle',component:NewArticleComponent
      }
    ]
  },
  {path:'articleCategory',component:ArticleCategoryComponent},
  {path:'articleTags',component:ArticleTagsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }

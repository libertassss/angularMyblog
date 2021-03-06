import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import {LoginComponent } from './home/login/login.component';
import {RegisterComponent} from './home/register/register.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { ArticleCategoryComponent } from './article/article-category/article-category.component';
import { ArticleTagsComponent } from './article/article-tags/article-tags.component';
import { NewArticleComponent } from './article/new-article/new-article.component';
import { ParentsComponent } from './parents/parents.component';
import { BlogNavComponent } from './navigation/blog-nav/blog-nav.component';
import { IndexPageComponent } from './homePages/index-page/index-page.component';
import { BlogIndexComponent } from './homePages/blog-index/blog-index.component';

import { BlogArticlesComponent } from './homePages/blog-articles/blog-articles.component';
import { BlogListComponent } from './homePages/blog-list/blog-list.component';
import { AboutMeComponent } from './homePages/about-me/about-me.component';
import { SearchPagesComponent } from './homePages/search-pages/search-pages.component';


const routes: Routes = [
  {path:'',redirectTo:'indexPge/blogIndex',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'parents',component:ParentsComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'register',component:RegisterComponent},
      {path:'articleList',component:ArticleListComponent,},
      {path:'articleCategory',component:ArticleCategoryComponent},
      {path:'articleTags',component:ArticleTagsComponent},
      {path:'newArticle',component:NewArticleComponent},
      {path:'blogNav',component:BlogNavComponent}
    ]
  },
  {path:'indexPage',component:IndexPageComponent,
    children:[
      {path:'blogIndex',component:BlogIndexComponent},
      {path:'blogArticles/:id',component:BlogArticlesComponent},
      {path:'blogList',component:BlogListComponent},
      {path:'aboutMe',component:AboutMeComponent},
    ]
  },
  {path:'search',component:SearchPagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }

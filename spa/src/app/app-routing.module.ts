import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'gallery', component: GalleryComponent
  },
  {
    path: 'contact us', component: ContactUsComponent
  },
  {
    path: 'blog', component: BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminsdetailsComponent } from './adminsdetails/adminsdetails.component';
import { AdmindetailsService } from './services/admindetails.service';
import { AdmineditComponent } from './adminedit/adminedit.component';
import {Routes,RouterModule} from '@angular/router';
import { TopnavbarComponent } from './navigationbars/topnavbar/topnavbar.component';
import { QuizAddComponent } from './Quiz/quiz-add/quiz-add.component';
import { QuizEditComponent } from './Quiz/quiz-edit/quiz-edit.component';
import { QuizDetailsComponent } from './Quiz/quiz-details/quiz-details.component';
import { NavbarmenuComponent } from './navigationbars/navbarmenu/navbarmenu.component';


const routes: Routes=[
  {path:'adminsdetails', component:AdminsdetailsComponent},
  {path:'adminedit', component: AdmineditComponent},
  {path:'register', component: RegisterComponent},
  {path:'quizadd', component: QuizAddComponent},
  {path:'quizedit', component: QuizEditComponent},
  {path:'quizdetails', component: QuizDetailsComponent},
 

];

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    LoginComponent,
    RegisterComponent,
    AdminsdetailsComponent,
    AdmineditComponent,
    TopnavbarComponent,
    QuizAddComponent,
    QuizEditComponent,
    QuizDetailsComponent,
    NavbarmenuComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule, 
    FormsModule,
    RouterModule.forRoot(routes),
  
   
  ],
  exports: [RouterModule],

  providers: [LoginService,RegisterService,AdmindetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

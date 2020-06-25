import { ChatroomComponent } from './chatroom/chatroom.component';
import { AddroomComponent } from './addroom/addroom.component';
import { RoomlistComponent } from './roomlist/roomlist.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path :'login', component:LoginComponent},
  {path:'roomlist',component:RoomlistComponent},
  {path:'addroom',component:AddroomComponent},
  {path:'chatroom/:roomname',component:ChatroomComponent},
  {path:'',
  redirectTo:'/login',
  pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

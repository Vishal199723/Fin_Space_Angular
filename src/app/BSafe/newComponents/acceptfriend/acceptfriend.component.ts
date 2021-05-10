import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/MessageService/meaagse.service';
import { UserDetailsService } from 'src/app/Shared/UserDetails/user-details.service';

@Component({
  selector: 'app-acceptfriend',
  templateUrl: './acceptfriend.component.html',
  styleUrls: ['./acceptfriend.component.scss']
})
export class AcceptfriendComponent implements OnInit {
  id: any;
  constructor( private messageService: MessageService,private route: ActivatedRoute, private userService: UserDetailsService, private router: Router) {
    window.scrollTo(0, 0);
    this.messageService.sendSession('true');
    localStorage.setItem("Loder", "0");
    this.route.params.subscribe((id: any) => {
      this.id = id.id;
    })
  }

  ngOnInit(): void {
    this.accept();
  }
  accept() {
    this.userService.acceptfriendrequest(this.id).subscribe((data: any) => {
      if (data == 1) {
        alert("You have successfully accepted your friend request");
        this.router.navigate(['/']);
      }
      else {
        alert("You have previously accepted your friend request");
        this.router.navigate(['/']);
      }
    })
  }

}

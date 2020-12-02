import { Subscription } from 'rxjs';
import { UserService } from './user/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  isActivated = false;
  private activatedSub: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activatedSub = this.userService.activatedEmitter.subscribe(
      (activateStatus) => {
        this.isActivated = activateStatus;
      }
    );
  }

  ngOnDestroy(): void {
    return this.activatedSub.unsubscribe();
  }
}

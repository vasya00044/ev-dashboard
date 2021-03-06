import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthorizationService } from '../../services/authorization.service';
import { WindowService } from '../../services/window.service';
import { AbstractTabComponent } from '../../shared/component/abstract-tab/abstract-tab.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent extends AbstractTabComponent {
  public canListUsers: boolean;
  public canListTokens: boolean;
  public canListUsersInError: boolean;

  public constructor(
    activatedRoute: ActivatedRoute,
    authorizationService: AuthorizationService,
    windowService: WindowService) {
    super(activatedRoute, windowService, ['all', 'tag', 'inerror']);
    this.canListUsers = authorizationService.canListUsers();
    this.canListTokens = authorizationService.canListTokens();
    this.canListUsersInError = authorizationService.canListUsersInError();
  }
}

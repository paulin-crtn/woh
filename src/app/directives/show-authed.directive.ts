import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

import { UserService } from 'src/app/core/user/user.service';
  
@Directive({ 
    selector: '[showAuthed]', 
})
export class ShowAuthedDirective implements OnInit {
constructor(
    private templateRef: TemplateRef<any>,
    private userService: UserService,
    private viewContainer: ViewContainerRef
) {}

condition: boolean;

@Input() set showAuthed(condition: boolean) {
    this.condition = condition;
}

ngOnInit() {
    this.userService.isUserLogged().subscribe(isAuthenticated => {
        if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    });
}

}
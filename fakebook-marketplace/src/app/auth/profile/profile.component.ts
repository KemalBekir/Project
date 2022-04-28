import { Component, OnInit } from '@angular/core';
import { CatalogService } from 'src/app/core/catalog.service';
import { IItem, IUser } from 'src/app/core/interfaces';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: IUser;
  itemList: IItem[];

  constructor(private userService: UserService, private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.userService.getProfileInfo().subscribe( user => {
      this.user = user;
      if(this.user.myAds){
        this.catalogService.loadAllMyAds().subscribe({
          next: (itemList) => {
            this.itemList = itemList;
          }
        });
      }

    })
  }

}

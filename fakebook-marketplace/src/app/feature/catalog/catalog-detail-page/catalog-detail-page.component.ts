import { assertPlatform, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogService } from 'src/app/core/catalog.service';
import { IItem } from 'src/app/core/interfaces';

@Component({
  selector: 'app-catalog-detail-page',
  templateUrl: './catalog-detail-page.component.html',
  styleUrls: ['./catalog-detail-page.component.css']
})
export class CatalogDetailPageComponent implements OnInit {
  inEditMode = false;
  isOwner = false;

  item: IItem;
  constructor(private activatedRoute: ActivatedRoute, private catalogService: CatalogService, private router: Router) { }

 get currentUser(): string {
   return JSON.parse(sessionStorage.getItem('_id'));
 }

  ngOnInit(): void {
    const itemId = this.activatedRoute.snapshot.params['itemId'];
    this.catalogService.loadItemById(itemId).subscribe( item => {
      this.item = item;
      if(this.currentUser == item.owner._id){
        this.isOwner = true;
      }
    })
  }

  updateItem(form: NgForm): void {
    const itemId = this.activatedRoute.snapshot.params['itemId'];
    if (form.invalid) { return }

    this.catalogService.editItem(itemId, form.value).subscribe({
      next: (item) => {
        this.item = item;
        this.isOwner = true;
        this.inEditMode = false;
      },
      error: (err) => {
        this.isOwner = false;
        console.error(err);
      }
    })
  }

  deleteItem(): void {
    let result = confirm('Are you sure you want to delete this item?');
    const itemId = this.activatedRoute.snapshot.params['itemId'];
    if(result){
      this.catalogService.deleteItem(itemId).subscribe({
        next: () => {
          this.router.navigate(['/catalog'])
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CatalogService } from 'src/app/core/catalog.service';

@Component({
  selector: 'app-catalog-new-page',
  templateUrl: './catalog-new-page.component.html',
  styleUrls: ['./catalog-new-page.component.css']
})
export class CatalogNewPageComponent implements OnInit {
  errorMessage? = '';

  constructor(private router: Router, private catalogService: CatalogService) { }

  ngOnInit(): void {
  }

  submitNewItem(newItemForm: NgForm) : void {
    console.log(newItemForm);
    this.catalogService.addItem$(newItemForm.value).subscribe({
      next: (item) => {
        console.log(item);
        this.router.navigate['/catalog'];
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = err.error.message;
      }
    })

  }

}

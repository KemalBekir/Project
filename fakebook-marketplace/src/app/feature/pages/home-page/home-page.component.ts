import { Component, OnInit } from '@angular/core';
import { CatalogService } from 'src/app/core/catalog.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {



  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {

    }
  }



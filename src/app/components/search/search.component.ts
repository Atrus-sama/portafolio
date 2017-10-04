import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  constructor(private ar:ActivatedRoute) {
    this.ar.params.subscribe(data=>{
      console.log(data);
    })
  }

  ngOnInit() {
  }

}

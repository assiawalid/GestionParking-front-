import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filtre',
  templateUrl: './filtre.component.html',
  styleUrls: ['./filtre.component.css']
})
export class FiltreComponent implements OnInit {
  @Input() show = true;
  constructor( ) { }

  ngOnInit(): void {}

}

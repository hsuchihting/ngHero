import { Component, OnInit } from '@angular/core';
import { MassageService } from '../massage.service';

@Component({
  selector: 'app-massages',
  templateUrl: './massages.component.html',
  styleUrls: ['./massages.component.scss']
})
export class MassagesComponent implements OnInit {

  constructor(public messageService: MassageService) { }

  ngOnInit(): void {
  }

}

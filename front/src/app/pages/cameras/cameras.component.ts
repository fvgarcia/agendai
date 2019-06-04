import { Component, OnInit } from '@angular/core';
import { Camera } from 'src/app/consts/camera';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.css']
})
export class CamerasComponent implements OnInit {

  cameras: Camera[] = [
    {nome: 'RU Campus I', imagem: 'ru1.jpg'},
    {nome: 'RU Campus II', imagem: 'ru2.jpg'}
  ];

  constructor() { }

  ngOnInit() {
  }

}

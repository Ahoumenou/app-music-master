import { Component, OnInit } from '@angular/core';

// Importez la définition de la classe et les albums
import { Album } from 'src/album';
import { ALBUMS } from '../mock-albums';



@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})

export class AlbumsComponent implements OnInit {
  selectedAlbum: Album[] = [];
  
  titlePage: string = "Page princiaple Albums Music";
  title:string = "app-music";
  albums: Album[] = ALBUMS;

   constructor(){};

   ngOnInit(){

   };

   onSelect(album:[]){
    // this.selectedAlbum.push()
    
    console.log("Tout marche bien");
    
    
   }


};


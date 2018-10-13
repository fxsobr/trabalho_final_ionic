import { Component } from '@angular/core';
import {DatabaseService} from '../../services/database.service';
import {Router} from '@angular/router';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {ProfessoresService} from '../../services/professores.service';
@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    base64Image: any;
    imagem: any;
    constructor(private databaseService: DatabaseService, private router: Router, private camera: Camera, private professorService: ProfessoresService) {}

     tirarFoto() {
         const options: CameraOptions = {
             quality: 50,
             destinationType: this.camera.DestinationType.DATA_URL,
             encodingType: this.camera.EncodingType.JPEG,
             mediaType: this.camera.MediaType.PICTURE
         }
         this
             .camera
             .getPicture(options)
             .then((imageData) => {
                 this.base64Image = 'data:image/jpeg;base64,' + imageData;
                 console.log('imagem', this.base64Image);
             }, (err) => {
                 console.log(err);
             });
     }

    professores() {
        this.router.navigate(['/lista-professores']);
    }
    turmas() {
        this.router.navigate(['/lista-turmas']);
    }
}

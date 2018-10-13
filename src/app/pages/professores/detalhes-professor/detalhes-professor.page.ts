import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProfessoresService} from '../../../services/professores.service';
import {first} from 'rxjs/operators';
import {AlertController, ActionSheetController} from '@ionic/angular';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {ImagePicker, ImagePickerOptions} from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-detalhes-professor',
  templateUrl: './detalhes-professor.page.html',
  styleUrls: ['./detalhes-professor.page.scss'],
})
export class DetalhesProfessorPage implements OnInit {

    professor: any;
    data: any;
    base64Image: any;
    error: any

    constructor(private professorService: ProfessoresService, private router: Router, public alertController: AlertController, private camera: Camera, public actionSheetController: ActionSheetController, private imagePicker: ImagePicker) {
    }

    ngOnInit() {
        this.professor = this.professorService.currentProfessor;
    }

    async presentActionSheet() {
        const actionSheet = await this.actionSheetController.create({
            header: 'Escolha sua Ação',
            buttons: [{
                text: 'Carregar Foto da Galeria',
                role: 'destructive',
                icon: 'trash',
                handler: () => {
                    this.buscarFotoGaleria();
                }
            }, {
                text: 'Tirar Foto usando a Camera',
                icon: 'arrow-dropright-circle',
                handler: () => {
                    this.tirarFoto();
                }
            }, {
                text: 'Fechar',
                icon: 'close',
                role: 'cancel',
                handler: () => {
                    console.log('Cancel clicked');
                }
            }]
        });
        await actionSheet.present();
    }


    async presentAlertConfirm() {
        const alert = await this.alertController.create({
            header: 'Confirmação!',
            message: 'Tem certeza que deseja excluir esse professor',
            buttons: [
                {
                    text: 'NÃO',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        this.alertController.dismiss();
                    }
                }, {
                    text: 'SIM',
                    handler: () => {
                        this.submit();
                    }
                }
            ]
        });

        await alert.present();
    }

    async presentAlertFalse() {
        const alert = await this.alertController.create({
            header: 'Erro',
            message: 'Erro ao excluir o professor',
            buttons: ['OK']
        });
        await alert.present();
    }

    editaProfessor(): void {
        this.professorService.getProfessoresById('http://192.168.2.55:3000/teachers/', this.professor._id)
            .subscribe(data => {
                console.log('getProfessorByid- detalhes professor page', data);
                this.data = data;
                this.router.navigate(['/altera-professor', data._id]);
                console.log('depois de passar pelo route navigate', data);
            });
    }

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
                this.salvaFoto();
            }, (err) => {
                console.log(err);
            });
    }

    buscarFotoGaleria() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }
        this
            .camera
            .getPicture(options)
            .then((imageData) => {
                this.base64Image = 'data:image/jpeg;base64,' + imageData;
                console.log('imagem', this.base64Image);
                this.salvaFoto();
            }, (err) => {
                console.log(err);
            });
    }

    public salvaFoto() {
        this.professorService.alteraProfessor(this.professor._id, this.professor.name, this.professor.birthDate = new Date().toISOString(), this.professor.curriculum, this.professor.status, this.base64Image)
            .pipe(first())
            .subscribe(
                result => this.router.navigate(['/lista-professores']),
                err => this.error = 'Erro ao alterar o professor'
            );
    }

    public submit() {
        this.professorService.deletaProfessor(this.professor._id)
            .pipe(first())
            .subscribe(
                result => this.router.navigate(['/lista-professores']),
                err => this.presentAlertFalse()
            );
    }

}

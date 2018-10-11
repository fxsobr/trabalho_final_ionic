import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {BotaoComponent} from './botao/botao.component';

@NgModule({
    declarations: [
        BotaoComponent
    ],
    exports: [
        BotaoComponent
    ],
    imports: [
        IonicModule
    ]
})
export class ComponentsModule {}

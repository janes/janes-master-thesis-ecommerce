import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EcommerceSharedModule } from '../../shared';
import {
    ImageService,
    ImagePopupService,
    ImageComponent,
    ImageDetailComponent,
    ImageDialogComponent,
    ImagePopupComponent,
    ImageDeletePopupComponent,
    ImageDeleteDialogComponent,
    imageRoute,
    imagePopupRoute,
    ImageResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...imageRoute,
    ...imagePopupRoute,
];

@NgModule({
    imports: [
        EcommerceSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        ImageComponent,
        ImageDetailComponent,
        ImageDialogComponent,
        ImageDeleteDialogComponent,
        ImagePopupComponent,
        ImageDeletePopupComponent,
    ],
    entryComponents: [
        ImageComponent,
        ImageDialogComponent,
        ImagePopupComponent,
        ImageDeleteDialogComponent,
        ImageDeletePopupComponent,
    ],
    providers: [
        ImageService,
        ImagePopupService,
        ImageResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EcommerceImageModule {}

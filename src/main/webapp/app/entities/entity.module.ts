import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { EcommerceCategoryModule } from './category/category.module';
import { EcommerceImageModule } from './image/image.module';
import { EcommerceBrandModule } from './brand/brand.module';
import { EcommerceProductModule } from './product/product.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        EcommerceCategoryModule,
        EcommerceImageModule,
        EcommerceBrandModule,
        EcommerceProductModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EcommerceEntityModule {}

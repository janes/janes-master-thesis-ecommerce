import { BaseEntity } from './../../shared';

export class Product implements BaseEntity {
    constructor(
        public id?: string,
        public title?: string,
        public ean?: string,
        public keywords?: string,
        public description?: string,
        public rating?: number,
        public brandName?: string,
        public brandId?: string,
        public image?: string,
        public dateAdded?: any,
        public dateModified?: any,
        public categories?: string,
    ) {
    }
}

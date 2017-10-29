import { BaseEntity } from './../../shared';

export class Brand implements BaseEntity {
    constructor(
        public id?: string,
        public name?: string,
        public dateAdded?: any,
        public dateModified?: any,
    ) {
    }
}

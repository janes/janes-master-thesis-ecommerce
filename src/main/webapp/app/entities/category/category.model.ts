import { BaseEntity } from './../../shared';

export const enum CategoryStatus {
    'AVAILABLE',
    'RESTRICTED',
    'DISABLED'
}

export class Category implements BaseEntity {
    constructor(
        public id?: string,
        public name?: string,
        public url?: string,
        public parentId?: number,
        public children?: number,
        public hasChildren?: boolean,
        public dateAdded?: any,
        public dateModified?: any,
        public status?: CategoryStatus,
    ) {
        this.hasChildren = false;
    }
}

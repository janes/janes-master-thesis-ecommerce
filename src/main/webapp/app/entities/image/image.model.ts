import { BaseEntity } from './../../shared';

export class Image implements BaseEntity {
    constructor(
        public id?: string,
        public url?: string,
        public productId?: string,
        public disabled?: boolean,
    ) {
        this.disabled = false;
    }
}

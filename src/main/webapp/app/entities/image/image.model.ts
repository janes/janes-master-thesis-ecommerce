import { BaseEntity } from './../../shared';

export class Image implements BaseEntity {
    constructor(
        public id?: string,
        public uRL?: string,
        public productId?: string,
    ) {
    }
}

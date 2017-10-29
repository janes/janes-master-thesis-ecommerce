import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SERVER_API_URL } from '../../app.constants';

import { Brand } from './brand.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class BrandService {

    private resourceUrl = SERVER_API_URL + 'api/brands';

    constructor(private http: Http) { }

    create(brand: Brand): Observable<Brand> {
        const copy = this.convert(brand);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(brand: Brand): Observable<Brand> {
        const copy = this.convert(brand);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: string): Observable<Brand> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: string): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        const result = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            result.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return new ResponseWrapper(res.headers, result, res.status);
    }

    /**
     * Convert a returned JSON object to Brand.
     */
    private convertItemFromServer(json: any): Brand {
        const entity: Brand = Object.assign(new Brand(), json);
        return entity;
    }

    /**
     * Convert a Brand to a JSON which can be sent to the server.
     */
    private convert(brand: Brand): Brand {
        const copy: Brand = Object.assign({}, brand);
        return copy;
    }
}

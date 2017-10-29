import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { BrandComponent } from './brand.component';
import { BrandDetailComponent } from './brand-detail.component';
import { BrandPopupComponent } from './brand-dialog.component';
import { BrandDeletePopupComponent } from './brand-delete-dialog.component';

@Injectable()
export class BrandResolvePagingParams implements Resolve<any> {

    constructor(private paginationUtil: JhiPaginationUtil) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
      };
    }
}

export const brandRoute: Routes = [
    {
        path: 'brand',
        component: BrandComponent,
        resolve: {
            'pagingParams': BrandResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Brands'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'brand/:id',
        component: BrandDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Brands'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const brandPopupRoute: Routes = [
    {
        path: 'brand-new',
        component: BrandPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Brands'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'brand/:id/edit',
        component: BrandPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Brands'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'brand/:id/delete',
        component: BrandDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Brands'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSampleApplicationSharedModule } from 'app/shared';
import {
    JobHistoryMySuffixComponent,
    JobHistoryMySuffixDetailComponent,
    JobHistoryMySuffixUpdateComponent,
    JobHistoryMySuffixDeletePopupComponent,
    JobHistoryMySuffixDeleteDialogComponent,
    jobHistoryRoute,
    jobHistoryPopupRoute
} from './';

const ENTITY_STATES = [...jobHistoryRoute, ...jobHistoryPopupRoute];

@NgModule({
    imports: [JhipsterSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        JobHistoryMySuffixComponent,
        JobHistoryMySuffixDetailComponent,
        JobHistoryMySuffixUpdateComponent,
        JobHistoryMySuffixDeleteDialogComponent,
        JobHistoryMySuffixDeletePopupComponent
    ],
    entryComponents: [
        JobHistoryMySuffixComponent,
        JobHistoryMySuffixUpdateComponent,
        JobHistoryMySuffixDeleteDialogComponent,
        JobHistoryMySuffixDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationJobHistoryMySuffixModule {}

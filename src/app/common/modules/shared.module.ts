import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
    declarations: [
        // DailoguePageComponent,
        // DeleteConfirmDialogComponent,
        // ClosedConfirmDialogComponent,
        // ButtonRendererComponent,
        // WarningDialogComponent,
        // RejectResendConfirmDialogComponent,
        // CloseRenderComponent,
        // NumberOnlyDirective,
        // ImagePreviewDialogComponent,
        // UserAlreadyExistDialogComponent,
        // UserAccountLockedDialogComponent,
        // SessionExpiredDialogComponent,
        // RemarkDialogComponent
    ],
    imports: [
        FlexLayoutModule,
        MaterialModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxExtendedPdfViewerModule,
        NgxLoadingModule.forRoot({})
    ],
    exports: [
        FlexLayoutModule,
        MaterialModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxExtendedPdfViewerModule
        //NumberOnlyDirective
    ],
    entryComponents: [
        // DeleteConfirmDialogComponent,
        // ClosedConfirmDialogComponent,
        // WarningDialogComponent,
        // RejectResendConfirmDialogComponent,
        // DailoguePageComponent,
        // ButtonRendererComponent,
        // CloseRenderComponent,
        // ImagePreviewDialogComponent,
        // UserAlreadyExistDialogComponent,
        // UserAccountLockedDialogComponent,
        // SessionExpiredDialogComponent,
        // RemarkDialogComponent
    ],
    providers: [

    ]
})

export class SharedModule {

}

import { ErrorHandler } from '@angular/core';

export class GlobalErrorHandler extends ErrorHandler {
    handleError(error) {
        console.error('Handling error by GlobalErrorHandler')
        super.handleError(error)
        // do something with the exception
    }
}
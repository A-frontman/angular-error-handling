import { ErrorHandler } from '@angular/core';

export class GlobalErrorHandler extends ErrorHandler {
    handleError(error) {
        window.alert('Handling error by GlobalErrorHandler')
        super.handleError(error)
        // do something with the exception
    }
}
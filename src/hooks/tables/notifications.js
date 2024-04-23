import {enqueueSnackbar} from "notistack";

export const VARIANTS = {
    ERROR:'error',
    INFO:'info',
    SUCCESS:'success',
    WARNING:'warning',
    DEFAULT:'default',
}
export function sendNotification(message, variant, config) {
    enqueueSnackbar(message, {
        autoHideDuration: 3000,
        preventDuplicates: true,
        variant,
        ...config
    })
}

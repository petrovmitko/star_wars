import { createAction } from '@ngrx/store';

export enum SwTypes {
    UPDATE_LOADING = '[LOADING] Update Loading',
}

export const updateLoading = createAction(SwTypes.UPDATE_LOADING, (loading: boolean) => ({ loading }));
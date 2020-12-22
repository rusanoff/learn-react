import { CREATE_POST } from '../types';
import { showAlert } from '../actions';

const forbidden = ['fuck', 'spam', 'php'];

export function forbiddenWordsMiddleware({ dispatch }: any) {
  return (next: any) => {
    return (action: any) => {
      if (action.type === CREATE_POST) {
        const found = forbidden.filter((word) => action.payload.title.includes(word));

        if (found.length) {
          return dispatch(showAlert(`Заголовок содержит недопустимые фразы (${found.join(', ')})`));
        }
      }

      next(action);
    };
  };
}

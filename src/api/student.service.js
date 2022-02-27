import { request } from './http';

const prefix = (postfix = '') => `/student/${postfix}`;

const urlFactory = {
    STUDENT_LIST: prefix('list/'),
    CREATE_STUDENT: prefix('create/'),
};

export const studentService = {
    getStudentList: () => request()
        .get(urlFactory.STUDENT_LIST),

    createStudent: () => request()
        .get(urlFactory.CREATE_STUDENT),
};

import {repository} from "nodedata/core/decorators";
import {inject} from "nodedata/di/decorators";
import {teacherModel} from '../models/teacherModel';
import { DynamicRepository } from "nodedata/core/dynamic/dynamic-repository";
import Q = require('q');

@repository({ path: 'teacher', model: teacherModel })
export class TeacherRepository extends DynamicRepository {

    post(obj: any) {
        let o = obj;
        return super.post(obj).then(result => {
            let r = result;
            return result;
        })
    }

}
export default TeacherRepository;
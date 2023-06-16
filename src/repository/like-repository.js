import Comment from "../models/comment";
import CrudRepository from "./crud-repository";

class CommentRepository extends CrudRepository {
    constructor() {
        super(Comment)
    }
}
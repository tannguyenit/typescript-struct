import { ObjectLiteral, Repository } from 'typeorm';

class BaseRepository<Entity extends ObjectLiteral> extends Repository<Entity> {

}

export default BaseRepository

using { db} from '../db/schema';
service MyService {
    entity tab as projection on db.tab;
    

}


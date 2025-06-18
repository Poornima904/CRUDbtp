using { db} from '../db/schema';


service MyService {
    @odata.draft.enabled
    entity tab as projection on db.tab;
    

}


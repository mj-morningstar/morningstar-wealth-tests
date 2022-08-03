// Do not change this class
class FeatureApi {

    constructor() {
        this.users = new Map(); // dictionary in c#, python / map in java 
        // Key is the UserId, Value is an array of FeatureIds
        this.users.set(1111, [0, 1]);
        this.users.set(2222, [2, 0]);
        this.users.set(3333, [0, 1, 2]);
        this.users.set(4444, [0, 1, 2, 3, 4]);
        this.users.set(5555, [0, 1, 4]);
    }

    // returns all feature definitions
    // will return [{id: 0, description: 'Feature 1', active: true }, ... , ...]
    getAllFeatures() 
    {
        return [
            new Feature(0, "Feature 1", true),
            new Feature(1, "Feature 2", false),
            new Feature(2, "Feature 3", true),
            new Feature(3, "Feature 4", true),
            new Feature(4, "Feature 5", false)
        ]
    }

    // returns an array of feature Ids
    // example for userId 1111 it will return [0,1]
    // example for userId 2222 it will return [2, 0]
    getFeatureIdsForUserId(userId) {
        return this.users.get(userId);
    }
}

class Feature {
    constructor(id, description, active) {
        this.id = id;
        this.description = description;
        this.active = active; 
    }
}

// Implement this class so that it fulfils the criteria below:
    // 1. Retrieves all active features for a specified user

class FeatureService {
    
    constructor() {
        this.featureApi = new FeatureApi();
    }

    // userId is an interger
    getActiveFeaturesForUser(userId) {
        // todo add logic 
        throw "Not implemented exception";
    }
} 
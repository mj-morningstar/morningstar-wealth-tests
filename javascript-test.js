

// Do not change this class
class FeatureApi {

    constructor() {
        this.users = new Map();
        this.users.set(1111, [0, 1]);
        this.users.set(2222, [2, 0]);
        this.users.set(3333, [0, 1, 2]);
        this.users.set(4444, [0, 1, 2, 3, 4]);
        this.users.set(5555, [0, 1, 4]);
    }

    // returns all feature definitions
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
    getFeatureIdsForUserId(userId) {
        if(!userId) {
            throw "Pass in user id";
        }

        if(!this.users.has(userId)) {
            throw "User does not exist";
        }
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
    // 2. Caches the result for a reasonable amount of time

class FeatureService {
    
    constructor() {
        // initalize some stuff
    }

    // userId is an interger
    getActiveFeaturesForUser(userId) {
        // todo add logic 
        throw "Not implemented exception";
    }
} 

const featureService = new FeatureService();
const testUserIds = [1111,2222,3333,4444,5555];
testUserIds.forEach(userId => {
    console.log(featureService.getActiveFeaturesForUser(userId))
});



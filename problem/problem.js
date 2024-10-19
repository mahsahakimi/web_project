'use strict'

class Problem {
    constructor(id) {
        let obj = this.getObj(id);
        this.problemId = id;
        this.title = obj.title;
        this.text = obj.text;
        this.answers = obj.answers; //array of str
        this.ansIndex = Number(obj.ansIndex); //[1-4]
        this.topic = obj.topic; //str
        this.difficulty = obj.difficulty; //[1-5]
        this.creatorId = obj.creatorId;
        this.solversId = obj.solversId; //array of solvers id
        this.relatedProblemsId = obj.relatedProblemsId; //array of problems id
    }

    getObj(id) {
        //...
        return {
            title: "soccer",
            text: "who is the player 2?",
            answers: ["ali", "mmd", "mehdi", "mohsen"],
            ansIndex: "02",
            topic: "sports",
            difficulty: "5",
            creatorId: "c01",
            solversId: ["s01", "s02"],
            relatedProblemsId: ["p03", "p02"]
        }
    };

    solvers(idList) {

    }

    relatedProblems(idList = this.relatedProblemsId) {
        let list = [];
        idList.forEach(id => {
            let problem = new Problem(id);
            list.push({title: problem.title, id: id});
        });
        return list;
    }
}

let test = new Problem("p01").relatedProblems();
console.log(test);

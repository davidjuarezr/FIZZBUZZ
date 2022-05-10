const ExplorerService = require('./../../lib/services/ExplorerService')

describe("Test para ExplorersService", () => {
    test("Requerimiento 1: Calcular los explorers en una mision", () => {
        const explorers = [{ mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(4);
    });

    test("Requerimiento 2: Calcular la cantidad de explorers en una mision", () => {
        const explorers = [{ mission: "node"}];
        const explorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersInNode).toBe(1);
    });

    test("Requerimiento 3: Obtener los usuarios de los explorers de una mision especifica", () => {
        const explorers = [{ mission: "node", githubUsername: "ajolonauta1"}];
        const explorersInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node")
        expect(explorersInNode).toStrictEqual(["ajolonauta1"])
    });

    test("Requerimiento 4: Obtener los nombres de los explorers de una mision especifica", () => {
        const explorers = [{mission: "node", githubUsername: "ajolonauta1", name: "Woopa1"}, {mission: "java", githubUsername: "ajolonauta2", name: "Woopa2"}, {mission: "node", githubUsername: "ajolonauta3", name: "Woopa3"}];
        const explorersInNode = ExplorerService.getExplorersNamesByMission(explorers, "node");
        expect(explorersInNode).toStrictEqual(["Woopa1", "Woopa3"]);
    });
})
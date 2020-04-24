module.exports = class DependencyManager {

    static BuiltInDependencies = require("./BuiltInDependencies/list");

    static CustomDependencies = new Array();

    static DependenciesList = new Array();

    static Dependencies;

    static Models = require("./Models/Models")

    static async InitializeAndExportAsync() {
        try {
            this.BuildList();
            await this.InitializeDependenciesAsync();
            this.BuildDependencies();
            return this.Dependencies;
        }
        catch (erro) {
            throw erro;
        }
    }

    static BuildList() {
        try {
            this.DependenciesList = this.BuiltInDependencies.concat(this.CustomDependencies);
            return
        }
        catch (erro) {
            throw erro;
        }
    }

    static async InitializeDependenciesAsync() {
        try {
            for (let dependency of this.DependenciesList) {
                if (dependency.InitializeAsyncMustBeCalled) {
                    await dependency.InitializeAsync();
                }
                return;
            }
        }
        catch (erro) {
            throw erro;
        }
    }

    static BuildDependencies() {
        try {
            let dependencies = new Object();
            for (let dependency of this.DependenciesList) {
                dependencies[`${dependency.Name}`] = new dependency();
            }
            this.Dependencies = dependencies;
            return;
        }
        catch (erro) {
            throw erro;
        }
    }

    static ValidateDependency(dependency) {
        try {
            if (!dependency instanceof this.Models.Dependency) {
                throw Error(dependency, " <<<<<<------- Is not a dependency implementation");
            }
        }
        catch (erro) {
            throw erro;
        }
    }

    Models = DependencyManager.Models;

    constructor() {

    }

    AddDependency(dependency) {
        try {
            DependencyManager.ValidateDependency(dependency);
            DependencyManager.DependenciesList.push(dependency);
        }
        catch (erro) {
            throw erro;
        }
    }

    async InitializeAndExportAsync() {
        try {
            return await DependencyManager.InitializeAndExportAsync();
        }
        catch (erro) {
            throw erro;
        }
    }

    SetDependenciesList(list) {
        DependencyManager.DependenciesList = list;
    }

}
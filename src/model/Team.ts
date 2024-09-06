

class Team {
    private city: string;
    private name: string;
    private initial: string;
    private logo: string;

    constructor(city?: string, name?: string, initial?: string, logo?: string) {
        this.city = city ?? "";
        this.name = name ?? "";
        this.initial = initial ?? "";
        this.logo = logo ?? "";
    }

    public getCity() {
        return this.city;
    }

    public getName() {
        return this.name;
    }

    public getInitial() {
        return this.initial;
    }

    public getLogo() {
        return this.logo;
    }

    public setCity(city: string) {
        this.city = city;
    }

    public setName(name: string) {
        this.name = name;
    }

    public setInitial(initial: string) {
        this.initial = initial;
    }

    public setLogo(logo: string) {
        this.logo = logo;
    }
}

export default Team;
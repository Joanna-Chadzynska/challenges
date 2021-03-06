import { Ship, ShipMission, ShipLocation } from '../interfaces/Ship';

export class ShipViewModel {
	public readonly class?: number;
	public readonly homePort?: string;
	public readonly id: number;
	public readonly image: string;
	public readonly missions?: ShipMission[];
	public readonly model: string;
	public readonly name: string;
	public readonly position?: ShipLocation;
	public readonly roles: string[];
	public readonly speedKn?: number;
	public readonly status?: string;
	public readonly successfulLandings?: number;
	public readonly type: string;
	public readonly url: string;
	public readonly weightKg?: number;
	public readonly yearBuilt?: number;

	constructor(data: Ship) {
		this.class = data.class;
		this.homePort = data.home_port;
		this.id = data.id;
		this.image = data.image;
		this.missions = data.missions;
		this.model = data.model;
		this.name = data.name;
		this.position = data.position;
		this.roles = data.roles;
		this.speedKn = data.speed_kn;
		this.status = data.status;
		this.successfulLandings = data.successful_landings;
		this.type = data.type;
		this.url = data.url;
		this.weightKg = data.weight_kg;
		this.yearBuilt = data.year_built;
	}
}

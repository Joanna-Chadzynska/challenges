export enum LandpadStatus {
	'active',
	'inactive',
	'unknown',
	'retired',
	'lost',
	'under construction',
}

export interface Landpad {
	name: string;
	full_name: string;
	type: string;
	locality: string;
	region: string;
	latitude: number;
	longitude: number;
	landing_attempts: number;
	landing_successes: number;
	wikipedia: string;
	details: string;
	launches: string[];
	status: string;
	id: string;
}

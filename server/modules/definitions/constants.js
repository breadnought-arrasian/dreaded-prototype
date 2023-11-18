module.exports = {
	basePolygonDamage: 1,
	basePolygonHealth: 2,

	// SKILL DEFINITIONS
	dfltskl: 9,
	smshskl: 12,

	// NAMES
	statnames: {
		generic: {
			BODY_DAMAGE: 'Body Damage',
			MAX_HEALTH: 'Max Health',
			BULLET_SPEED: 'Bullet Speed',
			BULLET_HEALTH: 'Bullet Health',
			BULLET_PEN: 'Bullet Penetration',
			BULLET_DAMAGE: 'Bullet Damage',
			RELOAD: 'Reload',
			MOVE_SPEED: 'Movement Speed',
			SHIELD_REGEN: 'Shield Regeneration',
			SHIELD_CAP: 'Shield Capacity',
		},
		mixed: {
			BULLET_SPEED: 'Weapon Speed',
			BULLET_HEALTH: 'Weapon Health',
			BULLET_PEN: 'Weapon Penetration',
			BULLET_DAMAGE: 'Weapon Damage',
		},
		drone: {
			BULLET_SPEED: 'Drone Speed',
			BULLET_HEALTH: 'Drone Health',
			BULLET_PEN: 'Drone Penetration',
			BULLET_DAMAGE: 'Drone Damage',
			RELOAD: 'Respawn Rate',
		},
		swarm: {
			BULLET_SPEED: 'Swarm Speed',
			BULLET_HEALTH: 'Swarm Health',
			BULLET_PEN: 'Swarm Penetration',
			BULLET_DAMAGE: 'Swarm Damage',
		},
		necro: {
			BULLET_SPEED: 'Drone Speed',
			BULLET_HEALTH: 'Drone Health',
			BULLET_PEN: 'Drone Penetration',
			BULLET_DAMAGE: 'Drone Damage',
			RELOAD: 'Max Drone Count',
		},
		trap: {
			BULLET_SPEED: 'Placement Speed',
			BULLET_HEALTH: 'Trap Health',
			BULLET_PEN: 'Trap Penetration',
			BULLET_DAMAGE: 'Trap Damage',
		},
		heal: {
			BULLET_PEN: 'Heal Rate',
			BULLET_DAMAGE: 'Heal Amount',
		},
		smasher: {
			RELOAD: 'Engine Acceleration',	
		},
		flail: {
			BULLET_HEALTH: 'Ball Longevity',
			BULLET_PEN: 'Ball Sharpness',
			BULLET_DAMAGE: 'Ball Damage',
			RELOAD: 'Ball Density',
		},
	},
	gunCalcNames: {
	    default: 0,
	    bullet: 1,
	    drone: 2,
	    swarm: 3,
	    fixedReload: 4,
	    thruster: 5,
	    sustained: 6,
	    necro: 7,
	    trap: 8,
	},
	base: {
		ACCEL: 5,
		SPEED: 3.3,
		HEALTH: 20,
		DAMAGE: 3,
		RESIST: 0.9,
		PENETRATION: 0.8,
		SHIELD: 3,
		REGEN: 0.1,
		DENSITY: 0.5,
		FOV: 1.125,
	}
};

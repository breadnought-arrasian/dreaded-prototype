const { combineStats, makeAuto, makeHybrid, makeOver, makeOversplit, makeDeco, makeGuard, addAura } = require('../facilitators.js');
const { base, statnames, gunCalcNames, dfltskl, smshskl } = require('../constants.js');
const generics = require('./generics.js');
const g = require('../gunvals.js');
const { bitlessspeed } = require('../gunvals.js');

// Whatever the hell is needed

exports.smallDrones = {
    PARENT: ["bullet"],
    LABEL: "",
    BODY: {
        SPEED: 0,
        HEALTH: 99999999999999,
        DAMAGE: 0.0001,
        RANGE: 1,
    },
    INVISIBLE: [0, 1],
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [1, 16, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, { range: 2 }]),
                TYPE: ["swarm", { LABEL: "Fragment", PERSISTS_AFTER_DEATH: true, BODY: { FOV: 2 } }],
                AUTOFIRE: true,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [1, 16, 1, 0, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, { range: 2 }]),
                TYPE: ["swarm", { LABEL: "Fragment", PERSISTS_AFTER_DEATH: true, BODY: { FOV: 2 } }],
                AUTOFIRE: true,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [1, 16, 1, 0, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, { range: 2 }]),
                TYPE: ["swarm", { LABEL: "Fragment", PERSISTS_AFTER_DEATH: true, BODY: { FOV: 2 }}],
                AUTOFIRE: true,
            },
        },
    ],
};
exports.betadrone = {
    PARENT: ["drone"],
    LABEL: "Beta Drone",
    NEXT_FORM: "smallDrones",
    TURRETS: [
        {
            POSITION: [10, 0, 0, 180, 0, 1],
            TYPE: ["triangle", { COLOR: -1, MIRROR_MASTER_ANGLE: true }],
        },
    ]
};

exports.smallDrones2 = {
    PARENT: ["bullet"],
    LABEL: "",
    BODY: {
        SPEED: 0,
        HEALTH: 99999999999999,
        DAMAGE: 0.0001,
        RANGE: 1,
    },
    INVISIBLE: [0, 1],
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [1, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, { range: 2 }]),
                TYPE: ["swarm", { LABEL: "Fragment", PERSISTS_AFTER_DEATH: true, BODY: { FOV: 2 } }],
                AUTOFIRE: true,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [1, 12, 1, 0, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, { range: 2 }]),
                TYPE: ["swarm", { LABEL: "Fragment", PERSISTS_AFTER_DEATH: true, BODY: { FOV: 2 } }],
                AUTOFIRE: true,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [1, 12, 1, 0, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, { range: 2 }]),
                TYPE: ["swarm", { LABEL: "Fragment", PERSISTS_AFTER_DEATH: true, BODY: { FOV: 2 } }],
                AUTOFIRE: true,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [1, 12, 1, 0, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, { range: 2 }]),
                TYPE: ["swarm", { LABEL: "Fragment", PERSISTS_AFTER_DEATH: true, BODY: { FOV: 2 } }],
                AUTOFIRE: true,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [1, 12, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, { range: 2 }]),
                TYPE: ["swarm", { LABEL: "Fragment", PERSISTS_AFTER_DEATH: true, BODY: { FOV: 2 } }],
                AUTOFIRE: true,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [1, 12, 1, 0, 0, 300, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, { range: 2 }]),
                TYPE: ["swarm", { LABEL: "Fragment", PERSISTS_AFTER_DEATH: true, BODY: { FOV: 2 } }],
                AUTOFIRE: true,
            },
        },
    ],
};
exports.alphadrone = {
    PARENT: ["drone"],
    LABEL: "Alpha Drone",
    NEXT_FORM: "smallDrones2",
    TURRETS: [
        {
            POSITION: [10, 0, 0, 180, 0, 1],
            TYPE: ["triangle", { COLOR: -1, MIRROR_MASTER_ANGLE: true }],
        },
        {
            POSITION: [5, 0, 0, 0, 0, 1],
            TYPE: ["triangle", { COLOR: -1, MIRROR_MASTER_ANGLE: true }],
        },
    ]
};

exports.smallDrones3 = {
    PARENT: ["bullet"],
    LABEL: "",
    BODY: {
        SPEED: 0,
        HEALTH: 99999999999999,
        DAMAGE: 0.0001,
        RANGE: 1,
    },
    INVISIBLE: [0, 1],
    GUNS: [],
};
for (let i = 0; i < 12; i++) {
    exports.smallDrones3.GUNS.push(
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [1, 9, 1, 0, 0, 360 / 12 * i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, { range: 2 }]),
                TYPE: ["swarm", { LABEL: "Fragment", PERSISTS_AFTER_DEATH: true, BODY: { FOV: 2 } }],
                AUTOFIRE: true,
            },
        },
    );
};
exports.omegadrone = {
    PARENT: ["drone"],
    LABEL: "Omega Drone",
    NEXT_FORM: "smallDrones3",
    TURRETS: [
        {
            POSITION: [10, 0, 0, 180, 0, 1],
            TYPE: ["triangle", { COLOR: -1, MIRROR_MASTER_ANGLE: true }],
        },
        {
            POSITION: [5, 0, 0, 0, 0, 1],
            TYPE: ["triangle", { COLOR: -1, MIRROR_MASTER_ANGLE: true }],
        },
        {
            POSITION: [2.5, 0, 0, 180, 0, 1],
            TYPE: ["triangle", { COLOR: -1, MIRROR_MASTER_ANGLE: true }],
        },
    ]
};

exports.explosion = {
    PARENT: ["bullet"],
    LABEL: "",
    BODY: {
        SPEED: 0,
        HEALTH: 99999999999999,
        DAMAGE: 0.0001,
        RANGE: 1,
    },
    INVISIBLE: [0, 1],
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [1, 20, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, [1, 0.0000001, 0.0000001, 1, 3, 1.3, 1, 0.00000001, 0.0000001, 0.175, 1, 1, 1],]),
                TYPE: ["bullet", { LABEL: "Explosion", GROW: 12, GROW_DAMAGE: 1.5, PERSISTS_AFTER_DEATH: true, }],
                AUTOFIRE: true,
            },
        },

    ],
};
exports.explosher_explosion = {
    PARENT: ["bullet"],
    LABEL: "",
    BODY: {
        SPEED: 0,
        HEALTH: 99999999999999,
        DAMAGE: 0.0001,
        RANGE: 1,
    },
    INVISIBLE: [0, 1],
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [1, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, [1, 0.0000001, 0.0000001, 1, 3, 0.65, 1, 0.00000001, 0.0000001, 0.065, 1, 1, 1],]),
                TYPE: ["bullet", { LABEL: "Explosion", GROW: 9, GROW_DAMAGE: 1.5, PERSISTS_AFTER_DEATH: true, }],
                AUTOFIRE: true,
            },
        },

    ],
};
exports.explosiveBullet = {
    PARENT: ["bullet"],
    NEXT_FORM: "explosion",
};
exports.explosher_explosiveBullet = {
    PARENT: ["bullet"],
    NEXT_FORM: "explosher_explosion",
};

exports.missile = {
    PARENT: ["bullet"],
    LABEL: "Missile",
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [
        {
            POSITION: [14, 6, 1, 0, -2, 130, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.muchmorerecoil,
                    g.morespeed,
                    g.morespeed,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 6, 1, 0, 2, 230, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.muchmorerecoil,
                    g.morespeed,
                    g.morespeed,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
    ],
};
exports.hypermissile = {
    PARENT: ["missile"],
    GUNS: [
        {
            POSITION: [14, 6, 1, 0, -2, 150, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.morereload,
                    g.lowpower,
                    g.muchmorerecoil,
                    g.morespeed,
                    g.morespeed,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 6, 1, 0, 2, 210, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.morereload,
                    g.lowpower,
                    g.muchmorerecoil,
                    g.morespeed,
                    g.morespeed,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 6, 1, 0, -2, 90, 0.5],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.morereload,
                    g.lowpower,
                    g.morespeed,
                    g.morespeed,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
            },
        },
        {
            POSITION: [14, 6, 1, 0, 2, 270, 0.5],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.morereload,
                    g.lowpower,
                    g.morespeed,
                    g.morespeed,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
            },
        },
    ],
};
exports.minimissile = {
    PARENT: ["missile"],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [14, 6, 1, 0, 0, 180, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.muchmorerecoil,
                    g.morespeed,
                ]),
                TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
    ],
};
exports.spinmissile = {
    PARENT: ["bullet"],
    LABEL: "Missile",
    INDEPENDENT: !0,
    BODY: {
        RANGE: 120,
    },
    FACING_TYPE: "fastspin",
    GUNS: [
        {
            POSITION: [14, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                AUTOFIRE: !0,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.morereload,
                    g.morespeed,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: !0,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 8, 1, 0, 0, 180, 0],
            PROPERTIES: {
                AUTOFIRE: !0,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.morereload,
                    g.morespeed,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: !0,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
    ],
};
exports.hyperspinmissile = {
    PARENT: ["bullet"],
    LABEL: "Missile",
    INDEPENDENT: !0,
    BODY: {
        RANGE: 120,
    },
    FACING_TYPE: "fastspin",
    GUNS: [
        {
            POSITION: [14, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                AUTOFIRE: !0,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.morespeed,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: !0,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 8, 1, 0, 0, 180, 0],
            PROPERTIES: {
                AUTOFIRE: !0,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.morespeed,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: !0,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 8, 1, 0, 0, 90, 0],
            PROPERTIES: {
                AUTOFIRE: !0,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.morespeed,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: !0,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [14, 8, 1, 0, 0, 270, 0],
            PROPERTIES: {
                AUTOFIRE: !0,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.skim,
                    g.doublereload,
                    g.lowpower,
                    g.morespeed,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: !0,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
    ],
};

exports.hive = {
    PARENT: ["bullet"],
    LABEL: "Hive",
    BODY: {
        RANGE: 90,
        FOV: 0.5,
    },
    FACING_TYPE: "turnWithSpeed",
    INDEPENDENT: true,
    CONTROLLERS: ["alwaysFire", "nearestDifferentMaster", "targetSelf"],
    AI: {
        NO_LEAD: true,
    },
    GUNS: [
        {
            POSITION: [7, 9.5, 0.6, 7, 0, 108, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                TYPE: "bee",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 9.5, 0.6, 7, 0, 180, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                TYPE: "bee",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 9.5, 0.6, 7, 0, 252, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                TYPE: "bee",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 9.5, 0.6, 7, 0, 324, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                TYPE: "bee",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 9.5, 0.6, 7, 0, 36, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                TYPE: "bee",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.snake = {
    PARENT: ["bullet"],
    LABEL: "Snake",
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },
    GUNS: [
        {
            POSITION: [6, 12, 1.4, 8, 0, 180, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                STAT_CALCULATOR: gunCalcNames.thruster,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.hunter,
                    g.hunter2,
                    g.snake,
                    g.snakeskin,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
            },
        },
        {
            POSITION: [10, 12, 0.8, 8, 0, 180, 0.5],
            PROPERTIES: {
                AUTOFIRE: true,
                NEGATIVE_RECOIL: true,
                STAT_CALCULATOR: gunCalcNames.thruster,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.hunter,
                    g.hunter2,
                    g.snake,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
            },
        },
    ],
};
exports.rocketeerMissile = {
    PARENT: ["bullet"],
    LABEL: "Missile",
    BODY: {
        RANGE: 120,
    },
    GUNS: [
        {
            POSITION: [16.5, 10, 1.5, 0, 0, 180, 7.5],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.missileTrail,
                    g.rocketeerMissileTrail,
                ]),
                TYPE: [
                    "bullet",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
    ],
};

exports.surgeonPillboxTurret = {
    PARENT: ["genericTank"],
    LABEL: "",
    COLOR: 16,
    BODY: {
        FOV: 3,
    },
    HAS_NO_RECOIL: true,
    CONTROLLERS: [["spin", { independent: true, speed: 0.08 }]],
    TURRETS: [
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
    GUNS: [
        {
            POSITION: [17, 11, 1, 0, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer, g.turret]),
                TYPE: "healerBullet",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [14, 11, 1, 0, 0, 90, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer, g.turret]),
                TYPE: "healerBullet",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [17, 11, 1, 0, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer, g.turret]),
                TYPE: "healerBullet",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [14, 11, 1, 0, 0, 270, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer, g.turret]),
                TYPE: "healerBullet",
                AUTOFIRE: true,
            },
        },
    ],
};
exports.surgeonPillbox = {
    LABEL: "Pillbox",
    PARENT: ["trap"],
    SHAPE: -6,
    MOTION_TYPE: "motor",
    CONTROLLERS: ["goToMasterTarget", "nearestDifferentMaster"],
    INDEPENDENT: true,
    BODY: {
        SPEED: 1,
        DENSITY: 5,
        DAMAGE: 0
    },
    DIE_AT_RANGE: true,
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "surgeonPillboxTurret",
        },
    ],
};
exports.doctorDrone = {
    PARENT: ["drone"],
    HITS_OWN_TYPE: "normal",
    TURRETS: [
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
};

exports.sunchip = {
    PARENT: ["drone"],
    SHAPE: 4,
    NECRO: true,
    HITS_OWN_TYPE: "hard",
    BODY: {
        FOV: 0.5,
    },
    AI: {
        BLIND: true,
        FARMER: true,
    },
    DRAW_HEALTH: false,
};
exports.eggchip = {
    PARENT: ["sunchip"],
    NECRO: [0],
    SHAPE: 0,
};
exports.autosunchip = {
    PARENT: ["sunchip"],
    AI: {
        BLIND: true,
        FARMER: true,
    },
    INDEPENDENT: true,
};
exports.autoeggchip = {
    PARENT: ["eggchip"],
    AI: {
        BLIND: true,
        FARMER: true,
    },
    INDEPENDENT: true,
};
exports.pentachip = {
    PARENT: ["sunchip"],
    SHAPE: 5,
};
exports.summonerDrone = {
    PARENT: ["sunchip"],
    NECRO: false,
};
exports.gunchip = {
    PARENT: ["drone"],
    SHAPE: -2,
    NECRO: true,
    HITS_OWN_TYPE: "hard",
    BODY: {
        FOV: 0.5,
    },
    AI: {
        BLIND: true,
        FARMER: true,
    },
    DRAW_HEALTH: false,
};

exports.minion = {
    PARENT: ["genericTank"],
    LABEL: "Minion",
    TYPE: "minion",
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: "hard",
    FACING_TYPE: "smoothToTarget",
    BODY: {
        FOV: 0.5,
        SPEED: 2.7 / 2,
        ACCELERATION: 0.4 * 3,
        HEALTH: 5,
        SHIELD: 0,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        "nearestDifferentMaster",
        "mapAltToFire",
        "minion",
        "canRepel",
        "hangOutNearMaster",
    ],
    GUNS: [
        {
            POSITION: [17, 9, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
                WAIT_TO_CYCLE: true,
                TYPE: "bullet",
            },
        },
    ],
};
exports.megaMinion = {
    PARENT: ["minion"],
    LABEL: "Mega Minion",
    BODY: {
        ACCELERATION: 1.1,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [19.5, 13, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.minion]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.tinyMinion = {
    PARENT: ["minion"],
    LABEL: "Tiny Minion",
    ACCEPTS_SCORE: false,
    SHAPE: 0,
    MOTION_TYPE: 'swarm',
    CRAVES_ATTENTION: true,
    BODY: {
        ACCELERATION: 3,
        SPEED: 4.5,
        PENETRATION: 1.5,
        HEALTH: 0.35 * 0.5,
        DAMAGE: 2.25,
        RESIST: 1.6,
        RANGE: 300,
        DENSITY: 12,
        PUSHABILITY: 0.5,
        FOV: 1.5,
    },
    AI: {
        BLIND: true,
    },
    GUNS: [ { /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
        POSITION: [    17,         9,            1,            0,            0,            0,            0,     ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.lessreload, g.bitlesspower]),
            WAIT_TO_CYCLE: true,
            TYPE: "bullet",
        }, }, 
    ],
    DIE_AT_RANGE: true,
    BUFF_VS_FOOD: true,
};
exports.smallMinions = {
    PARENT: ["bullet"],
    LABEL: "",
    BODY: {
        SPEED: 0,
        HEALTH: 99999999999999,
        DAMAGE: 0.0001,
        RANGE: 1,
    },
    INVISIBLE: [0, 1],
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [1, 16, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.productionist, { range: 2 }]),
                TYPE: ["tinyMinion", { LABEL: "Fragment", PERSISTS_AFTER_DEATH: true, BODY: { FOV: 2 } }],
                AUTOFIRE: true,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [1, 16, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.productionist, { range: 2 }]),
                TYPE: ["tinyMinion", { LABEL: "Fragment", PERSISTS_AFTER_DEATH: true, BODY: { FOV: 2 } }],
                AUTOFIRE: true,
            },
        },
    ],
};
exports.betaMinion = {
    PARENT: ["minion"],
    LABEL: "Beta Minion",
    BODY: {
        ACCELERATION: 1.1,
        SPEED: 1
    },
    NEXT_FORM: "smallMinions",
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [23, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniper, g.pound, g.minion, g.halfrange]),
                TYPE: "bullet",
                WAIT_TO_CYCLE: true,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [23, 10, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniper, g.pound, g.minion, g.halfrange]),
                TYPE: "bullet",
                WAIT_TO_CYCLE: true,
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [12, 0, 0, 180, 0, 1],
            TYPE: ["egg", { COLOR: -1, MIRROR_MASTER_ANGLE: true }],
        },
    ]
};

exports.smallMinions2 = {
    PARENT: ["bullet"],
    LABEL: "",
    BODY: {
        SPEED: 0,
        HEALTH: 99999999999999,
        DAMAGE: 0.0001,
        RANGE: 1,
    },
    INVISIBLE: [0, 1],
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [1, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.productionist, { range: 2 }]),
                TYPE: ["tinyMinion", { LABEL: "Fragment", PERSISTS_AFTER_DEATH: true, BODY: { FOV: 2 } }],
                AUTOFIRE: true,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [1, 10, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.productionist, { range: 2 }]),
                TYPE: ["tinyMinion", { LABEL: "Fragment", PERSISTS_AFTER_DEATH: true, BODY: { FOV: 2 } }],
                AUTOFIRE: true,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [1, 10, 1, 0, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.productionist, { range: 2 }]),
                TYPE: ["tinyMinion", { LABEL: "Fragment", PERSISTS_AFTER_DEATH: true, BODY: { FOV: 2 } }],
                AUTOFIRE: true,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [1, 10, 1, 0, 0, -90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.productionist, { range: 2 }]),
                TYPE: ["tinyMinion", { LABEL: "Fragment", PERSISTS_AFTER_DEATH: true, BODY: { FOV: 2 } }],
                AUTOFIRE: true,
            },
        },
    ],
};
exports.alphaMinion = {
    PARENT: ["minion"],
    LABEL: "Alpha Minion",
    BODY: {
        ACCELERATION: 1.1,
        SPEED: 1
    },
    NEXT_FORM: "smallMinions2",
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [23, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniper, g.pound, g.assass, g.halfrange]),
                TYPE: "bullet",
                WAIT_TO_CYCLE: true,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [23, 10, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniper, g.pound, g.assass, g.halfrange]),
                TYPE: "bullet",
                WAIT_TO_CYCLE: true,
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [12, 0, 0, 180, 0, 1],
            TYPE: ["egg", { COLOR: -1, MIRROR_MASTER_ANGLE: true }],
        },
        {
            POSITION: [6, 0, 0, 180, 0, 1],
            TYPE: ["egg", { COLOR: -1, MIRROR_MASTER_ANGLE: true }],
        },
    ]
};

exports.setTrap = {
    LABEL: "Set Trap",
    PARENT: ["trap"],
    SHAPE: -4,
    MOTION_TYPE: "motor",
    CONTROLLERS: ["goToMasterTarget"],
    FACING_TYPE: "turnSlowlyWithSpeed",
    BODY: {
        SPEED: 1 * 1,
        DENSITY: 5,
        ACCELERATION: 1 * 1
    },
};
exports.unsetTrap = {
    LABEL: "Set Trap",
    PARENT: ["trap"],
    SHAPE: -4,
    MOTION_TYPE: "motor",
    FACING_TYPE: "turnSlowlyWithSpeed",
    BODY: {
        SPEED: 1,
        DENSITY: 5,
        ACCELERATION: 1 * 3
    },
};
exports.boomerang = {
    LABEL: "Boomerang",
    PARENT: ["trap"],
    CONTROLLERS: ["boomerang"],
    MOTION_TYPE: "motor",
    HITS_OWN_TYPE: "never",
    SHAPE: -5,
    BODY: {
        SPEED: 1.25,
        RANGE: 120,
    },
};
exports.masterBullet = {
    PARENT: ["trap"],
    SHAPE: 0,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.trifront,
                    g.tonsmorrecoil,
                    g.minion,
                    g.weak,
                ]),
                TYPE: "bullet",
                LABEL: "Front",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [13, 8, 1, 0, -1, 140, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.minion,
                    g.weak,
                ]),
                TYPE: "bullet",
                LABEL: "Thruster",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [13, 8, 1, 0, 1, 220, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.minion,
                    g.weak,
                ]),
                TYPE: "bullet",
                LABEL: "Thruster",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.minion,
                    g.weak,
                ]),
                TYPE: "bullet",
                LABEL: "Thruster",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.minion,
                    g.weak,
                ]),
                TYPE: "bullet",
                LABEL: "Thruster",
                AUTOFIRE: true,
            },
        },
    ],
};

exports.autoTankGun = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.auto5gun = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [24, 11, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.five]),
                TYPE: "bullet",
            },
        },
    ],
}
exports.bansheegun = {
    PARENT: ["genericTank"],
    LABEL: "",
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    INDEPENDENT: true,
    GUNS: [
        {
            POSITION: [26, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, { reload: 1.33 }]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.auto4gun = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [16, 4, 1, 0, -3.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 4, 1, 0, 3.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.bigauto4gun = {
    PARENT: ["genericTank"],
    LABEL: "",
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [14, 5, 1, 0, -4.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.auto,
                    g.gunner,
                    g.twin,
                    g.twin,
                    g.power,
                    g.halfreload,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 5, 1, 0, 4.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.auto,
                    g.gunner,
                    g.twin,
                    g.twin,
                    g.power,
                    g.halfreload,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 5, 1, 0, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.auto,
                    g.gunner,
                    g.twin,
                    g.twin,
                    g.power,
                    g.halfreload,
                ]),
                TYPE: "bullet",
            },
        },
    ],
};

exports.sniper3gun = {
    PARENT: ["genericTank"],
    LABEL: '',
    BODY: {
        FOV: 5,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [27, 9, 1, 0, 0, 0, 0,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.auto, g.assass, g.autosnipe]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [5, 9, -1.5, 8, 0, 0, 0,],
    },
    ],
};
exports.sniper5gun = {
    PARENT: ["genericTank"],
    LABEL: '',
    BODY: {
        FOV: 5,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [30, 9, 1, 0, 0, 0, 0,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.auto, g.assass, g.autosnipe, g.five]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [5, 9, -1.5, 8, 0, 0, 0,],
    },
    ],
};
exports.phantomgun = {
    PARENT: ["genericTank"],
    LABEL: '',
    BODY: {
        FOV: 5
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    INDEPENDENT: true,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [32, 9, 1, 0, 0, 0, 0,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.auto, g.assass, g.autosnipe, {reload: 1.33}]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [5, 9, -1.5, 8, 0, 0, 0,],
    },
    ],
};
exports.heavy3gun = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 2,
        SPEED: 0.9,
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [22, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.heavy3gun_faster = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 2,
        SPEED: 0.9,
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [22, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.morespeed, g.morespeed]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.spiritgun = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 2,
        SPEED: 0.9,
    },
    INDEPENDENT: true,
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [22, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, { reload: 1.33 }]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.superHeavyGun = {
    PARENT: ["genericTank"],
    LABEL: "Super-Turret",
    BODY: {
        FOV: 2,
        SPEED: 0.9,
    },
    GUNS: [
        {
            POSITION: [4.5, 14, 1, 10, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.super_auto]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [10, 14, -1.35, 0, 0, 0, 0],
        },
    ],
};
exports.superHeavyGunMK3 = {
    PARENT: ["genericTank"],
    LABEL: "Super-Turret",
    BODY: {
        FOV: 5,
        SPEED: 0.9,
    },
    GUNS: [
        {
            POSITION: [4.5, 14, 1, 10, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.super_auto, g.sniper, g.assass, g.morereload, { speed: 2, maxSpeed: 2 }]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [10, 14, -1.35, 0, 0, 0, 0],
        },
    ],
};
exports.artilleryAutoTankgun = {
    PARENT: ["genericTank"],
    LABEL: "Artillery",
    BODY: {
        FOV: 2,
        SPEED: 0.9,
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [{
        POSITION: [17, 3, 1, 0, -6, -7, 0.25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.auto]),
            TYPE: "bullet",
            LABEL: "Secondary",
        },
    },
        {
            POSITION: [17, 3, 1, 0, 6, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.auto]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [19, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.auto]),
                TYPE: "bullet",
                LABEL: "Heavy",
            },
        },
    ],
};

exports.vulcTurret = { //8 barrels
    PARENT: ["autoTankGun"],
    LABEL: 'Vulcan',
    BODY: {
        FOV: 2
    },
    GUNS: [{
        POSITION: [32, 2, 1, 0, -2.5, 0, 5 / 8 + 5,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.auto]),//6
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 2.5, 0, 3 / 8 + 3,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.auto]),//4
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 0, 0, 4 / 8 + 4,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.auto]),//5
            TYPE: "bullet",
        },
    },
    {
        POSITION: [32, 2, 1, 0, -4, 0, 6 / 8 + 6,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.auto]),//7
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 4, 0, 2 / 8 + 2,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.auto]),//3
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, -2.5, 0, 7 / 8 + 7,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.auto]),//8
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 2.5, 0, 1 / 8 + 1,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.auto]),//2
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 0, 0, 0,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.auto]),//1
            TYPE: "bullet",
        },
    }, {
        POSITION: [6, 13.2, 1, 6.5, 0, 0, 0,],
    }, {
        POSITION: [4.5, 13.2, 1, 21.5, 0, 0, 0,],
    },
    ],
};

exports.autoTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    BODY: {
        FOV: 0.8,
    },
    COLOR: 16,
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.droneAutoTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    BODY: {
        FOV: 0.8,
    },
    COLOR: 16,
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.overdrive]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.autoSmasherTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    COLOR: 16,
    GUNS: [
        {
            POSITION: [20, 6, 1, 0, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.fast, g.mach, g.pound, g.morereload, g.morereload]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.fixedReload,
            },
        },
        {
            POSITION: [20, 6, 1, 0, -5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.fast, g.mach, g.pound, g.morereload, g.morereload]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.fixedReload,
            },
        },
    ],
};
exports.architectGun = {
    PARENT: ["genericTank"],
    LABEL: "",
    COLOR: 16,
    GUNS: [
        {
            POSITION: [20, 16, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 16, 1.1, 20, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.auto]),
                TYPE: "setTrap",
            },
        },
    ],
};

exports.pillboxTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    COLOR: 16,
    BODY: {
        FOV: 2,
    },
    HAS_NO_RECOIL: true,
    GUNS: [
        {
            POSITION: [22, 11, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.turret, g.power, g.auto, g.notdense]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.autotrapTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    COLOR: 16,
    BODY: {
        FOV: 2,
    },
    HAS_NO_RECOIL: true,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [
        {
        POSITION: [22, 11, 1, 0, 0, 0, 0,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.turret, g.power, g.auto, g.notdense, g.lessreload, g.bitlesspower]),
            TYPE: "bullet",
        },
    },
    ],
};

exports.pillbox = {
    LABEL: "Pillbox",
    PARENT: ["trap"],
    SHAPE: -4,
    MOTION_TYPE: "motor",
    CONTROLLERS: ["goToMasterTarget", "nearestDifferentMaster"],
    INDEPENDENT: true,
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
    DIE_AT_RANGE: true,
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "pillboxTurret",
        },
    ],
};
exports.unsetPillbox = {
    PARENT: ["unsetTrap"],
    LABEL: "Pillbox",
    INDEPENDENT: true,
    CONTROLLERS: ["nearestDifferentMaster"],
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "pillboxTurret",
        },
    ],
}

exports.autotrap = {
    LABEL: 'Thrown Auto-Trap',
    PARENT: ["trap"],
    INDEPENDENT: true,
    CONTROLLERS: ["nearestDifferentMaster"],
    DIE_AT_RANGE: true,
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: "autotrapTurret",
    }
    ]
};

exports.sancTurret = {
    PARENT: ["genericTank"],
    LABEL: "Healer",
    CONTROLLERS: [
        ["spin", { independent: true, speed: -0.05 }],
        //"nearestDifferentMaster",
    ],
    TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: ["healerSymbol", {
                CONTROLLERS: ["targetSelf"]
            }
            ]
        },
    ],
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 9, -0.5, 12.5, 0, 0, 0],
        },
        {
            POSITION: [18, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer, g.pound, g.doublereload, g.slow, { range: 0.6 }]),
                TYPE: "healerBullet",
                AUTOFIRE: true
            },
        }, {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 9, -0.5, 12.5, 0, 120, 0],
        },
        {
            POSITION: [18, 10, 1, 0, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer, g.pound, g.doublereload, g.slow, { range: 0.6 }]),
                TYPE: "healerBullet",
                AUTOFIRE: true
            },
        }, {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 9, -0.5, 12.5, 0, 240, 0],
        },
        {
            POSITION: [18, 10, 1, 0, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer, g.pound, g.doublereload, g.slow, {range: 0.6}]),
                TYPE: "healerBullet",
                AUTOFIRE: true
            },
        },
    ],
    STAT_NAMES: statnames.heal,
};


exports.autoswarm = {
    PARENT: ["swarm"],
    AI: {
        FARMER: true,
    },
    INDEPENDENT: true,
};
exports.bee = {
    PARENT: ["swarm"],
    PERSISTS_AFTER_DEATH: true,
    SHAPE: 4,
    LABEL: "Drone",
    HITS_OWN_TYPE: "hardWithBuffer",
};
exports.homingBullet = {
    PARENT: ["autoswarm"],
    SHAPE: 0,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.165,
        DAMAGE: 6,
        PUSHABILITY: 0.3,
    },
    CAN_GO_OUTSIDE_ROOM: true,
};

exports.target = {
    COLOR: 17,
    SHAPE: "M -21726.1993 -238.92439999999988 C -21726.1993 -11999.275862896917 -12192.55076289692 -21532.9244 -432.1993000000075 -21532.924400000004 5215.320634643242 -21532.924400000004 10631.53285591389 -19289.455841258798 14624.932498586342 -15296.05619858635 18618.33214125879 -11302.6565559139 20861.8007 -5886.444334643253 20861.8007 -238.92440000000352 20861.8007 11521.427062896913 11328.15216289692 21055.0756 -432.1992999999966 21055.0756 -12192.550762896914 21055.0756 -21726.199299999997 11521.42706289692 -21726.1993 -238.92439999999624 Z M -17877.52174 -238.92439999999988 C -17877.521739999996 9395.861139492925 -10066.984839492927 17206.398039999996 -432.1993000000002 17206.398039999996 9202.586239492925 17206.398039999996 17013.123140000003 9395.861139492925 17013.123140000003 -238.92440000000352 17013.123140000003 -9873.709939492932 9202.586239492932 -17684.246840000003 -432.1992999999966 -17684.246840000003 -10066.984839492921 -17684.246839999996 -17877.521739999996 -9873.709939492923 -17877.52173999999 -238.92439999999624 Z M -11711.1453 -2840.6749 L -11675.1453 2595.3251 -32111.1453 2595.3251 -32147.1453 -2840.6749 Z M 10823.1455 2366.994 L 10811.1455 -3081.006 31271.1455 -3069.006 31283.1455 2378.994 Z M 2180.6576 -11495.9543 L -3267.3424 -11507.9543 -3255.3424 -31955.954299999998 2192.6576 -31943.954299999998 Z M -3027.0113 11038.3365 L 2408.9887 11014.3365 2420.9887 31462.336499999998 -3015.0113 31486.336499999998 Z"
};
exports.precisionProp = {
    COLOR: 16,
    SHAPE: 0,
    TURRETS: [
        {
            POSITION: [12 / 25600, 0, 0, 0, 360, 1],
            TYPE: "target"
        }
    ]
};
exports.smasherBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true }]],
    COLOR: 9,
    SHAPE: 6,
    INDEPENDENT: true,
};
exports.landmineBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.08 }]],
    COLOR: 9,
    SHAPE: 6,
    INDEPENDENT: !0,
};
exports.spikeBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true }]],
    COLOR: 9,
    SHAPE: 3,
    INDEPENDENT: true,
};
exports.weirdSpikeBody1 = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.08 }]],
    COLOR: 9,
    SHAPE: 3,
    INDEPENDENT: true,
};
exports.weirdSpikeBody2 = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.05 }]],
    COLOR: 9,
    SHAPE: 3,
    INDEPENDENT: true,
};

// BASIC TANK AND STARTING UPGRADES
exports.basic = {
    PARENT: ["genericTank"],
    LABEL: "Basic",
    BODY: {
        ACCELERATION: base.ACCEL * 1,
        SPEED: base.SPEED * 1,
        HEALTH: base.HEALTH * 1,
        DAMAGE: base.DAMAGE * 1,
        PENETRATION: base.PENETRATION * 1,
        SHIELD: base.SHIELD * 1,
        REGEN: base.REGEN * 1,
        FOV: base.FOV * 1,
        DENSITY: base.DENSITY * 1,
        PUSHABILITY: 1,
        HETERO: 3,
    },
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
                COLOR: 16,
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false,
            },
        },
    ],
};
exports.twin = {
    PARENT: ["genericTank"],
    LABEL: "Twin",
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.sniper = {
    PARENT: ["genericTank"],
    LABEL: "Sniper",
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [24, 8.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.machineGun = {
    PARENT: ["genericTank"],
    LABEL: "Machine Gun",
    GUNS: [
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.flankGuard = {
    PARENT: ["genericTank"],
    LABEL: "Flank Guard",
    BODY: {
        SPEED: 1.1 * base.SPEED,
    },
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.director = {
    PARENT: ["genericTank"],
    LABEL: "Director",
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.1,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 6,
            },
        },
    ],
};
exports.pounder = {
    PARENT: ["genericTank"],
    LABEL: "Pounder",
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20.5, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.trapper = {
    PARENT: ["genericTank"],
    LABEL: "Trapper",
    STAT_NAMES: statnames.trap,
    GUNS: [
        {
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.weirdTrapper = {
    // For use with -trapper combos only.
    PARENT: ["genericTank"],
    LABEL: "Trapper",
    DANGER: 6,
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.2,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [14, 8, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 8, 1.5, 14, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.smasher = {
    PARENT: ["genericTank"],
    LABEL: "Smasher",
    DANGER: 6,
    BODY: {
        FOV: 1.05 * base.FOV,
        DENSITY: 2 * base.DENSITY,
    },
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
        },
    ],
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher,
};
exports.healer = {
    PARENT: ["genericTank"],
    LABEL: "Healer",
    TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 9, -0.5, 12.5, 0, 0, 0],
        },
        {
            POSITION: [18, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer]),
                TYPE: "healerBullet",
            },
        },
    ],
    STAT_NAMES: statnames.heal,
};
exports.single = {
    PARENT: ["genericTank"],
    LABEL: "Single",
    GUNS: [
        {
            POSITION: [19, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.single]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
        },
    ],
};

// TWIN UPGRADES
exports.doubleTwin = {
    PARENT: ["genericTank"],
    LABEL: "Double Twin",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.tripleShot = {
    PARENT: ["genericTank"],
    LABEL: "Triple Shot",
    DANGER: 6,
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [19, 8, 1, 0, -2, -17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 2, 17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [22, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                TYPE: "bullet",
            },
        },
    ],
};

// DOUBLE TWIN UPGRADES
exports.tripleTwin = {
    PARENT: ["genericTank"],
    LABEL: "Triple Twin",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 120, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 240, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.autoDouble = makeAuto(exports.doubleTwin, "Auto-Double");
exports.hewnDouble = {
    PARENT: ["genericTank"],
    LABEL: "Hewn Double",
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [19, 8, 1, 0, 5.5, 205, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.twin,
                    g.double,
                    g.hewn,
                    g.morerecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, -5.5, -205, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.twin,
                    g.double,
                    g.hewn,
                    g.morerecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.double,
                    g.hewn,
                    g.morerecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.double,
                    g.hewn,
                    g.morerecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.skewnDouble = {
    PARENT: ["genericTank"],
    LABEL: "Skewn Double",
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [17, 8, 1, 0, 5.5, 230, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.twin,
                    g.double,
                    g.hewn,
                    g.morerecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [17, 8, 1, 0, -5.5, -230, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.twin,
                    g.double,
                    g.hewn,
                    g.morerecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [19, 8, 1, 0, 5.5, 205, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.twin,
                    g.double,
                    g.hewn,
                    g.morerecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, -5.5, -205, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.twin,
                    g.double,
                    g.hewn,
                    g.morerecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.double,
                    g.hewn,
                    g.morerecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.double,
                    g.hewn,
                    g.morerecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.autoHewn = makeAuto(exports.hewnDouble, "Auto-Hewn");

// TRIPLE SHOT UPGRADES
exports.pentaShot = {
    PARENT: ["genericTank"],
    LABEL: "Penta Shot",
    DANGER: 7,
    BODY: {
        SPEED: 0.85 * base.SPEED,
    },
    GUNS: [
        {
            POSITION: [16, 8, 1, 0, -3, -30, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 3, 30, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, -2, -15, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 2, 15, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [22, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.bentMachine = {
    PARENT: ["genericTank"],
    LABEL: 'Bent machine',
    DANGER: 6,
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [{
        POSITION: [19, 10, 1.4, 0, -2, -20, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.mach]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [19, 10, 1.4, 0, 2, 20, 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.mach]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [22, 10, 1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.mach]),
            TYPE: "bullet",
        },
    },
    ],
};
exports.pentaMachine = {
    PARENT: ["genericTank"],
    LABEL: 'Penta machine',
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.85,
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [16, 10, 1.4, 0, -3, -30, 0.667],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.mach]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [16, 10, 1.4, 0, 3, 30, 0.667],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.mach]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [19, 10, 1.4, 0, -2, -15, 0.333],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.mach]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [19, 10, 1.4, 0, 2, 15, 0.333],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.mach]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [22, 10, 1.4, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.mach]),
            TYPE: "bullet",
        },
    },
    ],
};
exports.spreadshot = {
    PARENT: ["genericTank"],
    LABEL: "Spreadshot",
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [13, 4, 1, 0, -0.5, -75, 5 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [13, 4, 1, 0, 0.5, 75, 5 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [14.5, 4, 1, 0, -0.5, -60, 4 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [14.5, 4, 1, 0, 0.5, 60, 4 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [16, 4, 1, 0, -0.5, -45, 3 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [16, 4, 1, 0, 0.5, 45, 3 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [17.5, 4, 1, 0, -0.5, -30, 2 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [17.5, 4, 1, 0, 0.5, 30, 2 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [19, 4, 1, 0, -1, -15, 1 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [19, 4, 1, 0, 1, 15, 1 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [12, 8, 1, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.spreadmain,
                    g.spread,
                ]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.spreadmach = {
    PARENT: ["genericTank"],
    LABEL: "Spreadmach",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.9
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [13, 4, 1, 0, -1.5, -75, 5 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                    g.mach
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [13, 4, 1, 0, 1.5, 75, 5 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                    g.mach
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [14.5, 4, 1, 0, -1.5, -60, 4 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                    g.mach
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [14.5, 4, 1, 0, 1.5, 60, 4 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                    g.mach
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [16, 4, 1, 0, -1.5, -45, 3 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                    g.mach
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [16, 4, 1, 0, 1.5, 45, 3 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                    g.mach
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [17.5, 4, 1, 0, -1.5, -30, 2 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                    g.mach
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [17.5, 4, 1, 0, 1.5, 30, 2 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                    g.mach
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [19, 4, 1, 0, -2, -15, 1 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                    g.mach
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            POSITION: [19, 4, 1, 0, 2, 15, 1 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.arty,
                    g.twin,
                    g.spread,
                    g.mach
                ]),
                TYPE: "bullet",
                LABEL: "Spread",
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [12, 8, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.spreadmain,
                    g.spread,
                    g.mach
                ]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.bentHybrid = makeHybrid(exports.tripleShot, "Bent Hybrid");
exports.bentDouble = {
    PARENT: ["genericTank"],
    LABEL: "Bent Double",
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [19, 8, 1, 0, -2, -17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 2, 17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [22, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, -2, -197.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 2, 197.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [22, 8, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.doubleBentHybrid = makeOversplit(exports.bentDouble, "Double Bent Hybrid");
exports.autoBentDouble = makeAuto(exports.bentDouble, "Auto-Bent Double");
exports.triplet = {
    PARENT: ["genericTank"],
    DANGER: 6,
    LABEL: "Triplet",
    BODY: {
        FOV: 1.05 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [18, 10, 1, 0, 5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 10, 1, 0, -5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.quintuplet = {
    PARENT: ["genericTank"],
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1,
    },
    LABEL: 'Quintuplet',
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [16, 10, 1, 0, -5, 0, 0.667],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [16, 10, 1, 0, 5, 0, 0.667,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [19, 10, 1, 0, -3, 0, 0.333],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [19, 10, 1, 0, 3, 0, 0.333],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [22, 10, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
            TYPE: "bullet",
        },
    },
    ],
};        

// SNIPER UPGRADES
exports.assassin = {
    PARENT: ["genericTank"],
    DANGER: 6,
    LABEL: "Assassin",
    BODY: {
        SPEED: 0.85 * base.SPEED,
        FOV: 1.4 * base.FOV,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [27, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0],
        },
    ],
};
exports.hunter = {
    PARENT: ["genericTank"],
    LABEL: "Hunter",
    DANGER: 6,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25,
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 12, 1, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.rifle = {
    PARENT: ["genericTank"],
    LABEL: "Rifle",
    BODY: {
        FOV: base.FOV * 1.225,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [24, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
                TYPE: "bullet",
            },
        },
    ],
};

exports.knockerBullet = {
    PARENT: ["bullet"],
    BODY: {
        //DENSITY: 1e9, 
        //RESIST: 1e9,
        PUSHABILITY: 2
    },
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: makeDeco(0, 9),
        },
    ],
};

exports.knocker = {
    PARENT: ["genericTank"],
    LABEL: "Knocker",
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [24, 8.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.knocker]),
                TYPE: "knockerBullet",
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [3, 15, 0, 0, 360, 1],
            TYPE: makeDeco(0, 9),
        },
    ],
};

exports.hitman = {
    PARENT: ["genericTank"],
    LABEL: "Hitman",
    DANGER: 6,
    BODY: {
        FOV: 1.2 * base.FOV,
        ACCELERATION: base.ACCEL * 0.8
    },
    GUNS: [
        {
            POSITION: [16, 3.2, 1, 0, 8, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.arty, g.hitman, g.one_third_reload]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 3.2, 1, 0, -8, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.arty, g.hitman, g.one_third_reload]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [25, 8.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.arty, g.one_third_reload]),
                TYPE: "bullet",
            },
        },
    ],
};

exports.railgun = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: 'Railgun',
    BODY: {
        ACCELERATION: base.ACCEL * 0.6,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.25,
    },
    GUNS: [{
        POSITION: [13, 8.5, 1, 8, 0, 0, 0,],
    }, { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [25, 5, 1, 0, 0, 0, 0,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rail]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [5, 8.5, -1.6, 8, 0, 0, 0,],
    },
    ],
};

// ASSASSIN UPGRADES
exports.ranger = {
    PARENT: ["genericTank"],
    LABEL: "Ranger",
    DANGER: 7,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.5 * base.FOV,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [32, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0],
        },
    ],
};
exports.falcon = {
    PARENT: ["genericTank"],
    LABEL: "Falcon",
    DANGER: 7,
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    TOOLTIP: "Right click to fire your main barrel.",
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [27, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.assass,
                ]),
                TYPE: "bullet",
                LABEL: "Assassin",
                ALT_FIRE: true,
            },
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0],
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 180, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
    ],
};
exports.stalker = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: "Stalker",
    BODY: {
        SPEED: 0.85 * base.SPEED,
        FOV: 1.35 * base.FOV,
    },
    INVISIBLE: [0.08, 0.03],
    TOOLTIP: "Stay still to turn invisible.",
    GUNS: [
        {
            POSITION: [27, 8, -1.8, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.autoAssassin = makeAuto(exports.assassin);
exports.assassinator = {
    PARENT: ["genericTank"],
    LABEL: "Assassinator",
    DANGER: 7,
    BODY: {
        FOV: 1.4 * base.FOV,
        ACCELERATION: base.ACCEL * 0.7,
        SPEED: base.SPEED * 0.85
    },
    GUNS: [
        {
            POSITION: [16, 3.2, 1, 0, 8, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.arty, g.hitman, g.one_third_reload, g.assass]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 3.2, 1, 0, -8, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.arty, g.hitman, g.one_third_reload, g.assass]),
                TYPE: "bullet",
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [27, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.arty, g.one_third_reload, g.assass]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0],
        },
    ],
};
exports.veteran = {
    PARENT: ["genericTank"],
    LABEL: "Veteran",
    DANGER: 7,
    BODY: {
        FOV: 1.5 * base.FOV,
        ACCELERATION: base.ACCEL * 0.7,
        SPEED: base.SPEED * 0.85
    },
    GUNS: [
        {
            POSITION: [16, 3.2, 1, 0, 8, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.arty, g.hitman, g.one_third_reload, g.assass]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 3.2, 1, 0, -8, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.arty, g.hitman, g.one_third_reload, g.assass]),
                TYPE: "bullet",
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [32, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.arty, g.one_third_reload, g.assass]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0],
        },
    ],
};
exports.sniperMK2 = {
    PARENT: ["genericTank"],
    LABEL: "Sniper MK2",
    DANGER: 8,
    BODY: {
        FOV: 1.2 * base.FOV,
        ACCELERATION: base.ACCEL * 0.7,
        SPEED: base.SPEED * 0.85
    },
    GUNS: [
        {
            POSITION: [9, 6.5, 0.6, 2, 6.25, 15, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [9, 6.5, 0.6, 2, -6.25, -15, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        }, {
            POSITION: [16, 3.5, 1, 0, 5.75, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 3.5, 1, 0, -5.75, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: "bullet",
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [27, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.arty, g.one_third_reload, g.assass]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0],
        },
    ],
};

// HUNTER UPGRADES
exports.predator = {
    PARENT: ["genericTank"],
    LABEL: "Predator",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25,
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.hunter,
                    g.hunter2,
                    g.hunter2,
                    g.preda,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 12, 1, 0, 0, 0, 0.15],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.hunter,
                    g.hunter2,
                    g.preda,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 16, 1, 0, 0, 0, 0.3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.xHunter = {
    PARENT: ["genericTank"],
    LABEL: "X-Hunter",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25,
    },
    CONTROLLERS: [["zoom", { distance: 550 }]],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.hunter,
                    g.hunter2,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 12, 1, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.hunter,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 11.5, -1.25, 7, 0, 0, 0],
        },
    ],
};
exports.poacher = makeHybrid(exports.hunter, "Poacher");
exports.dual = {
    PARENT: ["genericTank"],
    LABEL: "Dual",
    DANGER: 7,
    BODY: {
        FOV: 1.1 * base.FOV,
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            POSITION: [18, 7, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
                TYPE: "bullet",
                LABEL: "Small",
            },
        },
        {
            POSITION: [18, 7, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
                TYPE: "bullet",
                LABEL: "Small",
            },
        },
        {
            POSITION: [16, 8.5, 1, 0, 5.5, 0, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 8.5, 1, 0, -5.5, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.arquebus = {
    PARENT: ["genericTank"],
    LABEL: 'Arquebus',
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.3,
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [{  /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 6, 1, 0, 5.5, 0, 0.3,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.arquebus, g.arty]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [18, 6, 1, 0, -5.5, 0, 0.3,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.arquebus, g.arty]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [24, 8, 1, 0, 0, 0, 0,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.arquebus, g.arty]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [21, 12, 1, 0, 0, 0, 0.2,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.arquebus, g.arty]),
            TYPE: "bullet",
        },
    },
    ],
};
exports.concatinator = {
    PARENT: ["genericTank"],
    LABEL: 'Concatinator',
    DANGER: 8,
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.2,
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15 - 0.6, 5, 1, -1.5, -5, 0, 0.45,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda, g.arquebus, g.arty, g.twin]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [13.5 - 0.6, 7.5, 1, -1.5, -5, 0, 0.6,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda, g.arquebus, g.arty, g.twin]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [12 - 0.6, 10, 1, -1.5, -5, 0, 0.75,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda, g.arquebus, g.arty, g.twin]),
            TYPE: "bullet",
        },
    }, { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15 - 0.6, 5, 1, -1.5, 5, 0, 0.45,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda, g.arquebus, g.arty, g.twin]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [13.5 - 0.6, 7.5, 1, -1.5, 5, 0, 0.6,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda, g.arquebus, g.arty, g.twin]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [12 - 0.6, 10, 1, -1.5, 5, 0, 0.75,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda, g.arquebus, g.arty, g.twin]),
            TYPE: "bullet",
        },
    }, { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17 + 1.3 * 4, 8.5 - 1.5 * 4, 1, 0, 0, 0, 0,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.hunter2, g.preda, g.arquebus, g.arty, g.twin]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [17 + 1.3 * 3, 8.5 - 1.5 * 3, 1, 0, 0, 0, 0.1,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.hunter2, g.preda, g.arquebus, g.arty, g.twin]),
            TYPE: "bullet",
        },
    }, { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17 + 1.3 * 2, 8.5 - 1.5 * 2, 1, 0, 0, 0, 0.2,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda, g.arquebus, g.arty, g.twin]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [17 + 1.3 * 1, 8.5 - 1.5 * 1, 1, 0, 0, 0, 0.3,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda, g.arquebus, g.arty]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [17, 8.5, 1, 0, 0, 0, 0.4,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda, g.arquebus, g.arty]),
            TYPE: "bullet",
        },
    }, {/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [8, 3.4, 1.5, 8, 3.5, 0, 0,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sniper, g.gunner, g.arty]),
            TYPE: "bullet",
            LABEL: 'Gatling Gun'
        },
    }, {
        POSITION: [8, 3.4, 1.5, 8, -3.5, 0, 0.5,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sniper, g.gunner, g.arty]),
            TYPE: "bullet",
            LABEL: 'Gatling Gun'
        },
    },
    ],
};
// RIFLE UPGRADES
exports.musket = {
    PARENT: ["genericTank"],
    LABEL: "Musket",
    BODY: {
        FOV: base.FOV * 1.225,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [16, 19, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [18, 7, 1, 0, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 7, 1, 0, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.twin]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.crossbow = {
    PARENT: ["genericTank"],
    LABEL: "Crossbow",
    BODY: {
        FOV: base.FOV * 1.225,
    },
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [12.5, 2.5, 1, 0, 3.5, 35, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.slow,
                    g.crossbow,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12.5, 2.5, 1, 0, -3.5, -35, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.slow,
                    g.crossbow,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 2.5, 1, 0, 3.5, 35/2, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.slow,
                    g.crossbow,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 2.5, 1, 0, -3.5, -35/2, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.slow,
                    g.crossbow,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 3.5, 1, 0, 4, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.slow,
                    g.crossbow,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 3.5, 1, 0, -4, 0, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.slow,
                    g.crossbow,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [24, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.rifle,
                    g.slow,
                    g.halfreload,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.armsman = makeHybrid(exports.rifle, "Armsman");

// MACHINE GUN UPGRADES
exports.minigun = {
    PARENT: ["genericTank"],
    LABEL: "Minigun",
    DANGER: 6,
    BODY: {
        FOV: 1.2,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [21, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 1 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 2 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.gunner = {
    PARENT: ["genericTank"],
    LABEL: "Gunner",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.weirdGunner = {
    // For use with -gunner combos only.
    PARENT: ["genericTank"],
    LABEL: "Gunner",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [19, 2, 1, 0, -2.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    //g.slow,
                    g.flank,
                    g.lotsmorrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    //g.slow,
                    g.flank,
                    g.lotsmorrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 11, 1, 0, 0, 0, 0],
        },
    ],
};
exports.sprayer = {
    PARENT: ["genericTank"],
    LABEL: "Sprayer",
    GUNS: [
        {
            POSITION: [23, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.lowpower,
                    g.mach,
                    g.morerecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
                TYPE: "bullet",
            },
        },
    ],
};

// MINIGUN UPGRADES
exports.streamliner = {
    PARENT: ["genericTank"],
    LABEL: "Streamliner",
    DANGER: 7,
    BODY: {
        FOV: 1.3,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [25, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [23, 8, 1, 0, 0, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 8, 1, 0, 0, 0, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.rationalizer = {
    PARENT: ["genericTank"],
    LABEL: "Rationalizer",
    DANGER: 7,
    BODY: {
        FOV: 1.4,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [27, 8, 1, 0, 0, 0, 0 / 7],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: "bullet",
            },
        }, {
                POSITION: [25, 8, 1, 0, 0, 0, 1 / 7],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                    TYPE: "bullet",
                },
            },
            {
                POSITION: [23, 8, 1, 0, 0, 0, 2 / 7],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                    TYPE: "bullet",
                },
            },
            {
                POSITION: [21, 8, 1, 0, 0, 0, 3 / 7],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                    TYPE: "bullet",
                },
            },
            {
                POSITION: [19, 8, 1, 0, 0, 0, 4 / 7],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                    TYPE: "bullet",
                },
            },
            {
                POSITION: [17, 8, 1, 0, 0, 0, 5 / 7],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                    TYPE: "bullet",
                },
            }, {
                POSITION: [15, 8, 1, 0, 0, 0, 6 / 7],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                    TYPE: "bullet",
                },
            },
    ],
};
exports.cropDuster = makeHybrid(exports.minigun, "Crop Duster");
exports.barricade = {
    PARENT: ["genericTank"],
    DANGER: 6,
    LABEL: "Barricade",
    STAT_NAMES: statnames.trap,
    BODY: {
        FOV: 1.15,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [24, 8, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 8, 1.3, 22, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.barricade]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [4, 8, 1.3, 18, 0, 0, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.barricade]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [4, 8, 1.3, 14, 0, 0, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.barricade]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.vulture = {
    PARENT: ["genericTank"],
    LABEL: "Vulture",
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [20, 6, -2, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.mini]),
                TYPE: "bullet",
                ALT_FIRE: true,
                LABEL: "Minigun",
            },
        },
        {
            POSITION: [18, 6.5, -2, 0, 0, 0, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.mini]),
                TYPE: "bullet",
                ALT_FIRE: true,
                LABEL: "Minigun",
            },
        },
        {
            POSITION: [16, 7, -2, 0, 0, 0, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.mini]),
                TYPE: "bullet",
                ALT_FIRE: true,
                LABEL: "Minigun",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 180, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
};

// GUNNER UPGRADES
exports.autoGunner = makeAuto(exports.gunner);
exports.nailgun = {
    PARENT: ["genericTank"],
    LABEL: "Nailgun",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [19, 2, 1, 0, -2.5, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.nail,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.nail,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 2, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.nail,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5.5, 7, -1.8, 6.5, 0, 0, 0],
        },
    ],
};
exports.submachine = { //6 barrels
    PARENT: ["genericTank"],
    LABEL: 'Submachine',
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.2,
        SPEED: base.SPEED * 0.85,
        ACCELERATION: base.ACCEL * 0.8,
    },
    GUNS: [{
        POSITION: [32, 2, 1, 0, -2.5, 0, 4 / 6 + 4,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//5
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 2.5, 0, 2 / 6 + 2,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//3
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 0, 0, 3 / 6 + 3,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//4
            TYPE: "bullet",
        },
    },
    {
        POSITION: [32, 2, 1, 0, -2.5, 0, 5 / 6 + 5,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//6
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 2.5, 0, 1 / 6 + 1,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//2
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 0, 0, 0,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//1
            TYPE: "bullet",
        },
    }, {
        POSITION: [6, 10.5, 1, 6.5, 0, 0, 0,],
    }, {
        POSITION: [4.5, 10.5, 1, 21.5, 0, 0, 0,],
    },
    ],
};
exports.vulcan = { //8 barrels
    PARENT: ["genericTank"],
    LABEL: 'Vulcan',
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.2,
        SPEED: base.SPEED * 0.85,
        ACCELERATION: base.ACCEL * 0.8,
    },
    GUNS: [{
        POSITION: [32, 2, 1, 0, -2.5, 0, 5 / 8 + 5,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//6
            TYPE: "bullet",
        },
    }, {
            POSITION: [32, 2, 1, 0, 2.5, 0, 3 / 8 + 3,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//4
                TYPE: "bullet",
            },
        }, {
            POSITION: [32, 2, 1, 0, 0, 0, 4 / 8 + 4,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//5
                TYPE: "bullet",
            },
        }, 
        {
        POSITION: [32, 2, 1, 0, -4, 0, 6 / 8 + 6,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//7
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 4, 0, 2 / 8 + 2,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//3
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, -2.5, 0, 7 / 8 + 7,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//8
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 2.5, 0, 1 / 8 + 1,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//2
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 0, 0, 0,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//1
            TYPE: "bullet",
        },
    }, {
        POSITION: [6, 13.2, 1, 6.5, 0, 0, 0,],
    }, {
        POSITION: [4.5, 13.2, 1, 21.5, 0, 0, 0,],
    },
    ],
};
exports.M61 = { //12 barrels
    PARENT: ["genericTank"],
    LABEL: 'M-61',
    DANGER: 8,
    BODY: {
        FOV: base.FOV * 1.2,
        SPEED: base.SPEED * 0.8,
        ACCELERATION: base.ACCEL * 0.75,
    },
    GUNS: [{
        POSITION: [32, 2, 1, 0, -2.5, 0, 7 / 12 + 7,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//8
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 0, 0, 6 / 12 + 6,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//7
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 2.5, 0, 5 / 12 + 5,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//9
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, -4.5, 0, 8 / 12 + 8,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//6
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 4.5, 0, 4 / 12 + 4,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//5
            TYPE: "bullet",
        },
    }, { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [32, 2, 1, 0, -6, 0, 9 / 12 + 9,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//10
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 6, 0, 3 / 12 + 3,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//4
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, -4.5, 0, 10 / 12 + 10,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//11
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 4.5, 0, 2 / 12 + 2,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//3
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, -2.5, 0, 11 / 12 + 11,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//12
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 2.5, 0, 1 / 12 + 1,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//2
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 0, 0, 0,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//1
            TYPE: "bullet",
        },
    }, {
        POSITION: [6, 16, 1, 6.5, 0, 0, 0,],
    }, {
        POSITION: [4.5, 16, 1, 21.5, 0, 0, 0,],
    },
    ],
};
exports.machineGunner = {
    PARENT: ["genericTank"],
    LABEL: "Machine Gunner",
    DANGER: 6,
    BODY: {
        SPEED: 0.9 * base.SPEED,
    },
    GUNS: [
        {
            POSITION: [14, 3, 4, -3, 5, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.machgun,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, -3, -5, 0, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.machgun,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, 0, 2.5, 0, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.machgun,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, 0, -2.5, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.machgun,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 3, 4, 3, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.machgun,
                ]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.heavyGunner = {
    PARENT: ["genericTank"],
    LABEL: "Heavy Gunner",
    DANGER: 6,
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        //SPEED: base.SPEED * 0.9,
    },
    GUNS: [
        {
            POSITION: [12, 4.75, 1, 0, 7.25, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.fast, g.one_third_reload]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 4.75, 1, 0, -7.25, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.fast, g.one_third_reload]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 4.75, 1, 0, 3.75, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.fast, g.one_third_reload]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 4.75, 1, 0, -3.75, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.fast, g.one_third_reload]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.slapper = {
    PARENT: ["genericTank"],
    LABEL: "Slapper",
    DANGER: 7,
    BODY: {
        ACCELERATION: base.ACCEL * 0.7,
        SPEED: base.SPEED * 0.9,
    },
    GUNS: [
        {
            POSITION: [12, 6.5, 1, 0, 7, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.flank, g.bitmorepower, g.bitmorepower, g.one_third_reload, g.one_third_reload]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 6.5, 1, 0, -7, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.flank, g.bitmorepower, g.bitmorepower, g.one_third_reload, g.one_third_reload]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 6.5, 1, 0, 4.25, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.flank, g.bitmorepower, g.bitmorepower, g.one_third_reload, g.one_third_reload]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 6.5, 1, 0, -4.25, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.flank, g.bitmorepower, g.bitmorepower, g.one_third_reload, g.one_third_reload]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.overgunner = makeOver(exports.weirdGunner);
exports.overnailer = makeOver(exports.nailgun, "Overnailer");

// SPRAYER UPGRADES
exports.redistributor = {
    PARENT: ["genericTank"],
    LABEL: "Redistributor",
    GUNS: [
        {
            POSITION: [26, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.lowpower,
                    g.mach,
                    g.morerecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [23, 10, 1, 0, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.lowpower,
                    g.mach,
                    g.morerecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.phoenix = {
    PARENT: ["genericTank"],
    LABEL: "Phoenix",
    DANGER: 7,
    TOOLTIP: "Right click to fire your main barrel.",
    GUNS: [
        {
            POSITION: [23, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.lowpower,
                    g.mach,
                    g.morerecoil,
                    g.halfrange
                ]),
                TYPE: "bullet",
                LABEL: "Sprayer",
                ALT_FIRE: true,
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfrange]),
                TYPE: "bullet",
                LABEL: "Sprayer",
                ALT_FIRE: true,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 180, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
};
exports.atomizer = {
    PARENT: ["genericTank"],
    LABEL: "Atomizer",
    GUNS: [
        {
            POSITION: [5, 7.5, 1.3, 18.5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.lowpower,
                    g.mach,
                    g.morerecoil,
                    g.atomizer,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.focal = {
    PARENT: ["genericTank"],
    LABEL: "Focal",
    GUNS: [
        {
            POSITION: [25, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.lowpower,
                    g.mach,
                    g.morerecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 10, 1.3, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain]),
                TYPE: "bullet",
            },
        },
    ],
};

// FLANK GUARD UPGRADES
exports.hexaTank = {
    PARENT: ["genericTank"],
    LABEL: "Hexa Tank",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 300, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.triAngle = {
    PARENT: ["genericTank"],
    LABEL: "Tri-Angle",
    BODY: {
        HEALTH: 0.8 * base.HEALTH,
        SHIELD: 0.8 * base.SHIELD,
        DENSITY: 0.6 * base.DENSITY,
    },
    DANGER: 6,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.trifront,
                    g.tonsmorrecoil,
                ]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
};
exports.auto3 = {
    PARENT: ["genericTank"],
    LABEL: "Auto-3",
    DANGER: 6,
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [11, 8, 0, 0, 190, 0],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [11, 8, 0, 120, 190, 0],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [11, 8, 0, 240, 190, 0],
            TYPE: "autoTankGun",
        },
    ],
};

// HEXA TANK UPGRADES
exports.octoTank = {
    PARENT: ["genericTank"],
    LABEL: "Octo Tank",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 45, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 135, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 225, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 315, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.cyclone = {
    PARENT: ["genericTank"],
    LABEL: "Cyclone",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [15, 3.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 60, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 90, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 150, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 180, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 210, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 270, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 300, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 3.5, 1, 0, 0, 330, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                ]),
                TYPE: "bullet",
            },
        },
    ],
};

// TRI-ANGLE UPGRADES
exports.fighter = {
    PARENT: ["genericTank"],
    LABEL: "Fighter",
    BODY: {
        DENSITY: 0.6 * base.DENSITY,
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [16, 8, 1, 0, -1, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                TYPE: "bullet",
                LABEL: "Side",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 1, -90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                TYPE: "bullet",
                LABEL: "Side",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
};
exports.booster = {
    PARENT: ["genericTank"],
    LABEL: "Booster",
    BODY: {
        HEALTH: base.HEALTH * 0.6,
        SHIELD: base.SHIELD * 0.6,
        DENSITY: base.DENSITY * 0.3,
    },
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.trifront,
                    g.tonsmorrecoil,
                ]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [13, 8, 1, 0, -1, 140, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [13, 8, 1, 0, 1, 220, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
};
exports.autoTriAngle = makeAuto(exports.triAngle);
exports.autoTriAngle.BODY = { SPEED: base.SPEED };
exports.vulcAngle = {
    PARENT: ["genericTank"],
    LABEL: "Vulc-Angle",
    BODY: {
        HEALTH: 0.8 * base.HEALTH,
        SHIELD: 0.8 * base.SHIELD,
        DENSITY: 0.6 * base.DENSITY,
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.trifront,
                    g.tonsmorrecoil,
                ]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [11, 0, 0, 180, 360, 1],
            TYPE: ["vulcTurret", {INDEPENDENT: true}],
        },
    ],
};

exports.surfer = {
    PARENT: ["genericTank"],
    LABEL: "Surfer",
    BODY: {
        DENSITY: 0.6 * base.DENSITY,
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -1, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 1, -90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
};

// AUTO-3 UPGRADES
exports.auto5 = {
    PARENT: ["genericTank"],
    LABEL: "Auto-5",
    DANGER: 7,
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [11, 8, 0, 0, 190, 0],
            TYPE: "auto5gun",
        },
        {
            POSITION: [11, 8, 0, 72, 190, 0],
            TYPE: "auto5gun",
        },
        {
            POSITION: [11, 8, 0, 144, 190, 0],
            TYPE: "auto5gun",
        },
        {
            POSITION: [11, 8, 0, 216, 190, 0],
            TYPE: "auto5gun",
        },
        {
            POSITION: [11, 8, 0, 288, 190, 0],
            TYPE: "auto5gun",
        },
    ],
};
exports.mega3 = {
    PARENT: ["genericTank"],
    LABEL: "Mega-3",
    BODY: {
        SPEED: 0.95 * base.SPEED,
    },
    DANGER: 7,
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [14, 8, 0, 0, 190, 0],
            TYPE: "heavy3gun",
        },
        {
            POSITION: [14, 8, 0, 120, 190, 0],
            TYPE: "heavy3gun",
        },
        {
            POSITION: [14, 8, 0, 240, 190, 0],
            TYPE: "heavy3gun",
        },
    ],
};
exports.auto4 = {
    PARENT: ["genericTank"],
    LABEL: "Auto-4",
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [13, 6, 0, 45, 160, 0],
            TYPE: "auto4gun",
        },
        {
            POSITION: [13, 6, 0, 135, 160, 0],
            TYPE: "auto4gun",
        },
        {
            POSITION: [13, 6, 0, 225, 160, 0],
            TYPE: "auto4gun",
        },
        {
            POSITION: [13, 6, 0, 315, 160, 0],
            TYPE: "auto4gun",
        },
    ],
};
exports.banshee = {
    PARENT: ["genericTank"],
    LABEL: "Banshee",
    DANGER: 7,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [10, 8, 0, 0, 80, 0],
            TYPE: "bansheegun",
        },
        {
            POSITION: [10, 8, 0, 120, 80, 0],
            TYPE: "bansheegun",
        },
        {
            POSITION: [10, 8, 0, 240, 80, 0],
            TYPE: "bansheegun",
        },
    ],
    GUNS: [
        {
            POSITION: [6, 11, 1.2, 8, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 2,
            },
        },
        {
            POSITION: [6, 11, 1.2, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 2,
            },
        },
        {
            POSITION: [6, 11, 1.2, 8, 0, 300, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 2,
            },
        },
    ],
};
exports.spirit = {
    PARENT: ["genericTank"],
    LABEL: "Spirit",
    DANGER: 7,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        ACCELERATION: 0.9 * base.ACCEL,
        FOV: 1.1 * base.FOV,
    },
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [13, 8, 0, 0, 80, 0],
            TYPE: "spiritgun",
        },
        {
            POSITION: [13, 8, 0, 120, 80, 0],
            TYPE: "spiritgun",
        },
        {
            POSITION: [13, 8, 0, 240, 80, 0],
            TYPE: "spiritgun",
        },
    ],
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [13, 14, 1.3, 2, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.mehdrone]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 1,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [13, 14, 1.3, 2, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.mehdrone]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 1,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [13, 14, 1.3, 2, 0, 300, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.mehdrone]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 1,
            },
        },
    ],
};

exports.sniper3 = {
    PARENT:["genericTank"],
    DANGER: 7,
    LABEL: 'Sniper-3',
    BODY: {
        ACCELERATION: base.ACCEL * 0.6,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.25,
    },
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [13, 8, 0, 0, 170, 0],
        TYPE: "sniper3gun"
    }, {
        POSITION: [13, 8, 0, 120, 170, 0],
        TYPE: "sniper3gun"
    }, {
        POSITION: [13, 8, 0, 240, 170, 0],
        TYPE: "sniper3gun"
    },
    ],
};

exports.sniper5 = {
    PARENT: ["genericTank"],
    DANGER: 8,
    LABEL: 'Sniper-5',
    BODY: {
        ACCELERATION: base.ACCEL * 0.6,
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.25,
    },
    FACING_TYPE: 'autospin',
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [13, 8, 0, 0, 170, 0],
        TYPE: "sniper5gun"
    }, {
        POSITION: [13, 8, 0, 72, 170, 0],
        TYPE: "sniper5gun"
    }, {
        POSITION: [13, 8, 0, 144, 170, 0],
        TYPE: "sniper5gun"
    }, {
        POSITION: [13, 8, 0, 216, 170, 0],
        TYPE: "sniper5gun"
    }, {
        POSITION: [13, 8, 0, 288, 170, 0],
        TYPE: "sniper5gun"
    },
    ],
};

exports.phantom = {
    PARENT: ["genericTank"],
    LABEL: "Phantom",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        ACCELERATION: base.ACCEL * 0.5,
        SPEED: base.SPEED * 0.85,
        FOV: base.FOV * 1.225,
    },
    FACING_TYPE: 'autospin',
    GUNS: [
        {
            /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [4.5, 10.5 * 0.9, 1, 10.5, 0, 0, 0]
        },
        {
            POSITION: [1.2, 12.5 * 0.9, 1, 14.8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: "minion",
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                MAX_CHILDREN: 2,
                SYNCS_SKILLS: true
            }
        },
        {
            POSITION: [3.5, 12.5, 1, 8, 0, 0, 0]
        },
        {
            /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [4.5, 10.5, 1, 10.5, 0, 120, 0]
        },
        {
            POSITION: [1.2, 12.5, 1, 14.8, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: "minion",
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                MAX_CHILDREN: 2,
                SYNCS_SKILLS: true
            }
        },
        {
            POSITION: [3.5, 12.5, 1, 8, 0, 120, 0]
        },
        {
            /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [4.5, 10.5, 1, 10.5, 0, 240, 0]
        },
        {
            POSITION: [1.2, 12.5, 1, 14.8, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: "minion",
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                MAX_CHILDREN: 2,
                SYNCS_SKILLS: true
            }
        },
        {
            POSITION: [3.5, 12.5, 1, 8, 0, 240, 0]
        },
    ],
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [12, 8, 0, 60, 190, 0],
        TYPE: "phantomgun",
    }, {
        POSITION: [12, 8, 0, 180, 190, 0],
        TYPE: "phantomgun",
    }, {
        POSITION: [12, 8, 0, 300, 190, 0],
        TYPE: "phantomgun",
    },],
};

// DIRECTOR UPGRADES
exports.overseer = {
    PARENT: ["genericTank"],
    LABEL: "Overseer",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.9 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    MAX_CHILDREN: 8,
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
    ],
};
exports.cruiser = {
    PARENT: ["genericTank"],
    LABEL: "Cruiser",
    DANGER: 6,
    FACING_TYPE: "locksFacing",
    STAT_NAMES: statnames.swarm,
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.underseer = {
    PARENT: ["genericTank"],
    LABEL: "Underseer",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.9 * base.SPEED,
    },
    SHAPE: 4,
    MAX_CHILDREN: 14,
    GUNS: [
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: "sunchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: "sunchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
    ],
};
exports.spawner = {
    PARENT: ["genericTank"],
    LABEL: "Spawner",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    GUNS: [
        {
            /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [4.5, 10, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [1, 12, 1, 15, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 4,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: "minion",
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 12, 1, 0, 0, 0, 0],
        },
    ],
};
exports.honcho = {
    PARENT: ["genericTank"],
    LABEL: "Honcho",
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.1,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [11, 14, 1.3, 2, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.mehdrone]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 3,
            },
        },
    ],
};
exports.manager = {
    PARENT: ["genericTank"],
    LABEL: "Manager",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.85 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    INVISIBLE: [0.08, 0.03],
    TOOLTIP: "Stay still to turn invisible.",
    MAX_CHILDREN: 8,
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.doublereload]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
    ],
};
exports.bigCheese = {
    PARENT: ["genericTank"],
    LABEL: "Big Cheese",
    STAT_NAMES: statnames.drone,
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [16, 16, 1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.bigdrone]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 1,
            },
        },
    ],
};

// OVERSEER UPGRADES
exports.overlord = {
    PARENT: ["genericTank"],
    LABEL: "Overlord",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    MAX_CHILDREN: 8,
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
    ],
};
exports.autoOverseer = makeAuto(exports.overseer);
exports.turretedDrone = makeAuto(generics.drone);
exports.overdriveDeco = makeDeco(4);
exports.overdrive = {
    PARENT: ["genericTank"],
    LABEL: "Overdrive",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.9 * base.SPEED,
        FOV: 1.1 * base.FOV,
    },
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "overdriveDeco",
        },
    ],
    GUNS: [
        {
            POSITION: [6, 12, 1.2, 8, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "turretedDrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 4,
            },
        },
        {
            POSITION: [6, 12, 1.2, 8, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "turretedDrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                MAX_CHILDREN: 4,
            },
        },
    ],
};
exports.commander = {
    PARENT: ["genericTank"],
    LABEL: "Commander",
    STAT_NAMES: statnames.drone,
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.15,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 11, 1.3, 6, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.commander]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 2,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 11, 1.3, 6, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.commander]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 2,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 11, 1.3, 6, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.commander]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 2,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [7, 7.5, 0.6, 7, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 300, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.foreman = {
    PARENT: ["genericTank"],
    LABEL: "Foreman",
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: base.FOV * 1.1,
        SPEED: base.SPEED * 0.85,
        ACCELERATION: base.ACCEL * 0.8
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [13, 14, 1.3, 2, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.mehdrone]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 3,
            },
        }, {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [13, 14, 1.3, 2, 0, -90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.mehdrone]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 3,
            },
        },
    ],
}

// CRUISER UPGRADES
exports.carrier = {
    PARENT: ["genericTank"],
    LABEL: "Carrier",
    DANGER: 7,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: "locksFacing",
    BODY: {
        FOV: base.FOV * 1.2,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [7, 8, 0.6, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 8, 0.6, 7, 2, 30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 8, 0.6, 7, -2, -30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.battleship = {
    PARENT: ["genericTank"],
    LABEL: "Battleship",
    DANGER: 7,
    STAT_NAMES: statnames.swarm,
    FACING_TYPE: "locksFacing",
    BODY: {
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Guided",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 90, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: ["autoswarm"],
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Autonomous",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: ["autoswarm"],
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Autonomous",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 270, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Guided",
            },
        },
    ],
};
exports.fortress = {
    PARENT: ["genericTank"],
    LABEL: "Fortress",
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.2 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: [
                    "swarm",
                    {
                        CONTROLLERS: ["canRepel"],
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 180, 1 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: [
                    "swarm",
                    {
                        CONTROLLERS: ["canRepel"],
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 300, 2 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: [
                    "swarm",
                    {
                        CONTROLLERS: ["canRepel"],
                    },
                ],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [14, 9, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 9, 1.5, 14, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [14, 9, 1, 0, 0, 120, 0],
        },
        {
            POSITION: [4, 9, 1.5, 14, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [14, 9, 1, 0, 0, 240, 0],
        },
        {
            POSITION: [4, 9, 1.5, 14, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.autoCruiser = makeAuto(exports.cruiser);

// UNDERSEER UPGRADES
exports.necromancer = {
    PARENT: ["genericTank"],
    LABEL: "Necromancer",
    DANGER: 7,
    STAT_NAMES: statnames.necro,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    SHAPE: 4,
    MAX_CHILDREN: 14,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5.25, 12, 1.2, 8, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: "sunchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 270, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: "sunchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: "sunchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 4,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [5.25, 12, 1.2, 8, 0, 180, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: "sunchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 4,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
    ],
};
exports.maleficitor = {
    PARENT: ["genericTank"],
    LABEL: "Maleficitor",
    DANGER: 7,
    TOOLTIP: "Press R and wait to turn your drones invisible.",
    STAT_NAMES: statnames.necro,
    BODY: {
        SPEED: base.SPEED * 0.85,
    },
    SHAPE: 4,
    MAX_CHILDREN: 20,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5.25, 12, 1.2, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.maleficitor]),
                TYPE: [
                    "sunchip",
                    {
                        INVISIBLE: [0.06, 0.03],
                    },
                ],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
    ],
};
exports.infestor = {
    PARENT: ["genericTank"],
    LABEL: "Infestor",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    MAX_CHILDREN: 20,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [7.25, 6, 1.2, 6, -5, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: "eggchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [7.25, 6, 1.2, 6, 5, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: "eggchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [7.25, 6, 1.2, 6, -5, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: "eggchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
        {
            POSITION: [7.25, 6, 1.2, 6, 5, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                TYPE: "eggchip",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
            },
        },
    ],
};

// SPAWNER UPGRADES
exports.factory = {
    PARENT: ["genericTank"],
    LABEL: "Factory",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    MAX_CHILDREN: 6,
    GUNS: [
        {
            /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5, 11, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [2, 14, 1, 15.5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory]),
                TYPE: "minion",
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [12, 14, 1, 0, 0, 0, 0],
        },
    ],
};
exports.industry = {
    PARENT: ["genericTank"],
    LABEL: 'Industry',
    DANGER: 8,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.75,
        FOV: 1.1,
    },
    MAX_CHILDREN: 8,
    GUNS: [{ /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12.5, 1, 10.5, 0, 0, 0,],
    }, {
        POSITION: [2.5, 16, 1, 16.25, 0, 0, 0,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.indus]),
            TYPE: "minion",
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
        },
    }, {
        POSITION: [6.75, 16, 1, 6, 0, 0, 0,],
    }
    ],
};
exports.autoSpawner = makeAuto(exports.spawner);
exports.productionist = {
    PARENT: ["genericTank"],
    LABEL: "Productionist",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: 1.1,
        ACCELERATION: base.ACCEL * 0.85,
        SPEED: base.SPEED * 0.9
    },
    FACING_TYPE: 'locksFacing',
    GUNS: [
        {
            /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [4.5, 10.5 * 0.6, 1, 10.5, 5.25, 0, 0]
        },
        {
            POSITION: [1.2, 12.5 * 0.6, 1, 14.8, 5.25, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.productionist]),
                TYPE: "tinyMinion",
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true,
                SYNCS_SKILLS: true
            }
        },
        {
            POSITION: [11.5, 12.5 * 0.6, -1.1, 0, 5.25, 0, 0]
        }, {
            /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [4.5, 10.5 * 0.6, 1, 10.5, -5.25, 0, 0.5]
        },
        {
            POSITION: [1.2, 12.5 * 0.6, 1, 14.8, -5.25, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.productionist]),
                TYPE: "tinyMinion",
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true,
                SYNCS_SKILLS: true
            }
        },
        {
            POSITION: [11.5, 12.5 * 0.6, -1.1, 0, -5.25, 0, 0.5]
        },
    ]
};
exports.manufacture = {
    PARENT: ["genericTank"],
    LABEL: "Manufacture",
    DANGER: 7,
    STAT_NAMES: statnames.drone,
    BODY: {
        FOV: 1.1,
        ACCELERATION: base.ACCEL * 0.85,
        SPEED: base.SPEED * 0.85
    },
    FACING_TYPE: 'locksFacing',
    GUNS: [
        {
            /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5.5, 12 * 0.6, 1, 10.5, 5, 0, 0]
        },
        {
            POSITION: [1.6, 14 * 0.6, 1, 15.8, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.productionist, g.morereload, bitlessspeed, bitlessspeed]),
                TYPE: "tinyMinion",
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true,
                SYNCS_SKILLS: true
            }
        },
        {
            POSITION: [12.5, 14 * 0.6, -1.1, 0, 5, 0, 0]
        }, {
            /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5.5, 12 * 0.6, 1, 10.5, -5, 0, 0.5]
        },
        {
            POSITION: [1.6, 14 * 0.6, 1, 15.8, -5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.productionist, g.morereload, bitlessspeed, bitlessspeed]),
                TYPE: "tinyMinion",
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true,
                SYNCS_SKILLS: true
            }
        },
        {
            POSITION: [12.5, 14 * 0.6, -1.1, 0, -5, 0, 0.5]
        },
    ]
};
exports.classifier = {
    PARENT: ["genericTank"],
    LABEL: "Classifier",
    DANGER: 8,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: 1.1,
    },
    GUNS: [
        {
            /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5.5, 12 * 0.6, 1, 7.5, 5, 0, 0]
        },
        {
            POSITION: [1.6, 14 * 0.6, 1, 12.8, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.productionist, g.morereload, bitlessspeed, bitlessspeed]),
                TYPE: "tinyMinion",
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true,
                SYNCS_SKILLS: true
            }
        },
        {
            POSITION: [9.5, 14 * 0.6, -1.1, 0, 5, 0, 0]
        }, {
            /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5.5, 12 * 0.6, 1, 7.5, -5, 0, 0.5]
        },
        {
            POSITION: [1.6, 14 * 0.6, 1, 12.8, -5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.productionist, g.morereload, bitlessspeed, bitlessspeed]),
                TYPE: "tinyMinion",
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true,
                SYNCS_SKILLS: true
            }
        },
        {
            POSITION: [9.5, 14 * 0.6, -1.1, 0, -5, 0, 0.5]
        },
        {
            /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [4.5, 10, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [1, 12, 1, 15, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 4,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: "minion",
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 12, 1, 0, 0, 0, 0],
        },
    ],
};

// POUNDER UPGRADES
exports.destroyer = {
    PARENT: ["genericTank"],
    LABEL: "Destroyer",
    DANGER: 6,
    GUNS: [
        {
            POSITION: [21, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.artillery = {
    PARENT: ["genericTank"],
    DANGER: 6,
    LABEL: "Artillery",
    GUNS: [
        {
            POSITION: [17, 3, 1, 0, -6, -7, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, 6, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [19, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
                TYPE: "bullet",
                LABEL: "Heavy",
            },
        },
    ],
};
exports.launcher = {
    PARENT: ["genericTank"],
    LABEL: "Launcher",
    BODY: {
        FOV: base.FOV * 1.1,
    },
    DANGER: 6,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [10, 9, 1, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 13, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty]),
                TYPE: "minimissile",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
};
exports.multishot = {
    PARENT: ["genericTank"],
    DANGER: 6,
    LABEL: 'Multishot',
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
        POSITION: [4, 3, 1, 11, -3, 0, 0,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [4, 3, 1, 11, 3, 0, 0,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [4, 4, 1, 13, 0, 0, 0,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [1, 3, 1, 13, -1, 0, 0,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [1, 3, 1, 13, 1, 0, 0,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [1, 2, 1, 13, 2, 0, 0,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [15, 11.5, 1, 6, 0, 0, 0,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.fake]),
            TYPE: "casing",
        },
    }, {
        POSITION: [8, 11.5, -1.3, 4, 0, 0, 0,],
    }
    ],
};
exports.shellshocker = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: 'Shellshocker',
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            POSITION: [4, 3, 1, 11, -3, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.multi, g.shotgun, g.morereload, g.slow, { shudder: 0.4 }]),
                TYPE: "trap",
            },
        }, {
            POSITION: [4, 3, 1, 11, 3, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.multi, g.shotgun, g.morereload, g.slow, { shudder: 0.4 }]),
                TYPE: "trap",
            },
        }, {
            POSITION: [4, 4, 1, 13, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.multi, g.shotgun, g.morereload, g.slow, { shudder: 0.4 }]),
                TYPE: "trap",
            },
        }, {
            POSITION: [1, 3, 1, 13, -1, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.multi, g.shotgun, g.morereload, g.slow, { shudder: 0.4 }]),
                TYPE: "trap",
            },
        }, {
            POSITION: [1, 3, 1, 13, 1, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.multi, g.shotgun, g.morereload, g.slow, { shudder: 0.4 }]),
                TYPE: "trap",
            },
        }, {
            POSITION: [1, 2, 1, 13, 2, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.multi, g.shotgun, g.morereload, g.slow, { shudder: 0.4 }]),
                TYPE: "trap",
            },
        },
        {
            POSITION: [20, 11, 1, 0, 0, 0, 0,],
        },
        {
            POSITION: [3, 12, 1.3, 20, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.multi, g.shotgun, g.fake, g.morereload]),
                TYPE: "casing",
            },
        }, {
            POSITION: [8, 12, -1.3, 4, 0, 0, 0,],
        }
    ],
};
exports.shotgun = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: "Shotgun",
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            POSITION: [4, 3, 1, 11, -3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [4, 3, 1, 11, 3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [4, 4, 1, 13, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 4, 1, 12, -1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 4, 1, 11, 1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 3, 1, 13, -1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [1, 3, 1, 13, 1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [1, 2, 1, 13, 2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 2, 1, 13, -2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [15, 14, 1, 6, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [8, 14, -1.3, 4, 0, 0, 0],
        },
    ],
};

exports.backwave = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: 'Backwave',
    BODY: {
        FOV: base.FOV * 1.1,
        ACCELERATION: base.ACCEL * 0.75
    },
    GUNS: [
        //shellshocker
        {
            POSITION: [4, 3, 1, 11, -3, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.multi, g.shotgun, g.morereload, g.slow, { shudder: 0.4 }]),
                TYPE: "trap",
            },
        }, {
            POSITION: [4, 3, 1, 11, 3, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.multi, g.shotgun, g.morereload, g.slow, { shudder: 0.4 }]),
                TYPE: "trap",
            },
        }, {
            POSITION: [4, 4, 1, 13, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.multi, g.shotgun, g.morereload, g.slow, { shudder: 0.4 }]),
                TYPE: "trap",
            },
        }, {
            POSITION: [1, 3, 1, 13, -1, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.multi, g.shotgun, g.morereload, g.slow, { shudder: 0.4 }]),
                TYPE: "trap",
            },
        }, {
            POSITION: [1, 3, 1, 13, 1, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.multi, g.shotgun, g.morereload, g.slow, { shudder: 0.4 }]),
                TYPE: "trap",
            },
        }, {
            POSITION: [1, 2, 1, 13, 2, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.multi, g.shotgun, g.morereload, g.slow, { shudder: 0.4 }]),
                TYPE: "trap",
            },
        },
        {
            POSITION: [20, 11, 1, 0, 0, 0, 0,],
        },
        {
            POSITION: [3, 12, 1.3, 20, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.mach, g.multi, g.shotgun, g.fake, g.morereload]),
                TYPE: "casing",
            },
        }, {
            POSITION: [8, 12, -1.3, 4, 0, 0, 0,],
        },
        //shotgun
        {
            POSITION: [4, 3, 1, 11, -3, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [4, 3, 1, 11, 3, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [4, 4, 1, 13, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 4, 1, 12, -1, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 4, 1, 11, 1, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 3, 1, 13, -1, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [1, 3, 1, 13, 1, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [1, 2, 1, 13, 2, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 2, 1, 13, -2, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [15, 14, 1, 6, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [8, 14, -1.3, 4, 0, 180, 0],
        },
    ],
};

exports.slosher = {
    PARENT: ["genericTank"],
    DANGER: 6,
    LABEL: 'Slosher',
    BODY: {
        SPEED: base.SPEED * 0.9,
        ACCELERATION: base.ACCEL * 0.9
    },
    GUNS: [
        {
            POSITION: [4, 3, 1, 11, -3, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [4, 3, 1, 11, 3, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [4, 3.5, 1, 13, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 3.5, 1, 13, -1, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 3, 1, 13, 1, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 2.5, 1, 13, 2, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [13, 13.5, 1.4, 4, 0, 0, 0,],
        }, {
            POSITION: [3, 14.5 * 1.4, 1.1, 17.5, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.fake, g.blaster, g.slosher]),
                TYPE: "casing",
            },
        }, 
    ],
};

exports.explosher = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: 'Explosher',
    BODY: {
        SPEED: base.SPEED * 0.9,
        ACCELERATION: base.ACCEL * 0.75
    },
    GUNS: [
        {
            POSITION: [4, 3, 1, 11, -3, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher]),
                TYPE: "explosher_explosiveBullet",
            },
        }, {
            POSITION: [4, 3, 1, 11, 3, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher]),
                TYPE: "explosher_explosiveBullet",
            },
        }, {
            POSITION: [4, 3.5, 1, 13, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher]),
                TYPE: "explosher_explosiveBullet",
            },
        }, {
            POSITION: [1, 3.5, 1, 13, -1, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher]),
                TYPE: "explosher_explosiveBullet",
            },
        }, {
            POSITION: [1, 3, 1, 13, 1, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher]),
                TYPE: "explosher_explosiveBullet",
            },
        }, {
            POSITION: [1, 2.5, 1, 13, 2, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher]),
                TYPE: "explosher_explosiveBullet",
            },
        }, {
            POSITION: [13, 13.5, 1.4, 4, 0, 0, 0,],
        }, {
            POSITION: [3, 12.5 * 1.4, 1.1, 19, 0, 0, 0,],
            PROPERTIES: {
                COLOR: 12
            }
        }, {
            POSITION: [3, 14.5 * 1.4, 1.1, 17.5, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.fake, g.blaster, g.slosher]),
                TYPE: "casing",
            },
        },
    ],
};

exports.triSlosher = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: 'Tri-Slosher',
    BODY: {
        SPEED: base.SPEED * 0.875,
        ACCELERATION: base.ACCEL * 0.875
    },
    GUNS: [
        {
            POSITION: [4, 3, 1, 11, -3 + 2, 20, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 3.5, 1, 13, -1 + 2, 20, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 3, 1, 13, 1 + 2, 20, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 2.5, 1, 13, 2 + 2, 20, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [10, 13.5, 1.4, 4, 2, 20, 0,],
        }, {
            POSITION: [3, 14.5 * 1.4, 1.1, 14.5, 2, 20, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.fake, g.blaster, g.slosher, g.twin]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [4, 3, 1, 11, -3 - 2, -20, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 3.5, 1, 13, -1 - 2, -20, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 3, 1, 13, 1 - 2, -20, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 2.5, 1, 13, 2 - 2, -20, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [10, 13.5, 1.4, 4, -2, -20, 0,],
        }, {
            POSITION: [3, 14.5 * 1.4, 1.1, 14.5, -2, -20, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.fake, g.blaster, g.slosher, g.twin]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [4, 3, 1, 11, -3, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [4, 3, 1, 11, 3, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [4, 3.5, 1, 13, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 3.5, 1, 13, -1, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 3, 1, 13, 1, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 2.5, 1, 13, 2, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [13, 13.5, 1.4, 4, 0, 0, 0,],
        }, {
            POSITION: [3, 14.5 * 1.4, 1.1, 17.5, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.fake, g.blaster, g.slosher, g.twin]),
                TYPE: "casing",
            },
        },
    ],
};

exports.eagle = {
    PARENT: ["genericTank"],
    LABEL: "Eagle",
    DANGER: 7,
    TOOLTIP: "Right click to fire your main barrel.",
    GUNS: [
        {
            POSITION: [20, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
                TYPE: "bullet",
                LABEL: "Pounder",
                ALT_FIRE: true,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 180, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.thruster,
                    g.halfrecoil,
                ]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
    ],
};

// DESTROYER UPGRADES
exports.annihilator = {
    PARENT: ["genericTank"],
    LABEL: "Annihilator",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [20.5, 19.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.devastator = {
    PARENT: ["genericTank"],
    LABEL: "Devastator",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [22.5, 19.5*1.3, -1/1.3, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.pound]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.hybrid = makeHybrid(exports.destroyer, "Hybrid");

exports.pitcher = {
    PARENT: ["genericTank"],
    LABEL: "Pitcher",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1,

    },
    GUNS: [
        {
            POSITION: [4.5, 14, 1, 12, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.pitcher]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [12, 14, -1.35, 0, 0, 0, 0],
        },
    ],
};

// ARTILLERY UPGRADES
exports.mortar = {
    PARENT: ["genericTank"],
    LABEL: "Mortar",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [13, 3, 1, 0, -8, -7, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [13, 3, 1, 0, 8, 7, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, -6, -7, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, 6, 7, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [19, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
                TYPE: "bullet",
                LABEL: "Heavy",
            },
        },
    ],
};
exports.ordnance = {
    PARENT: ["genericTank"],
    LABEL: "Ordnance",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.9,
        FOV: base.FOV * 1.25,
    },
    CONTROLLERS: ["zoom"],
    TOOLTIP: "Hold right click to zoom.",
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [17, 3, 1, 0, -5.75, -6, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 3, 1, 0, 5.75, 6, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 11, 1, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.beekeeper = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: "Beekeeper",
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [14, 3, 1, 0, -6, -7, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bees]),
                TYPE: ["bee", { INDEPENDENT: true }],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [14, 3, 1, 0, 6, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bees]),
                TYPE: ["bee", { INDEPENDENT: true }],
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [19, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
                TYPE: "bullet",
                LABEL: "Heavy",
            },
        },
    ],
};
exports.fieldGun = {
    PARENT: ["genericTank"],
    LABEL: "Field Gun",
    BODY: {
        FOV: base.FOV * 1.1,
    },
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [15, 3, 1, 0, -6, -7, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [15, 3, 1, 0, 6, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [10, 9, 1, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 13, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty]),
                TYPE: "minimissile",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
};
exports.megaArtillery = {
    PARENT: ["genericTank"],
    DANGER: 6,
    LABEL: "Mega Artillery",
    GUNS: [
        {
            POSITION: [17, 6, 1, 0, -6, -7, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.arty]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 6, 1, 0, 6, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.arty]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [19, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
                TYPE: "bullet",
                LABEL: "Heavy",
            },
        },
    ],
};
exports.ultraArtillery = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: "Ultra Artillery",
    GUNS: [
        {
            POSITION: [17, 9, 1, 0, -5.5, -7, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.arty, { reload: 1.25 }]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [17, 9, 1, 0, 5.5, 7, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.arty, { reload: 1.25 }]),
                TYPE: "bullet",
                LABEL: "Secondary",
            },
        },
        {
            POSITION: [19, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
                TYPE: "bullet",
                LABEL: "Heavy",
            },
        },
    ],
};

// LAUNCHER UPGRADES
exports.skimmer = {
    PARENT: ["genericTank"],
    BODY: {
        FOV: 1.15 * base.FOV,
    },
    LABEL: "Skimmer",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [10, 14, -0.5, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 15, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.arty,
                    g.arty,
                    g.skim,
                ]),
                TYPE: "missile",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
};
exports.twister = {
    PARENT: ["genericTank"],
    BODY: {
        FOV: 1.1 * base.FOV,
    },
    LABEL: "Twister",
    DANGER: 7,
    GUNS: [
        {
            POSITION: [10, 13, -0.5, 9, 0, 0, 0],
        },
        {
            POSITION: [17, 14, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.arty,
                    g.arty,
                    g.skim,
                    g.morespeed,
                    g.one_third_reload,
                ]),
                TYPE: "spinmissile",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
};
exports.swarmer = {
    PARENT: ["genericTank"],
    DANGER: 6,
    LABEL: "Swarmer",
    GUNS: [
        {
            POSITION: [14, 14, -1.2, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.hive]),
                TYPE: "hive",
            },
        },
        {
            POSITION: [15, 12, 1, 5, 0, 0, 0],
        },
    ],
};
exports.sidewinder = {
    PARENT: ["genericTank"],
    LABEL: "Sidewinder",
    DANGER: 7,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.3 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [10, 11, -0.5, 14, 0, 0, 0],
        },
        {
            POSITION: [21, 12, -1.1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
                TYPE: "snake",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
};
exports.rocketeer = {
    PARENT: ["genericTank"],
    LABEL: "Rocketeer",
    BODY: {
        ACCELERATION: base.ACCEL * 0.8,
        FOV: base.FOV * 1.2
    },
    DANGER: 7,
    GUNS: [
        {
            POSITION: [20, 3, 4, 1, 0, 0, 0],
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [18, 11.5, -1.6, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.launcher, g.rocketeer]),
                TYPE: "rocketeerMissile",
            }
        }
    ]
};

// TRAPPER UPGRADES
exports.builder = {
    PARENT: ["genericTank"],
    DANGER: 6,
    LABEL: "Builder",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [18, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 12, 1.1, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block]),
                TYPE: "setTrap",
            },
        },
    ],
};
exports.triTrapper = {
    PARENT: ["genericTank"],
    LABEL: "Tri-Trapper",
    DANGER: 6,
    STAT_NAMES: statnames.trap,
    GUNS: [
        {
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, 0, 0, 120, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, 0, 0, 240, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.trapGuard = {
    PARENT: ["genericTank"],
    LABEL: "Trap Guard",
    STAT_NAMES: statnames.generic,
    DANGER: 6,
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [13, 8, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [4, 8, 1.7, 13, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.mech = {
    PARENT: ["genericTank"],
    LABEL: "Mech",
    DANGER: 5,
    GUNS: [
        {
            POSITION: [15, 8.5, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 8.5, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "autotrap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [11.5, 11, 1, 0, 0, 0, 0],
        },
    ],
};
exports.overtrapper = makeOver(exports.weirdTrapper);

// BUILDER UPGRADES
exports.construct = {
    PARENT: ["genericTank"],
    LABEL: "Constructor",
    STAT_NAMES: statnames.trap,
    DANGER: 7,
    BODY: {
        SPEED: 0.7 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [18, 18, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 18, 1.2, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct]),
                TYPE: "setTrap",
            },
        },
    ],
};
exports.autoBuilder = makeAuto(exports.builder);
exports.engineer = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: "Engineer",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.75 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [5, 11, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [3, 14, 1, 15.5, 0, 0, 0],
        },
        {
            POSITION: [2, 14, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 6,
                SHOOT_SETTINGS: combineStats([g.trap, g.block]),
                TYPE: "pillbox",
                SYNCS_SKILLS: true,
                DESTROY_OLDEST_CHILD: true,
            },
        },
        {
            POSITION: [4, 14, 1, 8, 0, 0, 0],
        },
    ],
};
exports.boomer = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: "Boomer",
    STAT_NAMES: statnames.trap,
    FACING_TYPE: "locksFacing",
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5, 10, 1, 14, 0, 0, 0],
        },
        {
            POSITION: [6, 10, -1.5, 7, 0, 0, 0],
        },
        {
            POSITION: [2, 10, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang]),
                TYPE: "boomerang",
            },
        },
    ],
};
exports.assemblerEffect = {
    PARENT: ['bullet'],
    MOTION_TYPE: 'assembler',
    LABEL: '',
    BODY: {
        DAMAGE: 0,
        RANGE: 10
    },
    ALPHA: 0.8
};
exports.assemblerDot = {
    LABEL: '',
    SHAPE: -4,
    COLOR: 17
};
exports.assemblerTrap = {
    PARENT: ['setTrap'],
    LABEL: "Assembler Trap",
    BODY: {
        SPEED: 0.7,
        ACCEL: 0.75
    },
    TURRETS: [
        {
            /**        SIZE X  Y  ANGLE ARC */
            POSITION: [4, 0, 0, 0,    360, 1],
            TYPE: 'assemblerDot'
        }
    ],
    HITS_OWN_TYPE: 'assembler'
};
exports.assembler = {
    PARENT: ['genericTank'],
    DANGER: 7,
    LABEL: 'Assembler',
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: 0.8 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [18, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 12, 1.1, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block]),
                TYPE: 'assemblerTrap',
                MAX_CHILDREN: 8
            }
        }
    ],
    TURRETS: [
        {
            /**        SIZE X   Y  ANGLE ARC */
            POSITION: [2.5, 14, 0, 0,    360, 1],
            TYPE: 'assemblerDot'
        }
    ]
};

// TRI-TRAPPER UPGRADES
exports.hexaTrapper = makeAuto({
        PARENT: ["genericTank"],
        DANGER: 7,
        BODY: {
            SPEED: 0.8 * base.SPEED,
        },
        STAT_NAMES: statnames.trap,
        HAS_NO_RECOIL: true,
        GUNS: [
            {
                POSITION: [15, 7, 1, 0, 0, 0, 0],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 0, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 60, 0.5],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 60, 0.5],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 120, 0],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 120, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 180, 0.5],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 180, 0.5],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 240, 0],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 240, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 300, 0.5],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 300, 0.5],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
        ],
    }, "Hexa-Trapper");
exports.septaTrapper = (() => {
    let a = 360 / 7,
        d = 1 / 7;
    return {
        PARENT: ["genericTank"],
        LABEL: "Septa-Trapper",
        DANGER: 7,
        BODY: {
            SPEED: base.SPEED * 0.8,
        },
        STAT_NAMES: statnames.trap,
        HAS_NO_RECOIL: true,
        GUNS: [
            {
                /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [15, 7, 1, 0, 0, 0, 0],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 0, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, a, 4 * d],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, a, 4 * d],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 2 * a, 1 * d],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 2 * a, 1 * d],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 3 * a, 5 * d],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 3 * a, 5 * d],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 4 * a, 2 * d],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 4 * a, 2 * d],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 5 * a, 6 * d],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 5 * a, 6 * d],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
            {
                POSITION: [15, 7, 1, 0, 0, 6 * a, 3 * d],
            },
            {
                POSITION: [3, 7, 1.7, 15, 0, 6 * a, 3 * d],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                    TYPE: "trap",
                    STAT_CALCULATOR: gunCalcNames.trap,
                },
            },
        ],
    };
})();
exports.architect = {
    LABEL: "Architect",
    BODY: {
        SPEED: 1.1 * base.SPEED,
    },
    PARENT: ["genericTank"],
    DANGER: 6,
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            POSITION: [12, 8, 0, 0, 190, 0],
            TYPE: "architectGun",
        },
        {
            POSITION: [12, 8, 0, 120, 190, 0],
            TYPE: "architectGun",
        },
        {
            POSITION: [12, 8, 0, 240, 190, 0],
            TYPE: "architectGun",
        },
    ],
};

// TRAP GUARD UPGRADES
exports.bushwhacker = makeGuard(exports.sniper, "Bushwhacker");
exports.gunnerTrapper = {
    PARENT: ["genericTank"],
    LABEL: "Gunner Trapper",
    DANGER: 7,
    STAT_NAMES: statnames.generic,
    BODY: {
        FOV: 1.25 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [19, 2, 1, 0, -2.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.tonsmorrecoil,
                    g.lotsmorrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.tonsmorrecoil,
                    g.lotsmorrecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 11, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [13, 11, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [4, 11, 1.7, 13, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.fast, g.halfrecoil]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.bomber = {
    PARENT: ["genericTank"],
    LABEL: "Bomber",
    BODY: {
        DENSITY: base.DENSITY * 0.6,
    },
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 130, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
                TYPE: "bullet",
                LABEL: "Wing",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 230, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
                TYPE: "bullet",
                LABEL: "Wing",
            },
        },
        {
            POSITION: [13, 8, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [4, 8, 1.7, 13, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};
exports.conqueror = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: "Conqueror",
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    GUNS: [
        {
            POSITION: [21, 14, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 12, 1.1, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block]),
                TYPE: "setTrap",
            },
        },
    ],
};
exports.bulwark = {
    PARENT: ["genericTank"],
    LABEL: "Bulwark",
    STAT_NAMES: statnames.generic,
    DANGER: 7,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [13, 8, 1, 0, 5.5, 185, 0],
        },
        {
            POSITION: [3, 9, 1.5, 13, 5.5, 185, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [13, 8, 1, 0, -5.5, 175, 0],
        },
        {
            POSITION: [3, 9, 1.5, 13, -5.5, 175, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
};

// MECH UPGRADES
exports.placerTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ["onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.anchorTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ["onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [20, 6.5, 1, 0, -6.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 6.5, 1, 0, 6.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.departureTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    BODY: {
        FOV: 3,
    },
    FACING_TYPE: "fastspin",
    COLOR: 16,
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.meta]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 120, 0.33],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.meta]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 240, 0.66],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.meta]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true
            },
        }
    ],
};
exports.placerTrap = {
    PARENT: ["trap"],
    LABEL: "Trap",
    SHAPE: 0,
    FACING_TYPE: "autospin",
    HAS_NO_RECOIL: true,
    GUNS: [
        {
        POSITION: [7, 7.5, .6, 7, 0, 0, 0],
        }, {
            POSITION: [7, 7.5, .6, 7, 0, 180, 0],
        }, {
            POSITION: [7, 7.5, .6, 7, 0, 90, 0],
        }, {
            POSITION: [7, 7.5, .6, 7, 0, 270, 0],
        }],
    TURRETS: [
        {
        POSITION: [11, 0, 0, 0, 360, 1],
        TYPE: ["placerTurret", { HAS_NO_RECOIL: true }]
        }
    ]
};
exports.fortifierTrap = {
    PARENT: ["trap"],
    LABEL: "Trap",
    SHAPE: 0,
    FACING_TYPE: "autospin",
    HAS_NO_RECOIL: true,
    GUNS: [
        {
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.5, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flank, g.twin, g.halfrange, g.one_third_reload, { shudder: 0.4, speed: 0.66 }]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
                AUTOFIRE: true
            },
        },
        {
            POSITION: [15, 7, 1, 0, 0, 120, 0],
        },
        {
            POSITION: [3, 7, 1.5, 15, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flank, g.twin, g.halfrange, g.one_third_reload, { shudder: 0.4, speed: 0.66 }]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
                AUTOFIRE: true
            },
        },
        {
            POSITION: [15, 7, 1, 0, 0, 240, 0],
        },
        {
            POSITION: [3, 7, 1.5, 15, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flank, g.twin, g.halfrange, g.one_third_reload, { shudder: 0.4, speed: 0.66 }]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
                AUTOFIRE: true
            },
        },],
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: ["placerTurret", { HAS_NO_RECOIL: true }]
        }
    ]
};
exports.stabilizerTrap = {
    PARENT: ["trap"],
    LABEL: "Trap",
    SHAPE: 0,
    FACING_TYPE: "autospin",
    HAS_NO_RECOIL: true,
    GUNS: [
        {
            POSITION: [7, 7.5, .6, 7, 0, 0, 0],
        }, {
            POSITION: [7, 7.5, .6, 7, 0, 180, 0],
        }, {
            POSITION: [7, 7.5, .6, 7, 0, 300, 0],
        }, {
            POSITION: [7, 7.5, .6, 7, 0, 120, 0],
        }, {
            POSITION: [7, 7.5, .6, 7, 0, 240, 0],
        }, {
            POSITION: [7, 7.5, .6, 7, 0, 60, 0],
        }],
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: ["placerTurret", { HAS_NO_RECOIL: true }]
        }
    ]
};
exports.anchorTrap = {
    PARENT: ["trap"],
    LABEL: "Trap",
    SHAPE: 0,
    FACING_TYPE: "autospin",
    HAS_NO_RECOIL: true,
    GUNS: [
        {
            POSITION: [7, 7.5, .6, 7, 0, 0, 0],
        }, {
            POSITION: [7, 7.5, .6, 7, 0, 180, 0],
        }, {
            POSITION: [7, 7.5, .6, 7, 0, 90, 0],
        }, {
            POSITION: [7, 7.5, .6, 7, 0, 270, 0],
        }],
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: ["anchorTurret", { HAS_NO_RECOIL: true }]
        }
    ]
};
exports.departureTrap = {
    PARENT: ["trap"],
    LABEL: "Trap",
    SHAPE: 0,
    FACING_TYPE: "autospin",
    HAS_NO_RECOIL: true,
    GUNS: [
        {
            POSITION: [7, 7.5, .6, 7, 0, 0, 0],
        }, {
            POSITION: [7, 7.5, .6, 7, 0, 120, 0],
        }, {
            POSITION: [7, 7.5, .6, 7, 0, 240, 0],
        },],
    TURRETS: [
        {
            POSITION: [14, 0, 0, 0, 360, 1],
            TYPE: ["departureTurret", { HAS_NO_RECOIL: true }]
        }
    ]
};
exports.placerBody = {
    PARENT: ["genericTank"],
    CONTROLLERS: [["spin", { independent: true, speed: 0.01}]],
    GUNS: [{
        POSITION: [7, 7.5, .6, 7, 0, 0, 0],
        PROPERTIES: {
            COLOR: 16
        },
    }, {
        POSITION: [7, 7.5, .6, 7, 0, 180, 0],
        PROPERTIES: {
            COLOR: 16
        },
    }, {
        POSITION: [7, 7.5, .6, 7, 0, 90, 0],
        PROPERTIES: {
            COLOR: 16
        },
    }, {
        POSITION: [7, 7.5, .6, 7, 0, 270, 0],
        PROPERTIES: {
            COLOR: 16
        },
    }],
};
exports.stabilizerBody = {
    PARENT: ["genericTank"],
    CONTROLLERS: [["spin", { independent: true, speed: 0.01 }]],
    GUNS: [{
        POSITION: [7, 7.5, .6, 7, 0, 0, 0],
        PROPERTIES: {
            COLOR: 16
        },
    }, {
        POSITION: [7, 7.5, .6, 7, 0, 60, 0],
        PROPERTIES: {
            COLOR: 16
        },
    }, {
        POSITION: [7, 7.5, .6, 7, 0, 120, 0],
        PROPERTIES: {
            COLOR: 16
        },
    }, {
        POSITION: [7, 7.5, .6, 7, 0, 180, 0],
        PROPERTIES: {
            COLOR: 16
        },
        }, {
            POSITION: [7, 7.5, .6, 7, 0, -60, 0],
            PROPERTIES: {
                COLOR: 16
            },
        }, {
            POSITION: [7, 7.5, .6, 7, 0, -120, 0],
            PROPERTIES: {
                COLOR: 16
            },
        },],
};
exports.departureBody = {
    PARENT: ["genericTank"],
    CONTROLLERS: [["spin", { independent: true, speed: 0.01 }]],
    GUNS: [{
        POSITION: [7, 7.5, .6, 7, 0, 0, 0],
        PROPERTIES: {
            COLOR: 16
        },
    }, {
        POSITION: [7, 7.5, .6, 7, 0, 120, 0],
        PROPERTIES: {
            COLOR: 16
        },
    }, {
        POSITION: [7, 7.5, .6, 7, 0, 240, 0],
        PROPERTIES: {
            COLOR: 16
        },
    },],
};
exports.departureBody2 = {
    PARENT: ["genericTank"],
    CONTROLLERS: [["spin", { independent: true, speed: -0.01 }]],
    GUNS: [{
        POSITION: [7, 7.5, .6, 7, 0, 0, 0],
        PROPERTIES: {
            COLOR: 16
        },
    }, {
        POSITION: [7, 7.5, .6, 7, 0, 120, 0],
        PROPERTIES: {
            COLOR: 16
        },
    }, {
        POSITION: [7, 7.5, .6, 7, 0, 240, 0],
        PROPERTIES: {
            COLOR: 16
        },
    },],
};
exports.placerGun = {
    PARENT: ["genericTank"],
    LABEL: "Placed",
    COLOR: 16,
    GUNS: [
        {
            POSITION: [4, 16, -0.5, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.placer, g.fake]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.trap,
                ALT_FIRE: true,
            },
        },
        {
            POSITION: [20, 16, 1, 0, 0, 0, 0],
        },
    ],
};
exports.fortifierGun = {
    PARENT: ["genericTank"],
    LABEL: "Placed",
    COLOR: 16,
    GUNS: [
        {
            POSITION: [16, 16, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [5, 16, 1.5, 16, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.placer, g.fake]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.trap,
                ALT_FIRE: true,
            },
        },
    ],
};
exports.anchorGun = {
    PARENT: ["genericTank"],
    LABEL: "Placed",
    COLOR: 16,
    GUNS: [
        {
            POSITION: [4, 16, -0.5, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.placer, g.fake]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.trap,
                ALT_FIRE: true,
            },
        },
        {
            POSITION: [20, 16, 1.3, 0, 0, 0, 0],
        },
        {
            POSITION: [20, 8, 1.3, 0, 0, 0, 0],
        },
    ],
};
exports.departureGun = {
    PARENT: ["genericTank"],
    LABEL: "Placed",
    COLOR: 16,
    GUNS: [
        {
            POSITION: [4, 16, -0.5, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.placer, g.fake]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.trap,
                ALT_FIRE: true,
            },
        },
        {
            POSITION: [20, 16, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
        }
    ],
};
exports.placer = {
    PARENT: ["genericTank"],
    LABEL: "Placer",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15
    },
    GUNS: [
        {
            POSITION: [1, 16 * 0.7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.placer]),
                TYPE: "placerTrap",
                STAT_CALCULATOR: gunCalcNames.trap,
                ALT_FIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 5,
                DESTROY_OLDEST_CHILD: true,
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [20, 0, 0, 0, 360, 0],
            TYPE: "placerBody",
        },
        {
            POSITION: [14, 0, 0, 0, 360, 1],
            TYPE: "placerGun",
        },
    ],
};
exports.fortifier = {
    PARENT: ["genericTank"],
    LABEL: "Fortifier",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.775,
        FOV: base.FOV * 1.15
    },
    GUNS: [
        {
            POSITION: [1, 16 * 0.7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.placer]),
                TYPE: "fortifierTrap",
                STAT_CALCULATOR: gunCalcNames.trap,
                ALT_FIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 5,
                DESTROY_OLDEST_CHILD: true,
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [20, 0, 0, 0, 360, 0],
            TYPE: "placerBody",
        },
        {
            POSITION: [14, 0, 0, 0, 360, 1],
            TYPE: "fortifierGun",
        },
    ],
};
exports.stabilizer = {
    PARENT: ["genericTank"],
    LABEL: "Stabilizer",
    DANGER: 8,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15
    },
    GUNS: [
        {
            POSITION: [1, 16 * 0.7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.placer]),
                TYPE: "stabilizerTrap",
                STAT_CALCULATOR: gunCalcNames.trap,
                ALT_FIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 7,
                DESTROY_OLDEST_CHILD: true,
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [20, 0, 0, 0, 360, 0],
            TYPE: "stabilizerBody",
        },
        {
            POSITION: [14, 0, 0, 0, 360, 1],
            TYPE: "placerGun",
        },
    ],
};
exports.anchor = {
    PARENT: ["genericTank"],
    LABEL: "Anchor",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.8,
        FOV: base.FOV * 1.15
    },
    GUNS: [
        {
            POSITION: [1, 16 * 0.7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.placer]),
                TYPE: "anchorTrap",
                STAT_CALCULATOR: gunCalcNames.trap,
                ALT_FIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 5,
                DESTROY_OLDEST_CHILD: true,
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [20, 0, 0, 0, 360, 0],
            TYPE: "placerBody",
        },
        {
            POSITION: [14, 0, 0, 0, 360, 1],
            TYPE: "anchorGun",
        },
    ],
};
exports.departure = {
    PARENT: ["genericTank"],
    LABEL: "Departure",
    DANGER: 8,
    BODY: {
        SPEED: base.SPEED * 0.8,
        ACCELERATION: base.ACCEL * 0.9,
        FOV: base.FOV * 1.2
    },
    GUNS: [
        {
            POSITION: [1, 16 * 0.7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.placer]),
                TYPE: "departureTrap",
                STAT_CALCULATOR: gunCalcNames.trap,
                ALT_FIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 5,
                DESTROY_OLDEST_CHILD: true,
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [20, 0, 0, 0, 360, 0],
            TYPE: "departureBody",
        },
        {
            POSITION: [20, 0, 0, 60, 360, 0],
            TYPE: "departureBody2",
        },
        {
            POSITION: [14, 0, 0, 0, 360, 1],
            TYPE: "departureGun",
        },
    ],
};

// SMASHER UPGRADES
exports.megaSmasher = {
    PARENT: ["genericTank"],
    LABEL: "Mega-Smasher",
    DANGER: 7,
    BODY: {
        SPEED: 1.05 * base.SPEED,
        FOV: 1.1 * base.FOV,
        DENSITY: 4 * base.DENSITY,
    },
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher,
    TURRETS: [
        {
            POSITION: [25, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
        },
    ],
};
exports.spike = {
    PARENT: ["genericTank"],
    LABEL: "Spike",
    DANGER: 7,
    BODY: {
        SPEED: base.SPEED * 0.9,
        DAMAGE: base.DAMAGE * 1.1,
        FOV: base.FOV * 1.05,
        DENSITY: base.DENSITY * 2,
    },
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher,
    TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [18.5, 0, 0, 0, 360, 0],
            TYPE: "spikeBody",
        },
        {
            POSITION: [18.5, 0, 0, 90, 360, 0],
            TYPE: "spikeBody",
        },
        {
            POSITION: [18.5, 0, 0, 180, 360, 0],
            TYPE: "spikeBody",
        },
        {
            POSITION: [18.5, 0, 0, 270, 360, 0],
            TYPE: "spikeBody",
        },
    ],
};
exports.autoSmasher = makeAuto(exports.smasher, "Auto-Smasher", {
    type: "autoSmasherTurret",
    size: 11,
});
exports.autoSmasher.SKILL_CAP = [smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl];
exports.landmine = {
    PARENT: ["genericTank"],
    LABEL: "Landmine",
    INVISIBLE: [0.06, 0.01],
    TOOLTIP: "Stay still to turn invisible.",
    DANGER: 7,
    BODY: {
        SPEED: 1.1 * base.SPEED,
        FOV: 1.05 * base.FOV,
        DENSITY: 2 * base.DENSITY,
    },
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
        },
        {
            POSITION: [21.5, 0, 0, 30, 360, 0],
            TYPE: "landmineBody",
        },
    ],
    IS_SMASHER: true,
    SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
    STAT_NAMES: statnames.smasher,
};

// HEALER UPGRADES
exports.medic = {
    PARENT: ["genericTank"],
    LABEL: "Medic",
    BODY: {
        FOV: base.FOV * 1.2,
    },
    TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 9, -0.5, 16.5, 0, 0, 0],
        },
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.healer]),
                TYPE: "healerBullet",
            },
        },
    ],
    STAT_NAMES: statnames.heal,
};
exports.ambulance = {
    PARENT: ["genericTank"],
    LABEL: "Ambulance",
    BODY: {
        HEALTH: base.HEALTH * 0.8,
        SHIELD: base.SHIELD * 0.8,
        DENSITY: base.DENSITY * 0.6,
    },
    TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 9, -0.5, 12.5, 0, 0, 0],
        },
        {
            POSITION: [18, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.flank,
                    g.tri,
                    g.trifront,
                    g.tonsmorrecoil,
                    g.healer,
                ]),
                TYPE: "healerBullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                TYPE: "bullet",
                LABEL: gunCalcNames.thruster,
            },
        },
    ],
    STAT_NAMES: statnames.heal,
};
exports.surgeon = {
    PARENT: ["genericTank"],
    LABEL: "Surgeon",
    STAT_NAMES: statnames.trap,
    BODY: {
        SPEED: base.SPEED * 0.75,
        FOV: base.FOV * 1.15,
    },
    TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5, 11, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [3, 14, 1, 15.5, 0, 0, 0],
        },
        {
            POSITION: [2, 14, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 2,
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.slow]),
                TYPE: "surgeonPillbox",
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [4, 14, 1, 8, 0, 0, 0],
        },
    ],
    STAT_NAMES: statnames.heal,
};
exports.paramedic = {
    PARENT: ["genericTank"],
    LABEL: "Paramedic",
    BODY: {
        SPEED: base.SPEED * 0.9,
    },
    TURRETS: [
        {
            /** SIZE     X       Y     ANGLE    ARC */
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 9, -0.5, 10, 0, -17.5, 0.5],
        },
        {
            POSITION: [15.5, 10, 1, 0, 0, -17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.healer]),
                TYPE: "healerBullet",
            },
        },
        {
            POSITION: [8, 9, -0.5, 10, 0, 17.5, 0.5],
        },
        {
            POSITION: [15.5, 10, 1, 0, 0, 17.5, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.healer]),
                TYPE: "healerBullet",
            },
        },
        {
            POSITION: [8, 9, -0.5, 12.5, 0, 0, 0],
        },
        {
            POSITION: [18, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.healer]),
                TYPE: "healerBullet",
            },
        },
    ],
    STAT_NAMES: statnames.heal,
};

// TANK UPGRADE PATHS
exports.basic.UPGRADES_TIER_1 = ["twin", "sniper", "machineGun", "flankGuard", "director", "pounder", "trapper"/* "desmos"*/];
    exports.basic.UPGRADES_TIER_2 = ["smasher"];
        exports.smasher.UPGRADES_TIER_3 = ["megaSmasher", "spike", "autoSmasher", "landmine"];
        exports.healer.UPGRADES_TIER_3 = ["medic", "ambulance", "surgeon", "paramedic"]

    exports.twin.UPGRADES_TIER_2 = ["doubleTwin", "tripleShot", "gunner", "hexaTank"];
        exports.twin.UPGRADES_TIER_3 = ["dual", "bulwark", "musket"];
        exports.doubleTwin.UPGRADES_TIER_3 = ["tripleTwin", "hewnDouble", "autoDouble", "bentDouble"];
            exports.hewnDouble.UPGRADES_TIER_4 = ["autoHewn", "skewnDouble"];
            exports.autoDouble.UPGRADES_TIER_4 = ["autoHewn", "autoBentDouble"];
            exports.bentDouble.UPGRADES_TIER_4 = ["autoBentDouble", "doubleBentHybrid"];
        exports.tripleShot.UPGRADES_TIER_3 = ["pentaShot", "bentMachine", "spreadshot", "bentHybrid", "bentDouble", "triplet"];
            exports.pentaShot.UPGRADES_TIER_4 = ["pentaMachine"];
            exports.bentMachine.UPGRADES_TIER_4 = ["pentaMachine"];
            exports.spreadshot.UPGRADES_TIER_4 = ["spreadmach"];
            exports.bentHybrid.UPGRADES_TIER_4 = ["doubleBentHybrid"];
            exports.triplet.UPGRADES_TIER_4 = ["quintuplet"]; 

    exports.sniper.UPGRADES_TIER_2 = ["assassin", "hunter", "minigun", "rifle", /*"knocker",*/ "hitman"];
        exports.sniper.UPGRADES_TIER_3 = ["bushwhacker", "railgun"];
            exports.bushwhacker.UPGRADES_TIER_4 = [];
        exports.assassin.UPGRADES_TIER_3 = ["ranger", "falcon", "stalker", "autoAssassin", "assassinator", "single"];
            exports.ranger.UPGRADES_TIER_4 = ["veteran"];
        exports.hunter.UPGRADES_TIER_3 = ["predator", "xHunter", "poacher", "ordnance", "dual", "arquebus"];
            exports.dual.UPGRADES_TIER_4 = ["concatinator"];
        exports.rifle.UPGRADES_TIER_3 = ["musket", "crossbow", "armsman"];
        exports.hitman.UPGRADES_TIER_3 = ["arquebus", "assassinator"];
            exports.arquebus.UPGRADES_TIER_4 = ["concatinator"];
            exports.assassinator.UPGRADES_TIER_4 = ["veteran", "sniperMK2"];

exports.machineGun.UPGRADES_TIER_2 = ["artillery", "minigun", "gunner", "sprayer", "submachine"];
        exports.minigun.UPGRADES_TIER_3 = ["streamliner", "nailgun", "cropDuster", "barricade", "vulture", "vulcan"];
            exports.streamliner.UPGRADES_TIER_4 = ["rationalizer", "M61"];
        exports.gunner.UPGRADES_TIER_3 = ["autoGunner", "nailgun", "auto4", "machineGunner", "gunnerTrapper", "heavyGunner", "cyclone", "overgunner", "vulcan"];
            exports.nailgun.UPGRADES_TIER_4 = ["overnailer"];
            exports.heavyGunner.UPGRADES_TIER_4 = ["slapper"];
            exports.vulcan.UPGRADES_TIER_4 = ["M61", "vulcAngle"];
        exports.sprayer.UPGRADES_TIER_3 = ["redistributor", "phoenix", "atomizer"];
        exports.submachine.UPGRADES_TIER_3 = ["vulcan"];

    exports.flankGuard.UPGRADES_TIER_2 = ["hexaTank", "triAngle", "auto3", "trapGuard", "triTrapper"];
        exports.flankGuard.UPGRADES_TIER_3 = ["tripleTwin"];
        exports.hexaTank.UPGRADES_TIER_3 = ["octoTank", "cyclone", "hexaTrapper"];
        exports.triAngle.UPGRADES_TIER_3 = ["fighter", "booster", "falcon", "bomber", "autoTriAngle", "surfer", "eagle", "phoenix", "vulture"];
            exports.autoTriAngle.UPGRADES_TIER_4 = ["vulcAngle"];
        exports.auto3.UPGRADES_TIER_3 = ["auto5", "mega3", "auto4", "banshee", "sniper3"];
            exports.auto5.UPGRADES_TIER_4 = ["sniper5"];
            exports.mega3.UPGRADES_TIER_4 = ["spirit"];
            exports.banshee.UPGRADES_TIER_4 = ["spirit", "phantom"];
            exports.sniper3.UPGRADES_TIER_4 = ["sniper5", "phantom"];

    exports.director.UPGRADES_TIER_2 = ["overseer", "cruiser", "underseer", "spawner", "honcho"];
        exports.director.UPGRADES_TIER_3 = ["manager"];
        exports.overseer.UPGRADES_TIER_3 = ["overlord", "overtrapper", "overgunner", "banshee", "autoOverseer", "overdrive", "commander", "foreman"];
            exports.overgunner.UPGRADES_TIER_4 = ["overnailer"];
            exports.foreman.UPGRADES_TIER_4 = ["spirit"];
        exports.cruiser.UPGRADES_TIER_3 = ["carrier", "battleship", "fortress", "autoCruiser", "commander", "productionist"];
        exports.underseer.UPGRADES_TIER_3 = ["necromancer", "maleficitor", "infestor"];
        exports.spawner.UPGRADES_TIER_3 = ["factory", "autoSpawner", "productionist"];
            exports.factory.UPGRADES_TIER_4 = ["industry", "manufacture"];
            exports.productionist.UPGRADES_TIER_4 = ["manufacture", "classifier"];
        exports.honcho.UPGRADES_TIER_3 = [ "bigCheese", "foreman"];

    exports.pounder.UPGRADES_TIER_2 = ["destroyer", "builder", "artillery", "launcher", "multishot"];
        exports.pounder.UPGRADES_TIER_3 = ["eagle"];
        exports.destroyer.UPGRADES_TIER_3 = ["shotgun", "conqueror", "annihilator", "hybrid", "construct", "pitcher"];
            exports.conqueror.UPGRADES_TIER_4 = ["backwave"];
            exports.annihilator.UPGRADES_TIER_4 = ["devastator"];
        exports.artillery.UPGRADES_TIER_3 = ["mortar", "megaArtillery", "ordnance", "beekeeper", "fieldGun"];
            exports.megaArtillery.UPGRADES_TIER_4 = ["ultraArtillery"];
        exports.launcher.UPGRADES_TIER_3 = ["skimmer", "twister", "swarmer", "sidewinder", "fieldGun", "rocketeer"];
        exports.multishot.UPGRADES_TIER_3 = ["shotgun", "shellshocker", "slosher"];
            exports.shotgun.UPGRADES_TIER_4 = ["backwave"];
            exports.shellshocker.UPGRADES_TIER_4 = ["backwave"];
            exports.slosher.UPGRADES_TIER_4 = ["triSlosher", "explosher"];

    exports.trapper.UPGRADES_TIER_2 = ["builder", "triTrapper", "trapGuard", "mech"];
        exports.trapper.UPGRADES_TIER_3 = ["barricade", "overtrapper"];
        exports.builder.UPGRADES_TIER_3 = ["construct", "autoBuilder", "engineer", "boomer", "assembler", "architect", "conqueror"];
        exports.triTrapper.UPGRADES_TIER_3 = ["fortress", "hexaTrapper", "septaTrapper", "architect"];
        exports.trapGuard.UPGRADES_TIER_3 = ["bushwhacker", "gunnerTrapper", "bomber", "conqueror", "bulwark"];
        exports.mech.UPGRADES_TIER_3 = ["engineer", "placer"];
            exports.placer.UPGRADES_TIER_4 = ["stabilizer", "anchor", "fortifier", "departure"];

    /*exports.desmos.UPGRADES_TIER_2 = ["helix", "volute"],
        exports.helix.UPGRADES_TIER_3 = ["triplex"],
        exports.volute.UPGRADES_TIER_3 = ["sidewinder"],*/

//extra: Dreaded.io Alternative Tree

exports.genericMultiTree_dreaded = {
    PARENT: ["genericTank"],
    SKILL_CAP: Array(10).fill(15),
    REROOT_UPGRADE_TREE: ["multiTreeWeapon", "multiTreeBody"],
};

exports.multiTreeWeapon = {
    LABEL: "Weapons",
    REROOT_UPGRADE_TREE: "multiTreeWeapon",
}
exports.multiTreeBody = {
    LABEL: "Bodies",
    REROOT_UPGRADE_TREE: "multiTreeBody",
}

//T0
exports.node_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Node",
    //REROOT_UPGRADE_TREE: "node_dreaded",
    BODY: {},
    GUNS: [],
    TURRETS: []
};
exports.base_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Base",
    //REROOT_UPGRADE_TREE: "base_dreaded",
    BODY: {},
    GUNS: [],
    TURRETS: []
};


//T1 Weapons
exports.mono_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Mono",
    BODY: {},
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: []
};
exports.watcher_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Watcher",
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 9.5, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
    ],
    TURRETS: []
};
exports.trapper_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Trapper",
    BODY: {},
    GUNS: [
        {
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
    TURRETS: []
};

//T1 Bodies

exports.autoTurret_dreaded = {
    PARENT: ["autoTankGun"],
    INDEPENDENT: true,
    BODY: {
        FOV: 1.2
    },
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.turret_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Turret",
    BODY: {},
    TURRETS: [
        {
            POSITION: [10, 0, 0, 180, 360, 1],
            TYPE: "autoTurret_dreaded",
        },
    ],
};
exports.wall_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Wall",
    BODY: {
        SPEED: 0.9,
        HEALTH: 1.4
    },
    TURRETS: [
        {
            POSITION: [15, 0, 0, 0, 360, 1],
            TYPE: ["genericEntity", { COLOR: -1, MIRROR_MASTER_ANGLE: true }],
        },
    ],
};
exports.smasher_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Smasher",
    BODY: {
        SPEED: 1.1,
        DAMAGE: 1.5
    },
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 0, 0],
            TYPE: ["smasherBody", { COLOR: 9, SHAPE: 6, MIRROR_MASTER_ANGLE: true }],
        },
    ],
};
exports.hangarTurret_dreaded = {
    PARENT: ["autoTankGun"],
    INDEPENDENT: true,
    BODY: {
        FOV: 1
    },
    CONTROLLERS: ["nearestDifferentMaster"],
    AI: {
        NO_LEAD: true,
        SKYNET: true,
        FULL_VIEW: true,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.auto]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
    ],
};
exports.hangar_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Hangar",
    BODY: {
        FOV: 1.1
    },
    TURRETS: [
        {
            POSITION: [11, 0, 0, 180, 360, 1],
            TYPE: "hangarTurret_dreaded",
        },
    ],
};
exports.layerTurret_dreaded = {
    PARENT: ["genericTank"],
    BODY: {
        FOV: 3,
    },
    HAS_NO_RECOIL: true,
    CONTROLLERS: [["spin", { independent: true, speed: 0.02 }]],
    SHAPE: -3,
    GUNS: [
        {
            POSITION: [1, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.noRandom, { recoil: 0.001, size: 2, damage: 1.1, speed: 0.001, maxSpeed: 0.001 }]),
                TYPE: "trap",
            },
        },
    ],
};
exports.layer_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Layer",
    TURRETS: [
        {
            POSITION: [7.5, 0, 0, 180, 360, 1],
            TYPE: "layerTurret_dreaded",
        },
    ],
};

//T2 Weapons
exports.machine_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Machine",
    BODY: {},
    GUNS: [
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: []
};
exports.duo_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Duo",
    BODY: {},
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: []
};
exports.guard_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Guard",
    BODY: {},
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [13, 8, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [4, 8, 1.7, 13, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
    TURRETS: []
};
exports.pounder_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Pounder",
    BODY: {},
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20.5, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: []
};
exports.sniper_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Sniper",
    BODY: {
        FOV: base.FOV * 1.2
    },
    GUNS: [
        {
            POSITION: [24, 8.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: []
};
exports.protector_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Protector",
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 9.5, 1.3, 7, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 9.5, 1.3, 7, 0, -90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
    ],
    TURRETS: []
};
exports.director_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Director",
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [7, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.bitmorepower, g.bitmorepower]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 5,
            },
        },
    ],
    TURRETS: []
};
exports.cruiser_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Cruiser",
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.2
    },
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
    TURRETS: []
};
exports.gamma_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Gamma",
    BODY: {},
    GUNS: [
        {
            POSITION: [14, 12.5, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4.6, 12.5, 1.5, 14, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.megatrap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
    TURRETS: []
};
exports.mech_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Mech",
    BODY: {},
    GUNS: [
        {
            POSITION: [15, 8.5, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 8.5, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "autotrap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        }, {
            POSITION: [11.5, 11, 1, 0, 0, 0, 0],
        },
    ],
    TURRETS: []
};
exports.stockade_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Stockade",
    DANGER: 6,
    BODY: {},
    GUNS: [
        {
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, 0, 0, 120, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, 0, 0, 240, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.flank]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
    TURRETS: []
};
exports.builder_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Builder",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.15
    },
    GUNS: [
        {
            POSITION: [18, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 12, 1.1, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block]),
                TYPE: "setTrap",
            },
        },
    ],
    TURRETS: []
};

//T2 Bodies

exports.twinTurret_dreaded = {
    PARENT: ["autoTankGun"],
    INDEPENDENT: true,
    BODY: {
        FOV: 1.2
    },
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.twin_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Twin",
    BODY: {},
    TURRETS: [
        {
            POSITION: [11.5, 0, 0, 180, 360, 1],
            TYPE: "twinTurret_dreaded",
        },
    ],
};
exports.rock_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Rock",
    BODY: {
        SPEED: 0.85,
        HEALTH: 2
    },
    TURRETS: [
        {
            POSITION: [16, 0, 0, 0, 360, 1],
            TYPE: ["pentagon", { COLOR: -1, MIRROR_MASTER_ANGLE: true }],
        },
    ],
};
exports.stomper_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Stomper",
    BODY: {
        SPEED: 0.9,
        HEALTH: 2,
        ACCLELERATION: 0.85
    },
    SIZE: 1.2,
    TURRETS: [
        {
            POSITION: [15, 0, 0, 0, 360, 1],
            TYPE: ["genericEntity", { COLOR: 16, MIRROR_MASTER_ANGLE: true }],
        },
        {
            POSITION: [24, 0, 0, 0, 360, 0],
            TYPE: ["genericEntity", { COLOR: 16, MIRROR_MASTER_ANGLE: true }],
        },
    ],
};
exports.spike_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Spike",
    BODY: {
        SPEED: 1.175,
        DAMAGE: 2,
        HEALTH: 0.9
    },
    TURRETS: [
        {
            POSITION: [24, 0, 0, 45, 0, 0],
            TYPE: ["square", { COLOR: 9, MIRROR_MASTER_ANGLE: true }],
        },
    ],
};
exports.bonker_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Bonker",
    BODY: {
        SPEED: 1.25,
        DAMAGE: 1.5,
        HEALTH: 0.8,
        FOV: 1.1
    },
    SIZE: 0.8,
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 0, 0],
            TYPE: ["smasherBody", { COLOR: 9, SHAPE: 6, MIRROR_MASTER_ANGLE: true }],
        },
    ],
};
exports.armory_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Armory",
    BODY: {
        SPEED: 1.1,
        DAMAGE: 1.5
    },
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 0, 0],
            TYPE: ["smasherBody", { COLOR: 9, SHAPE: 6, MIRROR_MASTER_ANGLE: true }],
        },
        {
            POSITION: [10, 0, 0, 180, 360, 1],
            TYPE: ["autoTurret_dreaded"],
        },
    ],
};
exports.warshipTurret_dreaded = {
    PARENT: ["autoTankGun"],
    INDEPENDENT: true,
    BODY: {
        FOV: 1
    },
    CONTROLLERS: ["nearestDifferentMaster"],
    AI: {
        NO_LEAD: true,
        SKYNET: true,
        FULL_VIEW: true,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 11, 1.3, 7, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.auto]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 11, 1.3, 7, 0, -90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.auto]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
    ],
};
exports.warship_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Warship",
    BODY: {
        FOV: 1.15
    },
    TURRETS: [
        {
            POSITION: [11, 0, 0, 180, 360, 1],
            TYPE: "warshipTurret_dreaded",
        },
    ],
};

exports.dropperTurret_dreaded = {
    PARENT: ["genericTank"],
    BODY: {
        FOV: 3,
    },
    HAS_NO_RECOIL: true,
    CONTROLLERS: [["spin", { independent: true, speed: 0.02 }]],
    SHAPE: -3,
    GUNS: [
        {
            POSITION: [1, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.noRandom, g.twin, { recoil: 0.001, size: 2, speed: 0.001, maxSpeed: 0.001 }]),
                TYPE: "trap",
            },
        },
    ],
};
exports.dropperTurret2_dreaded = {
    PARENT: ["genericTank"],
    BODY: {
        FOV: 3,
    },
    HAS_NO_RECOIL: true,
    CONTROLLERS: [["spin", { independent: true, speed: -0.02 }]],
    SHAPE: -3,
    GUNS: [
        {
            POSITION: [1, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.noRandom, g.twin, { recoil: 0.001, size: 3, speed: 0.001, maxSpeed: 0.001 }]),
                TYPE: "trap",
            },
        },
    ],
};
exports.dropper_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Dropper",
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "dropperTurret_dreaded",
        },
        {
            POSITION: [4, 0, 0, 180, 360, 1],
            TYPE: "dropperTurret2_dreaded",
        },
    ],
};

exports.shockerTurret_dreaded = {
    PARENT: ["genericTank"],
    BODY: {
        FOV: 3,
    },
    HAS_NO_RECOIL: true,
    CONTROLLERS: [["spin", { independent: true, speed: 0.02 }]],
    SHAPE: 5,
    GUNS: [],
};
exports.shocker_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Shocker",
    GUNS: [],
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "shockerTurret_dreaded",
        },
    ],
};
for (let i = 0; i < 9; i++) {
    exports.shocker_dreaded.GUNS.push(
        {
            POSITION: [1, 3.5, 1, 0, 0, 40 * i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                    g.hurricane,
                    g.sniper,
                    g.assass,
                    g.pound, 
                    g.bitlesspower,
                    g.bitlesspower,
                    { reload: 2 }
                ]),
                TYPE: "bullet",
                ALT_FIRE: true
            },
        },
    )
};

//T3 Weapons

exports.blaster_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Blaster",
    DANGER: 6,
    BODY: {},
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [11.5, 10.5, 1.4, 4, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blaster]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: []
};
exports.sprayer_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Sprayer",
    DANGER: 6,
    BODY: {},
    GUNS: [
        {
            POSITION: [23, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.lowpower,
                    g.mach,
                    g.morerecoil,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: []
};
exports.minigun_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Minigun",
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.2
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [21, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 1 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 2 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: []
};
exports.hunter_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Hunter",
    BODY: {
        FOV: base.FOV * 1.25
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [24, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 12, 1, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: []
};
exports.rifle_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Rifle",
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.225
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [24, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: []
};
exports.destroyer_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Destroyer",
    DANGER: 6,
    BODY: {},
    GUNS: [
        {
            POSITION: [21, 14, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: []
};
exports.multishot_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Multishot",
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            POSITION: [4, 3, 1, 11, -3, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [4, 3, 1, 11, 3, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [4, 4, 1, 13, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 3, 1, 13, -1, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 3, 1, 13, 1, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 2, 1, 13, 2, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [15, 11.5, 1, 6, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.fake]),
                TYPE: "casing",
            },
        }, {
            POSITION: [8, 11.5, -1.3, 4, 0, 0, 0,],
        }
    ],
    TURRETS: []
};
exports.trio_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Trio",
    BODY: {
        FOV: base.FOV * 1.05
    },
    GUNS: [
        {
            POSITION: [18, 10, 1, 0, 5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 10, 1, 0, -5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: []
};
exports.submachine_dreaded = { //6 barrels
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Submachine",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.2,
    },
    GUNS: [{
        POSITION: [32, 2, 1, 0, -2.5, 0, 4 / 6 + 4,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//5
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 2.5, 0, 2 / 6 + 2,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//3
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 0, 0, 3 / 6 + 3,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//4
            TYPE: "bullet",
        },
    },
    {
        POSITION: [32, 2, 1, 0, -2.5, 0, 5 / 6 + 5,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//6
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 2.5, 0, 1 / 6 + 1,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//2
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 0, 0, 0,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//1
            TYPE: "bullet",
        },
    }, {
        POSITION: [6, 10.5, 1, 6.5, 0, 0, 0,],
    }, {
        POSITION: [4.5, 10.5, 1, 21.5, 0, 0, 0,],
    },
    ],
};
exports.assassin_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Assassin",
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.4
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [27, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0],
        },
    ],
    TURRETS: []
};
exports.overseer_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Overseer",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [7, 11, 1.3, 7, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.bitmorepower, g.bitmorepower, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [7, 11, 1.3, 7, 0, -90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.bitmorepower, g.bitmorepower, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
    ],
    TURRETS: []
};
exports.commander_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Commander",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 9.5, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 9.5, 1.3, 7, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 9.5, 1.3, 7, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
    ],
    TURRETS: []
};
exports.betaDirector_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Beta Director",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [9, 11, 1.3, 7, 0, 0, 0],
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6.7, 12.5, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over, g.pound, { size: 1.5, reload: 0.4, maxSpeed: 1.2 }]),
                TYPE: "betadrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 5,
            },
        },
    ],
    TURRETS: []
};
exports.spawner_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Spawner",
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [4.5, 10, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [1, 12, 1, 15, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 4,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                TYPE: "minion",
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 12, 1, 0, 0, 0, 0],
        },
    ],
    TURRETS: []
};

exports.bulwark_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Bulwark",
    BODY: {},
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [13, 8, 1, 0, 5.5, 185, 0],
        },
        {
            POSITION: [3, 9, 1.5, 13, 5.5, 185, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [13, 8, 1, 0, -5.5, 175, 0],
        },
        {
            POSITION: [3, 9, 1.5, 13, -5.5, 175, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.twin]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
    TURRETS: []
};
exports.beta_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Beta",
    BODY: {},
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [15, 16.5, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [5.5, 16.5, 1.5, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.destroy, g.megatrap, g.gigatrap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
    TURRETS: []
};
exports.engineer_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Engineer",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.15
    },
    GUNS: [
        {
            POSITION: [5, 11, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [3, 14, 1, 15.5, 0, 0, 0],
        },
        {
            POSITION: [2, 14, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 6,
                SHOOT_SETTINGS: combineStats([g.trap, g.block]),
                TYPE: "pillbox",
                SYNCS_SKILLS: true,
                DESTROY_OLDEST_CHILD: true,
            },
        },
        {
            POSITION: [4, 14, 1, 8, 0, 0, 0],
        },
    ],
    TURRETS: []
};
exports.caltrop_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Caltrop",
    DANGER: 6,
    BODY: {},
    GUNS: [
        {
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, 0, 0, 60, 0.5],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, 0, 0, 120, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, 0, 0, 180, 0.5],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, 0, 0, 240, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, 0, 0, 300, 0.5],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 300, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
    TURRETS: []
};
exports.carrier_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Carrier",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.3
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [7, 8, 0.6, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 8, 0.6, 7, 2, 30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 8, 0.6, 7, -2, -30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
    TURRETS: []
};
exports.battleboat_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Battleboat",
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.2
    },
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Guided",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 90, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: ["autoswarm"],
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Autonomous",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: ["autoswarm"],
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Autonomous",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 270, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Guided",
            },
        },
    ],
    TURRETS: []
};
exports.gunner_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Gunner",
    BODY: {},
    GUNS: [
        {
            POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: []
};

//T3 Bodies

exports.tripletTurret_dreaded = {
    PARENT: ["autoTankGun"],
    INDEPENDENT: true,
    BODY: {
        FOV: 1.2
    },
    GUNS: [
        {
            POSITION: [19, 10, 1, 0, 5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.triple]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 10, 1, 0, -5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.triple]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.triple]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.triplet_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Triplet",
    BODY: {},
    TURRETS: [
        {
            POSITION: [12.5, 0, 0, 180, 360, 1],
            TYPE: "tripletTurret_dreaded",
        },
    ],
};

exports.brigade_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Brigade",
    BODY: {
        SPEED: 1.15,
        DAMAGE: 1.85,
        HEALTH: 0.9
    },
    TURRETS: [
        {
            POSITION: [23, 0, 0, 0, 0, 0],
            TYPE: ["smasherBody", { COLOR: 9, SHAPE: 6, MIRROR_MASTER_ANGLE: true }],
        },
        {
            POSITION: [11.5, 0, 0, 180, 360, 1],
            TYPE: ["twinTurret_dreaded"],
        },
    ],
};
exports.palace_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Palace",
    BODY: {
        SPEED: 0.82,
        HEALTH: 3
    },
    TURRETS: [
        {
            POSITION: [17.5, 0, 0, 0, 360, 1],
            TYPE: ["hexagon", { COLOR: -1, MIRROR_MASTER_ANGLE: true }],
        },
        {
            POSITION: [17.5 * 0.8, 0, 0, 30, 360, 1],
            TYPE: ["hexagon", { COLOR: -1, MIRROR_MASTER_ANGLE: true }],
        },
    ],
};
exports.giant_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Giant",
    BODY: {
        SPEED: 0.9,
        HEALTH: 2.5,
        ACCLELERATION: 0.7
    },
    SIZE: 1.44,
    TURRETS: [
        {
            POSITION: [17, 0, 0, 0, 360, 1],
            TYPE: ["genericEntity", { COLOR: 16, MIRROR_MASTER_ANGLE: true }],
        },
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: ["genericEntity", { COLOR: -1, MIRROR_MASTER_ANGLE: true }],
        },
        {
            POSITION: [24, 0, 0, 0, 360, 0],
            TYPE: ["genericEntity", { COLOR: 16, MIRROR_MASTER_ANGLE: true }],
        },
    ],
};
exports.battleshipTurret_dreaded = {
    PARENT: ["autoTankGun"],
    INDEPENDENT: true,
    BODY: {
        FOV: 1
    },
    CONTROLLERS: ["nearestDifferentMaster"],
    AI: {
        NO_LEAD: true,
        SKYNET: true,
        FULL_VIEW: true,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.auto]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 11, 1.3, 7, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.auto]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 11, 1.3, 7, 0, -120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.auto]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
    ],
};
exports.battleship_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Battleship",
    BODY: {
        FOV: 1.2
    },
    TURRETS: [
        {
            POSITION: [11, 0, 0, 180, 360, 1],
            TYPE: "battleshipTurret_dreaded",
        },
    ],
};
exports.thorn_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Thorn",
    BODY: {
        SPEED: 1.225,
        DAMAGE: 2.75,
        HEALTH: 0.85
    },
    TURRETS: [
        {
            POSITION: [27, 0, 0, 0, 0, 0],
            TYPE: ["pentagon", { COLOR: 9, MIRROR_MASTER_ANGLE: true }],
        },
    ],
};
exports.basher_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "basher",
    BODY: {
        SPEED: 1.375,
        DAMAGE: 1.5,
        HEALTH: 0.75,
        FOV: 1.15
    },
    SIZE: 0.65,
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 0, 0],
            TYPE: ["smasherBody", { COLOR: 9, SHAPE: 6, MIRROR_MASTER_ANGLE: true }],
        },
    ],
};
exports.trailerTurret_dreaded = {
    PARENT: ["genericTank"],
    BODY: {
        FOV: 3,
    },
    HAS_NO_RECOIL: true,
    //CONTROLLERS: [["spin", { independent: true, speed: 0.02 }]],
    SHAPE: -3,
    GUNS: [
        {
            POSITION: [1, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.noRandom, g.twin, { recoil: 0.001, size: 2, speed: 0.001, maxSpeed: 0.001 }]),
                TYPE: "trap",
            },
        },
    ],
};
exports.trailer_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Trailer",
    TURRETS: [
        {
            POSITION: [6, 5.5, 0, 0, 360, 1],
            TYPE: "trailerTurret_dreaded",
        },
        {
            POSITION: [6, 5.5, 0, 120, 360, 1],
            TYPE: "trailerTurret_dreaded",
        },
        {
            POSITION: [6, 5.5, 0, 240, 360, 1],
            TYPE: "trailerTurret_dreaded",
        },
    ],
};
exports.blowerTurret_dreaded = {
    PARENT: ["genericTank"],
    BODY: {
        FOV: 3,
    },
    HAS_NO_RECOIL: true,
    CONTROLLERS: [["spin", { independent: true, speed: 0.015 }]],
    SHAPE: 5,
    GUNS: [],
};
exports.blower_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Blower",
    GUNS: [],
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "blowerTurret_dreaded",
        },
    ],
};
for (let i = 0; i < 9; i++) {
    exports.blower_dreaded.GUNS.push(
        {
            POSITION: [1, 5, 1, 0, 0, 40 * i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                    g.hurricane,
                    g.sniper,
                    g.assass,
                    g.pound,
                    g.bitlesspower,
                    g.bitlesspower,
                    g.pound,
                    g.morereload,
                    { reload: 1.75 }
                ]),
                TYPE: "bullet",
                ALT_FIRE: true
            },
        },
    )
};
exports.panicTurret_dreaded = {
    PARENT: ["genericTank"],
    BODY: {
        FOV: 3,
    },
    HAS_NO_RECOIL: true,
    CONTROLLERS: [["spin", { independent: true, speed: 0.02 }]],
    SHAPE: 6,
    GUNS: [],
};
exports.panic_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Panic",
    GUNS: [],
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "panicTurret_dreaded",
        },
    ],
};
for (let i = 0; i < 12; i++) {
    exports.panic_dreaded.GUNS.push(
        {
            POSITION: [1, 3.5, 1, 0, 0, 360 / 12 * i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                    g.hurricane,
                    g.sniper,
                    g.assass,
                    g.pound,
                    g.bitlesspower,
                    g.bitlesspower,
                    { reload: 2 }
                ]),
                TYPE: "bullet",
                ALT_FIRE: true
            },
        },
    )
};

//T4 Weapons

exports.annihilator_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Annihilator",
    DANGER: 7,
    BODY: {},
    GUNS: [
        {
            POSITION: [20.5, 19.5, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: []
};
exports.quadro_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Quadro",
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.05
    },
    GUNS: [
        {
            POSITION: [18, 6.5, 1, 0, 6, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.triple]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 6.5, 1, 0, -6, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.triple]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 6.5, 1, 0, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.triple]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 6.5, 1, 0, -4, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.triple]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: []
};
exports.nailgun_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Nailgun",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [19, 2, 1, 0, -2.5, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.nail,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.nail,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 2, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.nail,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5.5, 7, -1.8, 6.5, 0, 0, 0],
        },
    ],
    TURRETS: []
};
exports.vulcan_dreaded = { //8 barrels
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Vulcan",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.2,
    },
    GUNS: [{
        POSITION: [32, 2, 1, 0, -2.5, 0, 5 / 8 + 5,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//6
            TYPE: "bullet",
        },
    }, {
            POSITION: [32, 2, 1, 0, 2.5, 0, 3 / 8 + 3,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//4
                TYPE: "bullet",
            },
        }, {
            POSITION: [32, 2, 1, 0, 0, 0, 4 / 8 + 4,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//5
                TYPE: "bullet",
            },
        },
        {
            POSITION: [32, 2, 1, 0, -4, 0, 6 / 8 + 6,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//7
                TYPE: "bullet",
            },
        }, {
            POSITION: [32, 2, 1, 0, 4, 0, 2 / 8 + 2,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//3
                TYPE: "bullet",
            },
        }, {
            POSITION: [32, 2, 1, 0, -2.5, 0, 7 / 8 + 7,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//8
                TYPE: "bullet",
            },
        }, {
            POSITION: [32, 2, 1, 0, 2.5, 0, 1 / 8 + 1,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//2
                TYPE: "bullet",
            },
        }, {
            POSITION: [32, 2, 1, 0, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//1
                TYPE: "bullet",
            },
        }, {
            POSITION: [6, 13.2, 1, 6.5, 0, 0, 0,],
        }, {
            POSITION: [4.5, 13.2, 1, 21.5, 0, 0, 0,],
        },
    ],
};
exports.shotgun_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Shotgun",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            POSITION: [4, 3, 1, 11, -3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [4, 3, 1, 11, 3, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [4, 4, 1, 13, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 4, 1, 12, -1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 4, 1, 11, 1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 3, 1, 13, -1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [1, 3, 1, 13, 1, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [1, 2, 1, 13, 2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [1, 2, 1, 13, -2, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [15, 14, 1, 6, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [8, 14, -1.3, 4, 0, 0, 0],
        },
    ],
    TURRETS: []
};
exports.overpowerer_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Overpowerer",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            POSITION: [4, 3, 1, 11, -3, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.mach2]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [4, 3, 1, 11, 3, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.mach2]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [4, 4, 1, 13, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.mach2]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 3, 1, 13, -1, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.mach2]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 3, 1, 13, 1, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.mach2]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 2, 1, 13, 2, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.mach2]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [10.5, 11.5, 1.3, 11.5, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.fake, g.mach2]),
                TYPE: "casing",
            },
        }, {
            POSITION: [7.5, 11.5, -1.3, 4, 0, 0, 0,],
        }
    ],
    TURRETS: []
};
exports.slosher_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Slosher",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            POSITION: [4, 3, 1, 11, -3, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [4, 3, 1, 11, 3, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [4, 3.5, 1, 13, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 3.5, 1, 13, -1, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 3, 1, 13, 1, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 2.5, 1, 13, 2, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [13, 13.5, 1.4, 4, 0, 0, 0,],
        }, {
            POSITION: [3, 14.5 * 1.4, 1.1, 17.5, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.fake, g.blaster, g.slosher]),
                TYPE: "casing",
            },
        }, 
    ],
    TURRETS: []
};
exports.mechagun_dreaded = {
    LABEL: "",
    BODY: {
        FOV: 1
    },
    COLOR: 16,
    GUNS: [{
        POSITION: [8, 4, 1, 18, 2, 0, 2 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mecha]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [8, 4, 1, 18, -2, 0, 1 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mecha]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [9.5, 4, 1, 18, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mecha]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [13, 10, 1, 5, 0, 0, 0]
    }]
};
exports.mecha_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Mecha",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1
    },
    TURRETS: [{
        POSITION: [15, 0, 12, 0, 90, 0],
        TYPE: "mechagun_dreaded"
    }, {
        POSITION: [15, 0, -12, 0, 90, 0],
        TYPE: "mechagun_dreaded"
    }]
};
exports.ranger_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Ranger",
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.55
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [32, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0],
        },
    ],
    TURRETS: []
};
exports.dual_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Dual",
    BODY: {
        FOV: base.FOV * 1.25
    },
    GUNS: [
        {
            POSITION: [18, 7, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
                TYPE: "bullet",
                LABEL: "Small",
            },
        },
        {
            POSITION: [18, 7, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
                TYPE: "bullet",
                LABEL: "Small",
            },
        },
        {
            POSITION: [16, 8.5, 1, 0, 5.5, 0, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 8.5, 1, 0, -5.5, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: []
};
exports.enforcer_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Enforcer",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.43
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [23, 12, 1, 0, 0, 0, 0],
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [27, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.rifle]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 7, -1.4, 8, 0, 0, 0],
        },
    ],
    TURRETS: []
};
exports.overlord_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Overlord",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [7, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.bitmorepower, g.bitmorepower, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [7, 11, 1.3, 7, 0, -120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.bitmorepower, g.bitmorepower, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [7, 11, 1.3, 7, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.bitmorepower, g.bitmorepower, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
    ],
    TURRETS: []
};
exports.master_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Master",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 9.5, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 9.5, 1.3, 7, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 9.5, 1.3, 7, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 9.5, 1.3, 7, 0, -90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
    ],
    TURRETS: []
};
exports.factory_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Factory",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5, 11, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [2, 14, 1, 15.5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory]),
                TYPE: "minion",
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 6
            },
        },
        {
            POSITION: [12, 14, 1, 0, 0, 0, 0],
        },
    ],
    TURRETS: []
};
exports.betaSpawner_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Beta Spawner",
    DANGER: 6,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [4.5, 12, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [3, 12, -0.7, 15, 0, 0, 0],
        },
        {
            POSITION: [1.5, 14, 1.1, 15, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 3,
                SHOOT_SETTINGS: combineStats([g.factory, g.powerspawn]),
                TYPE: "betaMinion",
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 14, -1.3, 0, 0, 0, 0],
        },
    ],
    TURRETS: []
};
exports.alphaDirector_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Alpha Director",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [11, 12, 1.2, 7, 0, 0, 0],
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [9, 14.5, 1.3, 7, 0, 0, 0],
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6.7, 16, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over, g.pound, g.destroy, g.morespeed, { size: 2, reload: 0.4, maxSpeed: 1.25 }]),
                TYPE: "alphadrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 2,
            },
        },
    ],
    TURRETS: []
};
exports.frigate_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Frigate",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.2
    },
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Guided",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: ["autoswarm"],
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Autonomous",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: ["autoswarm"],
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Autonomous",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 120, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Guided",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: ["autoswarm"],
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Autonomous",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 240, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Guided",
            },
        },
    ],
    TURRETS: []
};
exports.alpha_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Alpha",
    DANGER: 6,
    BODY: {},
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [17, 20, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [5.5, 20, 1.4, 17, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.destroy, g.megatrap, g.gigatrap, g.alpha]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
    TURRETS: []
};
exports.trapfield_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Trapfield",
    DANGER: 7,
    BODY: {},
    GUNS: [
        {
            POSITION: [15, 7, 1, 0, 0, 45, 0.5],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 45, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, 0, 0, 135, 0.5],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 135, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, 0, 0, -45, 0.5],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, -45, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, 0, 0, -135, 0.5],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, -135, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, 0, 0, 90, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, 0, 0, 270, 0],
        },
        {
            POSITION: [3, 7, 1.7, 15, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
    TURRETS: []
};

//T4 Bodies

exports.quadrupletTurret_dreaded = {
    PARENT: ["autoTankGun"],
    INDEPENDENT: true,
    BODY: {
        FOV: 1.2
    },
    GUNS: [
        {
            POSITION: [18, 6.5, 1, 0, 6.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.triple]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 6.5, 1, 0, -6.5, 0, 0.75],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.triple]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 6.5, 1, 0, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.triple]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 6.5, 1, 0, -4, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.triple]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.quadruplet_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Quadruplet",
    BODY: {
        SPEED: 0.95
    },
    TURRETS: [
        {
            POSITION: [14, 0, 0, 180, 360, 1],
            TYPE: "quadrupletTurret_dreaded",
        },
    ],
};
exports.ziggurat_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Ziggurat",
    BODY: {
        SPEED: 0.8,
        HEALTH: 4
    },
    TURRETS: [
        {
            POSITION: [16, 0, 0, 0, 360, 1],
            TYPE: ["pentagon", { COLOR: -1, SHAPE: 7, MIRROR_MASTER_ANGLE: true }],
        },
        {
            POSITION: [16 * 0.72, 0, 0, 180, 360, 1],
            TYPE: ["pentagon", { COLOR: -1, SHAPE: 7, MIRROR_MASTER_ANGLE: true }],
        },
        {
            POSITION: [16 * 0.72 * 0.72, 0, 0, 0, 360, 1],
            TYPE: ["pentagon", { COLOR: -1, SHAPE: 7, MIRROR_MASTER_ANGLE: true }],
        },
    ],
};
exports.slammer_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Slammer",
    BODY: {
        SPEED: 0.9,
        HEALTH: 3,
        ACCLELERATION: 0.6
    },
    SIZE: 1.65,
    TURRETS: [
        {
            POSITION: [18, 0, 0, 0, 360, 1],
            TYPE: ["genericEntity", { COLOR: 16, MIRROR_MASTER_ANGLE: true }],
        },
        {
            POSITION: [14, 0, 0, 0, 360, 1],
            TYPE: ["genericEntity", { COLOR: -1, MIRROR_MASTER_ANGLE: true }],
        },
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: ["genericEntity", { COLOR: 16, MIRROR_MASTER_ANGLE: true }],
        },
        {
            POSITION: [24, 0, 0, 0, 360, 0],
            TYPE: ["genericEntity", { COLOR: 16, MIRROR_MASTER_ANGLE: true }],
        },
    ],
};
exports.careener_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Careener",
    BODY: {
        SPEED: 1.475,
        DAMAGE: 1.5,
        HEALTH: 0.675,
        FOV: 1.3
    },
    SIZE: 0.45,
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 0, 0],
            TYPE: ["smasherBody", { COLOR: 9, SHAPE: 6, MIRROR_MASTER_ANGLE: true }],
        },
    ],
};
exports.mothershipTurret_dreaded = {
    PARENT: ["autoTankGun"],
    INDEPENDENT: true,
    BODY: {
        FOV: 1
    },
    CONTROLLERS: ["nearestDifferentMaster"],
    AI: {
        NO_LEAD: true,
        SKYNET: true,
        FULL_VIEW: true,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.auto]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 11, 1.3, 7, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.auto]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 11, 1.3, 7, 0, -90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.auto]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 11, 1.3, 7, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.auto]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
    ],
};
exports.mothership_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Mothership",
    BODY: {
        FOV: 1.25
    },
    TURRETS: [
        {
            POSITION: [11, 0, 0, 180, 360, 1],
            TYPE: "mothershipTurret_dreaded",
        },
    ],
};
exports.splattererTurret_dreaded = {
    PARENT: ["genericTank"],
    BODY: {
        FOV: 3,
    },
    HAS_NO_RECOIL: true,
    CONTROLLERS: [["spin", { independent: true, speed: 0.012 }]],
    SHAPE: 5,
    GUNS: [],
};
exports.splatterer_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Splatterer",
    GUNS: [],
    TURRETS: [
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "splattererTurret_dreaded",
        },
    ],
};
for (let i = 0; i < 9; i++) {
    exports.splatterer_dreaded.GUNS.push(
        {
            POSITION: [1, 6.5, 1, 0, 0, 40 * i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                    g.hurricane,
                    g.sniper,
                    g.assass,
                    g.pound,
                    g.bitlesspower,
                    g.bitlesspower,
                    g.pound,
                    g.destroy,
                    g.morereload,
                    g.morereload,
                    g.bitlesspower,
                    { reload: 1.65 }
                ]),
                TYPE: "bullet",
                ALT_FIRE: true
            },
        },
    )
};
exports.disasterTurret_dreaded = {
    PARENT: ["genericTank"],
    BODY: {
        FOV: 3,
    },
    HAS_NO_RECOIL: true,
    CONTROLLERS: [["spin", { independent: true, speed: 0.02 }]],
    SHAPE: 7,
    GUNS: [],
};
exports.disaster_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Disaster",
    GUNS: [],
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "disasterTurret_dreaded",
        },
    ],
};
for (let i = 0; i < 18; i++) {
    exports.disaster_dreaded.GUNS.push(
        {
            POSITION: [1, 3.5, 1, 0, 0, 360 / 18 * i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                    g.hurricane,
                    g.sniper,
                    g.assass,
                    g.pound,
                    g.bitlesspower,
                    g.bitlesspower,
                    { reload: 2 }
                ]),
                TYPE: "bullet",
                ALT_FIRE: true
            },
        },
    )
};
exports.saw_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Saw",
    BODY: {
        SPEED: 1.3,
        DAMAGE: 3.25,
        HEALTH: 0.8,
        REGEN: 0.85
    },
    TURRETS: [
        {
            POSITION: [30, 0, 0, 45, 0, 0],
            TYPE: ["square", { COLOR: 9, MIRROR_MASTER_ANGLE: true }],
        },
    ],
};

//T5 Weapons

exports.devastator_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Devastator",
    DANGER: 7,
    BODY: {},
    GUNS: [
        {
            POSITION: [22.5, 19.5 * 1.3, -1 / 1.3, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni, g.pound]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: []
};
exports.quinto_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Quinto",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [16, 10, 1, 0, -5, 0, 0.667],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [16, 10, 1, 0, 5, 0, 0.667,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [19, 10, 1, 0, -3, 0, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [19, 10, 1, 0, 3, 0, 0.333],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: []
};
exports.stapler_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Stapler",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.15
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [17, 2, 1, 0, -4.25, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.nail,
                    g.triple
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [17, 2, 1, 0, 4.25, 0, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.nail,
                    g.triple
                ]),
                TYPE: "bullet",
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [19, 2, 1, 0, -2.5, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.nail,
                    g.triple
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 2, 1, 0, 2.5, 0, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.nail,
                    g.triple
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 2, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.gunner,
                    g.power,
                    g.twin,
                    g.nail,
                    g.triple
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [6.5, 10.5, -1.5, 5.5, 0, 0, 0],
        },
    ],
    TURRETS: []
};
exports.M61_dreaded = { //12 barrels
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "M-61",
    DANGER: 8,
    BODY: {
        FOV: base.FOV * 1.2,
    },
    GUNS: [{
        POSITION: [32, 2, 1, 0, -2.5, 0, 7 / 12 + 7,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//8
            TYPE: "bullet",
        },
    }, {
            POSITION: [32, 2, 1, 0, 0, 0, 6 / 12 + 6,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//7
                TYPE: "bullet",
            },
        }, {
            POSITION: [32, 2, 1, 0, 2.5, 0, 5 / 12 + 5,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//9
                TYPE: "bullet",
            },
        }, {
            POSITION: [32, 2, 1, 0, -4.5, 0, 8 / 12 + 8,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//6
                TYPE: "bullet",
            },
        }, {
            POSITION: [32, 2, 1, 0, 4.5, 0, 4 / 12 + 4,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//5
                TYPE: "bullet",
            },
        }, { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [32, 2, 1, 0, -6, 0, 9 / 12 + 9,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//10
                TYPE: "bullet",
            },
        }, {
            POSITION: [32, 2, 1, 0, 6, 0, 3 / 12 + 3,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//4
                TYPE: "bullet",
            },
        }, {
            POSITION: [32, 2, 1, 0, -4.5, 0, 10 / 12 + 10,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//11
                TYPE: "bullet",
            },
        }, {
            POSITION: [32, 2, 1, 0, 4.5, 0, 2 / 12 + 2,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//3
                TYPE: "bullet",
            },
        }, {
            POSITION: [32, 2, 1, 0, -2.5, 0, 11 / 12 + 11,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//12
                TYPE: "bullet",
            },
        }, {
            POSITION: [32, 2, 1, 0, 2.5, 0, 1 / 12 + 1,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//2
                TYPE: "bullet",
            },
        }, {
            POSITION: [32, 2, 1, 0, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom]),//1
                TYPE: "bullet",
            },
        }, {
            POSITION: [6, 16, 1, 6.5, 0, 0, 0,],
        }, {
            POSITION: [4.5, 16, 1, 21.5, 0, 0, 0,],
        },
    ],
};
exports.assaultMechagun_dreaded = {
    LABEL: "",
    BODY: {
        FOV: 1
    },
    COLOR: 16,
    GUNS: [{
        POSITION: [4, 3, 1, 11, -3, 0, 0,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.mach2, g.twin]),
            TYPE: "bullet",
        },
    }, {
            POSITION: [4, 3, 1, 11, 3, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.mach2, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [4, 4, 1, 13, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.mach2, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 3, 1, 13, -1, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.mach2, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 3, 1, 13, 1, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.mach2, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 2, 1, 13, 2, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.mach2, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [10.5, 11.5, 1.3, 11.5, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.fake, g.mach2, g.twin]),
                TYPE: "casing",
            },
        }, {
            POSITION: [7.5, 11.5, -1.3, 4, 0, 0, 0,],
        }
    ]
};
exports.assaultMechagun2_dreaded = {
    LABEL: "",
    BODY: {
        FOV: 1
    },
    COLOR: 16,
    GUNS: [{
        POSITION: [4, 3, 1, 11, -3, 0, 0.5,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.mach2, g.auto]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [4, 3, 1, 11, 3, 0, 0.5,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.mach2, g.auto]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [4, 4, 1, 13, 0, 0, 0.5,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.mach2, g.auto]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [1, 3, 1, 13, -1, 0, 0.5,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.mach2, g.auto]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [1, 3, 1, 13, 1, 0, 0.5,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.mach2, g.auto]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [1, 2, 1, 13, 2, 0, 0.5,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.mach2, g.auto]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [10.5, 11.5, 1.3, 11.5, 0, 0, 0.5,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.fake, g.mach2, g.auto]),
            TYPE: "casing",
        },
    }, {
        POSITION: [7.5, 11.5, -1.3, 4, 0, 0, 0.5,],
    }
    ]
};
exports.assaultMecha_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Assault Mecha",
    DANGER: 8,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [11.5, 10.5, 1.4, 4, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blaster, g.flank, g.tri, g.halfrange, g.lotsmorrecoil]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: [{
        POSITION: [15, 0, 12, 0, 90, 0],
        TYPE: "assaultMechagun_dreaded"
    }, {
        POSITION: [15, 0, -12, 0, 90, 0],
        TYPE: "assaultMechagun2_dreaded"
    }]
};
exports.precisionMechagun_dreaded = {
    LABEL: "",
    BODY: {
        FOV: 3
    },
    COLOR: 16,
    CONTROLLERS: ["onlyAcceptInArc", "nearestDifferentMaster"],
    INDEPENDENT: true,
    GUNS: [
        {
            POSITION: [14, 10, 1, 8, 0, 0, 0,],
        }, { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [26, 7, 1, 0, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniper, g.sniper, g.pound, g.lessreload, g.auto]),
                TYPE: "bullet",
                COLOR: 12
            },
        }, 
        {
            POSITION: [8, 10, -1.2, 5, 0, 0, 0],
            PROPERTIES: {
                COLOR: 12
            }
        }
    ],
    TURRETS: [{
        POSITION: [15, 0, 0, 0, 360, 1],
        TYPE: "precisionProp"
    }]
};
exports.precisionMecha_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Precision Mecha",
    DANGER: 9,
    BODY: {
        FOV: base.FOV * 1.25
    },
    TURRETS: [
        {
        POSITION: [15, 0, 12, 0, 90, 0],
        TYPE: "mechagun_dreaded"
    }, {
        POSITION: [15, 0, -12, 0, 90, 0],
        TYPE: "mechagun_dreaded"
    }, {
        POSITION: [12, 12, 0, 90, 190, 0],
        TYPE: "precisionMechagun_dreaded"
    }, {
        POSITION: [12, 12, 0, -90, 190, 0],
        TYPE: "precisionMechagun_dreaded"
    }]
};
exports.vindicator_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Vindicator",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.8
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [37, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.morespeed]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [5, 8, -1.4, 8, 0, 0, 0],
        },
    ],
    TURRETS: []
};
exports.concatinator_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Concatinator",
    DANGER: 8,
    BODY: {
        FOV: base.FOV * 1.2
    },
    GUNS: [
        { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [15 - 0.6, 5, 1, -1.5, -5, 0, 0.45,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda, g.arquebus, g.arty, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [13.5 - 0.6, 7.5, 1, -1.5, -5, 0, 0.6,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda, g.arquebus, g.arty, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [12 - 0.6, 10, 1, -1.5, -5, 0, 0.75,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda, g.arquebus, g.arty, g.twin]),
                TYPE: "bullet",
            },
        }, { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [15 - 0.6, 5, 1, -1.5, 5, 0, 0.45,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda, g.arquebus, g.arty, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [13.5 - 0.6, 7.5, 1, -1.5, 5, 0, 0.6,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda, g.arquebus, g.arty, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [12 - 0.6, 10, 1, -1.5, 5, 0, 0.75,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda, g.arquebus, g.arty, g.twin]),
                TYPE: "bullet",
            },
        }, { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [17 + 1.3 * 4, 8.5 - 1.5 * 4, 1, 0, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.hunter2, g.preda, g.arquebus, g.arty, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [17 + 1.3 * 3, 8.5 - 1.5 * 3, 1, 0, 0, 0, 0.1,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.hunter2, g.preda, g.arquebus, g.arty, g.twin]),
                TYPE: "bullet",
            },
        }, { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [17 + 1.3 * 2, 8.5 - 1.5 * 2, 1, 0, 0, 0, 0.2,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda, g.arquebus, g.arty, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [17 + 1.3 * 1, 8.5 - 1.5 * 1, 1, 0, 0, 0, 0.3,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda, g.arquebus, g.arty]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [17, 8.5, 1, 0, 0, 0, 0.4,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda, g.arquebus, g.arty]),
                TYPE: "bullet",
            },
        }, {/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 3.4, 1.5, 8, 3.5, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sniper, g.gunner, g.arty]),
                TYPE: "bullet",
                LABEL: 'Gatling Gun'
            },
        }, {
            POSITION: [8, 3.4, 1.5, 8, -3.5, 0, 0.5,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sniper, g.gunner, g.arty]),
                TYPE: "bullet",
                LABEL: 'Gatling Gun'
            },
        },
    ],
    TURRETS: []
};
exports.marksman_dreaded = makeHybrid(exports.enforcer_dreaded, "Marksman");
exports.mayhem_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Mayhem",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            POSITION: [4, 3, 1, 11, -3, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.twin, g.mach, g.puregunner, g.fast, g.power, g.doublereload, g.mach2, { size: 0.5, range: 0.5, spray: 0.6 }]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [4, 3, 1, 11, 3, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.twin, g.mach, g.puregunner, g.fast, g.power, g.doublereload, g.mach2, { size: 0.5, range: 0.5, spray: 0.6 }]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [4, 4, 1, 13, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.twin, g.mach, g.puregunner, g.fast, g.power, g.doublereload, g.mach2, { size: 0.5, range: 0.5, spray: 0.6 }]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 3, 1, 13, -1, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.twin, g.mach, g.puregunner, g.fast, g.power, g.doublereload, g.mach2, { size: 0.5, range: 0.5, spray: 0.6 }]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 3, 1, 13, 1, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.twin, g.mach, g.puregunner, g.fast, g.power, g.doublereload, g.mach2, { size: 0.5, range: 0.5, spray: 0.6 }]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 2, 1, 13, 2, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.twin, g.mach, g.puregunner, g.fast, g.power, g.doublereload, g.mach2, { size: 0.5, range: 0.5, spray: 0.6 }]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [10.5, 10.5, 1.2, 11.5, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.fake, g.twin, g.mach, g.puregunner, g.fast, g.power, g.doublereload, g.mach2, { size: 0.5, range: 0.5, spray: 0.6 }]),
                TYPE: "casing",
            },
        }, {
            POSITION: [7.5, 14.5, -1.2, 4, 0, 0, 0,],
        }
    ],
    TURRETS: []
};
exports.triSlosher_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Tri-Slosher",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            POSITION: [4, 3, 1, 11, -3 + 2, 20, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 3.5, 1, 13, -1 + 2, 20, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 3, 1, 13, 1 + 2, 20, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 2.5, 1, 13, 2 + 2, 20, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [10, 13.5, 1.4, 4, 2, 20, 0,],
        }, {
            POSITION: [3, 14.5 * 1.4, 1.1, 14.5, 2, 20, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.fake, g.blaster, g.slosher, g.twin]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [4, 3, 1, 11, -3 - 2, -20, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 3.5, 1, 13, -1 - 2, -20, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 3, 1, 13, 1 - 2, -20, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 2.5, 1, 13, 2 - 2, -20, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [10, 13.5, 1.4, 4, -2, -20, 0,],
        }, {
            POSITION: [3, 14.5 * 1.4, 1.1, 14.5, -2, -20, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.fake, g.blaster, g.slosher, g.twin]),
                TYPE: "casing",
            },
        },
        {
            POSITION: [4, 3, 1, 11, -3, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [4, 3, 1, 11, 3, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [4, 3.5, 1, 13, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 3.5, 1, 13, -1, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 3, 1, 13, 1, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 2.5, 1, 13, 2, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [13, 13.5, 1.4, 4, 0, 0, 0,],
        }, {
            POSITION: [3, 14.5 * 1.4, 1.1, 17.5, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.fake, g.blaster, g.slosher, g.twin]),
                TYPE: "casing",
            },
        },
    ],
    TURRETS: []
};
exports.explosher_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Explosher",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            POSITION: [4, 3, 1, 11, -3, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher]),
                TYPE: "explosher_explosiveBullet",
            },
        }, {
            POSITION: [4, 3, 1, 11, 3, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher]),
                TYPE: "explosher_explosiveBullet",
            },
        }, {
            POSITION: [4, 3.5, 1, 13, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher]),
                TYPE: "explosher_explosiveBullet",
            },
        }, {
            POSITION: [1, 3.5, 1, 13, -1, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher]),
                TYPE: "explosher_explosiveBullet",
            },
        }, {
            POSITION: [1, 3, 1, 13, 1, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher]),
                TYPE: "explosher_explosiveBullet",
            },
        }, {
            POSITION: [1, 2.5, 1, 13, 2, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.blaster, g.slosher]),
                TYPE: "explosher_explosiveBullet",
            },
        }, {
            POSITION: [13, 13.5, 1.4, 4, 0, 0, 0,],
        }, {
            POSITION: [3, 12.5 * 1.4, 1.1, 19, 0, 0, 0,],
            PROPERTIES: {
                COLOR: 12
            }
        }, {
            POSITION: [3, 14.5 * 1.4, 1.1, 17.5, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.fake, g.blaster, g.slosher]),
                TYPE: "casing",
            },
        },
    ],
    TURRETS: []
};
exports.overczar_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Overczar",
    DANGER: 8,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [7, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.bitmorepower, g.bitmorepower, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [7, 11, 1.3, 7, 0, -90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.bitmorepower, g.bitmorepower, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [7, 11, 1.3, 7, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.bitmorepower, g.bitmorepower, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [7, 11, 1.3, 7, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.bitmorepower, g.bitmorepower, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
    ],
    TURRETS: []
};
exports.emperor_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Emperor",
    DANGER: 8,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 9.5, 1.3, 7, 0, 300, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 9.5, 1.3, 7, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 9.5, 1.3, 7, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 9.5, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 9.5, 1.3, 7, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 9.5, 1.3, 7, 0, -120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
    ],
    TURRETS: []
};
exports.industry_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Industry",
    DANGER: 8,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        { /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [6, 12.5, 1, 10.5, 0, 0, 0,],
        }, {
            POSITION: [2.5, 16, 1, 16.25, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.indus]),
                TYPE: "minion",
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 8
            },
        }, {
            POSITION: [6.75, 16, 1, 6, 0, 0, 0,],
        }
    ],
    TURRETS: []
};
exports.omegaDirector_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Omega Director",
    DANGER: 8,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [12, 12, 1.2, 7, 0, 0, 0],
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [10.5, 15.5, 1.2, 7, 0, 0, 0],
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [10, 18, 1.3, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over, g.pound, g.destroy, g.morespeed, g.mehdrone, { size: 3, reload: 0.4, maxSpeed: 1.25 }]),
                TYPE: "omegadrone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 1,
            },
        },
    ],
    TURRETS: []
};
exports.alphaSpawner_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Alpha Spawner",
    DANGER: 7,
    BODY: {
        FOV: base.FOV * 1.1
    },
    GUNS: [
        {
            /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [4.5, 14, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [5, 11, -0.7, 15.5, 0, 0, 0],
        },
        {
            POSITION: [3.5, 14, -0.7, 15.5, 0, 0, 0],
        },
        {
            POSITION: [2, 16, 1.1, 15, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 1,
                SHOOT_SETTINGS: combineStats([g.factory, g.powerspawn, g.bigdrone, { size: 0.875 }]),
                TYPE: "alphaMinion",
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                WAIT_TO_CYCLE: true
            },
        },
        {
            POSITION: [11.5, 16, -1.2, 0, 0, 0, 0],
        },
    ],
    TURRETS: []
};
exports.yamato_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Yamato",
    DANGER: 8,
    BODY: {
        FOV: base.FOV * 1.2
    },
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Guided",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 90, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: ["autoswarm"],
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Autonomous",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: ["autoswarm"],
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Autonomous",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 270, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Guided",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Guided",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: ["autoswarm"],
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Autonomous",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: ["autoswarm"],
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Autonomous",
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                LABEL: "Guided",
            },
        },
    ],
    TURRETS: []
};
exports.labyrinth_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Labyrinth",
    DANGER: 8,
    BODY: {},
    GUNS: [],
    TURRETS: []
};
for (let i = 0; i < 5; i++) {
    exports.labyrinth_dreaded.GUNS.push(
        {
            POSITION: [15, 6, 1, 0, 0, 360 / 5 * (i + 0.5), 0.5],
        },
        {
            POSITION: [3, 6, 1.55, 15, 0, 360 / 5 * (i + 0.5), 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    )
};
for (let i = 0; i < 5; i++) {
    exports.labyrinth_dreaded.GUNS.push(
        {
            POSITION: [15, 6, 1, 0, 0, 360 / 5 * i, 0],
        },
        {
            POSITION: [3, 6, 1.55, 15, 0, 360 / 5 * i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    )
};

//T5 Bodies

exports.quintupletTurret_dreaded = {
    PARENT: ["autoTankGun"],
    INDEPENDENT: true,
    BODY: {
        FOV: 1.2
    },
    GUNS: [
        {
            POSITION: [16, 10, 1, 0, 5, 0, 0.66],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.triple]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 10, 1, 0, -5, 0, 0.66],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.triple]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 10, 1, 0, 3, 0, 0.33],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.triple]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 10, 1, 0, -3, 0, 0.33],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.triple]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.triple]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.quintuplet_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Quintuplet",
    BODY: {
        SPEED: 0.9
    },
    TURRETS: [
        {
            POSITION: [14, 0, 0, 180, 360, 1],
            TYPE: "quintupletTurret_dreaded",
        },
    ],
};
exports.earthquake_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Earthquake",
    BODY: {
        SPEED: 0.9,
        HEALTH: 4,
        ACCLELERATION: 0.45
    },
    SIZE: 2,
    TURRETS: [
        {
            POSITION: [18.5, 0, 0, 0, 360, 1],
            TYPE: ["genericEntity", { COLOR: 16, MIRROR_MASTER_ANGLE: true }],
        },
        {
            POSITION: [15, 0, 0, 0, 360, 1],
            TYPE: ["genericEntity", { COLOR: -1, MIRROR_MASTER_ANGLE: true }],
        },
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: ["genericEntity", { COLOR: 16, MIRROR_MASTER_ANGLE: true }],
        },
        {
            POSITION: [10, 0, 0, 0, 360, 1],
            TYPE: ["genericEntity", { COLOR: -1, MIRROR_MASTER_ANGLE: true }],
        },
        {
            POSITION: [24, 0, 0, 0, 360, 0],
            TYPE: ["genericEntity", { COLOR: 16, MIRROR_MASTER_ANGLE: true }],
        },
    ],
};
exports.pecker_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Pecker",
    BODY: {
        SPEED: 1.6,
        DAMAGE: 1.5,
        HEALTH: 0.5,
        FOV: 1.45
    },
    SIZE: 0.35,
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 0, 0],
            TYPE: ["smasherBody", { COLOR: 9, SHAPE: 6, MIRROR_MASTER_ANGLE: true }],
        },
    ],
};
exports.flagshipTurret_dreaded = {
    PARENT: ["autoTankGun"],
    INDEPENDENT: true,
    BODY: {
        FOV: 1
    },
    CONTROLLERS: ["nearestDifferentMaster"],
    AI: {
        NO_LEAD: true,
        SKYNET: true,
        FULL_VIEW: true,
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 11, 1.3, 7, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.auto]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 11, 1.3, 7, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.auto]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 11, 1.3, 7, 0, -60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.auto]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 11, 1.3, 7, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.auto]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 11, 1.3, 7, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.auto]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [8, 11, 1.3, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.auto]),
                TYPE: "drone",
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                MAX_CHILDREN: 4,
            },
        },
    ],
};
exports.flagship_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Flagship",
    BODY: {
        FOV: 1.3
    },
    TURRETS: [
        {
            POSITION: [11, 0, 0, 180, 360, 1],
            TYPE: "flagshipTurret_dreaded",
        },
    ],
};
exports.omniciderTurret_dreaded = {
    PARENT: ["genericTank"],
    BODY: {
        FOV: 3,
    },
    HAS_NO_RECOIL: true,
    CONTROLLERS: [["spin", { independent: true, speed: 0.009 }]],
    SHAPE: 5,
    GUNS: [],
};
exports.omnicider_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Omnicider",
    GUNS: [],
    TURRETS: [
        {
            POSITION: [15, 0, 0, 0, 360, 1],
            TYPE: "omniciderTurret_dreaded",
        },
    ],
};
for (let i = 0; i < 9; i++) {
    exports.omnicider_dreaded.GUNS.push(
        {
            POSITION: [1, 9, 1, 0, 0, 40 * i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                    g.hurricane,
                    g.sniper,
                    g.assass,
                    g.pound,
                    g.bitlesspower,
                    g.bitlesspower,
                    g.pound,
                    g.destroy,
                    g.pound,
                    g.morereload,
                    g.morereload,
                    g.morereload,
                    g.fast,
                    g.bitlesspower,
                    g.bitlesspower,
                    { reload: 1.5 }
                ]),
                TYPE: "bullet",
                ALT_FIRE: true
            },
        },
    )
};
exports.overflowTurret_dreaded = {
    PARENT: ["genericTank"],
    BODY: {
        FOV: 3,
    },
    HAS_NO_RECOIL: true,
    CONTROLLERS: [["spin", { independent: true, speed: 0.02 }]],
    SHAPE: 8,
    GUNS: [],
};
exports.overflow_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Overflow",
    GUNS: [],
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "overflowTurret_dreaded",
        },
    ],
};
for (let i = 0; i < 24; i++) {
    exports.overflow_dreaded.GUNS.push(
        {
            POSITION: [1, 3.5, 1, 0, 0, 360 / 24 * i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                    g.hurricane,
                    g.sniper,
                    g.assass,
                    g.pound,
                    g.bitlesspower,
                    g.bitlesspower,
                    { reload: 2 }
                ]),
                TYPE: "bullet",
                ALT_FIRE: true
            },
        },
    )
};
exports.chainsaw_dreaded = {
    PARENT: ["genericMultiTree_dreaded"],
    LABEL: "Chainsaw",
    BODY: {
        SPEED: 1.4,
        DAMAGE: 4,
        HEALTH: 0.72,
        REGEN: 0.75
    },
    TURRETS: [
        {
            POSITION: [24, 0, 0, 30, 0, 0],
            TYPE: ["trap", { COLOR: 9, MIRROR_MASTER_ANGLE: true }],
        },
        {
            POSITION: [24, 0, 0, 90, 0, 0],
            TYPE: ["trap", { COLOR: 9, MIRROR_MASTER_ANGLE: true }],
        },
        {
            POSITION: [22.5, 0, 0, 0, 0, 0],
            TYPE: ["triangle", { COLOR: 9, MIRROR_MASTER_ANGLE: true }],
        },
        {
            POSITION: [22.5, 0, 0, 60, 0, 0],
            TYPE: ["triangle", { COLOR: 9, MIRROR_MASTER_ANGLE: true }],
        },
    ],
};

// Weapons tree
exports.multiTreeWeapon.UPGRADES_TIER_1 = ["node_dreaded"];

exports.node_dreaded.UPGRADES_TIER_1 = ["mono_dreaded", "watcher_dreaded", "trapper_dreaded"];
    exports.mono_dreaded.UPGRADES_TIER_2 = ["machine_dreaded", "duo_dreaded", "guard_dreaded", "sniper_dreaded", "pounder_dreaded"];
        exports.machine_dreaded.UPGRADES_TIER_3 = ["sprayer_dreaded", "blaster_dreaded", "minigun_dreaded", "multishot_dreaded", "gunner_dreaded", "submachine_dreaded"];
            exports.blaster_dreaded.UPGRADES_TIER_4 = ["overpowerer_dreaded"];
            exports.minigun_dreaded.UPGRADES_TIER_4 = ["nailgun_dreaded"];
                exports.nailgun_dreaded.UPGRADES_TIER_5 = ["stapler_dreaded"];
            exports.gunner_dreaded.UPGRADES_TIER_4 = ["quadro_dreaded", "nailgun_dreaded", "vulcan_dreaded", "mecha_dreaded"];
                exports.vulcan_dreaded.UPGRADES_TIER_5 = ["M61_dreaded"];
                exports.mecha_dreaded.UPGRADES_TIER_5 = ["assaultMecha_dreaded", "precisionMecha_dreaded"];
            exports.submachine_dreaded.UPGRADES_TIER_4 = ["vulcan_dreaded"];
        exports.duo_dreaded.UPGRADES_TIER_3 = ["trio_dreaded", "gunner_dreaded", "bulwark_dreaded"];
            exports.trio_dreaded.UPGRADES_TIER_4 = ["quadro_dreaded"];
                exports.quadro_dreaded.UPGRADES_TIER_5 = ["quinto_dreaded"];
        exports.sniper_dreaded.UPGRADES_TIER_3 = ["assassin_dreaded", "minigun_dreaded", "hunter_dreaded", "rifle_dreaded"];
            exports.assassin_dreaded.UPGRADES_TIER_4 = ["ranger_dreaded", "enforcer_dreaded"];
                exports.ranger_dreaded.UPGRADES_TIER_5 = ["vindicator_dreaded"];
            exports.hunter_dreaded.UPGRADES_TIER_4 = ["dual_dreaded"];
                exports.dual_dreaded.UPGRADES_TIER_5 = ["concatinator_dreaded"];
            exports.rifle_dreaded.UPGRADES_TIER_4 = ["enforcer_dreaded"];
                exports.enforcer_dreaded.UPGRADES_TIER_5 = ["marksman_dreaded"];
        exports.pounder_dreaded.UPGRADES_TIER_3 = ["destroyer_dreaded", "multishot_dreaded"];
            exports.destroyer_dreaded.UPGRADES_TIER_4 = ["annihilator_dreaded", "shotgun_dreaded"];
                exports.annihilator_dreaded.UPGRADES_TIER_5 = ["devastator_dreaded"];
            exports.multishot_dreaded.UPGRADES_TIER_4 = ["shotgun_dreaded", "overpowerer_dreaded", "slosher_dreaded"];
                exports.overpowerer_dreaded.UPGRADES_TIER_5 = ["assaultMecha_dreaded", "mayhem_dreaded"];
                    exports.slosher_dreaded.UPGRADES_TIER_5 = ["triSlosher_dreaded", "explosher_dreaded"];
    exports.watcher_dreaded.UPGRADES_TIER_2 = ["director_dreaded", "protector_dreaded", "cruiser_dreaded"];
        exports.director_dreaded.UPGRADES_TIER_3 = ["overseer_dreaded", "spawner_dreaded", "betaDirector_dreaded"];
            exports.spawner_dreaded.UPGRADES_TIER_4 = ["factory_dreaded", "betaSpawner_dreaded"];
                exports.factory_dreaded.UPGRADES_TIER_5 = ["industry_dreaded"];
            exports.betaDirector_dreaded.UPGRADES_TIER_4 = ["alphaDirector_dreaded", "betaSpawner_dreaded"];
                exports.alphaDirector_dreaded.UPGRADES_TIER_5 = ["omegaDirector_dreaded", "alphaSpawner_dreaded"];
                exports.betaSpawner_dreaded.UPGRADES_TIER_5 = ["alphaSpawner_dreaded"];
        exports.protector_dreaded.UPGRADES_TIER_3 = ["commander_dreaded", "overseer_dreaded"];
            exports.overseer_dreaded.UPGRADES_TIER_4 = ["overlord_dreaded"];
                exports.overlord_dreaded.UPGRADES_TIER_5 = ["overczar_dreaded"];
            exports.commander_dreaded.UPGRADES_TIER_4 = ["master_dreaded", "overlord_dreaded"];
                exports.master_dreaded.UPGRADES_TIER_5 = ["emperor_dreaded", "overczar_dreaded"];
        exports.cruiser_dreaded.UPGRADES_TIER_3 = ["carrier_dreaded", "battleboat_dreaded"];
            exports.battleboat_dreaded.UPGRADES_TIER_4 = ["frigate_dreaded"];
                exports.frigate_dreaded.UPGRADES_TIER_5 = ["yamato_dreaded"];
    exports.trapper_dreaded.UPGRADES_TIER_2 = ["gamma_dreaded", "guard_dreaded", "mech_dreaded", "stockade_dreaded", "builder_dreaded"];
        exports.gamma_dreaded.UPGRADES_TIER_3 = ["beta_dreaded"];
            exports.beta_dreaded.UPGRADES_TIER_4 = ["alpha_dreaded"];
        exports.guard_dreaded.UPGRADES_TIER_3 = ["bulwark_dreaded"];
        exports.mech_dreaded.UPGRADES_TIER_3 = ["engineer_dreaded"];
        exports.stockade_dreaded.UPGRADES_TIER_3 = ["caltrop_dreaded"];
            exports.caltrop_dreaded.UPGRADES_TIER_4 = ["trapfield_dreaded"];
                exports.trapfield_dreaded.UPGRADES_TIER_5 = ["labyrinth_dreaded"];
        exports.builder_dreaded.UPGRADES_TIER_3 = ["engineer_dreaded"];
// Bodies tree
exports.multiTreeBody.UPGRADES_TIER_1 = ["base_dreaded"];

exports.base_dreaded.UPGRADES_TIER_1 = ["turret_dreaded", "wall_dreaded", "smasher_dreaded", "hangar_dreaded", "layer_dreaded"];
    exports.turret_dreaded.UPGRADES_TIER_2 = ["twin_dreaded", "armory_dreaded"];
        exports.twin_dreaded.UPGRADES_TIER_3 = ["triplet_dreaded", "brigade_dreaded"];
            exports.triplet_dreaded.UPGRADES_TIER_4 = ["quadruplet_dreaded"];
                exports.quadruplet_dreaded.UPGRADES_TIER_5 = ["quintuplet_dreaded"];
        exports.armory_dreaded.UPGRADES_TIER_3 = ["brigade_dreaded"];
    exports.wall_dreaded.UPGRADES_TIER_2 = ["rock_dreaded", "stomper_dreaded"];
        exports.rock_dreaded.UPGRADES_TIER_3 = ["palace_dreaded"];
            exports.palace_dreaded.UPGRADES_TIER_4 = ["ziggurat_dreaded"];
        exports.stomper_dreaded.UPGRADES_TIER_3 = ["giant_dreaded"];
            exports.giant_dreaded.UPGRADES_TIER_4 = ["slammer_dreaded"];
                exports.slammer_dreaded.UPGRADES_TIER_5 = ["earthquake_dreaded"];
    exports.smasher_dreaded.UPGRADES_TIER_2 = ["spike_dreaded", "armory_dreaded", "bonker_dreaded"];
        exports.spike_dreaded.UPGRADES_TIER_3 = ["thorn_dreaded"];
            exports.thorn_dreaded.UPGRADES_TIER_4 = ["saw_dreaded"];
                exports.saw_dreaded.UPGRADES_TIER_5 = ["chainsaw_dreaded"];
        exports.bonker_dreaded.UPGRADES_TIER_3 = ["basher_dreaded"];
            exports.basher_dreaded.UPGRADES_TIER_4 = ["careener_dreaded"];
                exports.careener_dreaded.UPGRADES_TIER_5 = ["pecker_dreaded"];
    exports.hangar_dreaded.UPGRADES_TIER_2 = ["warship_dreaded"];
        exports.warship_dreaded.UPGRADES_TIER_3 = ["battleship_dreaded"];
            exports.battleship_dreaded.UPGRADES_TIER_4 = ["mothership_dreaded"];
                exports.mothership_dreaded.UPGRADES_TIER_5 = ["flagship_dreaded"];
    exports.layer_dreaded.UPGRADES_TIER_2 = ["dropper_dreaded", "shocker_dreaded"];
        exports.dropper_dreaded.UPGRADES_TIER_3 = ["trailer_dreaded"];
        exports.shocker_dreaded.UPGRADES_TIER_3 = ["panic_dreaded", "blower_dreaded"];
            exports.panic_dreaded.UPGRADES_TIER_4 = ["disaster_dreaded"];
                exports.disaster_dreaded.UPGRADES_TIER_5 = ["overflow_dreaded"];
            exports.blower_dreaded.UPGRADES_TIER_4 = ["splatterer_dreaded"];
                exports.splatterer_dreaded.UPGRADES_TIER_5 = ["omnicider_dreaded"];
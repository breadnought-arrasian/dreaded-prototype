const { combineStats, skillSet, makeAuto, makeDeco } = require('../facilitators.js');
const { base, gunCalcNames } = require('../constants.js');
const g = require('../gunvals.js');
const { bullet } = require('./generics.js');

exports.miniboss = {
    PARENT: ["genericTank"],
    TYPE: "miniboss",
    DANGER: 6,
    SKILL: skillSet({
        rld: 0.7,
        dam: 0.5,
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,
    }),
    LEVEL: 45,
    CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
    AI: {
        NO_LEAD: true,
    },
    FACING_TYPE: "autospin",
    HITS_OWN_TYPE: "hardOnlyBosses",
    BROADCAST_MESSAGE: "A visitor has left!",
};

// GUNS
exports.baseTrapTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    INDEPENDENT: true,
    COLOR: 16,
    GUNS: [
        {
            POSITION: [16, 14, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 14, 1.8, 16, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.lowpower, g.pound, g.destroy, g.doublereload, g.hexatrap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
                AUTOFIRE: true,
            },
        },
    ],
}
exports.terrestrialTrapTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    INDEPENDENT: true,
    COLOR: 16,
    GUNS: [
        {
            POSITION: [13, 14, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 14, 1.8, 13, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.lowpower, g.pound, g.destroy, g.doublereload, g.hexatrap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
                AUTOFIRE: true,
            },
        },
    ],
}
exports.machineTripleTurret = {
    PARENT: ["genericTank"],
    LABEL: "Machine Gun",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 5,
    GUNS: [
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank]),
                TYPE: "bullet",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank]),
                TYPE: "bullet",
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.flank]),
                TYPE: "bullet",
                AUTOFIRE: true,
            },
        },
    ],
};
exports.skimmerTurret = {
    PARENT: ["genericTank"],
    LABEL: "Skimmer",
    BODY: {
        FOV: 2 * base.FOV,
    },
    COLOR: 2,
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    GUNS: [
        {
            POSITION: [10, 14, -0.5, 9, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.arty,
                    g.arty,
                    g.skim,
                ]),
                TYPE: "hypermissile",
            },
        },
        {
            POSITION: [17, 15, 1, 0, 0, 0, 0],
        },
    ],
};
exports.twisterTurret = {
    PARENT: ["genericTank"],
    LABEL: "Twister",
    BODY: {
        FOV: 2,
    },
    COLOR: 13,
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
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
exports.hyperTwisterTurret = {
    PARENT: ["genericTank"],
    LABEL: "Twister",
    BODY: {
        FOV: 2,
    },
    COLOR: 13,
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
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
                TYPE: "hyperspinmissile",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
    ],
};
exports.boomerTurret = {
    PARENT: ["genericTank"],
    LABEL: "Boomer",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 14,
    GUNS: [
        {
            POSITION: [7.75, 10, 1, 12, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang, g.fake]),
                TYPE: "boomerang",
            },
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
exports.trapGuardTurret = {
    PARENT: ["autoTankGun"],
    COLOR: 16,
    GUNS: [{
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
    },],
};
exports.triTrapGuardTurret = {
    PARENT: ["genericTank"],
    COLOR: 5,
    CONTROLLERS: [["spin", { independent: true }]],
    GUNS: [],
};
for(let i = 0; i < 3; i++) {
    exports.triTrapGuardTurret.GUNS.push(
        {
            POSITION: [17, 8, 1, 0, 0, 120*i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [13, 8, 1, 0, 0, 120*i+60, 0],
        },
        {
            POSITION: [4, 8, 1.7, 13, 0, 120*i+60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    )
};
exports.eliteSpinnerCyclone = {
    PARENT: ["genericTank"],
    COLOR: 5,
    CONTROLLERS: [["spin", { independent: true }]],
    GUNS: [],
};
for (let i = 0; i < 12; i++) {
    let delay;
    switch (i % 4) {
        case 0:
            delay = 0;
            break;
        case 1:
            delay = 0.5;
            break;
        case 2:
            delay = 0.25;
            break;
        case 3:
            delay = 0.75;
            break;
    }
    exports.eliteSpinnerCyclone.GUNS.push(
        {
            POSITION: [15, 3.5, 1, 0, 0, 30 * i, delay],
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
    )
};
exports.legMK3Cyclone = {
    PARENT: ["genericTank"],
    COLOR: 5,
    CONTROLLERS: [["spin", { independent: true }]],
    GUNS: [],
};
for (let i = 0; i < 12; i++) {
    let delay;
    switch (i % 4) {
        case 0:
            delay = 0;
            break;
        case 1:
            delay = 0.5;
            break;
        case 2:
            delay = 0.25;
            break;
        case 3:
            delay = 0.75;
            break;
    }
    exports.legMK3Cyclone.GUNS.push(
        {
            POSITION: [15, 3.5, 1, 0, 0, 30 * i, delay],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                    { speed: 3, maxSpeed: 3 }
                ]),
                TYPE: "bullet",
            },
        },
    )
};

exports.constructorTurret = {
    PARENT: ["autoTankGun"],
    LABEL: "Constructor",
    BODY: {
        FOV: 10
    },
    INDEPENDENT: true,
    GUNS: [
        {
            POSITION: [18, 18, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [2, 18, 1.2, 18, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct, {speed: 2, maxSpeed: 2}]),
                TYPE: "setTrap",
            },
        },
    ],
};

exports.coiltwinTurret = {
    PARENT: ["genericTank"],
    LABEL: '',
    BODY: {
        FOV: 5,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [{ POSITION: [40, 2, 1, 0, 9, 0, 0] },
    { POSITION: [40, 2, 1, 0, -9, 0, 0] },
    { POSITION: [40, 2, 1, 0, 0, 0, 0] }, {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [1.2, 7, 1, 11, 4.75, 0, 1.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.coil, g.auto, g.yottacoil]),
            TYPE: "bullet",
        },
    }, {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [1.2, 7, 1, 16, 4.75, 0, 1.55],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.coil, g.fake, g.auto, g.yottacoil]),
            TYPE: "casing",
            HAS_NO_RECOIL: true,
        },
    }, {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [1.2, 7, 1, 21, 4.75, 0, 1.6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.coil, g.fake, g.auto, g.yottacoil]),
            TYPE: "casing",
            HAS_NO_RECOIL: true,
        },
    }, {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [1.2, 7, 1, 26, 4.75, 0, 1.65],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.coil, g.fake, g.auto, g.yottacoil]),
            TYPE: "casing",
            HAS_NO_RECOIL: true,
        },
    }, {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [1.2, 7, 1, 31, 4.75, 0, 1.7],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.coil, g.fake, g.auto, g.yottacoil]),
            TYPE: "casing",
            HAS_NO_RECOIL: true,
        },
    }, {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [1.2, 7, 1, 36, 4.75, 0, 1.75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.coil, g.fake, g.auto, g.yottacoil]),
            TYPE: "casing",
            HAS_NO_RECOIL: true,
        },
    },
    {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [1.2, 7, 1, 11, -4.75, 0, 1.5 + 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.coil, g.auto, g.yottacoil]),
            TYPE: "bullet",
        },
    }, {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [1.2, 7, 1, 16, -4.75, 0, 1.55 + 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.coil, g.fake, g.auto, g.yottacoil]),
            TYPE: "casing",
            HAS_NO_RECOIL: true,
        },
    }, {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [1.2, 7, 1, 21, -4.75, 0, 1.6 + 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.coil, g.fake, g.auto, g.yottacoil]),
            TYPE: "casing",
            HAS_NO_RECOIL: true,
        },
    }, {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [1.2, 7, 1, 26, -4.75, 0, 1.65 + 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.coil, g.fake, g.auto, g.yottacoil]),
            TYPE: "casing",
            HAS_NO_RECOIL: true,
        },
    }, {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [1.2, 7, 1, 31, -4.75, 0, 1.7 + 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.coil, g.fake, g.auto, g.yottacoil]),
            TYPE: "casing",
            HAS_NO_RECOIL: true,
        },
    }, {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [1.2, 7, 1, 36, -4.75, 0, 1.75 + 0.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.coil, g.fake, g.auto, g.yottacoil]),
            TYPE: "casing",
            HAS_NO_RECOIL: true,
        },
    },
    ],
};

// ELITE CRASHERS
exports.elite = {
    PARENT: ["miniboss"],
    LABEL: "Elite Crasher",
    COLOR: 5,
    SHAPE: 3,
    SIZE: 27,
    VARIES_IN_SIZE: false,
    VALUE: 15e4,
    BODY: {
        FOV: 1.25,
        SPEED: 0.1 * base.SPEED,
        HEALTH: 7 * base.HEALTH,
        DAMAGE: 2.5 * base.DAMAGE,
    },
};
exports.eliteDestroyer = {
    PARENT: ["elite"],
    GUNS: [
        {
            POSITION: [5, 16, 1, 6, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
                TYPE: "bullet",
                LABEL: "Devastator",
            },
        },
        {
            POSITION: [5, 16, 1, 6, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
                TYPE: "bullet",
                LABEL: "Devastator",
            },
        },
        {
            POSITION: [5, 16, 1, 6, 0, -60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
                TYPE: "bullet",
                LABEL: "Devastator",
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [11, 0, 0, 180, 360, 0],
            TYPE: ["crasherSpawner"],
        },
        {
            POSITION: [11, 0, 0, 60, 360, 0],
            TYPE: ["crasherSpawner"],
        },
        {
            POSITION: [11, 0, 0, -60, 360, 0],
            TYPE: ["crasherSpawner"],
        },
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: [
                "bigauto4gun",
                {
                    INDEPENDENT: true,
                    COLOR: 5,
                },
            ],
        },
    ],
};
exports.eliteGunner = {
    PARENT: ["elite"],
    FACING_TYPE: "toTarget",
    GUNS: [
        {
            POSITION: [14, 16, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [4, 16, 1.5, 14, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                TYPE: [
                    "pillbox",
                    {
                        INDEPENDENT: true,
                    },
                ],
            },
        },
        {
            POSITION: [6, 14, -2, 2, 0, 60, 0],
        },
        {
            POSITION: [6, 14, -2, 2, 0, 300, 0],
        },
    ],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [
        {
            POSITION: [14, 8, 0, 60, 180, 0],
            TYPE: ["auto4gun"],
        },
        {
            POSITION: [14, 8, 0, 300, 180, 0],
            TYPE: ["auto4gun"],
        },
    ],
};
exports.eliteSprayer = {
    PARENT: ["elite"],
    SKILL: [0, 9, 3, 9, 2, 9, 9, 9, 9, 0],
    AI: { NO_LEAD: false },
    HAS_NO_RECOIL: true,
    TURRETS: [
        {
            /*    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6, 0, 0, 0, 360, 1],
            TYPE: ["machineTripleTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [9, 6, -5, 180, 130, 0],
            TYPE: ["sprayer", { COLOR: 16 }],
        },
        {
            POSITION: [9, 6, 5, 180, 130, 0],
            TYPE: ["sprayer", { COLOR: 16 }],
        },
        {
            POSITION: [9, 6, 5, 60, 130, 0],
            TYPE: ["sprayer", { COLOR: 16 }],
        },
        {
            POSITION: [9, 6, -5, 60, 130, 0],
            TYPE: ["sprayer", { COLOR: 16 }],
        },
        {
            POSITION: [9, 6, 5, -60, 130, 0],
            TYPE: ["sprayer", { COLOR: 16 }],
        },
        {
            POSITION: [9, 6, -5, -60, 130, 0],
            TYPE: ["sprayer", { COLOR: 16 }],
        },
    ],
};
exports.eliteBattleship = {
    PARENT: ["elite"],
    GUNS: [
        {
            POSITION: [4, 6, 0.6, 7, -8, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 0, 60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 8, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, -8, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 0, 180, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 8, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, -8, -60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 0, -60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4, 6, 0.6, 7, 8, -60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [5, 7, 0, 0, 190, 1],
            TYPE: [
                "autoTankGun",
                {
                    INDEPENDENT: true,
                    COLOR: 5,
                },
            ],
        },
        {
            POSITION: [5, 7, 0, 120, 190, 1],
            TYPE: [
                "autoTankGun",
                {
                    INDEPENDENT: true,
                    COLOR: 5,
                },
            ],
        },
        {
            POSITION: [5, 7, 0, 240, 190, 1],
            TYPE: [
                "autoTankGun",
                {
                    INDEPENDENT: true,
                    COLOR: 5,
                },
            ],
        },
    ],
};
exports.eliteSpawner_sentryG = {
    PARENT: ["drone"],
    LABEL: "Sentry",
    SHAPE: 3,
    DRAW_HEALTH: true,
    TURRETS: [
        {
            POSITION: [12, 0, 0, 180, 360, 1],
            TYPE: ["heavy3gun", { HAS_NO_RECOIL: true }]
        }
    ]
};
exports.eliteSpawner_sentryS = {
    PARENT: ["drone"],
    LABEL: "Sentry",
    SHAPE: 3,
    DRAW_HEALTH: true,
    GUNS: [
        {
            POSITION: [7, 14, 0.6, 7, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm
            }
        }
    ]
};
exports.eliteSpawner_sentryT = {
    PARENT: ["drone"],
    LABEL: "Sentry",
    SHAPE: 3,
    DRAW_HEALTH: true,
    TURRETS: [
        {
            POSITION: [12, 0, 0, 180, 360, 1],
            TYPE: ["trapTurret", { HAS_NO_RECOIL: true, CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'] }]
        }
    ]
};

exports.auto4gun_eliteSpawner = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [15, 6, 1, 0, 4.25, 0, 0], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 6, 1, 0, -4.25, 0, 0.5], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.eliteSpawner = {
    PARENT: ["elite"],
    MAX_CHILDREN: 9,
    AI: { STRAFE: false },
    GUNS: [
        {
            POSITION: [11, 16, 1, 0, 0, 60, 0],
        },
        {
            POSITION: [11, 16, 1, 0, 0, 180, 0],
        },
        {
            POSITION: [11, 16, 1, 0, 0, 300, 0],
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [2, 18, 1, 11, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.pound, g.pound, g.celeslower]),
                TYPE: "eliteSpawner_sentryS",
                SYNCS_SKILLS: true,
                AUTOFIRE: true,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [2, 18, 1, 11, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.pound, g.pound, g.celeslower]),
                TYPE: "eliteSpawner_sentryT",
                SYNCS_SKILLS: true,
                AUTOFIRE: true,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [2, 18, 1, 11, 0, 300, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.pound, g.pound, g.celeslower]),
                TYPE: "eliteSpawner_sentryG",
                SYNCS_SKILLS: true,
                AUTOFIRE: true,
                STAT_CALCULATOR: gunCalcNames.drone,
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: ["auto4gun_eliteSpawner", { INDEPENDENT: false, COLOR: 5 }],
        },
    ],
};
exports.eliteTrapGuard = {
    PARENT: ["elite"],
    AI: { STRAFE: false },
    GUNS: [],
    TURRETS: [
        {
            POSITION: [9.5, 0, 0, 0, 360, 1],
            TYPE: "triTrapGuardTurret",
        },
    ],
};
for (let i = 0; i < 3; i++) {
    exports.eliteTrapGuard.GUNS.push(
        {
            POSITION: [10.5, 6, 1, 0, 0, 120*i+60, 0],
        },
        {
            POSITION: [3, 6, 1.7, 10.5, 0, 120*i+60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    )
    exports.eliteTrapGuard.TURRETS.push(
        {
            POSITION: [5, 8, -7, 120*i+60, 160, 0],
            TYPE: ["autoTurret", { INDEPENDENT: false }],
        },
        {
            POSITION: [5, 8, 7, 120*i+60, 160, 0],
            TYPE: ["autoTurret", { INDEPENDENT: false }],
        },
    )
};
exports.eliteSpinner = {
    PARENT: ["elite"],
    AI: { STRAFE: false },
    FACING_TYPE: "spin",
    GUNS: [],
    TURRETS: [
        {
            POSITION: [9.5, 0, 0, 0, 360, 1],
            TYPE: ["eliteSpinnerCyclone", {COLOR: 5}],
        },
    ],
};
for (let i = 0; i < 3; i++) {
    exports.eliteSpinner.GUNS.push(
        {
            POSITION: [9.5, 2, 1, -1.5, 11.5, 120*i+10, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.hurricane]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [9.5, 2, 1, 3.5, 6.5, 120*i+10, 1/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.hurricane]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [9.5, 2, 1, 8.5, 1.5, 120*i+10, 2/3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.hurricane]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [2, 20, 0.75, 8, 0, 120*i+60, 0],
        },
    )
};

// OLD ELITE
exports.oldEliteSprayer = {
    PARENT: ["elite"],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [
        {
            POSITION: [14, 6, 0, 180, 190, 0],
            TYPE: [
                "sprayer",
                {
                    COLOR: 5,
                },
            ],
        },
        {
            POSITION: [14, 6, 0, 60, 190, 0],
            TYPE: [
                "sprayer",
                {
                    COLOR: 5,
                },
            ],
        },
        {
            POSITION: [14, 6, 0, -60, 190, 0],
            TYPE: [
                "sprayer",
                {
                    COLOR: 5,
                },
            ],
        },
    ],
};

exports.sprayerLegion = {
    PARENT: ["elite"],
    AI: {
        NO_LEAD: false,
    },
    TURRETS: [
        {
            POSITION: [14, 6, 0, 180, 190, 0],
            TYPE: ["machineGun", { COLOR: 5 }],
        },
        {
            POSITION: [14, 6, 0, 60, 190, 0],
            TYPE: ["machineGun", { COLOR: 5 }],
        },
        {
            POSITION: [14, 6, 0, -60, 190, 0],
            TYPE: ["machineGun", { COLOR: 5 }],
        },
    ],
};

// Legionary Crasher
exports.legionaryTwin = {
    PARENT: ["auto4gun"],
    COLOR: 16,
    INDEPENDENT: true,
    BODY: {
        FOV: 4
    },
    GUNS: [
        {
            POSITION: [17.5, 7.5, 1, 0, -5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.morespeed, g.morespeed, g.pound, g.doublereload, { health: 1.6, range: 1.5 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [17.5, 7.5, 1, 0, 5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.morespeed, g.morespeed, g.pound, g.doublereload, { health: 1.6, range: 1.5 }]),
                TYPE: "bullet",
            },
        },
    ],
}
exports.legionaryPillbox = {
    PARENT: ["unsetTrap"],
    LABEL: "Pillbox",
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
    DIE_AT_RANGE: true,
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "legionaryTwin",
        },
    ],
}
exports.legSprayer = {
    PARENT: ["autoTankGun"],
    LABEL: "Sprayer",
    GUNS: [
        {
            POSITION: [23, 7, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.mach,
                    g.morespeed,
                    g.morespeed,
                    { size: 0.8 }
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 10, 1.4, 8, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.mach,
                    g.morespeed,
                    g.morespeed,
                    { size: 0.8 }
                ]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.legAuto4gun = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [16, 4, 1, 0, -3.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.morespeed, g.morespeed, g.pound, g.doublereload]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [16, 4, 1, 0, 3.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.morespeed, g.morespeed, g.pound, g.doublereload]),
                TYPE: "bullet",
            },
        },
    ],
};

exports.legionaryCrasherTop = {
    PARENT: ["elite"],
    AI: { STRAFE: false, NO_LEAD: false },
    CONTROLLERS: [
        ["spin", { independent: true, speed: -0.01 }],
        //"nearestDifferentMaster",
    ],
    INDEPENDENT: true,
    GUNS: [],
    TURRETS: [],
}
for (let i = 0; i < 3; i++) {
    exports.legionaryCrasherTop.GUNS.push(
        {
            POSITION: [4, 9.5, 0.7, 7, 5, 120*i+60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.pound, g.morespeed, g.morespeed, g.mini, {range: 1.5}]),
                TYPE: [ "swarm", { INDEPENDENT: true } ],
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true,
                
            },
        },
        {
            POSITION: [4, 9.5, 0.7, 7, -5, 120*i+60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.pound, g.morespeed, g.morespeed, g.mini, {range: 1.5}]),
                TYPE: [ "swarm", { INDEPENDENT: true } ],
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true,
            },
        },
    )
    exports.legionaryCrasherTop.TURRETS.push(
        {
            POSITION: [9.5, 10, 0, 120*i, 190, 0],
            TYPE: "legAuto4gun",
        },
    )
};
exports.legionaryCrasher = {
    PARENT: ["elite"],
    LABEL: "Legionary Crasher",
    AI: { STRAFE: false, NO_LEAD: false },
    HAS_NO_RECOIL: true,
    VALUE: 5e6,
    SIZE: 160,
    BODY: {
        FOV: 1.5,
        SPEED: 0.1 * base.SPEED,
        HEALTH: 2000,
        DAMAGE: 5 * base.DAMAGE,
    },
    GUNS: [{
        POSITION: [1, 11 * 0.3, 1, 0, 0, 360 / 3, 0],
        PROPERTIES: {
            MAX_CHILDREN: 1,
            SHOOT_SETTINGS: combineStats([g.basic, g.fake, { reload: 1000000, shudder: 100}]),
            TYPE: ["eliteDestroyer", { INDEPENDENT: true, BODY: { FOV: 3 }, SIZE: 57 }],
            STAT_CALCULATOR: gunCalcNames.drone,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            INDEPENDENT_CHILDREN: true,
            //INDEPENDENT: true
        },
    }, {
            POSITION: [1, 11 * 0.3, 1, 0, 0, 360 / 3, 0],
            PROPERTIES: {
                MAX_CHILDREN: 1,
                SHOOT_SETTINGS: combineStats([g.basic, g.fake, { reload: 1000000, shudder: 100 }]),
                TYPE: ["eliteSpawner", { INDEPENDENT: true, BODY: { FOV: 3 }, SIZE: 57 }],
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                INDEPENDENT_CHILDREN: true,
                //INDEPENDENT: true
            },
        }, {
            POSITION: [1, 11 * 0.3, 1, 0, 0, 360 / 3, 0],
            PROPERTIES: {
                MAX_CHILDREN: 1,
                SHOOT_SETTINGS: combineStats([g.basic, g.fake, { reload: 1000000, shudder: 100 }]),
                TYPE: ["eliteGunner", { INDEPENDENT: true, BODY: { FOV: 3 }, SIZE: 57 }],
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                INDEPENDENT_CHILDREN: true,
                //INDEPENDENT: true
            },
        }, {
            POSITION: [1, 11 * 0.3, 1, 0, 0, 360 / 3, 0],
            PROPERTIES: {
                MAX_CHILDREN: 1,
                SHOOT_SETTINGS: combineStats([g.basic, g.fake, { reload: 1000000, shudder: 100 }]),
                TYPE: ["eliteBattleship", { INDEPENDENT: true, BODY: { FOV: 3 }, SIZE: 57 }],
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                INDEPENDENT_CHILDREN: true,
                //INDEPENDENT: true
            },
        }, {
            POSITION: [1, 11 * 0.3, 1, 0, 0, 360 / 3, 0],
            PROPERTIES: {
                MAX_CHILDREN: 1,
                SHOOT_SETTINGS: combineStats([g.basic, g.fake, { reload: 1000000, shudder: 100 }]),
                TYPE: ["sprayerLegion", { INDEPENDENT: true, BODY: { FOV: 3 }, SIZE: 57 }],
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                INDEPENDENT_CHILDREN: true,
                //INDEPENDENT: true
            },
        },],
    TURRETS: [
        {
            POSITION: [12, 0, 0, 0, 360, 1],
            TYPE: "legionaryCrasherTop",
        }
    ],
}
for (let i = 0; i < 3; i++) {
    exports.legionaryCrasher.GUNS.push(
        {
            POSITION: [14.5, 13, 1, 0, 0, 120*i, 0],
        },
        {
            POSITION: [4, 13, 1.6, 14.5, 0, 120*i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.pound, g.destroy, g.veryfast, g.mini, {health: 2, maxSpeed: 3}]),
                TYPE: "legionaryPillbox",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    )
}
for (let i = 0; i < 3; i++) {
    exports.legionaryCrasher.GUNS.push(
        {
            POSITION: [5, 12, 1.6, -11, 0, 120*i, 0],
        }
    )
    exports.legionaryCrasher.TURRETS.push(
        {
            POSITION: [14, 8, 0, 120*i+60, 180, 0],
            TYPE: [ "legSprayer", { COLOR: 5, } ],
        },
    )
};

//Arms Madness Legionary......?
exports.legionaryMK3PillboxTurret = {
    PARENT: ["auto4gun"],
    COLOR: 16,
    INDEPENDENT: true,
    BODY: {
        FOV: 4
    },
    GUNS: [
        {
            POSITION: [17.5, 7.5, 1, 0, -5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.morespeed, g.morespeed, g.pound, g.doublereload, { health: 1.6, range: 1.5 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [17.5, 7.5, 1, 0, 5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.morespeed, g.morespeed, g.pound, g.doublereload, { health: 1.6, range: 1.5 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20.5, 8.5, 1, 0, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.morespeed, g.morespeed, g.pound, g.doublereload, { health: 1.6, range: 1.5 }]),
                TYPE: "bullet",
            },
        },
    ],
}
exports.legionaryMK3Pillbox = {
    PARENT: ["unsetTrap"],
    LABEL: "Pillbox",
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
    DIE_AT_RANGE: true,
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "legionaryMK3PillboxTurret",
        },
    ],
}
exports.legMK3Sprayer = {
    PARENT: ["autoTankGun"],
    LABEL: "Bent Dual Machlet",
    GUNS: [
        {
            POSITION: [18, 7.5, 1.4, 0, -3, -20, 0.25,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.twin, g.morespeed, g.morespeed, { reload: 2, size: 0.8, health: 2, damage: 2, pen: 2 }]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [18, 7.5, 1.4, 0, 3, 20, 0.75,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.twin, g.morespeed, g.morespeed, { reload: 2, size: 0.8, health: 2, damage: 2, pen: 2 }]),
                TYPE: "bullet",
            },
        }, 
        {
            POSITION: [18, 7.5, 1.4, 4, -5, 0, 0.25,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.twin, g.morespeed, g.morespeed, { reload: 2, size: 0.8, health: 2, damage: 2, pen: 2}]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [18, 7.5, 1.4, 4, 5, 0, 0.75,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.twin, g.morespeed, g.morespeed, { reload: 2, size: 0.8, health: 2, damage: 2, pen: 2 }]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [18, 7.5, 1.4, 0, -5, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.twin, g.morespeed, g.morespeed, { reload: 2, size: 0.8, health: 2, damage: 2, pen: 2 }]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [18, 7.5, 1.4, 0, 5, 0, 0.5,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.twin, g.morespeed, g.morespeed, { reload: 2, size: 0.8, health: 2, damage: 2, pen: 2 }]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [18, 7.5, 1.4, 9, 0, 0, 0.5,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.twin, g.morespeed, g.morespeed, { reload: 2, size: 0.8, health: 2, damage: 2, pen: 2 }]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [18, 7.5, 1.4, 5, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.twin, g.morespeed, g.morespeed, { reload: 2, size: 0.8, health: 2, damage: 2, pen: 2 }]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.legMK3Topgun = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    GUNS: [
    ],
};
for (let i = 0; i < 9; i++) {
    exports.legMK3Topgun.GUNS.push(
        {
            POSITION: [20 - (1.5 * i), 5, 1, 0, 6.5, 0, i / 9,], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.morespeed, g.morespeed, g.lessreload]), TYPE: "bullet" },
        },
        {
            POSITION: [20 - (1.5 * i), 5, 1, 0, -6.5, 0, i / 9,], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.morespeed, g.morespeed, g.lessreload]), TYPE: "bullet" },
        },
    );
};
for (let i = 0; i < 15; i++) {
    exports.legMK3Topgun.GUNS.push(
        {
            POSITION: [40 - (1.5 * i), 3, 1, 0, -5.5, 0, 0 + i / 15 * 0.5], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.pound, g.halfreload, g.halfreload, {speed: 2.5, maxSpeed: 2.5}]), TYPE: "bullet", },
        },
        {
            POSITION: [40 - (1.5 * i), 3, 1, 0, 5.5, 0, 0.5 + i / 15 * 0.5], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.pound, g.halfreload, g.halfreload, { speed: 2.5, maxSpeed: 2.5 }]), TYPE: "bullet", },
        },
    );
};
exports.legMK3Topgun.GUNS.push(
    {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [46, 7, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.assass, g.pound, g.destroy, g.morereload, { health: 2, damage: 2, speed: 5, maxSpeed: 3 }]),
            TYPE: "bullet",
        },
    },
    {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [45, 8, 1, 0, 0, 0, 0.1],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.assass, g.pound, g.destroy, g.morereload, { health: 2, damage: 2, speed: 5, maxSpeed: 3 }]),
            TYPE: "bullet",
        },
    },
    {
        POSITION: [14, 8, -1.4, 0, 0, 0, 0,],
    },
);

exports.legMK3_predator = {
    PARENT: ["autoTankGun"],
    LABEL: "Predator",
    BODY: {
        FOV: base.FOV * 5,
    },
    COLOR: 5,
    GUNS: [
        {
            POSITION: [27, 4, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.hunter,
                    g.hunter2,
                    g.hunter2,
                    g.hunter2,
                    g.hunter2,
                    g.preda,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [24, 7, 1, 0, 0, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.sniper,
                    g.hunter,
                    g.hunter2,
                    g.hunter2,
                    g.hunter2,
                    g.preda,
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 10, 1, 0, 0, 0, 0.4],
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
            POSITION: [18, 13, 1, 0, 0, 0, 0.6],
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
            POSITION: [15, 16, 1, 0, 0, 0, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
                TYPE: "bullet",
            },
        },
    ],
};

exports.bossWrenchGun = {
    PARENT: ["genericTank"],
    LABEL: "Wrench",
    BODY: {
        FOV: 5,
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    INDEPENDENT: true,
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, { speed: 2, maxSpeed: 2 }]),
                TYPE: "bullet",
            },
        },
    ],
}

exports.legionaryMK3Body2 = {
    PARENT: ["elite"],
    AI: { STRAFE: false, NO_LEAD: false },
    CONTROLLERS: [
        ["spin", { independent: true, speed: 0.005 }],
        //"nearestDifferentMaster",
    ],
    INDEPENDENT: true,
    GUNS: [],
    TURRETS: [],
}
for (let i = 0; i < 3; i++) {
    exports.legionaryMK3Body2.GUNS.push(
        {
            POSITION: [40, 2.5, 1, 0, 0, 120 * i, 0],
        },
        {
            POSITION: [6, 2.5, -1.4, 10, 0, 120 * i, 0],
        },
        {
            POSITION: [6, 12, -1.2, 6, 0, 120 * i + 60, 0]
        },
        {
            POSITION: [6, 8, -1.2, 6, 0, 120 * i + 60, 0]
        },
        {
            POSITION: [4, 15, 1, 6, 0, 120 * i + 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy, g.destroy, g.destroy, { reload: 0.5, speed: 4, maxSpeed: 6, range: 6 }]),
                TYPE: "bullet",
                LABEL: "Ultra Devastator",
                AUTOFIRE: true
            },
        },
    )
    exports.legionaryMK3Body2.TURRETS.push(
        {
            POSITION: [2.7, 32, 0, 120 * i, 270, 1],
            TYPE: "bossWrenchGun",
        },
        {
            POSITION: [2.7, 36, 0, 120 * i, 270, 1],
            TYPE: "bossWrenchGun",
        },
        {
            POSITION: [2.7, 40, 0, 120 * i, 270, 1],
            TYPE: "bossWrenchGun",
        },
        {
            POSITION: [3.2, 12, 0, 120 * i, 150, 1],
            TYPE: "coiltwinTurret",
        },
        {
            POSITION: [3, 8, -9.5, 120 * i + 60, 160, 0],
            TYPE: ["legMK3_predator"],
        },
        {
            POSITION: [3, 8, 9.5, 120 * i + 60, 160, 0],
            TYPE: ["legMK3_predator"],
        },
    )
};
for (let i = 0; i < 20; i++) {
    exports.legionaryMK3Body2.TURRETS.push(
        {
            POSITION: [11 - i * 0.5, 0, 0, 0, 360, 1],
            TYPE: [
                "bigauto4gun",
                {
                    BODY: {
                        FOV: 5
                    },
                    COLOR: 16,
                    GUNS: [
                        {
                            POSITION: [14, 5, 1, 0, -4.5, 0, 0 + 1 / 20 * i],
                            PROPERTIES: {
                                SHOOT_SETTINGS: combineStats([
                                    g.basic,
                                    g.auto,
                                    g.gunner,
                                    g.twin,
                                    g.twin,
                                    g.power,
                                    g.halfreload,
                                    { speed: 2, maxSpeed: 2 }
                                ]),
                                TYPE: "bullet",
                            },
                        },
                        {
                            POSITION: [14, 5, 1, 0, 4.5, 0, 0.5 + 1 / 20 * i],
                            PROPERTIES: {
                                SHOOT_SETTINGS: combineStats([
                                    g.basic,
                                    g.auto,
                                    g.gunner,
                                    g.twin,
                                    g.twin,
                                    g.power,
                                    g.halfreload,
                                    { speed: 2, maxSpeed: 2 }
                                ]),
                                TYPE: "bullet",
                            },
                        },
                        {
                            POSITION: [16, 5, 1, 0, 0, 0, 0.5 + 1 / 20 * i],
                            PROPERTIES: {
                                SHOOT_SETTINGS: combineStats([
                                    g.basic,
                                    g.auto,
                                    g.gunner,
                                    g.twin,
                                    g.twin,
                                    g.power,
                                    g.halfreload,
                                    { speed: 2, maxSpeed: 2 }
                                ]),
                                TYPE: "bullet",
                            },
                        },
                    ],
                }
            ],

        },
    );
};

exports.legionaryMK3Body1 = {
    PARENT: ["elite"],
    AI: { STRAFE: false, NO_LEAD: false },
    CONTROLLERS: [
        ["spin", { independent: true, speed: -0.003 }],
        //"nearestDifferentMaster",
    ],
    //INDEPENDENT: true,
    GUNS: [],
    TURRETS: [],
}
for (let i = 0; i < 3; i++) {
    exports.legionaryMK3Body1.GUNS.push(
        {
            POSITION: [2.75, 1.8, 0.7, 10, 4, 120 * i + 60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.pound, g.morespeed, g.morespeed, g.morespeed, g.morespeed, g.destroy, g.destroy, { reload: 0.3, maxSpeed: 5, range: 1.5 }]),
                TYPE: ["swarm", { INDEPENDENT: true }],
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true,

            },
        },
        {
            POSITION: [2.75, 1.8, 0.7, 10, -4, 120 * i + 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.pound, g.morespeed, g.morespeed, g.morespeed, g.morespeed, g.destroy, g.destroy, { reload: 0.3, maxSpeed: 5, range: 1.5 }]),
                TYPE: ["swarm", { INDEPENDENT: true }],
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [2.75, 1.8, 0.7, 10, 7.5, 120 * i + 60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.pound, g.morespeed, g.morespeed, g.morespeed, g.morespeed, g.destroy, g.destroy, { reload: 0.3, maxSpeed: 5, range: 1.5 }]),
                TYPE: ["swarm", { INDEPENDENT: true }],
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true,

            },
        },
        {
            POSITION: [2.75, 1.8, 0.7, 10, -7.5, 120 * i + 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.pound, g.morespeed, g.morespeed, g.morespeed, g.morespeed, g.destroy, g.destroy, { reload: 0.3, maxSpeed: 5, range: 1.5 }]),
                TYPE: ["swarm", { INDEPENDENT: true }],
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true,
            },
        },
        {
            POSITION: [2.75, 1.8, 0.7, 10, 5.75, 120 * i + 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.pound, g.morespeed, g.morespeed, g.morespeed, g.morespeed, g.destroy, g.destroy, { reload: 0.3, maxSpeed: 5, range: 1.5 }]),
                TYPE: ["swarm", { INDEPENDENT: true }],
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true,

            },
        },
        {
            POSITION: [2.75, 1.8, 0.7, 10, -5.75, 120 * i + 60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.pound, g.morespeed, g.morespeed, g.morespeed, g.morespeed, g.destroy, g.destroy, { reload: 0.3, maxSpeed: 5, range: 1.5 }]),
                TYPE: ["swarm", { INDEPENDENT: true }],
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true,
            },
        },
        {
        POSITION: [4, 6.5, 0.8, 7, 5.75, 120 * i + 60, 0],
        },
        {
        POSITION: [4, 6.5, 0.8, 7, -5.75, 120 * i + 60, 0.5],
        },
        {
            POSITION: [3.6, 5.7, 0.8, 7, 5.75, 120 * i + 60, 0],
        },
        {
            POSITION: [3.6, 5.7, 0.8, 7, -5.75, 120 * i + 60, 0.5],
        },
        {
            /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [3, 2.5, 1, 6.5, 1.8, 120 * i + 60, 0]
        },
        {
            POSITION: [0.8, 3.3, 1, 9.2, 1.8, 120 * i + 60, 0],
        },
        {
            POSITION: [3.85, 3, 1, 4.75, 1.8, 120 * i + 60, 0]
        }, {
        /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [3, 2.5, 1, 6.5, -1.8, 120 * i + 60, 0]
    },
        {
            POSITION: [0.8, 3.3, 1, 9.2, -1.8, 120 * i + 60, 0],
        },
        {
            POSITION: [3.85, 3, 1, 4.75, -1.8, 120 * i + 60, 0]
        },
    )
    exports.legionaryMK3Body1.TURRETS.push(
        {
            POSITION: [9.5, 10, 0, 120 * i, 130, 0],
            TYPE: "legMK3Topgun",
        },
        {
            POSITION: [1, 13.5, 0.6, 120 * i, 130, 1],
            TYPE: "srk2_minigun",
        },
        {
            POSITION: [1, 13.5, -0.6, 120 * i, 130, 1],
            TYPE: "srk2_minigun",
        },
        {
            POSITION: [1, 11.75, 0.6, 120 * i, 130, 1],
            TYPE: "srk2_minigun",
        },
        {
            POSITION: [1, 11.75, -0.6, 120 * i, 130, 1],
            TYPE: "srk2_minigun",
        },
        {
            POSITION: [1, 10, 0.6, 120 * i, 130, 1],
            TYPE: "srk2_minigun",
        },
        {
            POSITION: [1, 10, -0.6, 120 * i, 130, 1],
            TYPE: "srk2_minigun",
        },
        {
            POSITION: [0.8, 7.2, 5.4, 120 * i + 60, 130, 1],
            TYPE: "trapGuardTurret",
        },
        {
            POSITION: [0.8, 7.2, -5.4, 120 * i + 60, 130, 1],
            TYPE: "trapGuardTurret",
        },
        {
            POSITION: [0.8, 7.2, 4.2, 120 * i + 60, 130, 1],
            TYPE: "trapGuardTurret",
        },
        {
            POSITION: [0.8, 7.2, -4.2, 120 * i + 60, 130, 1],
            TYPE: "trapGuardTurret",
        },
        {
            POSITION: [0.8, 7.2, 3, 120 * i + 60, 130, 1],
            TYPE: "trapGuardTurret",
        },
        {
            POSITION: [0.8, 7.2, -3, 120 * i + 60, 130, 1],
            TYPE: "trapGuardTurret",
        },
        {
            POSITION: [0.8, 7.2, 1.8, 120 * i + 60, 130, 1],
            TYPE: "trapGuardTurret",
        },
        {
            POSITION: [0.8, 7.2, -1.8, 120 * i + 60, 130, 1],
            TYPE: "trapGuardTurret",
        },
        {
            POSITION: [0.8, 5.4, 5.4, 120 * i + 60, 130, 1],
            TYPE: "trapGuardTurret",
        },
        {
            POSITION: [0.8, 5.4, -5.4, 120 * i + 60, 130, 1],
            TYPE: "trapGuardTurret",
        },
        {
            POSITION: [0.8, 5.4, 4.2, 120 * i + 60, 130, 1],
            TYPE: "trapGuardTurret",
        },
        {
            POSITION: [0.8, 5.4, -4.2, 120 * i + 60, 130, 1],
            TYPE: "trapGuardTurret",
        },
        {
            POSITION: [0.8, 5.4, 3, 120 * i + 60, 130, 1],
            TYPE: "trapGuardTurret",
        },
        {
            POSITION: [0.8, 5.4, -3, 120 * i + 60, 130, 1],
            TYPE: "trapGuardTurret",
        },
        {
            POSITION: [0.8, 5.4, 1.8, 120 * i + 60, 130, 1],
            TYPE: "trapGuardTurret",
        },
        {
            POSITION: [0.8, 5.4, -1.8, 120 * i + 60, 130, 1],
            TYPE: "trapGuardTurret",
        },
        {
            POSITION: [1.5, 10.3, 0.5, 120 * i + 10, 130, 1],
            TYPE: "constructorTurret",
        },
        {
            POSITION: [1.5, 10.3, -0.5, 120 * i - 10, 130, 1],
            TYPE: "constructorTurret",
        },
    );
};

exports.legMK3Stream = {
    PARENT: ["autoTankGun"],
    LABEL: "Big Streamer",
    BODY: {
        FOV: 5
    },
    GUNS: [],
    TURRETS: []
};
for (let i = 0; i < 12; i++) {
    exports.legMK3Stream.GUNS.push(
    {
        POSITION: [40 - i * 2, 14, 1, 0, 0, 0, i / 12],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.assass, g.pound, g.morereload, { reload: 2, health: 0.25, damage: 0.5, pen: 2, speed: 3, maxSpeed: 3 }]),
            TYPE: "bullet",
        },
    },
    );
};
exports.legMK3Stream.GUNS.push(
    {
        POSITION: [14, 14, -1.4, 0, 0, 0, 0],
    },
);

exports.legMK3Cruiser = {
    PARENT: ["genericTank"],
    LABEL: "Cruiser",
    BODY: {
        FOV: 5,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload, { size: 1.6, range: 2 }]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload, { size: 1.6, range: 2 }]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};

exports.legionaryCrasherMK3 = {
    PARENT: ["elite"],
    LABEL: "Legionary Crasher MKIII",
    AI: { STRAFE: false, NO_LEAD: false },
    HAS_NO_RECOIL: true,
    VALUE: 5e8,
    SIZE: 300,
    BODY: {
        FOV: 1.2,
        SPEED: 0.05 * base.SPEED,
        HEALTH: 6000,
        SHIELD: 2000,
        DAMAGE: 10 * base.DAMAGE,
    },
    FACING_TYPE: "spinSlowly",
    GUNS: [],
    TURRETS: [
    ],
}
for (let i = 0; i < 3; i++) {
    exports.legionaryCrasherMK3.GUNS.push(
        {
            POSITION: [14.5, 13, 1, 0, 0, 120 * i, 0],
        },
        {
            POSITION: [4, 13, 1.6, 14.5, 0, 120 * i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.pound, g.destroy, g.veryfast, g.mini, { health: 2, damage: 2, maxSpeed: 3 }]),
                TYPE: "legionaryMK3Pillbox",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [14.5, 8, 1, 0, 0, 120 * i, 0],
        },
        {
            POSITION: [4, 8, 1.6, 14.5, 0, 120 * i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.pound, g.destroy, g.veryfast, g.mini, { health: 2, damage: 2, maxSpeed: 3 }, g.fake]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    )
}

let sdx = 7.1;

for (let i = 0; i < 3; i++) {
    exports.legionaryCrasherMK3.GUNS.push(
        {
            POSITION: [5, 12, 1.6, -11, 0, 120 * i, 0],
        }
    )
    exports.legionaryCrasherMK3.TURRETS.push(
        { //2
            POSITION: [0.5, sdx - 1, 8, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx - 1, -8, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx - 1, 7.2, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx - 1, -7.2, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx - 1, 6.4, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx - 1, -6.4, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx - 1, 5.6, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx - 1, -5.6, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx - 1, 4.8, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx - 1, -4.8, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx - 1, 4, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx - 1, -4, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx - 1, 3.2, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx - 1, -3.2, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx - 1, 2.4, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx - 1, -2.4, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx - 1, 1.6, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx - 1, -1.6, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        { //1
            POSITION: [0.5, sdx, 8, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx, -8, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx, 7.2, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx, -7.2, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx, 6.4, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx, -6.4, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx, 5.6, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx, -5.6, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx, 4.8, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx, -4.8, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx, 4, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx, -4, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx, 3.2, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx, -3.2, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx, 2.4, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx, -2.4, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx, 1.6, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.5, sdx, -1.6, 120 * i + 60, 130, 1],
            TYPE: "superHeavyGunMK3",
        },
        {
            POSITION: [0.6, 10, 0.5, 120 * i, 130, 1],
            TYPE: "legMK3Cruiser",
        },
        {
            POSITION: [0.6, 10, -0.5, 120 * i, 130, 1],
            TYPE: "legMK3Cruiser",
        },
        {
            POSITION: [0.6, 9, 0.5, 120 * i, 130, 1],
            TYPE: "legMK3Cruiser",
        },
        {
            POSITION: [0.6, 9, -0.5, 120 * i, 130, 1],
            TYPE: "legMK3Cruiser",
        },
        {
            POSITION: [0.6, 8, 0.5, 120 * i, 130, 1],
            TYPE: "legMK3Cruiser",
        },
        {
            POSITION: [0.6, 8, -0.5, 120 * i, 130, 1],
            TYPE: "legMK3Cruiser",
        },
        {
            POSITION: [0.6, 7, 0.5, 120 * i, 130, 1],
            TYPE: "legMK3Cruiser",
        },
        {
            POSITION: [0.6, 7, -0.5, 120 * i, 130, 1],
            TYPE: "legMK3Cruiser",
        },
        {
            POSITION: [0.6, 6, 0.5, 120 * i, 130, 1],
            TYPE: "legMK3Cruiser",
        },
        {
            POSITION: [0.6, 6, -0.5, 120 * i, 130, 1],
            TYPE: "legMK3Cruiser",
        },
        {
            POSITION: [0.8, 11.2, 1.5, 120 * i, 360, 1],
            TYPE: ["legMK3Cyclone", { COLOR: 16, }],
        },
        {
            POSITION: [0.8, 11.2, -1.5, 120 * i, 360, 1],
            TYPE: ["legMK3Cyclone", { COLOR: 16, }],
        },
        {
            POSITION: [2.5, 12.5, 0, 120 * i, 150, 1],
            TYPE: ["legMK3Stream", { COLOR: 16, }],
        },
        {
            POSITION: [13, 8, 0, 120 * i + 60, 180, 0],
            TYPE: ["legMK3Sprayer", { COLOR: 5, }],
        },
    )
};
exports.legionaryCrasherMK3.TURRETS.push(
    {
        POSITION: [15, 0, 0, 0, 360, 1],
        TYPE: "legionaryMK3Body1",
    },
    {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: "legionaryMK3Body2",
    }
);

// STRANGE BOSSES
exports.waferbread = {
    PARENT: ["sunchip"],
    SHAPE: 0
};
exports.sorcerer = {
    PARENT: ["miniboss"],
    LABEL: "Sorcerer",
    DANGER: 7,
    SHAPE: 0,
    COLOR: 6,
    SIZE: 26,
    MAX_CHILDREN: 50,
    FACING_TYPE: "autospin",
    VALUE: 2e5,
    BODY: {
        FOV: 0.5,
        SPEED: 0.12 * base.SPEED,
        HEALTH: 6 * base.HEALTH,
        DAMAGE: 2 * base.DAMAGE,
    },
    GUNS: Array(2).fill().map((_, i) => ({
        POSITION: [3.5, 8.65, 1.2, 8, 0, i * 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.mach, g.machgun, { size: 0.4, spray: 150, speed: 2, shudder: 1.75 }]),
            TYPE: "waferbread",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: true,
        },
    }))
};
exports.summoner = {
    PARENT: ["miniboss"],
    LABEL: "Summoner",
    DANGER: 8,
    SHAPE: 4,
    COLOR: 13,
    SIZE: 26,
    MAX_CHILDREN: 28,
    FACING_TYPE: "autospin",
    VALUE: 3e5,
    BODY: {
        FOV: 0.5,
        SPEED: 0.1 * base.SPEED,
        HEALTH: 7 * base.HEALTH,
        DAMAGE: 2.6 * base.DAMAGE,
    },
    GUNS: Array(4).fill().map((_, i) => ({
        POSITION: [3.5, 8.65, 1.2, 8, 0, i * 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, { size: 0.8 }]),
            TYPE: ["sunchip"],
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: true,
        },
    }))
};
exports.dorito = {
    PARENT: ["sunchip"],
    SHAPE: 3
};
exports.enchantress = {
    PARENT: ["miniboss"],
    LABEL: "Enchantress",
    DANGER: 8,
    SHAPE: 3.5,
    COLOR: 2,
    SIZE: 26,
    MAX_CHILDREN: 28,
    FACING_TYPE: "autospin",
    VALUE: 4e5,
    BODY: {
        FOV: 0.5,
        SPEED: 0.09 * base.SPEED,
        HEALTH: 10 * base.HEALTH,
        DAMAGE: 3 * base.DAMAGE,
    },
    GUNS: Array(3).fill().map((_, i) => ({
        POSITION: [3.5, 8.65, 1.2, 8, 0, i * 120, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, { size: 0.9 }]),
            TYPE: "dorito",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: true,
        },
    }))
};
exports.demonchip = {
    PARENT: ["sunchip"],
    SHAPE: 5
};
exports.exorcistor = {
    PARENT: ["miniboss"],
    LABEL: "Exorcistor",
    DANGER: 8,
    SHAPE: 5.5,
    COLOR: 14,
    SIZE: 26,
    MAX_CHILDREN: 20,
    FACING_TYPE: "autospin",
    VALUE: 5e5,
    BODY: {
        FOV: 0.5,
        SPEED: 0.08 * base.SPEED,
        HEALTH: 15 * base.HEALTH,
        DAMAGE: 4 * base.DAMAGE,
    },
    GUNS: Array(5).fill().map((_, i) => ({
        POSITION: [3.5, 8.65, 1.2, 8, 0, i * 72, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.destroy]),
            TYPE: "demonchip",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: true,
        },
    }))
};
exports.eliteSkimmer = {
    PARENT: ["elite"],
    LABEL: "Elite Skimmer",
    COLOR: 2,
    TURRETS: [
        {
            POSITION: [15, 5, 0, 60, 170, 0],
            TYPE: "skimmerTurret",
        },
        {
            POSITION: [15, 5, 0, 180, 170, 0],
            TYPE: "skimmerTurret",
        },
        {
            POSITION: [15, 5, 0, 300, 170, 0],
            TYPE: "skimmerTurret",
        },
    ],
};

// Nesters
exports.nestKeeper = {
    PARENT: ["miniboss"],
    LABEL: "Nest Keeper",
    COLOR: 14,
    SHAPE: 5,
    SIZE: 50,
    VALUE: 300000,
    BODY: {
        FOV: 1.3,
        SPEED: base.SPEED * 0.25,
        HEALTH: base.HEALTH * 9,
        SHIELD: base.SHIELD * 1.5,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 2.5,
    },
    MAX_CHILDREN: 15,
    GUNS: [
        {
            POSITION: [3.5, 6.65, 1.2, 8, 0, 35, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.nest_keeper]),
                TYPE: "drone",
                AUTOFIRE: true,
                LABEL: "Mega Crasher",
            },
        },
        {
            POSITION: [3.5, 6.65, 1.2, 8, 0, -35, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.nest_keeper]),
                TYPE: "drone",
                AUTOFIRE: true,
                LABEL: "Mega Crasher",
            },
        },
        {
            POSITION: [3.5, 6.65, 1.2, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.nest_keeper]),
                TYPE: "drone",
                AUTOFIRE: true,
                LABEL: "Mega Crasher",
            },
        },
        {
            POSITION: [3.5, 6.65, 1.2, 8, 0, 108, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.nest_keeper]),
                TYPE: "drone",
                AUTOFIRE: true,
                LABEL: "Mega Crasher",
            },
        },
        {
            POSITION: [3.5, 6.65, 1.2, 8, 0, -108, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.nest_keeper]),
                TYPE: "drone",
                AUTOFIRE: true,
                LABEL: "Mega Crasher",
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [8, 9, 0, 72, 120, 0],
            TYPE: [
                "auto4gun",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
        {
            POSITION: [8, 9, 0, 0, 120, 0],
            TYPE: [
                "auto4gun",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
        {
            POSITION: [8, 9, 0, 144, 120, 0],
            TYPE: [
                "auto4gun",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
        {
            POSITION: [8, 9, 0, 216, 120, 0],
            TYPE: [
                "auto4gun",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
        {
            POSITION: [8, 9, 0, -72, 120, 0],
            TYPE: [
                "auto4gun",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: [
                "boomerTurret",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
    ],
};
exports.nestWarden = {
    PARENT: ["miniboss"],
    LABEL: "Nest Warden",
    COLOR: 14,
    SHAPE: 5,
    SIZE: 50,
    VALUE: 300000,
    BODY: {
        FOV: 1.3,
        SPEED: base.SPEED * 0.25,
        HEALTH: base.HEALTH * 9,
        SHIELD: base.SHIELD * 1.5,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 2.5,
    },
    GUNS: [],
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: [
                "barricadeTurret",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
    ],
};
for(let i = 0; i < 5; i++) {
    exports.nestWarden.GUNS.push(
        {
            POSITION: [10.7, 8, 1, 0, 0, 72*i+36, 0],
        },
        {
            POSITION: [1.5, 8, 1.2, 10.7, 0, 72*i+36, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.fast, g.block, g.construct]),
                TYPE: "unsetTrap",
            },
        },
    );
    exports.nestWarden.TURRETS.push(
        {
            POSITION: [8, 9, 0, 72*i, 120, 0],
            TYPE: [
                "cruiserTurret",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        }
    );
};
exports.nestGuardian = {
    PARENT: ["miniboss"],
    LABEL: "Nest Guardian",
    COLOR: 14,
    SHAPE: 5,
    SIZE: 50,
    VALUE: 300000,
    BODY: {
        FOV: 1.3,
        SPEED: base.SPEED * 0.25,
        HEALTH: base.HEALTH * 9,
        SHIELD: base.SHIELD * 1.5,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 2.5,
    },
    GUNS: [],
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: [
                "twisterTurret",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        },
    ],
};
for(let i = 0; i < 5; i++) {
    exports.nestGuardian.GUNS.push(
        {
            POSITION: [5.5, 7, 1, 6, 0, 72*i+36, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
                TYPE: "bullet",
                LABEL: "Devastator",
            },
        },
    );
    exports.nestGuardian.TURRETS.push(
        {
            POSITION: [8, 9, 0, 72*i, 120, 0],
            TYPE: [
                "swarmerTurret",
                {
                    INDEPENDENT: true,
                    COLOR: 14,
                },
            ],
        }
    );
};

// Rogues
exports.roguePalisade = {
    PARENT: ["miniboss"],
    LABEL: "Rogue Palisade",
    COLOR: 17,
    SHAPE: 6,
    SIZE: 30,
    VALUE: 5e5,
    CONTROLLERS: ['nearestDifferentMaster', 'onlyAcceptInArc'],
    BODY: {
        FOV: 1.4,
        SPEED: 0.05 * base.SPEED,
        HEALTH: 16 * base.HEALTH,
        SHIELD: 3 * base.SHIELD,
        DAMAGE: 3 * base.DAMAGE,
    },
    GUNS: [
        { POSITION: [4, 6, -1.6, 8, 0, 0, 0], PROPERTIES: { SHOOT_SETTINGS: combineStats([ g.factory, g.pound, g.halfreload, g.halfreload ]), TYPE: ["minion", {INDEPENDENT: true}], STAT_CALCULATOR: gunCalcNames.drone, AUTOFIRE: true, MAX_CHILDREN: 3, SYNCS_SKILLS: true, WAIT_TO_CYCLE: true }},
        { POSITION: [4, 6, -1.6, 8, 0, 60, 0], PROPERTIES: { SHOOT_SETTINGS: combineStats([ g.factory, g.pound, g.halfreload, g.halfreload ]), TYPE: ["minion", {INDEPENDENT: true}], STAT_CALCULATOR: gunCalcNames.drone, AUTOFIRE: true, MAX_CHILDREN: 3, SYNCS_SKILLS: true, WAIT_TO_CYCLE: true }},
        { POSITION: [4, 6, -1.6, 8, 0, 120, 0], PROPERTIES: { SHOOT_SETTINGS: combineStats([ g.factory, g.pound, g.halfreload, g.halfreload ]), TYPE: ["minion", {INDEPENDENT: true}], STAT_CALCULATOR: gunCalcNames.drone, AUTOFIRE: true, MAX_CHILDREN: 3, SYNCS_SKILLS: true, WAIT_TO_CYCLE: true }},
        { POSITION: [4, 6, -1.6, 8, 0, 180, 0], PROPERTIES: { SHOOT_SETTINGS: combineStats([ g.factory, g.pound, g.halfreload, g.halfreload ]), TYPE: ["minion", {INDEPENDENT: true}], STAT_CALCULATOR: gunCalcNames.drone, AUTOFIRE: true, MAX_CHILDREN: 3, SYNCS_SKILLS: true, WAIT_TO_CYCLE: true }},
        { POSITION: [4, 6, -1.6, 8, 0, 240, 0], PROPERTIES: { SHOOT_SETTINGS: combineStats([ g.factory, g.pound, g.halfreload, g.halfreload ]), TYPE: ["minion", {INDEPENDENT: true}], STAT_CALCULATOR: gunCalcNames.drone, AUTOFIRE: true, MAX_CHILDREN: 3, SYNCS_SKILLS: true, WAIT_TO_CYCLE: true }},
        { POSITION: [4, 6, -1.6, 8, 0, 300, 0], PROPERTIES: { SHOOT_SETTINGS: combineStats([ g.factory, g.pound, g.halfreload, g.halfreload ]), TYPE: ["minion", {INDEPENDENT: true}], STAT_CALCULATOR: gunCalcNames.drone, AUTOFIRE: true, MAX_CHILDREN: 3, SYNCS_SKILLS: true, WAIT_TO_CYCLE: true }},
    ],
    TURRETS: [
        { POSITION: [5, 10, 0, 30, 110, 0], TYPE: "baseTrapTurret" },
        { POSITION: [5, 10, 0, 90, 110, 0], TYPE: "baseTrapTurret" },
        { POSITION: [5, 10, 0, 150, 110, 0], TYPE: "baseTrapTurret" },
        { POSITION: [5, 10, 0, 210, 110, 0], TYPE: "baseTrapTurret" },
        { POSITION: [5, 10, 0, 270, 110, 0], TYPE: "baseTrapTurret" },
        { POSITION: [5, 10, 0, 330, 110, 0], TYPE: "baseTrapTurret" },
    ],
};
exports.rogueArmada = (() => {
    let SHAPE = 7,
        GUNS = [],
        TURRETS = [];
    for (let i = 0; i < SHAPE; i++) {
        for (let j = 0; j < 12; j++) {
            GUNS.push({
                POSITION: [ 4, 0.3 * Math.floor(j / 4), 1, 0, (j + 3) % SHAPE - 3, (i + 0.5) * (360 / SHAPE), 0 ],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                    TYPE: j % SHAPE < 2 ? "bullet" : "casing"
                }
            });
        }
        GUNS.push({
            POSITION: [ 9, 6  ,  1  , 4,  0, (i + 0.5) * (360 / SHAPE), 0 ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
                TYPE: "casing"
            }
        }, {
            POSITION: [ 8, 6  , -1.1, 4,  0, (i + 0.5) * (360 / SHAPE), 0 ]
        });
    }
    for (let i = 0; i < SHAPE; i++) {
        TURRETS.push({
            POSITION: [ 5, 10, 0, i * 360 / SHAPE, 110, 0],
            TYPE: "shottrapTurret"
        });
    }
    return {
        PARENT: ["miniboss"],
        LABEL: 'Rogue Armada',
        COLOR: 17,
        SHAPE,
        SIZE: 28,
        VALUE: 500000,
        CONTROLLERS: ['nearestDifferentMaster', 'onlyAcceptInArc'],
        BODY: {
            FOV: 1.3,
            SPEED: base.SPEED * 0.1,
            HEALTH: base.HEALTH * 2,
            SHIELD: base.SHIELD * 2,
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 3,
        },
        FACING_TYPE: 'autospin',
        GUNS, TURRETS
    };
})();

// WINTER MAYHEM STRANGE BOSSES
exports.pumpkinEmperor = {
    PARENT: ["nestKeeper"],
    LABEL: "Pumpkin Emperor",
    NAME: "Jack Skeleton",
    COLOR: 40,
    BODY: {
        SPEED: base.SPEED * 0.5,
    },
};

// DIEP BOSSES
exports.guardianOfThePentagons = {
    PARENT: ["elite"],
    LABEL: "Guardian",
    FACING_TYPE: "toTarget",
    GUNS: [
        {
            POSITION: [4, 12, 1.4, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.celeslower, g.morereload, { damage: 2 }]),
                TYPE: "swarm",
                AUTOFIRE: true,
                LABEL: "Crasher"
            },
        },
    ],
    AI: {
        NO_LEAD: false,
    },
};
exports.defender = {
    PARENT: ["elite"],
    LABEL: "Defender",
    COLOR: 2,
    GUNS: [
        {
            POSITION: [15, 7, 1, -3, 0, 60, 0],
        },
        {
            POSITION: [3, 7, 1.7, 12, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, -3, 0, 180, 0],
        },
        {
            POSITION: [3, 7, 1.7, 12, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
        {
            POSITION: [15, 7, 1, -3, 0, 300, 0],
        },
        {
            POSITION: [3, 7, 1.7, 12, 0, 300, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap]),
                TYPE: "trap",
                STAT_CALCULATOR: gunCalcNames.trap,
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [5, 7, 0, 0, 190, 1],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [5, 7, 0, 120, 190, 1],
            TYPE: "autoTankGun",
        },
        {
            POSITION: [5, 7, 0, 240, 190, 1],
            TYPE: "autoTankGun",
        },
    ],
    AI: {
        NO_LEAD: false,
    },
};

// CELESTIALS
exports.terrestrial = {
    PARENT: ["miniboss"],
    LABEL: "Terrestrial",
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    VALUE: 5e5,
    SHAPE: 7,
    SIZE: 35,
    BODY: {
        FOV: 1,
        HEALTH: 1000,
        SHIELD: 2,
        REGEN: base.REGEN * 0.1,
        SPEED: 0.75,
        DAMAGE: 5,
    },
};
exports.celestial = {
    PARENT: ["miniboss"],
    LABEL: "Celestial",
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    VALUE: 1e6,
    SHAPE: 9,
    SIZE: 45,
    BODY: {
        FOV: 1,
        HEALTH: 1000,
        SHIELD: 2,
        REGEN: base.REGEN * 0.1,
        SPEED: 0.75,
        DAMAGE: 5,
    },
};
exports.rogueCelestial = {
    PARENT: ["celestial"],
    LABEL: "Rogue Celestial",
    COLOR: 17,
};
exports.eternal = {
    PARENT: ["miniboss"],
    LABEL: "Eternal",
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    VALUE: 4e6,
    SHAPE: 11,
    SIZE: 90,
    BODY: {
        FOV: 1,
        HEALTH: 3000,
        SHIELD: 2,
        REGEN: base.REGEN * 0.1,
        SPEED: 0.75,
        DAMAGE: 5,
    },
};

// Terrestrials
exports.protoHive = {
    PARENT: ["bullet"],
    LABEL: "Proto-Hive",
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
            POSITION: [7, 9.5, 0.6, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                TYPE: ["bee", { INDEPENDENT: true }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 9.5, 0.6, 7, 0, 120, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                TYPE: ["bee", { INDEPENDENT: true }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 9.5, 0.6, 7, 0, -120, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                TYPE: ["bee", { INDEPENDENT: true }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.protoSwarmerTurret = {
    PARENT: ["genericTank"],
    LABEL: "Swarmer",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [10, 14, -1.2, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.hive, { health: 1.35, damage: 1, pen: 2, speed: 2, maxSpeed: 0.5, range: 2 }]),
                TYPE: "protoHive",
            },
        },
        {
            POSITION: [11, 12, 1, 5, 0, 0, 0],
        },
    ],
};
exports.aresLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 14,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    INDEPENDENT: true,
    BODY: {
        FOV: 10,
    },
    MAX_CHILDREN: 18,
    FACING_TYPE: "autospin",
    GUNS: [],
};
for(let i = 0; i < 7; i++) {
    exports.aresLowerBody.GUNS.push(
        {
            POSITION: [3.75, 7, 1.2, 8, 0, 360/7*(i+0.5), 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.destroy, g.halfspeed]),
                TYPE: ["demonchip", { INDEPENDENT: true, }],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
                WAIT_TO_CYCLE: true,
            },
        },
    )
};
exports.aresUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    AUTOSPIN: true,
    COLOR: 14,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [],
};
for(let i = 0; i < 5; i++) {
    exports.aresUpperBody.TURRETS.push(
        {
            POSITION: [10, 8.5, 0, 360/5*(i+0.5), 160, 0],
            TYPE: ["protoSwarmerTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.ares = {
    PARENT: ["terrestrial"],
    NAME: "Ares",
    COLOR: 14,
    TURRETS: [
        {
            POSITION: [14.5, 0, 0, 0, 360, 1],
            TYPE: ["aresLowerBody"],
        },
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: ["aresUpperBody"],
        },
    ],
};
for(let i = 0; i < 7; i++) {
    exports.ares.TURRETS.push(
        {
            POSITION: [7, 9, 0, 360/7*(i+0.5), 180, 0],
            TYPE: ["terrestrialTrapTurret", { INDEPENDENT: true, }],
        },
    )
};

exports.swarmTurret = {
    PARENT: ["genericTank"],
    LABEL: "Swarm",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: ["swarm", {INDEPENDENT: true}],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.basicTurret = {
    PARENT: ["genericTank"],
    LABEL: "Turret",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [16, 4, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.gersemiLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 1,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 5,
    INDEPENDENT: true,
    BODY: {
        FOV: 10,
    },
    MAX_CHILDREN: 18,
    FACING_TYPE: "autospin",
    TURRETS: [],
};
for(let i = 0; i < 5; i++) {
    exports.gersemiLowerBody.TURRETS.push(
        {
            POSITION: [9, 8, 0, 360/5*(i+0.5), 160, 0],
            TYPE: ["swarmTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.gersemiUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    AUTOSPIN: true,
    COLOR: 1,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 3,
    INDEPENDENT: true,
    TURRETS: [],
};
for(let i = 0; i < 3; i++) {
    exports.gersemiUpperBody.TURRETS.push(
        {
            POSITION: [9.5, 7.5, 0, 360/3*(i+0.5), 160, 0],
            TYPE: ["basicTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.gersemi = {
    PARENT: ["terrestrial"],
    NAME: "Gersemi",
    COLOR: 1,
    TURRETS: [
        {
            POSITION: [14.5, 0, 0, 0, 360, 1],
            TYPE: ["gersemiLowerBody"],
        },
        {
            POSITION: [8.5, 0, 0, 0, 360, 1],
            TYPE: ["gersemiUpperBody"],
        },
    ],
};
for(let i = 0; i < 7; i++) {
    exports.gersemi.TURRETS.push(
        {
            POSITION: [7, 9, 0, 360/7*(i+0.5), 180, 0],
            TYPE: ["terrestrialTrapTurret", { INDEPENDENT: true, }],
        },
    )
};

exports.ezekielLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 2,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 5,
    INDEPENDENT: true,
    BODY: {
        FOV: 10,
    },
    MAX_CHILDREN: 18,
    FACING_TYPE: "autospin",
    GUNS: [],
};
for(let i = 0; i < 5; i++) {
    exports.ezekielLowerBody.GUNS.push(
        {
            POSITION: [3.75, 7, 1.2, 8, 0, 360/5*(i+0.5), 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.destroy, g.halfspeed]),
                TYPE: ["dorito", { COLOR: 2, INDEPENDENT: true, }],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
                WAIT_TO_CYCLE: true,
            },
        },
    )
};

exports.ezekielSkimmerTurret = {
    PARENT: ["skimmerTurret"],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [10, 14, -0.5, 9, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.arty,
                    g.arty,
                    g.skim,
                    { maxSpeed: 0.1 }
                ]),
                TYPE: "missile",
            },
        },
        {
            POSITION: [17, 15, 1, 0, 0, 0, 0],
        },
    ],
};

exports.ezekielUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    AUTOSPIN: true,
    COLOR: 2,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 3,
    INDEPENDENT: true,
    TURRETS: [],
};
for(let i = 0; i < 3; i++) {
    exports.ezekielUpperBody.TURRETS.push(
        {
            POSITION: [10, 7.5, 0, 360/3*(i+0.5), 160, 0],
            TYPE: ["ezekielSkimmerTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.ezekiel = {
    PARENT: ["terrestrial"],
    NAME: "Ezekiel",
    COLOR: 2,
    TURRETS: [
        {
            POSITION: [14.5, 0, 0, 0, 360, 1],
            TYPE: ["ezekielLowerBody"],
        },
        {
            POSITION: [8.5, 0, 0, 0, 360, 1],
            TYPE: ["ezekielUpperBody"],
        },
    ],
};
for(let i = 0; i < 7; i++) {
    exports.ezekiel.TURRETS.push(
        {
            POSITION: [7, 9, 0, 360/7*(i+0.5), 180, 0],
            TYPE: ["terrestrialTrapTurret", { INDEPENDENT: true, }],
        },
    )
};

exports.erisLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 5,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    BODY: {
        FOV: 100,
    },
    MAX_CHILDREN: 14,
    INDEPENDENT: true,
    FACING_TYPE: "autospin",
    GUNS: [],
};
for(let i = 0; i < 7; i++) {
    exports.erisLowerBody.GUNS.push(
        {
            POSITION: [3.75, 7, 1.2, 8, 0, 360/7*(i+0.5), 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
                TYPE: ["minion", { INDEPENDENT: true, COLOR: 5, HAS_NO_RECOIL: true, }],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
                WAIT_TO_CYCLE: true,
            },
        },
    )
};
exports.erisUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    AUTOSPIN: true,
    COLOR: 5,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [],
};
for(let i = 0; i < 5; i++) {
    exports.erisUpperBody.TURRETS.push(
        {
            POSITION: [10, 8.5, 0, 360/5*(i+0.5), 160, 0],
            TYPE: ["rocketeerTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.eris = {
    PARENT: ["terrestrial"],
    NAME: "Eris",
    COLOR: 5,
    TURRETS: [
        {
            POSITION: [14.5, 0, 0, 0, 360, 1],
            TYPE: ["erisLowerBody"],
        },
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: ["erisUpperBody"],
        },
    ],
};
for(let i = 0; i < 7; i++) {
    exports.eris.TURRETS.push(
        {
            POSITION: [7, 9, 0, 360/7*(i+0.5), 180, 0],
            TYPE: ["terrestrialTrapTurret", { INDEPENDENT: true, }],
        },
    )
};

exports.seleneLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 13,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 5,
    INDEPENDENT: true,
    BODY: {
        FOV: 10,
    },
    MAX_CHILDREN: 18,
    FACING_TYPE: "autospin",
    GUNS: [],
};
for(let i = 0; i < 5; i++) {
    exports.seleneLowerBody.GUNS.push(
        {
            POSITION: [3.75, 7, 1.2, 8, 0, 360/5*(i+0.5), 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.destroy, g.halfspeed]),
                TYPE: ["sunchip", { COLOR: 13, INDEPENDENT: true, }],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.necro,
                WAIT_TO_CYCLE: true,
            },
        },
    )
};
exports.seleneUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    AUTOSPIN: true,
    COLOR: 13,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 3,
    INDEPENDENT: true,
    TURRETS: [],
};
for(let i = 0; i < 3; i++) {
    exports.seleneUpperBody.TURRETS.push(
        {
            POSITION: [10, 7.5, 0, 360/3*(i+0.5), 160, 0],
            TYPE: ["hyperTwisterTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.selene = {
    PARENT: ["terrestrial"],
    NAME: "Selene",
    COLOR: 13,
    TURRETS: [
        {
            POSITION: [14.5, 0, 0, 0, 360, 1],
            TYPE: ["seleneLowerBody"],
        },
        {
            POSITION: [8.5, 0, 0, 0, 360, 1],
            TYPE: ["seleneUpperBody"],
        },
    ],
};
for(let i = 0; i < 7; i++) {
    exports.selene.TURRETS.push(
        {
            POSITION: [7, 9, 0, 360/7*(i+0.5), 180, 0],
            TYPE: ["terrestrialTrapTurret", { INDEPENDENT: true, }],
        },
    )
};

// PALADIN
exports.swarmerTurret = {
    PARENT: ["genericTank"],
    LABEL: "Swarmer",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [14, 14, -1.2, 5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.hive, { health: 1.5, damage: 1.5, pen: 2, speed: 2, maxSpeed: 0.5, range: 2 }]),
                TYPE: "hive",
            },
        },
        {
            POSITION: [15, 12, 1, 5, 0, 0, 0],
        },
    ],
};
exports.paladinLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 14,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    MAX_CHILDREN: 16,
    FACING_TYPE: "autospin",
    INDEPENDENT: true,
    GUNS: [
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 26, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: ["demonchip", {INDEPENDENT: true}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 77, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: ["demonchip", {INDEPENDENT: true}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 129, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: ["demonchip", {INDEPENDENT: true}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: ["demonchip", {INDEPENDENT: true}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 231, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: ["demonchip", {INDEPENDENT: true}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 282, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: ["demonchip", {INDEPENDENT: true}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 333, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: ["demonchip", {INDEPENDENT: true}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
    ],
};
exports.paladinUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    AUTOSPIN: true,
    COLOR: 14,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [10, 7.5, 0, 35, 160, 0],
            TYPE: ["swarmerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 110, 160, 0],
            TYPE: ["swarmerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 180, 160, 0],
            TYPE: ["swarmerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 252, 160, 0],
            TYPE: ["swarmerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 325, 160, 0],
            TYPE: ["swarmerTurret"],
        },
    ],
};
exports.paladin = {
    PARENT: ["celestial"],
    NAME: "Paladin",
    COLOR: 14,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6.5, 9, 0, 260, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 219, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 180, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 300, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 339, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 380, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 420, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 459, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 500, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [14.94, 0, 0, 0, 360, 1],
            TYPE: ["paladinLowerBody"],
        },
        {
            POSITION: [8.6, 0, 0, 0, 360, 1],
            TYPE: ["paladinUpperBody"],
        },
    ],
};

// FREYJA
exports.cruiserTurret = {
    PARENT: ["genericTank"],
    LABEL: "Cruiser",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
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
exports.freyjaLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 1,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 7,
    INDEPENDENT: true,
    FACING_TYPE: "autospin",
    TURRETS: [
        {
            //*********    SIZE         X             Y         ANGLE        ARC
            POSITION: [8.5, 9, 0, 26, 180, 0],
            TYPE: ["cruiserTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 77, 180, 0],
            TYPE: ["cruiserTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 129, 180, 0],
            TYPE: ["cruiserTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 180, 180, 0],
            TYPE: ["cruiserTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 231, 180, 0],
            TYPE: ["cruiserTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 282, 180, 0],
            TYPE: ["cruiserTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 333, 180, 0],
            TYPE: ["cruiserTurret"],
        },
    ],
};
exports.freyjaUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    COLOR: 1,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [
        {
            //**     SIZE         X             Y         ANGLE        ARC
            POSITION: [10.6, 7.5, 0, 35, 160, 0],
            TYPE: ["auto4gun"],
        },
        {
            POSITION: [10.6, 7.5, 0, 110, 160, 0],
            TYPE: ["auto4gun"],
        },
        {
            POSITION: [10.6, 7.5, 0, 180, 160, 0],
            TYPE: ["auto4gun"],
        },
        {
            POSITION: [10.6, 7.5, 0, 252, 160, 0],
            TYPE: ["auto4gun"],
        },
        {
            POSITION: [10.6, 7.5, 0, 325, 160, 0],
            TYPE: ["auto4gun"],
        },
    ],
};
exports.freyja = {
    PARENT: ["celestial"],
    NAME: "Freyja",
    COLOR: 1,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6.5, 9, 0, 260, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 219, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 180, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 300, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 339, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 380, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 420, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 459, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 500, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [14.77, 0, 0, 0, 360, 1],
            TYPE: ["freyjaLowerBody"],
        },
        {
            POSITION: [8.7, 0, 0, 0, 360, 1],
            TYPE: ["freyjaUpperBody"],
        },
    ],
};

// ZAPHKIEL
exports.zaphkielSkimmerTurret = {
    PARENT: ["skimmerTurret"],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [10, 14, -0.5, 9, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.arty,
                    g.arty,
                    g.skim,
                    { maxSpeed: 0.1 }
                ]),
                TYPE: "hypermissile",
            },
        },
        {
            POSITION: [17, 15, 1, 0, 0, 0, 0],
        },
    ],
};
exports.zaphkielLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 2,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    MAX_CHILDREN: 16,
    FACING_TYPE: "autospin",
    GUNS: [
        {
            //*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY
            POSITION: [3.6, 6, 1.4, 8, 0, 26, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: ["drone", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                STAT_CALCULATOR: gunCalcNames.drone,
                WAIT_TO_CYCLE: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 77, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: ["drone", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 129, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: ["drone", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: ["drone", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 231, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: ["drone", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 282, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: ["drone", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 333, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                TYPE: ["drone", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
    ],
};
exports.zaphkielUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    AUTOSPIN: true,
    COLOR: 2,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [10, 7.5, 0, 35, 160, 0],
            TYPE: ["zaphkielSkimmerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 110, 160, 0],
            TYPE: ["zaphkielSkimmerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 180, 160, 0],
            TYPE: ["zaphkielSkimmerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 252, 160, 0],
            TYPE: ["zaphkielSkimmerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 325, 160, 0],
            TYPE: ["zaphkielSkimmerTurret"],
        },
    ],
};
exports.zaphkiel = {
    PARENT: ["celestial"],
    NAME: "Zaphkiel",
    COLOR: 2,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6.5, 9, 0, 260, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 219, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 180, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 300, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 339, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 380, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 420, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 459, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 500, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [14.94, 0, 0, 0, 360, 1],
            TYPE: "zaphkielLowerBody",
        },
        {
            POSITION: [8.6, 0, 0, 0, 360, 1],
            TYPE: "zaphkielUpperBody",
        },
    ],
};

// NYX
exports.rocketeerTurret = {
    PARENT: ["genericTank"],
    LABEL: "Rocketeer",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [10, 12.5, -0.7, 10, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.launcher,
                    g.rocketeer,
                    { health: 0.75, damage: 0.75 }
                ]),
                TYPE: "rocketeerMissile",
                STAT_CALCULATOR: gunCalcNames.sustained,
            },
        },
        {
            POSITION: [17, 18, 0.65, 0, 0, 0, 0],
        },
    ],
};
exports.nyxLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 5,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    FACING_TYPE: "autospin",
    INDEPENDENT: true,
    MAX_CHILDREN: 16,
    GUNS: [
        {
            POSITION: [3.6, 7, -1.4, 8, 0, 26, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
                TYPE: ["minion", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 7, -1.4, 8, 0, 77, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
                TYPE: ["minion", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 7, -1.4, 8, 0, 129, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
                TYPE: ["minion", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 7, -1.4, 8, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
                TYPE: ["minion", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 7, -1.4, 8, 0, 231, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
                TYPE: ["minion", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 7, -1.4, 8, 0, 282, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
                TYPE: ["minion", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 7, -1.4, 8, 0, 333, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower]),
                TYPE: ["minion", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
    ],
};
exports.nyxUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    AUTOSPIN: true,
    COLOR: 5,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [10, 7.5, 0, 35, 160, 0],
            TYPE: ["rocketeerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 110, 160, 0],
            TYPE: ["rocketeerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 180, 160, 0],
            TYPE: ["rocketeerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 252, 160, 0],
            TYPE: ["rocketeerTurret"],
        },
        {
            POSITION: [10, 7.5, 0, 325, 160, 0],
            TYPE: ["rocketeerTurret"],
        },
    ],
};
exports.nyx = {
    PARENT: ["celestial"],
    NAME: "Nyx",
    COLOR: 5,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6.5, 9, 0, 260, 180, 0],
            TYPE: [
                "baseTrapTurret",
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6.5, 9, 0, 219, 180, 0],
            TYPE: [
                "baseTrapTurret",
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6.5, 9, 0, 180, 180, 0],
            TYPE: [
                "baseTrapTurret",
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6.5, 9, 0, 300, 180, 0],
            TYPE: [
                "baseTrapTurret",
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6.5, 9, 0, 339, 180, 0],
            TYPE: [
                "baseTrapTurret",
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6.5, 9, 0, 380, 180, 0],
            TYPE: [
                "baseTrapTurret",
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6.5, 9, 0, 420, 180, 0],
            TYPE: [
                "baseTrapTurret",
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6.5, 9, 0, 459, 180, 0],
            TYPE: [
                "baseTrapTurret",
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [6.5, 9, 0, 500, 180, 0],
            TYPE: [
                "baseTrapTurret",
                {
                    INDEPENDENT: true,
                },
            ],
        },
        {
            POSITION: [14.94, 0, 0, 0, 360, 1],
            TYPE: ["nyxLowerBody"],
        },
        {
            POSITION: [8.6, 0, 0, 0, 360, 1],
            TYPE: ["nyxUpperBody"],
        },
    ],
};

// THEIA
exports.theiaTwisterTurret = {
    PARENT: ["hyperTwisterTurret"],
    COLOR: 16,
};
exports.theiaLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 35,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    FACING_TYPE: "autospin",
    MAX_CHILDREN: 35,
    INDEPENDENT: true,
    GUNS: [
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 26, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
                TYPE: ["summonerDrone", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                WAIT_TO_CYCLE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 77, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
                TYPE: ["summonerDrone", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                WAIT_TO_CYCLE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 129, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
                TYPE: ["summonerDrone", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                WAIT_TO_CYCLE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 180, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
                TYPE: ["summonerDrone", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                WAIT_TO_CYCLE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 231, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
                TYPE: ["summonerDrone", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                WAIT_TO_CYCLE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 282, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
                TYPE: ["summonerDrone", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                WAIT_TO_CYCLE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [3.6, 6, 1.4, 8, 0, 333, 1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.celeslower]),
                TYPE: ["summonerDrone", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                WAIT_TO_CYCLE: true,
                SYNCS_SKILLS: true,
            },
        },
    ],
};
exports.theiaUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    AUTOSPIN: true,
    COLOR: 35,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [10, 7.5, 0, 35, 160, 0],
            TYPE: "theiaTwisterTurret",
        },
        {
            POSITION: [10, 7.5, 0, 110, 160, 0],
            TYPE: "theiaTwisterTurret",
        },
        {
            POSITION: [10, 7.5, 0, 180, 160, 0],
            TYPE: "theiaTwisterTurret",
        },
        {
            POSITION: [10, 7.5, 0, 252, 160, 0],
            TYPE: "theiaTwisterTurret",
        },
        {
            POSITION: [10, 7.5, 0, 325, 160, 0],
            TYPE: "theiaTwisterTurret",
        },
    ],
};
exports.theia = {
    PARENT: ["celestial"],
    NAME: "Theia",
    COLOR: 13,
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6.5, 9, 0, 260, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 219, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 180, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 300, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 339, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 380, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 420, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 459, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 500, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [14.94, 0, 0, 0, 360, 1],
            TYPE: ["theiaLowerBody"],
        },
        {
            POSITION: [8.6, 0, 0, 0, 360, 1],
            TYPE: ["theiaUpperBody"],
        },
    ],
};

// ALVISS
exports.alvissDrone = {
    PARENT: ["eggchip"],
    NECRO: false,
};
exports.launcherTurret = {
    PARENT: ["genericTank"],
    LABEL: "Launcher",
    BODY: {
        FOV: 2 * base.FOV,
    },
    COLOR: 16,
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
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
exports.alvissLowerTurret = {
    PARENT: ["genericTank"],
    LABEL: "",
    MAX_CHILDREN: 3,
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [8.5, 11, 0.6, 6, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.sunchip]),
                TYPE: "alvissDrone",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.alvissLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 17,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    FACING_TYPE: "autospin",
    MAX_CHILDREN: 24,
    TURRETS: [
        {
            //*********    SIZE         X             Y         ANGLE        ARC
            POSITION: [8.5, 9, 0, 26, 180, 0],
            TYPE: ["alvissLowerTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 77, 180, 0],
            TYPE: ["alvissLowerTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 129, 180, 0],
            TYPE: ["alvissLowerTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 180, 180, 0],
            TYPE: ["alvissLowerTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 231, 180, 0],
            TYPE: ["alvissLowerTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 282, 180, 0],
            TYPE: ["alvissLowerTurret"],
        },
        {
            POSITION: [8.5, 9, 0, 333, 180, 0],
            TYPE: ["alvissLowerTurret"],
        },
    ],
};
exports.alvissUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    COLOR: 17,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [
        {
            //**     SIZE         X             Y         ANGLE        ARC
            POSITION: [10.6, 7.5, 0, 35, 160, 0],
            TYPE: ["launcherTurret"],
        },
        {
            POSITION: [10.6, 7.5, 0, 110, 160, 0],
            TYPE: ["launcherTurret"],
        },
        {
            POSITION: [10.6, 7.5, 0, 180, 160, 0],
            TYPE: ["launcherTurret"],
        },
        {
            POSITION: [10.6, 7.5, 0, 252, 160, 0],
            TYPE: ["launcherTurret"],
        },
        {
            POSITION: [10.6, 7.5, 0, 325, 160, 0],
            TYPE: ["launcherTurret"],
        },
    ],
};
exports.alviss = {
    PARENT: ["rogueCelestial"],
    NAME: "Alviss",
    TURRETS: [
        {
            /*********    SIZE         X             Y         ANGLE        ARC */
            POSITION: [6.5, 9, 0, 260, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 219, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 180, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 300, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 339, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 380, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 420, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 459, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [6.5, 9, 0, 500, 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
        },
        {
            POSITION: [14.94, 0, 0, 0, 360, 1],
            TYPE: ["alvissLowerBody"],
        },
        {
            POSITION: [8.6, 0, 0, 0, 360, 1],
            TYPE: ["alvissUpperBody"],
        },
    ],
};

// TYR
exports.tyrLowerTurret = {
    PARENT: ["genericTank"],
    LABEL: "",
    MAX_CHILDREN: 4,
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [8.5, 11, 0.6, 6, 0, 0, 0.5],
        },
        {
            POSITION: [3.4, 14, 1, 14.3, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.babyfactory, g.lessreload]),
                TYPE: ["tinyMinion", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
    ],
};
exports.tyrLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 17,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    FACING_TYPE: "autospin",
    MAX_CHILDREN: 23,
    TURRETS: [{ //*********    SIZE         X             Y         ANGLE        ARC
        POSITION: [8.5, 9, 0, 26, 180, 0],
        TYPE: ["tyrLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 77, 180, 0],
        TYPE: ["tyrLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 129, 180, 0],
        TYPE: ["tyrLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 180, 180, 0],
        TYPE: ["tyrLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 231, 180, 0],
        TYPE: ["tyrLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 282, 180, 0],
        TYPE: ["tyrLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 333, 180, 0],
        TYPE: ["tyrLowerTurret"],
    }]
};
exports.tyrUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    COLOR: 17,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [{ //**     SIZE         X             Y         ANGLE        ARC
        POSITION: [10.6, 7.5, 0, 35, 160, 0],
        TYPE: ["auto4gun"],
    },{
        POSITION: [10.6, 7.5, 0, 110, 160, 0],
        TYPE: ["auto4gun"],
    },{
        POSITION: [10.6, 7.5, 0, 180, 160, 0],
        TYPE: ["auto4gun"],
    },{
        POSITION: [10.6, 7.5, 0, 252, 160, 0],
        TYPE: ["auto4gun"],
    },{
        POSITION: [10.6, 7.5, 0, 325, 160, 0],
        TYPE: ["auto4gun"],
    }]
};
exports.tyr = {
    PARENT: ["rogueCelestial"],
    NAME: "Tyr",
    TURRETS: [{ /*********    SIZE         X             Y         ANGLE        ARC */
        POSITION: [6.5, 9, 0, 260, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 219, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 180, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 300, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 339, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 380, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 420, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 459, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 500, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [14.94, 0, 0, 0, 360, 1],
        TYPE: ["tyrLowerBody"],
    },{
        POSITION: [8.6, 0, 0, 0, 360, 1],
        TYPE: ["tyrUpperBody"],
    }]
};

// Fiolnir
exports.fiolnirLowerTurret = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            POSITION: [7, 8, 0.6, 6, 0, 30, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.pound, g.morespeed]),
                TYPE: ["bee", { INDEPENDENT: true }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 8, 0.6, 6, 0, -30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.bees, g.pound, g.morespeed]),
                TYPE: ["bee", { INDEPENDENT: true }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.fiolnirLowerBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 17,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    FACING_TYPE: "autospin",
    MAX_CHILDREN: 23,
    TURRETS: [{ //*********    SIZE         X             Y         ANGLE        ARC
        POSITION: [8.5, 9, 0, 26, 180, 0],
        TYPE: ["fiolnirLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 77, 180, 0],
        TYPE: ["fiolnirLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 129, 180, 0],
        TYPE: ["fiolnirLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 180, 180, 0],
        TYPE: ["fiolnirLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 231, 180, 0],
        TYPE: ["fiolnirLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 282, 180, 0],
        TYPE: ["fiolnirLowerTurret"],
    },{
        POSITION: [8.5, 9, 0, 333, 180, 0],
        TYPE: ["fiolnirLowerTurret"],
    }]
};
exports.turretedBullet = makeAuto(bullet, "Auto-Bullet", {size: 14, color: 6, angle: 0});
exports.fiolnirUpperTurret = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 16,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [12, 16, -0.6, 0, 0, 0, 0],
        },
        {
            POSITION: [15, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.bitlessspeed]),
                TYPE: ["turretedBullet", {COLOR: 6}],
            },
        },
    ],
};
exports.fiolnirUpperBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    COLOR: 17,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
    TURRETS: [{ //**     SIZE         X             Y         ANGLE        ARC
        POSITION: [10.6, 7.5, 0, 35, 160, 0],
        TYPE: ["fiolnirUpperTurret"],
    },{
        POSITION: [10.6, 7.5, 0, 110, 160, 0],
        TYPE: ["fiolnirUpperTurret"],
    },{
        POSITION: [10.6, 7.5, 0, 180, 160, 0],
        TYPE: ["fiolnirUpperTurret"],
    },{
        POSITION: [10.6, 7.5, 0, 252, 160, 0],
        TYPE: ["fiolnirUpperTurret"],
    },{
        POSITION: [10.6, 7.5, 0, 325, 160, 0],
        TYPE: ["fiolnirUpperTurret"],
    }]
};
exports.fiolnir = {
    PARENT: ["rogueCelestial"],
    NAME: "Fiolnir",
    TURRETS: [{ /*********    SIZE         X             Y         ANGLE        ARC */
        POSITION: [6.5, 9, 0, 260, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 219, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 180, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 300, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 339, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 380, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 420, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 459, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [6.5, 9, 0, 500, 180, 0],
        TYPE: ["baseTrapTurret", { INDEPENDENT: true }],
    },{
        POSITION: [14.5, 0, 0, 0, 360, 1],
        TYPE: ["fiolnirLowerBody"],
    },{
        POSITION: [8.6, 0, 0, 0, 360, 1],
        TYPE: ["fiolnirUpperBody"],
    }]
};

// Eternals
exports.kronosMissile = {
    PARENT: ["missile"],
    GUNS: [
        {
            POSITION: [14, 6, 1, 0, -2, 150, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    [4, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    g.halfrange
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
                    [4, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    g.halfrange
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
            POSITION: [14, 7, 1, 0, -0.5, 90, 0],
        },
        {
            POSITION: [3.5, 7, 1.5, 14, -0.5, 90, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.trap,
                    g.halfrange,
                    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                ]),
                TYPE: [
                    "trap",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
            },
        },
        {
            POSITION: [14, 7, 1, 0, 0.5, -90, 0],
        },
        {
            POSITION: [3.5, 7, 1.5, 14, 0.5, -90, 0],
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([
                    g.trap,
                    g.halfrange,
                    [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                ]),
                TYPE: [
                    "trap",
                    {
                        PERSISTS_AFTER_DEATH: true,
                    },
                ],
            },
        },
    ],
};
exports.kronosSkimmerTurret = {
    PARENT: ["genericTank"],
    LABEL: "Skimmer",
    BODY: {
        FOV: 10,
    },
    COLOR: 6,
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    GUNS: [
        {
            POSITION: [8, 20, -0.5, 9, 0, 0, 0],
        },
        {
            POSITION: [13, 18, -0.8, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.arty,
                    g.arty,
                    g.skim,
                    g.destroy,
                    g.morespeed,
                    g.morespeed,
                    g.halfreload,
                    { range:2 }
                ]),
                TYPE: "kronosMissile",
            },
        },
    ],
};
exports.carrierTurret = {
    PARENT: ["genericTank"],
    LABEL: "Carrier",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 6,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [7, 8, 0.6, 7, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.pound, g.morespeed]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 8, 0.6, 7, 2, 30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.pound, g.morespeed]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [7, 8, 0.6, 7, -2, -30, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier, g.pound, g.morespeed]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
    ],
};
exports.tripletTurret = {
    PARENT: ["genericTank"],
    LABEL: "Triplet",
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    COLOR: 6,
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
            POSITION: [21, 10, 1.2, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.kronosBottomBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.01 }]],
    COLOR: 6,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 9,
    FOV: 10,
    TURRETS: [],
};
for(let i = 0; i < 9; i++) {
    exports.kronosBottomBody.TURRETS.push(
        {
            POSITION: [6.5, 9, 0, 360/9*(i+0.5), 160, 0],
            TYPE: ["kronosSkimmerTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.kronosMiddleBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    COLOR: 6,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    TURRETS: [],
};
for(let i = 0; i < 7; i++) {
    exports.kronosMiddleBody.TURRETS.push(
        {
            POSITION: [8, 8.5, 0, 360/7*(i+0.5), 160, 0],
            TYPE: ["carrierTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.kronosTopBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 6,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 5,
    FOV: 1,
    TURRETS: [],
};
for(let i = 0; i < 5; i++) {
    exports.kronosTopBody.TURRETS.push(
        {
            POSITION: [9.5, 9, 0, 360/5*(i+0.5), 160, 0],
            TYPE: ["tripletTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.kronos = {
    PARENT: ["eternal"],
    NAME: "Kronos",
    COLOR: 6,
    TURRETS: [
        {
            POSITION: [15.5, 0, 0, 0, 360, 1],
            TYPE: ["kronosBottomBody"],
        },
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: ["kronosMiddleBody"],
        },
        {
            POSITION: [6.5, 0, 0, 0, 360, 1],
            TYPE: ["kronosTopBody"],
        },
    ],
};
for(let i = 0; i < 11; i++) {
    exports.kronos.TURRETS.push(
        {
            POSITION: [6, 9, 0, 360/11*(i+0.5), 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true, }],
        },
    )
};

exports.autoSmasherMissileTurret = {
    PARENT: ["autoSmasherTurret"],
    CONTROLLERS: ["nearestDifferentMaster"],
};
exports.autoSmasherMissile = {
    PARENT: ["missile"],
    LABEL: "Auto-Smasher",
    HITS_OWN_TYPE: "never",
    DANGER: 6,
    BODY: {
        FOV: 1.05 * base.FOV,
        DENSITY: 2 * base.DENSITY,
    },
    GUNS: [],
    TURRETS: [
        {
            POSITION: [21.5, 0, 0, 0, 360, 0],
            TYPE: "smasherBody",
        },
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: ["autoSmasherMissileTurret", { INDEPENDENT: true }],
        },
    ],
}
exports.autosmashTurret = {
    PARENT: ["genericTank"],
    LABEL: "Launcher",
    BODY: {
        FOV: 10,
    },
    COLOR: 16,
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    GUNS: [
        {
            POSITION: [3, 10, 1.2, 15, 0, 0, 0],
        },
        {
            POSITION: [16, 18, -0.7, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.pound,
                    g.arty,
                    g.arty,
                    g.skim,
                    g.halfreload,
                    g.morespeed,
                    g.morespeed,
                    //g.morespeed,
                    {range: 2.5},
                ]),
                TYPE: "autoSmasherMissile",
            },
        },
    ],
};
exports.gunnerCruiserTurret = {
    PARENT: ["genericTank"],
    LABEL: "Gunner Cruiser",
    BODY: {
        FOV: 10,
    },
    COLOR: 16,
    CONTROLLERS: [
        "canRepel",
        "onlyAcceptInArc",
        "mapAltToFire",
        "nearestDifferentMaster",
    ],
    GUNS: [
        {
            POSITION: [6, 7.5, 0.6, 6, 4.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [6, 7.5, 0.6, 6, -4.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [18, 3, 1, 0, -3, 0, 0],
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
            POSITION: [18, 3, 1, 0, 3, 0, 0.5],
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
    ],
};
exports.gemDrone = {
    PARENT: ["drone"],
    COLOR: 0,
    DRAW_HEALTH: true,
    SHAPE: 6,
    INDEPENDENT: true,
    BODY: {
        PUSHABILITY: 0.3,
        HEALTH: 0.3*5,
        DAMAGE: 3.375/5,
        SPEED: 1,
        DENSITY: 0.1,
        RESIST: 3,
        FOV: 100,
    },
}
exports.ragnarokBottomBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.01 }]],
    COLOR: 0,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 9,
    FOV: 10,
    MAX_CHILDREN: 18,
    GUNS: [],
};
for(let i = 0; i < 9; i++) {
    exports.ragnarokBottomBody.GUNS.push(
        {
            POSITION: [2.5, 3, -1.8, 9, 0, 360/9*(i+0.5), 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory, g.celeslower, g.pound, {size: 1.7}]),
                TYPE: ["gemDrone", {INDEPENDENT: true,}],
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
    )
};
exports.ragnarokMiddleBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: 0.005 }]],
    COLOR: 0,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 7,
    FOV: 1,
    TURRETS: [],
};
for(let i = 0; i < 7; i++) {
    exports.ragnarokMiddleBody.TURRETS.push(
        {
            POSITION: [7, 8.5, 0, 360/7*(i+0.5), 160, 0],
            TYPE: ["autosmashTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.ragnarokTopBody = {
    LABEL: "",
    CONTROLLERS: [["spin", { independent: true, speed: -0.005 }]],
    COLOR: 0,
    SIZE: 100,
    SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
    SHAPE: 5,
    FOV: 1,
    TURRETS: [],
};
for(let i = 0; i < 5; i++) {
    exports.ragnarokTopBody.TURRETS.push(
        {
            POSITION: [8.5, 9, 0, 360/5*(i+0.5), 160, 0],
            TYPE: ["gunnerCruiserTurret", { INDEPENDENT: true, }],
        },
    )
};
exports.ragnarok = {
    PARENT: ["eternal"],
    NAME: "Ragnarok",
    COLOR: 0,
    TURRETS: [
        {
            POSITION: [15.5, 0, 0, 0, 360, 1],
            TYPE: ["ragnarokBottomBody"],
        },
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: ["ragnarokMiddleBody"],
        },
        {
            POSITION: [6.5, 0, 0, 0, 360, 1],
            TYPE: ["ragnarokTopBody"],
        },
    ],
};
for(let i = 0; i < 11; i++) {
    exports.ragnarok.TURRETS.push(
        {
            POSITION: [5, 8.5, 0, 360/11*(i+0.5), 180, 0],
            TYPE: ["baseTrapTurret", { INDEPENDENT: true, }],
        },
    )
};

//Tiered Bosses
//SRK-X, SpiRit King-X
exports.srk1 = {
    PARENT: ["miniboss"],
    LABEL: "SRK-1",
    COLOR: "#C9B6F6",
    SHAPE: 3,
    SIZE: 28,
    VALUE: 150000,
    BODY: {
        FOV: 1.3,
        SPEED: base.SPEED * 0.25,
        HEALTH: base.HEALTH * 6,
        SHIELD: base.SHIELD * 1.5,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 2.5,
    },
    GUNS: [],
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: [
                "machineGun",
                {
                    INDEPENDENT: false,
                    COLOR: 16,
                    BODY: {
                        FOV: 2
                    },
                    CONTROLLERS: ['nearestDifferentMaster']
                },
            ],
        },
    ],
};
for (let i = 0; i < 3; i++) {
    exports.srk1.GUNS.push(
        {
            POSITION: [4, 18.25, 1.1, 8, 0, 360/3 * (i + 0.5), 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.battle, g.battle, g.morereload, g.morespeed, g.morespeed, g.mehdrone, { size: 0.4 }]),
                TYPE: "drone",
                AUTOFIRE: true,
                MAX_CHILDREN: 3
            },
        },
    );
    exports.srk1.TURRETS.push(
        {
            POSITION: [9, 13, 0, 360/3 * i, 120, 0],
            TYPE: [
                "heavy3gun_faster",
                {
                    INDEPENDENT: true,
                    COLOR: -1,
                },
            ],
        }
    );
};
exports.srk2_spawner = {
    PARENT: ["genericTank"],
    LABEL: "Spawner",
    INDEPENDENT: true,
    COLOR: -1,
    BODY: {
        FOV: 6,
    },
    CONTROLLERS: ['nearestDifferentMaster'],
    AI: {
        NO_LEAD: true,
        SKYNET: true,
        FULL_VIEW: true,
    },
    GUNS: [
        {
            /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [4.5, 10, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [1, 12, 1, 15, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 3,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory, g.morespeed]),
                TYPE: ["minion", { BODY: { FOV: 1.5 } }],
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [15.5, 6, 0.2, 0, 0, 0, 0],
        },
    ],
};
exports.srk2_megaHunter = {
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
            POSITION: [25, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.morespeed, g.morespeed, g.hunter, g.hunter2, g.sniper, g.morereload]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [22, 14, 1, 0, 0, 0, 0.15],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.morespeed, g.morespeed, g.hunter, g.sniper, g.morereload]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.srk2_minigun = {
    PARENT: ["autoTankGun"],
    LABEL: "Minigun",
    DANGER: 6,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [21, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, { speed: 1.8 , maxSpeed: 1.8}]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 1 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, { speed: 1.8, maxSpeed: 1.8 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 2 / 3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, { speed: 1.8, maxSpeed: 1.8 }]),
                TYPE: "bullet",
            },
        },
    ],
}
exports.srk2 = {
    PARENT: ["miniboss"],
    LABEL: "SRK-2",
    COLOR: "#C9B6F6",
    SHAPE: 3,
    SIZE: 36,
    DANGER: 7,
    VALUE: 300000,
    BODY: {
        FOV: 1.3,
        SPEED: base.SPEED * 0.25,
        HEALTH: base.HEALTH * 9,
        SHIELD: base.SHIELD * 3,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 2.5,
    },
    GUNS: [],
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: [
                "srk2_minigun",
                {
                    INDEPENDENT: false,
                    COLOR: 16,
                    BODY: {
                        FOV: 2
                    },
                    CONTROLLERS: ['nearestDifferentMaster']
                },
            ],
        },
    ],
};
for (let i = 0; i < 3; i++) {
    exports.srk2.GUNS.push(
        {
            POSITION: [3.2, 7, 1.1, 7.2, 8, 360 / 3 * (i + 0.5), 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.battle, g.battle, g.morereload, g.morespeed, g.morespeed, g.mehdrone, { size: 0.5 }]),
                TYPE: "drone",
                AUTOFIRE: true,
                MAX_CHILDREN: 3
            },
        }, {
        POSITION: [3.2, 7, 1.1, 7.2, -8, 360 / 3 * (i + 0.5), 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.battle, g.battle, g.morereload, g.morespeed, g.morespeed, g.mehdrone, { size: 0.5 }]),
            TYPE: "drone",
            AUTOFIRE: true,
            MAX_CHILDREN: 3
        },
    },
    );
    exports.srk2.TURRETS.push(
        {
            POSITION: [7.8, 12.5, 0, 360 / 3 * i, 120, 0],
            TYPE: [
                "srk2_megaHunter",
                {
                    INDEPENDENT: true,
                    COLOR: -1,
                },
            ],
        }, {
        POSITION: [8, 8, 0, 360 / 3 * (i + 0.5), 0, 0],
        TYPE: [
            "srk2_spawner",
            {
                
            },
        ],
    }
    );
};

exports.srk3_dual = {
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
            POSITION: [22, 6, 1, 0, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.morespeed, g.morespeed, g.hunter, g.hunter2, g.sniper, g.morereload, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, 5, 0, 0.15],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.morespeed, g.morespeed, g.hunter, g.sniper, g.morereload, g.twin]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [22, 6, 1, 0, -5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.morespeed, g.morespeed, g.hunter, g.hunter2, g.sniper, g.morereload, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5, 0, 0.65],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.morespeed, g.morespeed, g.hunter, g.sniper, g.morereload, g.twin]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.srk3_spawner = {
    PARENT: ["genericTank"],
    LABEL: "Spawner",
    INDEPENDENT: true,
    COLOR: -1,
    BODY: {
        FOV: 6,
    },
    CONTROLLERS: ['nearestDifferentMaster'],
    AI: {
        NO_LEAD: true,
        SKYNET: true,
        FULL_VIEW: true,
    },
    GUNS: [
        {
            POSITION: [7, 7.5, 0.7, 3, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.twin, g.morespeed, { range: 2 }]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true
            },
        },
        {
            POSITION: [7, 7.5, 0.7, 3, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.twin, g.morespeed, { range: 2 }]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true
            },
        },
        {
            /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [4.5, 10, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [1, 12, 1, 15, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 3,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory, g.morespeed]),
                TYPE: ["minion", { BODY: { FOV: 1.5 } }],
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 12, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [15.5, 6, 0.2, 0, 0, 0, 0],
        },
    ],
};
exports.srk3_vulcan = { //8 barrels
    PARENT: ["genericTank"],
    LABEL: 'M-61',
    GUNS: [{
        POSITION: [32, 2, 1, 0, -2.5, 0, 7 / 12 + 7,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//8
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 0, 0, 6 / 12 + 6,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//7
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 2.5, 0, 5 / 12 + 5,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//9
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, -4.5, 0, 8 / 12 + 8,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//6
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 4.5, 0, 4 / 12 + 4,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//5
            TYPE: "bullet",
        },
    }, { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [32, 2, 1, 0, -6, 0, 9 / 12 + 9,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//10
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 6, 0, 3 / 12 + 3,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//4
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, -4.5, 0, 10 / 12 + 10,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//11
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 4.5, 0, 2 / 12 + 2,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//3
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, -2.5, 0, 11 / 12 + 11,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//12
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 2.5, 0, 1 / 12 + 1,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//2
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 0, 0, 0,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//1
            TYPE: "bullet",
        },
    }, {
        POSITION: [6, 16, 1, 6.5, 0, 0, 0,],
    }, {
        POSITION: [4.5, 16, 1, 21.5, 0, 0, 0,],
    },
    ],
};

exports.srk3 = {
    PARENT: ["miniboss"],
    LABEL: "SRK-3",
    COLOR: "#C9B6F6",
    SHAPE: 3,
    SIZE: 54,
    DANGER: 7,
    VALUE: 500000,
    BODY: {
        FOV: 1.3,
        SPEED: base.SPEED * 0.2,
        HEALTH: base.HEALTH * 10,
        SHIELD: base.SHIELD * 4,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 3.5,
    },
    GUNS: [],
    TURRETS: [],
};
for (let i = 0; i < 3; i++) {
    exports.srk3.GUNS.push(
        {
            POSITION: [2.8, 6, 1.1, 7.2, 9.3, 360 / 3 * (i + 0.5), 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.battle, g.battle, g.morereload, g.morespeed, g.morespeed, { health: 0.5, size: 0.4 }]),
                TYPE: ["drone"],
                AUTOFIRE: true,
                MAX_CHILDREN: 4
            },
        }, {
        POSITION: [2.8, 6, 1.1, 7.2, -9.3, 360 / 3 * (i + 0.5), 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.battle, g.battle, g.morereload, g.morespeed, g.morespeed, { health: 0.5, size: 0.4 }]),
            TYPE: ["drone"],
            AUTOFIRE: true,
            MAX_CHILDREN: 4
        },
    }, {
        POSITION: [3.8, 6, 1.1, 7.2, 7, 360 / 3 * (i + 0.5), 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.battle, g.battle, g.morereload, g.morespeed, g.morespeed, g.mehdrone, { health: 0.5, size: 0.5 }]),
            TYPE: "drone",
            AUTOFIRE: true,
            MAX_CHILDREN: 2
        },
    }, {
        POSITION: [3.8, 6, 1.1, 7.2, -7, 360 / 3 * (i + 0.5), 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.battle, g.battle, g.morereload, g.morespeed, g.morespeed, g.mehdrone, { health: 0.5, size: 0.5 }]),
            TYPE: "drone",
            AUTOFIRE: true,
            MAX_CHILDREN: 2
        },
    },
    );
    exports.srk3.TURRETS.push(
        {
            POSITION: [6, 13.5, 0, 360 / 3 * i, 120, 0],
            TYPE: [
                "srk3_dual",
                {
                    INDEPENDENT: true,
                    COLOR: -1,
                },
            ],
        }, {
        POSITION: [6.75, 8, 0, 360 / 3 * (i + 0.5), 0, 0],
        TYPE: [
            "srk3_spawner",
        ],
    }, {
        POSITION: [5, 9.5, 0, 360 / 3 * i, 120, 1],
        TYPE: [
            "machineGun",
            {
                INDEPENDENT: true,
                COLOR: -1,
            },
        ],
    }, 
    );
};
exports.srk3.TURRETS.push(
    {
        POSITION: [10, 0, 0, 0, 360, 1],
        TYPE: [
            "srk3_vulcan",
            {
                INDEPENDENT: false,
                COLOR: 16,
                BODY: {
                    FOV: 2
                },
                CONTROLLERS: ['nearestDifferentMaster']
            },
        ],
    },
);

exports.srk4_preda = {
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
            POSITION: [21, 4, 1, 0, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.morespeed, g.morespeed, g.hunter, g.hunter2, g.hunter2, g.sniper, g.morereload, g.twin, g.triple]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [19, 6, 1, 0, 5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.morespeed, g.morespeed, g.hunter, g.hunter2, g.sniper, g.morereload, g.twin, g.triple]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [17, 8, 1, 0, 5, 0, 0.3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.morespeed, g.morespeed, g.hunter, g.sniper, g.morereload, g.twin, g.triple]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [21, 4, 1, 0, -5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.morespeed, g.morespeed, g.hunter, g.hunter2, g.hunter2, g.sniper, g.morereload, g.twin, g.triple]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [19, 6, 1, 0, -5, 0, 0.65],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.morespeed, g.morespeed, g.hunter, g.hunter2, g.sniper, g.morereload, g.twin, g.triple]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [17, 8, 1, 0, -5, 0, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.morespeed, g.morespeed, g.hunter, g.sniper, g.morereload, g.twin, g.triple]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [30, 3, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.morespeed, g.morespeed, g.hunter, g.hunter2, g.hunter2, g.sniper, g.morereload, g.twin, g.sniper]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [27, 5, 1, 0, 0, 0, 0.25],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.morespeed, g.morespeed, g.hunter, g.hunter2, g.sniper, g.morereload, g.twin, g.sniper]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [24, 7, 1, 0, 0, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.morespeed, g.morespeed, g.hunter, g.sniper, g.morereload, g.twin, g.sniper]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.srk4_segment1 = {
    PARENT: ["genericTank"],
    LABEL: "Blade",
    //INDEPENDENT: true,
    COLOR: -1,
    SHAPE: 3,
    BODY: {
        FOV: 6,
    },
    CONTROLLERS: ['nearestDifferentMaster'],
    MIRROR_MASTER_ANGLE: true,
    AI: {
        NO_LEAD: true,
        SKYNET: true,
        FULL_VIEW: true,
    },
    GUNS: [
        {
            POSITION: [5, 7.5, 0.7, 7, 5.5, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.twin, g.morespeed, { range: 2 }]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true
            },
        },
        {
            POSITION: [5, 7.5, 0.7, 7, -5.5, 60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.twin, g.morespeed, { range: 2 }]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true
            },
        }, {
            POSITION: [5, 7.5, 0.7, 7, 5.5, -60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.twin, g.morespeed, { range: 2 }]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true
            },
        },
        {
            POSITION: [5, 7.5, 0.7, 7, -5.5, -60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.twin, g.morespeed, { range: 2 }]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true
            },
        },
    ],
    TURRETS: [{
        POSITION: [11, 0, 0, 0, 180, 1],
        TYPE: [
            "sniper3gun",
            {
                INDEPENDENT: true
            }
        ],
    },]
};
exports.srk4_vulcan = { //8 barrels
    PARENT: ["genericTank"],
    LABEL: 'M-61',
    GUNS: [{
        POSITION: [32, 2, 1, 0, -2.5, 0, 7 / 12 + 7,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//8
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 0, 0, 6 / 12 + 6,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//7
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 2.5, 0, 5 / 12 + 5,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//9
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, -4.5, 0, 8 / 12 + 8,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//6
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 4.5, 0, 4 / 12 + 4,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//5
            TYPE: "bullet",
        },
    }, { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [32, 2, 1, 0, -6, 0, 9 / 12 + 9,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//10
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 6, 0, 3 / 12 + 3,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//4
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, -4.5, 0, 10 / 12 + 10,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//11
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 4.5, 0, 2 / 12 + 2,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//3
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, -2.5, 0, 11 / 12 + 11,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//12
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 2.5, 0, 1 / 12 + 1,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//2
            TYPE: "bullet",
        },
    }, {
        POSITION: [32, 2, 1, 0, 0, 0, 0,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//1
            TYPE: "bullet",
        },
    }, {
        POSITION: [6, 16, 1, 6.5, 0, 0, 0,],
    }, {
        POSITION: [4.5, 16, 1, 21.5, 0, 0, 0,],
    },
    ],
    TURRETS: [{
        POSITION: [14, 0, 0, 0, 360, 1],
        TYPE: [
            "genericEntity",
            {
                COLOR: 8
            },
        ],
    },]
};

exports.spiritMinion = {
    PARENT: ["minion"],
    LABEL: "Spirit Minion",
    DANGER: 7,
    BODY: {
        HEALTH: base.HEALTH * 0.25,
        SHIELD: base.SHIELD * 0.5,
        DAMAGE: base.DAMAGE * 0.75,
        REGEN: base.REGEN,
        SPEED: 0.25 * base.SPEED,
        ACCELERATION: 2 * base.ACCEL,
        FOV: 2 * base.FOV,
    },
    AI: {
        BLIND: false,
    },
    DRAW_HEALTH: true,
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

exports.srk4 = {
    PARENT: ["miniboss"],
    LABEL: "SRK-4",
    COLOR: "#C9B6F6",
    SHAPE: 3,
    SIZE: 72,
    DANGER: 8,
    VALUE: 1250000,
    BODY: {
        FOV: 1.3,
        SPEED: base.SPEED * 0.2,
        HEALTH: base.HEALTH * 12,
        SHIELD: base.SHIELD * 4,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 4,
    },
    GUNS: [],
    TURRETS: [],
};
for (let i = 0; i < 3; i++) {
    exports.srk4.GUNS.push(
        {
            POSITION: [1, 4.5 * 0.7, 1, 0, 0, 360 / 3 * (i + 0.5), 0],
            PROPERTIES: {
                MAX_CHILDREN: 2,
                SHOOT_SETTINGS: combineStats([g.bossminion, g.halfreload]),
                TYPE: "spiritMinion",
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [2.8, 4, 1.1, 7.2, 10.2, 360 / 3 * (i + 0.5), 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.battle, g.battle, g.morereload, g.morespeed, g.morespeed, { health: 0.5, size: 0.4 }]),
                TYPE: ["drone"],
                AUTOFIRE: true,
                MAX_CHILDREN: 4
            },
        }, {
        POSITION: [2.8, 4, 1.1, 7.2, -10.2, 360 / 3 * (i + 0.5), 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.battle, g.battle, g.morereload, g.morespeed, g.morespeed, { health: 0.5, size: 0.4 }]),
            TYPE: ["drone"],
            AUTOFIRE: true,
            MAX_CHILDREN: 4
        },
    }, {
        POSITION: [2.8, 4, 1.1, 7.2, 6.2, 360 / 3 * (i + 0.5), 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.battle, g.battle, g.morereload, g.morespeed, g.morespeed, { health: 0.5, size: 0.4 }]),
            TYPE: ["drone"],
            AUTOFIRE: true,
            MAX_CHILDREN: 4
        },
    }, {
        POSITION: [2.8, 4, 1.1, 7.2, -6.2, 360 / 3 * (i + 0.5), 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.battle, g.battle, g.morereload, g.morespeed, g.morespeed, { health: 0.5, size: 0.4 }]),
            TYPE: ["drone"],
            AUTOFIRE: true,
            MAX_CHILDREN: 4
        },
    }, {
        POSITION: [3.8, 5, 1.1, 7.2, 8.2, 360 / 3 * (i + 0.5), 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.battle, g.battle, g.morereload, g.morespeed, g.morespeed, g.mehdrone, { health: 0.5, size: 0.5 }]),
            TYPE: "drone",
            AUTOFIRE: true,
            MAX_CHILDREN: 2
        },
    }, {
        POSITION: [3.8, 5, 1.1, 7.2, -8.2, 360 / 3 * (i + 0.5), 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.battle, g.battle, g.morereload, g.morespeed, g.morespeed, g.mehdrone, { health: 0.5, size: 0.5 }]),
            TYPE: "drone",
            AUTOFIRE: true,
            MAX_CHILDREN: 2
        },
    },
    );
    exports.srk4.TURRETS.push(
        {
            POSITION: [6, 13.5, 0, 360 / 3 * i, 120, 0],
            TYPE: [
                "srk4_preda",
                {
                    INDEPENDENT: true,
                    COLOR: -1,
                },
            ],
        }, {
        POSITION: [5.5, 10.2, 0, 360 / 3 * (i + 0.5), 0, 0],
        TYPE: [
            "srk4_segment1",
        ],
    }, {
        POSITION: [4, 10.5, 0, 360 / 3 * i, 120, 1],
        TYPE: [
            "vulcTurret",
            {
                INDEPENDENT: true,
                COLOR: 16,
                BODY: {
                    FOV: 3
                },
                CONTROLLERS: ['nearestDifferentMaster']
            },
        ],
    }, {
        POSITION: [3, 6, 4, 360 / 3 * (i + 0.5), 120, 1],
        TYPE: [
            "srk2_minigun",
            {
                INDEPENDENT: true,
                COLOR: 16,
                BODY: {
                    FOV: 3
                },
                CONTROLLERS: ['nearestDifferentMaster']
            },
        ],
    }, {
        POSITION: [3, 6, -4, 360 / 3 * (i + 0.5), 120, 1],
        TYPE: [
            "srk2_minigun",
            {
                INDEPENDENT: true,
                COLOR: 16,
                BODY: {
                    FOV: 3
                },
                CONTROLLERS: ['nearestDifferentMaster']
            },
        ],
    },
    );
};
exports.srk4.TURRETS.push(
    {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: [
            "srk4_vulcan",
            {
                INDEPENDENT: false,
                COLOR: 16,
                BODY: {
                    FOV: 2
                },
                CONTROLLERS: ['nearestDifferentMaster']
            },
        ],
    },
);

exports.srk5_preda = {
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
            POSITION: [24.5, 3.5, 1, 0, 5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.morespeed, g.morespeed, g.hunter, g.hunter2, g.hunter2, g.sniper, g.morereload, g.twin, g.triple]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [22, 5, 1, 0, 5, 0, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.morespeed, g.morespeed, g.hunter, g.hunter2, g.hunter2, g.sniper, g.morereload, g.twin, g.triple]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [19.5, 6.5, 1, 0, 5, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.morespeed, g.morespeed, g.hunter, g.hunter2, g.sniper, g.morereload, g.twin, g.triple]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [17, 8, 1, 0, 5, 0, 0.3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.morespeed, g.morespeed, g.hunter, g.sniper, g.morereload, g.twin, g.triple]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [24.5, 3.5, 1, 0, -5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.morespeed, g.morespeed, g.hunter, g.hunter2, g.hunter2, g.sniper, g.morereload, g.twin, g.triple]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [22, 5, 1, 0, -5, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.morespeed, g.morespeed, g.hunter, g.hunter2, g.hunter2, g.sniper, g.morereload, g.twin, g.triple]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [19.5, 6.5, 1, 0, -5, 0, 0.7],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.morespeed, g.morespeed, g.hunter, g.hunter2, g.sniper, g.morereload, g.twin, g.triple]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [17, 8, 1, 0, -5, 0, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.morespeed, g.morespeed, g.hunter, g.sniper, g.morereload, g.twin, g.triple]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [39, 2, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.morespeed, g.morespeed, g.hunter, g.hunter2, g.hunter2, g.sniper, g.morereload, g.twin, g.sniper, { reload: 1.33 }]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [36, 3.25, 1, 0, 0, 0, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.morespeed, g.morespeed, g.hunter, g.hunter2, g.hunter2, g.sniper, g.morereload, g.twin, g.sniper, { reload: 1.33 }]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [33, 4.5, 1, 0, 0, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.morespeed, g.morespeed, g.hunter, g.hunter2, g.hunter2, g.sniper, g.morereload, g.twin, g.sniper, { reload: 1.33 }]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [30, 5.75, 1, 0, 0, 0, 0.3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.morespeed, g.morespeed, g.hunter, g.hunter2, g.sniper, g.morereload, g.twin, g.sniper, { reload: 1.33 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [27, 7, 1, 0, 0, 0, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto, g.morespeed, g.morespeed, g.hunter, g.sniper, g.morereload, g.twin, g.sniper, { reload: 1.33 }]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.srk5_shotgun = {
    PARENT: ["genericTank"],
    LABEL: "Shotgun",
    GUNS: [
        {
            POSITION: [4, 3, 1, 11, -3, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.sniper, g.assass, g.autosnipe, { size: 1 / 1.4 }]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [4, 3, 1, 11, 3, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.sniper, g.assass, g.autosnipe, { size: 1 / 1.4 }]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [4, 4, 1, 13, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.sniper, g.assass, g.autosnipe, { size: 1 / 1.4 }]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 3, 1, 13, -1, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.sniper, g.assass, g.autosnipe, { size: 1 / 1.4 }]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 3, 1, 13, 1, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.sniper, g.assass, g.autosnipe, { size: 1 / 1.4 }]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 2, 1, 13, 2, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.sniper, g.assass, g.autosnipe, { size: 1 / 1.4 }]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [22, 11, 1, 6, 0, 0, 0,],
        }, {
            POSITION: [3, 13, 1.1, 28, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.fake, g.sniper, g.assass, g.autosnipe, { size: 1 / 1.4 }]),
                TYPE: "casing",
            },
        }, {
            POSITION: [10, 11.5, -1.2, 4, 0, 0, 0,],
        }
    ],
    TURRETS: [{
        POSITION: [14, 0, 0, 0, 360, 1],
        TYPE: [
            "genericEntity",
            {
                COLOR: 8
            },
        ],
    },]
}
exports.srk5_segment1 = {
    PARENT: ["genericTank"],
    LABEL: "Blade",
    //INDEPENDENT: true,
    COLOR: -1,
    SHAPE: 3,
    BODY: {
        FOV: 6,
    },
    CONTROLLERS: ['nearestDifferentMaster'],
    MIRROR_MASTER_ANGLE: true,
    AI: {
        NO_LEAD: true,
        SKYNET: true,
        FULL_VIEW: true,
    },
    GUNS: [
        {
            POSITION: [5.5, 6.5, 0.7, 7, 6.5, 60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.twin, g.morespeed, { range: 2 }]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true
            },
        },
        {
            POSITION: [5.5, 6.5, 0.7, 7, -6.5, 60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.twin, g.morespeed, { range: 2 }]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true
            },
        }, {
            POSITION: [5.5, 6.5, 0.7, 7, 6.5, -60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.twin, g.morespeed, { range: 2 }]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true
            },
        },
        {
            POSITION: [5.5, 6.5, 0.7, 7, -6.5, -60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.twin, g.morespeed, { range: 2 }]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true
            },
        }, {
            POSITION: [5.5, 6.5, 0.7, 7, 0, -60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.twin, g.morespeed, { range: 2 }]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true
            },
        },
        {
            POSITION: [5.5, 6.5, 0.7, 7, 0, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.twin, g.morespeed, { range: 2 }]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true
            },
        },
    ],
    TURRETS: [{
        POSITION: [10, 12, 0, 0, 120, 0],
        TYPE: [
            "machineGun",
            {
                INDEPENDENT: true,
                BODY: {
                    FOV: 3
                },
                CONTROLLERS: ['nearestDifferentMaster'],
                COLOR: -1
            }
        ],
    }, {
        POSITION: [11, 0, 0, 0, 180, 1],
        TYPE: [
            "srk5_shotgun",
            {
                INDEPENDENT: true,
                BODY: {
                    FOV: 3
                },
                CONTROLLERS: ['nearestDifferentMaster'],
                COLOR: 16
            }
        ],
    },]
};
exports.srk5_segment2 = {
    PARENT: ["genericTank"],
    LABEL: "Blade",
    //INDEPENDENT: true,
    COLOR: -1,
    SHAPE: 3,
    BODY: {
        FOV: 6,
    },
    CONTROLLERS: ['nearestDifferentMaster'],
    MIRROR_MASTER_ANGLE: true,
    AI: {
        NO_LEAD: true,
        SKYNET: true,
        FULL_VIEW: true,
    },
    GUNS: [
        {
            POSITION: [5, 9, 0.7, 7, 5.5, 60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.twin, g.morespeed, { range: 2 }]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true
            },
        },
        {
            POSITION: [5, 9, 0.7, 7, -5.5, 60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.twin, g.morespeed, { range: 2 }]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true
            },
        },
    ],
    TURRETS: [{
        POSITION: [11, 0, 0, 0, 180, 1],
        TYPE: [
            "sniper3gun",
            {
                INDEPENDENT: true
            }
        ],
    },]
};
exports.srk5_segment3 = {
    PARENT: ["genericTank"],
    LABEL: "Blade",
    //INDEPENDENT: true,
    COLOR: -1,
    SHAPE: 3,
    BODY: {
        FOV: 6,
    },
    CONTROLLERS: ['nearestDifferentMaster'],
    MIRROR_MASTER_ANGLE: true,
    AI: {
        NO_LEAD: true,
        SKYNET: true,
        FULL_VIEW: true,
    },
    GUNS: [
        {
            POSITION: [5, 7.5, 0.7, 7, 5.5, -60, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.twin, g.morespeed, { range: 2 }]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true
            },
        },
        {
            POSITION: [5, 7.5, 0.7, 7, -5.5, -60, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.twin, g.morespeed, { range: 2 }]),
                TYPE: "autoswarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
                AUTOFIRE: true
            },
        },
    ],
    TURRETS: [{
        POSITION: [11, 0, 0, 0, 180, 1],
        TYPE: [
            "sniper3gun",
            {
                INDEPENDENT: true
            }
        ],
    },]
};
exports.srk5_vulcan = { //lmao who will use this shit
    PARENT: ["genericTank"],
    LABEL: 'OP Vulcan',
    GUNS: [{
        POSITION: [28, 2, 1, 0, -2 + 5.5, 0, 4 / 6 + 4,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//5
            TYPE: "bullet",
        },
    }, {
            POSITION: [28, 2, 1, 0, 2 + 5.5, 0, 2 / 6 + 2,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//3
                TYPE: "bullet",
            },
        }, {
            POSITION: [28, 2, 1, 0, 0 + 5.5, 0, 3 / 6 + 3,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//4
                TYPE: "bullet",
            },
        },
        {
            POSITION: [28, 2, 1, 0, -2 + 5.5, 0, 5 / 6 + 5,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//6
                TYPE: "bullet",
            },
        }, {
            POSITION: [28, 2, 1, 0, 2 + 5.5, 0, 1 / 6 + 1,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//2
                TYPE: "bullet",
            },
        }, {
            POSITION: [28, 2, 1, 0, 0 + 5.75, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//1
                TYPE: "bullet",
            },
        }, {
            POSITION: [28, 2, 1, 0, -2 - 5.5, 0, 4 / 6 + 4,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//5
                TYPE: "bullet",
            },
        }, {
            POSITION: [28, 2, 1, 0, 2 - 5.5, 0, 2 / 6 + 2,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//3
                TYPE: "bullet",
            },
        }, {
            POSITION: [28, 2, 1, 0, 0 - 5.5, 0, 3 / 6 + 3,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//4
                TYPE: "bullet",
            },
        },
        {
            POSITION: [28, 2, 1, 0, -2 - 5.5, 0, 5 / 6 + 5,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//6
                TYPE: "bullet",
            },
        }, {
            POSITION: [28, 2, 1, 0, 2 - 5.5, 0, 1 / 6 + 1,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//2
                TYPE: "bullet",
            },
        }, {
            POSITION: [28, 2, 1, 0, 0 - 5.75, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//1
                TYPE: "bullet",
            },
        }, {
            POSITION: [11, 19.5, 1, 0, 0, 0, 0,],
        }, {
            POSITION: [4.5, 19.5, 1, 17.5, 0, 0, 0,],
        }, {
            POSITION: [32, 2, 1, 0, -2.5, 0, 5 / 8 + 5,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//6
                TYPE: "bullet",
            },
        }, {
            POSITION: [32, 2, 1, 0, 2.5, 0, 3 / 8 + 3,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//4
                TYPE: "bullet",
            },
        }, {
            POSITION: [32, 2, 1, 0, 0, 0, 4 / 8 + 4,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//5
                TYPE: "bullet",
            },
        },
        {
            POSITION: [32, 2, 1, 0, -4, 0, 6 / 8 + 6,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//7
                TYPE: "bullet",
            },
        }, {
            POSITION: [32, 2, 1, 0, 4, 0, 2 / 8 + 2,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//3
                TYPE: "bullet",
            },
        }, {
            POSITION: [32, 2, 1, 0, -2.5, 0, 7 / 8 + 7,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//8
                TYPE: "bullet",
            },
        }, {
            POSITION: [32, 2, 1, 0, 2.5, 0, 1 / 8 + 1,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//2
                TYPE: "bullet",
            },
        }, {
            POSITION: [32, 2, 1, 0, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.vulcan, g.noRandom, g.morespeed]),//1
                TYPE: "bullet",
            },
        }, {
            POSITION: [6, 13.2, 1, 6.5, 0, 0, 0,],
        }, {
            POSITION: [4.5, 13.2, 1, 21.5, 0, 0, 0,],
        },
    ],
    TURRETS: [{
        POSITION: [14, 0, 0, 0, 360, 1],
        TYPE: [
            "genericEntity",
            {
                COLOR: 8
            },
        ],
    },]
}

exports.srk5 = {
    PARENT: ["miniboss"],
    LABEL: "SRK-5",
    COLOR: "#C9B6F6",
    SHAPE: 3,
    SIZE: 103,
    DANGER: 9,
    VALUE: 3000000,
    BODY: {
        FOV: 1.3,
        SPEED: base.SPEED * 0.125,
        HEALTH: base.HEALTH * 15,
        SHIELD: base.SHIELD * 6,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 5.5,
    },
    GUNS: [],
    TURRETS: [],
};
for (let i = 0; i < 3; i++) {
    exports.srk5.GUNS.push(
        {
            POSITION: [1, 4.5 * 0.5, 1, 0, 0, 360 / 3 * (i + 0.5), 0],
            PROPERTIES: {
                MAX_CHILDREN: 1,
                //: combineStats([g.bossminion, g.halfreload, g.halfreload, { health: 0.25, damage: 0.5 }]),
                SHOOT_SETTINGS: combineStats([g.basic, g.fake, { reload: 1000000 }]),
                TYPE: ["srk1", { INDEPENDENT: true, BODY: { FOV: 3 } }],
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                INDEPENDENT_CHILDREN: true,
                //INDEPENDENT: true
            },
        },
        {
            POSITION: [2.5, 3.2, 1.1, 7.2, 11.2, 360 / 3 * (i + 0.5), 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.drone, g.over, g.battle, g.battle, g.morereload, g.morespeed, g.morespeed, { health: 0.5, size: 0.4 }]),
                TYPE: ["drone"],
                AUTOFIRE: true,
                MAX_CHILDREN: 5
            },
        }, {
        POSITION: [2.5, 3.2, 1.1, 7.2, -11.2, 360 / 3 * (i + 0.5), 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.battle, g.battle, g.morereload, g.morespeed, g.morespeed, { health: 0.5, size: 0.4 }]),
            TYPE: ["drone"],
            AUTOFIRE: true,
            MAX_CHILDREN: 5
        },
    }, {
        POSITION: [2.5, 3.2, 1.1, 7.2, 8.8, 360 / 3 * (i + 0.5), 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.battle, g.battle, g.morereload, g.morespeed, g.morespeed, { health: 0.5, size: 0.4 }]),
            TYPE: ["drone"],
            AUTOFIRE: true,
            MAX_CHILDREN: 5
        },
    }, {
        POSITION: [2.5, 3.2, 1.1, 7.2, -8.8, 360 / 3 * (i + 0.5), 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.battle, g.battle, g.morereload, g.morespeed, g.morespeed, { health: 0.5, size: 0.4 }]),
            TYPE: ["drone"],
            AUTOFIRE: true,
            MAX_CHILDREN: 5
        },
    }, {
        POSITION: [3.4, 4, 1.1, 7.2, 10, 360 / 3 * (i + 0.5), 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.battle, g.battle, g.morereload, g.morespeed, g.morespeed, g.mehdrone, { health: 0.5, size: 0.5 }]),
            TYPE: "drone",
            AUTOFIRE: true,
            MAX_CHILDREN: 3
        },
    }, {
        POSITION: [3.4, 4, 1.1, 7.2, -10, 360 / 3 * (i + 0.5), 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.battle, g.battle, g.morereload, g.morespeed, g.morespeed, g.mehdrone, { health: 0.5, size: 0.5 }]),
            TYPE: "drone",
            AUTOFIRE: true,
            MAX_CHILDREN: 3
        },
    },
    );
    exports.srk5.TURRETS.push(
        {
            POSITION: [5, 13.8, 0, 360 / 3 * i, 120, 0],
            TYPE: [
                "srk5_preda",
                {
                    INDEPENDENT: true,
                    COLOR: -1,
                },
            ],
        }, {
        POSITION: [2.5, 9, 5.2, 360 / 3 * (i + 0.5), 0, 0],
        TYPE: [
            "srk5_segment2",
        ],
    }, {
        POSITION: [2.5, 9, -5.2, 360 / 3 * (i + 0.5), 0, 0],
        TYPE: [
            "srk5_segment3",
        ],
    }, {
        POSITION: [5, 9.95, 0, 360 / 3 * (i + 0.5), 0, 0],
        TYPE: [
            "srk5_segment1",
        ],
    }, {
        POSITION: [3.5, 12, 0, 360 / 3 * i, 120, 1],
        TYPE: [
            "srk4_vulcan",
            {
                INDEPENDENT: true,
                COLOR: 16,
                BODY: {
                    FOV: 3
                },
                CONTROLLERS: ['nearestDifferentMaster']
            },
        ],
    }, {
        POSITION: [1.75, 6.75, -2, 360 / 3 * (i + 0.5), 120, 1],
        TYPE: [
            "srk2_minigun",
            {
                INDEPENDENT: true,
                COLOR: 16,
                BODY: {
                    FOV: 3
                },
                CONTROLLERS: ['nearestDifferentMaster']
            },
        ],
    }, {
        POSITION: [1.75, 6.75, -7, 360 / 3 * (i + 0.5), 120, 1],
        TYPE: [
            "srk2_minigun",
            {
                INDEPENDENT: true,
                COLOR: 16,
                BODY: {
                    FOV: 3
                },
                CONTROLLERS: ['nearestDifferentMaster']
            },
        ],
    },{
        POSITION: [2.25, 6.25, -4.5, 360 / 3 * (i + 0.5), 120, 1],
        TYPE: [
            "vulcTurret",
            {
                INDEPENDENT: true,
                COLOR: 16,
                BODY: {
                    FOV: 3
                },
                CONTROLLERS: ['nearestDifferentMaster']
            },
        ],
    }, {
        POSITION: [1.75, 6.75, 2, 360 / 3 * (i + 0.5), 120, 1],
        TYPE: [
            "srk2_minigun",
            {
                INDEPENDENT: true,
                COLOR: 16,
                BODY: {
                    FOV: 3
                },
                CONTROLLERS: ['nearestDifferentMaster']
            },
        ],
    }, {
        POSITION: [1.75, 6.75, 7, 360 / 3 * (i + 0.5), 120, 1],
        TYPE: [
            "srk2_minigun",
            {
                INDEPENDENT: true,
                COLOR: 16,
                BODY: {
                    FOV: 3
                },
                CONTROLLERS: ['nearestDifferentMaster']
            },
        ],
    }, {
        POSITION: [2.25, 6.25, 4.5, 360 / 3 * (i + 0.5), 120, 1],
        TYPE: [
            "vulcTurret",
            {
                INDEPENDENT: true,
                COLOR: 16,
                BODY: {
                    FOV: 3
                },
                CONTROLLERS: ['nearestDifferentMaster']
            },
        ],
    },
    );
};

for (let i = 0; i < 6; i++) {
    exports.srk5.TURRETS.push(
        {
            POSITION: [3 - i * 0.45, 7.75, 0, 0, 150, 1],
            TYPE: [
                "bigauto4gun",
                {
                    COLOR: 16,
                    GUNS: [
                        {
                            POSITION: [14, 5, 1, 0, -4.5, 0, 0 + 1 / 6 * i],
                            PROPERTIES: {
                                SHOOT_SETTINGS: combineStats([
                                    g.basic,
                                    g.auto,
                                    g.gunner,
                                    g.twin,
                                    g.twin,
                                    g.power,
                                    g.halfreload,
                                    {speed: 2, maxSpeed: 2}
                                ]),
                                TYPE: "bullet",
                            },
                        },
                        {
                            POSITION: [14, 5, 1, 0, 4.5, 0, 0.5 + 1 / 6 * i],
                            PROPERTIES: {
                                SHOOT_SETTINGS: combineStats([
                                    g.basic,
                                    g.auto,
                                    g.gunner,
                                    g.twin,
                                    g.twin,
                                    g.power,
                                    g.halfreload,
                                    { speed: 2, maxSpeed: 2 }
                                ]),
                                TYPE: "bullet",
                            },
                        },
                        {
                            POSITION: [16, 5, 1, 0, 0, 0, 0.5+ 1 / 6 * i],
                            PROPERTIES: {
                                SHOOT_SETTINGS: combineStats([
                                    g.basic,
                                    g.auto,
                                    g.gunner,
                                    g.twin,
                                    g.twin,
                                    g.power,
                                    g.halfreload,
                                    { speed: 2, maxSpeed: 2 }
                                ]),
                                TYPE: "bullet",
                            },
                        },
                    ],
                }
            ],
                
        },
    );
};
for (let i = 0; i < 6; i++) {
    exports.srk5.TURRETS.push(
        {
            POSITION: [3 - i * 0.45, 7.75, 0, 120, 150, 1],
            TYPE: [
                "bigauto4gun",
                {
                    COLOR: 16,
                    GUNS: [
                        {
                            POSITION: [14, 5, 1, 0, -4.5, 0, 0 + 1 / 6 * i],
                            PROPERTIES: {
                                SHOOT_SETTINGS: combineStats([
                                    g.basic,
                                    g.auto,
                                    g.gunner,
                                    g.twin,
                                    g.twin,
                                    g.power,
                                    g.halfreload,
                                    { speed: 2, maxSpeed: 2 }
                                ]),
                                TYPE: "bullet",
                            },
                        },
                        {
                            POSITION: [14, 5, 1, 0, 4.5, 0, 0.5 + 1 / 6 * i],
                            PROPERTIES: {
                                SHOOT_SETTINGS: combineStats([
                                    g.basic,
                                    g.auto,
                                    g.gunner,
                                    g.twin,
                                    g.twin,
                                    g.power,
                                    g.halfreload,
                                    { speed: 2, maxSpeed: 2 }
                                ]),
                                TYPE: "bullet",
                            },
                        },
                        {
                            POSITION: [16, 5, 1, 0, 0, 0, 0.5 + 1 / 6 * i],
                            PROPERTIES: {
                                SHOOT_SETTINGS: combineStats([
                                    g.basic,
                                    g.auto,
                                    g.gunner,
                                    g.twin,
                                    g.twin,
                                    g.power,
                                    g.halfreload,
                                    { speed: 2, maxSpeed: 2 }
                                ]),
                                TYPE: "bullet",
                            },
                        },
                    ],
                }
            ],

        },
    );
};
for (let i = 0; i < 6; i++) {
    exports.srk5.TURRETS.push(
        {
            POSITION: [3 - i * 0.45, 7.75, 0, 240, 150, 1],
            TYPE: [
                "bigauto4gun",
                {
                    COLOR: 16,
                    GUNS: [
                        {
                            POSITION: [14, 5, 1, 0, -4.5, 0, 0 + 1 / 6 * i],
                            PROPERTIES: {
                                SHOOT_SETTINGS: combineStats([
                                    g.basic,
                                    g.auto,
                                    g.gunner,
                                    g.twin,
                                    g.twin,
                                    g.power,
                                    g.halfreload,
                                    { speed: 2, maxSpeed: 2 }
                                ]),
                                TYPE: "bullet",
                            },
                        },
                        {
                            POSITION: [14, 5, 1, 0, 4.5, 0, 0.5 + 1 / 6 * i],
                            PROPERTIES: {
                                SHOOT_SETTINGS: combineStats([
                                    g.basic,
                                    g.auto,
                                    g.gunner,
                                    g.twin,
                                    g.twin,
                                    g.power,
                                    g.halfreload,
                                    { speed: 2, maxSpeed: 2 }
                                ]),
                                TYPE: "bullet",
                            },
                        },
                        {
                            POSITION: [16, 5, 1, 0, 0, 0, 0.5 + 1 / 6 * i],
                            PROPERTIES: {
                                SHOOT_SETTINGS: combineStats([
                                    g.basic,
                                    g.auto,
                                    g.gunner,
                                    g.twin,
                                    g.twin,
                                    g.power,
                                    g.halfreload,
                                    { speed: 2, maxSpeed: 2 }
                                ]),
                                TYPE: "bullet",
                            },
                        },
                    ],
                }
            ],

        },
    );
};
exports.srk5.TURRETS.push(
    {
        POSITION: [9, 0, 0, 0, 360, 1],
        TYPE: [
            "srk5_vulcan",
            {
                INDEPENDENT: false,
                COLOR: 16,
                BODY: {
                    FOV: 2
                },
                CONTROLLERS: ['nearestDifferentMaster']
            },
        ],
    },
);

exports.srk1.UPGRADES_TIER_0 = ["srk2"];
exports.srk2.UPGRADES_TIER_0 = ["srk3"];
exports.srk3.UPGRADES_TIER_0 = ["srk4"];
exports.srk4.UPGRADES_TIER_0 = ["srk5"];

//Misc Bosses(Experimental, OP)

// Experimental Bosses

// Heartbreaker

exports.heart = {
    PARENT: ["genericTank"],
    SHAPE: "M 3551.0797000000002 -81.83389999999963 C 11146.0797 2660.1661000000004 3551.0797000000002 13319.6661 -6213.9203 -90.83389999999963 3551.0797000000002 -13483.3339 11146.0797 -2809.8338999999996 3551.0797000000002 -81.83389999999963 Z",
    COLOR: 5,
    MIRROR_MASTER_ANGLE: true,
    GUNS: [],
    TURRETS: []
};

exports.heartbreaker = {
    PARENT: ["miniboss"],
    LABEL: "Heartbreaker <3",
    COLOR: 5,
    SHAPE: "M 0 0",
    SIZE: 68,
    DANGER: 12,
    VALUE: 2222222,
    FACING_TYPE: "toTarget",
    BODY: {
        FOV: 1.3,
        SPEED: base.SPEED * 0.5,
        HEALTH: base.HEALTH * 10,
        SHIELD: base.SHIELD * 5,
        REGEN: base.REGEN * 4,
        DAMAGE: base.DAMAGE * 5,
    },
    GUNS: [],
    TURRETS: [
        {
            POSITION: [20 / 6400, 0, 0, 180, 360, 1],
            TYPE: [
                "heart",
            ],
        },
    ],
};

// Luminohelix (Probably the most complex boss in this server)

exports.luminohelixgun1 = {
    PARENT: ["genericTank"],
    LABEL: "Hypercannon",
    COLOR: 13,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [60, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.assass, g.pound, g.morereload, { health: 3, damage: 3,  speed: 5, maxSpeed: 5, range: 0.25 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [10, 12, -1.2, 14, 0, 0, 0],
        },
        {
            POSITION: [10, 12 * 1.2, -1.3, 4, 0, 0, 0],
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [62, 6, 1, 0, 0, 0, 0],
            PROPERTIES: {
                COLOR: 13
            },
        },
    ],
    TURRETS: [{
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: [
            "genericEntity",
            {
                COLOR: 3
            },
        ],
    },]
};
exports.luminohelixgun2 = {
    PARENT: ["genericTank"],
    LABEL: "Hypercannon",
    COLOR: 13,
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [60, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.assass, g.pound, g.one_third_reload, { health: 3, damage: 3, speed: 6, maxSpeed: 5, range: 0.25 }]),
                TYPE: "bullet",
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [57, 12, 1, 0, 0, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.assass, g.pound, g.one_third_reload, { health: 3, damage: 3, speed: 6, maxSpeed: 5, range: 0.25 }]),
                TYPE: "bullet",
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [54, 12, 1, 0, 0, 0, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.assass, g.pound, g.one_third_reload, { health: 3, damage: 3, speed: 6, maxSpeed: 5, range: 0.25 }]),
                TYPE: "bullet",
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [51, 12, 1, 0, 0, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.assass, g.pound, g.one_third_reload, { health: 3, damage: 3, speed: 6, maxSpeed: 5, range: 0.25 }]),
                TYPE: "bullet",
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [48, 12, 1, 0, 0, 0, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.assass, g.pound, g.one_third_reload, { health: 3, damage: 3, speed: 6, maxSpeed: 5, range: 0.25 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [10, 12, -1.2, 14, 0, 0, 0],
        },
        {
            POSITION: [10, 12 * 1.2, -1.3, 4, 0, 0, 0],
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [62, 6, 1, 0, 0, 0, 0],
            PROPERTIES: {
                COLOR: 13
            },
        },
    ],
    TURRETS: [{
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: [
            "genericEntity",
            {
                COLOR: 3
            },
        ],
    },]
};
exports.luminohelixgun3 = {
    PARENT: ["genericTank"],
    LABEL: "Hypercannon",
    COLOR: "#E956FB",
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [60, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.assass, g.pound, g.morereload, { health: 1, damage: 1.5, speed: 5, maxSpeed: 5, range: 0.25 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [10, 12, -1.2, 14, 0, 0, 0],
        },
        {
            POSITION: [10, 12 * 1.2, -1.3, 4, 0, 0, 0],
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [62, 6, 1, 0, 0, 0, 0],
            PROPERTIES: {
                COLOR: 4
            },
        },
    ],
    TURRETS: [{
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: [
            "genericEntity",
            {
                COLOR: "#FB56F7"
            },
        ],
    },]
};
exports.luminohelixgun4 = {
    PARENT: ["genericTank"],
    LABEL: "Hypercannon",
    COLOR: "#E956FB",
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [60, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.assass, g.pound, g.morereload, { health: 1, damage: 1.5, speed: 5, maxSpeed: 5, range: 0.25 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [10, 12, -1.2, 14, 0, 0, 0],
        },
        {
            POSITION: [10, 12 * 1.2, -1.3, 4, 0, 0, 0],
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [62, 6, 1, 0, 0, 0, 0],
            PROPERTIES: {
                COLOR: 12
            },
        },
    ],
    TURRETS: [{
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: [
            "genericEntity",
            {
                COLOR: "#FB56F7"
            },
        ],
    },]
};

exports.luminohelixring1 = {
    PARENT: ["genericTank"],
    LABEL: "Halo",
    BORDERLESS: true,
    DRAW_FILL: false,
    CONTROLLERS: [["spin", { independent: true, speed: -0.001 }],],
    GUNS: [],
    TURRETS: [],
};

for (let i = 0; i < 48; i++) {
    if (i % 4 == 0) {
        exports.luminohelixring1.TURRETS.push(
            {
                POSITION: [1.2, 32, 0, 360 / 48 * (i), 0, 0],
                TYPE: [
                    "luminohelixgun2",
                ],
            },
        );
    }
    else {
        exports.luminohelixring1.TURRETS.push(
            {
                POSITION: [0.8, 32, 0, 360 / 48 * (i), 0, 0],
                TYPE: [
                    "luminohelixgun1",
                ],
            },
        );
    }
};

exports.luminohelixring2 = {
    PARENT: ["genericTank"],
    LABEL: "Halo",
    BORDERLESS: true,
    DRAW_FILL: false,
    CONTROLLERS: [["spin", { independent: true, speed: 0.0025 }],],
    GUNS: [],
    TURRETS: [],
};

for (let i = 0; i < 32; i++) {
    if (i % 4 == 0) {
        exports.luminohelixring2.TURRETS.push(
            {
                POSITION: [1.2, 25, 0, 360 / 32 * (i), 0, 0],
                TYPE: [
                    "luminohelixgun2",
                ],
            },
        );
    }
    else {
        exports.luminohelixring2.TURRETS.push(
            {
                POSITION: [0.8, 25, 0, 360 / 32 * (i), 0, 0],
                TYPE: [
                    "luminohelixgun1",
                ],
            },
        );
    }
};

exports.luminohelixring3 = {
    PARENT: ["genericTank"],
    LABEL: "Halo",
    BORDERLESS: true,
    DRAW_FILL: false,
    CONTROLLERS: [["spin", { independent: true, speed: -0.001 }],],
    GUNS: [],
    TURRETS: [],
};

for (let i = 0; i < 96; i++) {
    if (i % 4 == 0) {
        exports.luminohelixring3.TURRETS.push(
            {
                POSITION: [1.2, 72, 0, 360 / 96 * (i), 0, 0],
                TYPE: [
                    "luminohelixgun2",
                ],
            },
        );
    }
    else {
        exports.luminohelixring3.TURRETS.push(
            {
                POSITION: [0.8, 72, 0, 360 / 96 * (i), 0, 0],
                TYPE: [
                    "luminohelixgun1",
                ],
            },
        );
    }
};

exports.luminohelixring4 = {
    PARENT: ["genericTank"],
    LABEL: "Halo",
    BORDERLESS: true,
    DRAW_FILL: false,
    CONTROLLERS: [["spin", { independent: true, speed: -0.001 }],],
    GUNS: [],
    TURRETS: [],
};

for (let i = 0; i < 20; i++) {
    if (i % 4 == 0) {
        exports.luminohelixring4.TURRETS.push(
            {
                POSITION: [1.2, 13, 0, 360 / 20 * (i), 0, 0],
                TYPE: [
                    "luminohelixgun2",
                ],
            },
        );
    }
    else {
        exports.luminohelixring4.TURRETS.push(
            {
                POSITION: [0.8, 13, 0, 360 / 20 * (i), 0, 0],
                TYPE: [
                    "luminohelixgun1",
                ],
            },
        );
    }
};

exports.luminohelixring5 = {
    PARENT: ["genericTank"],
    LABEL: "Halo",
    BORDERLESS: true,
    DRAW_FILL: false,
    CONTROLLERS: [["spin", { independent: true, speed: 0.0025 }],],
    GUNS: [],
    TURRETS: [],
};

for (let i = 0; i < 16; i++) {
    if (i % 4 == 0) {
        exports.luminohelixring5.TURRETS.push(
            {
                POSITION: [1.2, 8, 0, 360 / 16 * (i), 0, 0],
                TYPE: [
                    "luminohelixgun2",
                ],
            },
        );
    }
    else {
        exports.luminohelixring5.TURRETS.push(
            {
                POSITION: [0.8, 8, 0, 360 / 16 * (i), 0, 0],
                TYPE: [
                    "luminohelixgun1",
                ],
            },
        );
    }
};

exports.luminohelix = {
    PARENT: ["miniboss"],
    LABEL: "Luminohelix",
    COLOR: "#000000",
    //SHAPE: "M -2 0 Q 1.2 -1.35 -2.4 2.4 Q 1.35 -1.2 0 2 Q -1.35 -1.2 2.4 2.4 Q -1.2 -1.35 2 0 Q -1.2 1.35 2.4 -2.4 Q -1.35 1.2 0 -2 Q 1.35 1.2 -2.4 -2.4 Q 1.2 1.35 -2 0 Z",
    //SHAPE: "M -3 0 Q 2.4 -2.7 -4.8 4.8 Q 2.7 -2.4 0 3 Q -2.7 -2.4 4.8 4.8 Q -2.4 -2.7 3 0 Q -2.4 2.7 4.8 -4.8 Q -2.7 2.4 0 -3 Q 2.7 2.4 -4.8 -4.8 Q 2.4 2.7 -3 0 Z",
    SHAPE: "M -2.5 0 Q 2.4 -2.7 -4.8 4.8 Q 2.7 -2.4 0 2.5 Q -2.7 -2.4 4.8 4.8 Q -2.4 -2.7 2.5 0 Q -2.4 2.7 4.8 -4.8 Q -2.7 2.4 0 -2.5 Q 2.7 2.4 -4.8 -4.8 Q 2.4 2.7 -2.5 0 Z",
    SIZE: 68,
    DANGER: 30,
    VALUE: 6913666,
    FACING_TYPE: "spinEvenSlower",
    BODY: {
        FOV: 1.3,
        SPEED: base.SPEED * 0.25,
        HEALTH: 69000,
        SHIELD: 13000,
        REGEN: base.REGEN,
        DAMAGE: 666,
    },
    GUNS: [],
    TURRETS: [
        {
            POSITION: [20, 0, 0, 0, 360, 0],
            TYPE: [
                "luminohelixring3",
            ],
        },
        {
            POSITION: [20, 0, 0, 0, 360, 0],
            TYPE: [
                "luminohelixring1",
            ],
        },
        {
            POSITION: [20, 0, 0, 0, 360, 0],
            TYPE: [
                "luminohelixring2",
            ],
        },
    ],
};

for (let i = 0; i < 4; i++) {
    exports.luminohelix.GUNS.push(
    );
    exports.luminohelix.TURRETS.push(
        {
            POSITION: [20, 53, 0, 360 / 4 * (i + 0.5), 360, 0],
            TYPE: [
                "luminohelixring4",
            ],
        },
        {
            POSITION: [20, 53, 0, 360 / 4 * (i + 0.5), 360, 0],
            TYPE: [
                "luminohelixring5",
            ],
        },
    );
    exports.luminohelix.TURRETS.push(
        {
            POSITION: [0.75, 12.5, -3, (360 / 4 * (i + 0)) + 40, 100, 1],
            TYPE: [
                "luminohelixgun3",
            ],
        },
        {
            POSITION: [0.75, 12.5, 3, (360 / 4 * (i + 0)) - 40, 100, 1],
            TYPE: [
                "luminohelixgun3",
            ],
        },
        {
            POSITION: [0.75, 13.5, -3, (360 / 4 * (i + 0)) + 35, 100, 1],
            TYPE: [
                "luminohelixgun3",
            ],
        },
        {
            POSITION: [0.75, 13.5, 3, (360 / 4 * (i + 0)) - 35, 100, 1],
            TYPE: [
                "luminohelixgun3",
            ],
        },
        {
            POSITION: [0.75, 14.75, -3, (360 / 4 * (i + 0)) + 30, 100, 1],
            TYPE: [
                "luminohelixgun3",
            ],
        },
        {
            POSITION: [0.75, 14.75, 3, (360 / 4 * (i + 0)) - 30, 100, 1],
            TYPE: [
                "luminohelixgun3",
            ],
        },
        {
            POSITION: [0.75, 16, -2.75, (360 / 4 * (i + 0)) + 25, 100, 1],
            TYPE: [
                "luminohelixgun3",
            ],
        },
        {
            POSITION: [0.75, 16, 2.75, (360 / 4 * (i + 0)) - 25, 100, 1],
            TYPE: [
                "luminohelixgun3",
            ],
        },
        {
            POSITION: [0.75, 17.25, -2.25, (360 / 4 * (i + 0)) + 20, 100, 1],
            TYPE: [
                "luminohelixgun3",
            ],
        },
        {
            POSITION: [0.75, 17.25, 2.25, (360 / 4 * (i + 0)) - 20, 100, 1],
            TYPE: [
                "luminohelixgun3",
            ],
        },
        {
            POSITION: [0.75, 20, -3, (360 / 4 * (i + 0)) + 15, 100, 1],
            TYPE: [
                "luminohelixgun3",
            ],
        },
        {
            POSITION: [0.75, 20, 3, (360 / 4 * (i + 0)) - 15, 100, 1],
            TYPE: [
                "luminohelixgun3",
            ],
        },
        {
            POSITION: [0.75, 21.5, -2, (360 / 4 * (i + 0)) + 10, 100, 1],
            TYPE: [
                "luminohelixgun3",
            ],
        },
        {
            POSITION: [0.75, 21.5, 2, (360 / 4 * (i + 0)) - 10, 100, 1],
            TYPE: [
                "luminohelixgun3",
            ],
        },
        {
            POSITION: [0.75, 23, -1, (360 / 4 * (i + 0)) + 5, 100, 1],
            TYPE: [
                "luminohelixgun3",
            ],
        },
        {
            POSITION: [0.75, 23, 1, (360 / 4 * (i + 0)) - 5, 100, 1],
            TYPE: [
                "luminohelixgun3",
            ],
        },
        {
            POSITION: [1.2, 24.5, 0, 360 / 4 * (i + 0), 100, 1],
            TYPE: [
                "luminohelixgun3",
            ],
        },
        {
            POSITION: [1.2, 18.5, -3.5, (360 / 4 * (i + 0)) + 20, 100, 1],
            TYPE: [
                "luminohelixgun4",
            ],
        },
        {
            POSITION: [1.2, 18.5, 3.5, (360 / 4 * (i + 0)) - 20, 100, 1],
            TYPE: [
                "luminohelixgun4",
            ],
        },
    );
};

// OP Bosses
//  hypernova
exports.hypernova_twinMinigun = {
    PARENT: ["autoTankGun"],
    LABEL: "Twin Minigun",
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [27.5, 8, 1, 0, 5.25, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, { speed: 1.8, maxSpeed: 1.8 }, g.assass]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [23, 8, 1, 0, 5.25, 0, 2 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, { speed: 1.8, maxSpeed: 1.8 }, g.assass]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18.5, 8, 1, 0, 5.25, 0, 4 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, { speed: 1.8, maxSpeed: 1.8 }, g.assass]),
                TYPE: "bullet",
            },
        }, {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [27.5, 8, 1, 0, -5.25, 0, 1 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, { speed: 1.8, maxSpeed: 1.8 }, g.assass]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [23, 8, 1, 0, -5.25, 0, 3 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, { speed: 1.8, maxSpeed: 1.8 }, g.assass]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18.5, 8, 1, 0, -5.25, 0, 5 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, { speed: 1.8, maxSpeed: 1.8 }, g.assass]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [13.5, 18.5, -1.1, 0, 0, 0, 0.5],
        }, 
    ],
};
exports.hypernova_OPnail = {
    PARENT: ["autoTankGun"],
    LABEL: "Ultimate Gunner",
    GUNS: [ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        {
            POSITION: [37, 4, 1, 0, 3.5, 0, 0 / 7],
            PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, { speed: 2, maxSpeed: 2 }, g.halfreload]), TYPE: "bullet", },
        }, {
            POSITION: [35, 4, 1, 0, 3.5, 0, 1 / 7],
            PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, { speed: 2, maxSpeed: 2 }, g.halfreload]), TYPE: "bullet", },
        }, {
            POSITION: [33, 4, 1, 0, 3.5, 0, 2 / 7],
            PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, { speed: 2, maxSpeed: 2 }, g.halfreload]), TYPE: "bullet", },
        }, {
            POSITION: [31, 4, 1, 0, 3.5, 0, 3 / 7],
            PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, { speed: 2, maxSpeed: 2 }, g.halfreload]), TYPE: "bullet", },
        }, {
            POSITION: [29, 4, 1, 0, 3.5, 0, 4 / 7],
            PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, { speed: 2, maxSpeed: 2 }, g.halfreload]), TYPE: "bullet", },
        }, {
            POSITION: [27, 4, 1, 0, 3.5, 0, 5 / 7],
            PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, { speed: 2, maxSpeed: 2 }, g.halfreload]), TYPE: "bullet", },
        }, {
            POSITION: [25, 4, 1, 0, 3.5, 0, 6 / 7],
            PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, { speed: 2, maxSpeed: 2 }, g.halfreload]), TYPE: "bullet", },
        },
        {
            POSITION: [37, 4, 1, 0, -3.5, 0, 0 / 7],
            PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, { speed: 2, maxSpeed: 2 }, g.halfreload]), TYPE: "bullet", },
        }, {
            POSITION: [35, 4, 1, 0, -3.5, 0, 1 / 7],
            PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, { speed: 2, maxSpeed: 2 }, g.halfreload]), TYPE: "bullet", },
        }, {
            POSITION: [33, 4, 1, 0, -3.5, 0, 2 / 7],
            PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, { speed: 2, maxSpeed: 2 }, g.halfreload]), TYPE: "bullet", },
        }, {
            POSITION: [31, 4, 1, 0, -3.5, 0, 3 / 7],
            PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, { speed: 2, maxSpeed: 2 }, g.halfreload]), TYPE: "bullet", },
        }, {
            POSITION: [29, 4, 1, 0, -3.5, 0, 4 / 7],
            PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, { speed: 2, maxSpeed: 2 }, g.halfreload]), TYPE: "bullet", },
        }, {
            POSITION: [27, 4, 1, 0, -3.5, 0, 5 / 7],
            PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, { speed: 2, maxSpeed: 2 }, g.halfreload]), TYPE: "bullet", },
        }, {
            POSITION: [25, 4, 1, 0, -3.5, 0, 6 / 7],
            PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, { speed: 2, maxSpeed: 2 }, g.halfreload]), TYPE: "bullet", },
        },
        {
            POSITION: [46, 4, 1, 0, 0, 0, 0 / 10],
            PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, { speed: 2, maxSpeed: 2 }, g.halfreload]), TYPE: "bullet", },
        }, {
            POSITION: [44, 4, 1, 0, 0, 0, 1 / 10],
            PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, { speed: 2, maxSpeed: 2 }, g.halfreload]), TYPE: "bullet", },
        }, {
            POSITION: [42, 4, 1, 0, 0, 0, 2 / 10],
            PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, { speed: 2, maxSpeed: 2 }, g.halfreload]), TYPE: "bullet", },
        }, {
            POSITION: [40, 4, 1, 0, 0, 0, 3 / 10],
            PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, { speed: 2, maxSpeed: 2 }, g.halfreload]), TYPE: "bullet", },
        }, {
            POSITION: [38, 4, 1, 0, 0, 0, 4 / 10],
            PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, { speed: 2, maxSpeed: 2 }, g.halfreload]), TYPE: "bullet", },
        }, {
            POSITION: [36, 4, 1, 0, 0, 0, 5 / 10],
            PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, { speed: 2, maxSpeed: 2 }, g.halfreload]), TYPE: "bullet", },
        }, {
            POSITION: [34, 4, 1, 0, 0, 0, 6 / 10],
            PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, { speed: 2, maxSpeed: 2 }, g.halfreload]), TYPE: "bullet", },
        }, {
            POSITION: [32, 4, 1, 0, 0, 0, 7 / 10],
            PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, { speed: 2, maxSpeed: 2 }, g.halfreload]), TYPE: "bullet", },
        }, {
            POSITION: [30, 4, 1, 0, 0, 0, 8 / 10],
            PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, { speed: 2, maxSpeed: 2 }, g.halfreload]), TYPE: "bullet", },
        }, {
            POSITION: [28, 4, 1, 0, 0, 0, 9 / 10],
            PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, { speed: 2, maxSpeed: 2 }, g.halfreload]), TYPE: "bullet", },
        },
        {
            POSITION: [14, 12, -1.5, 0, 0, 0, 0],
        },
    ],
    TURRETS: [{
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: [
            "genericEntity",
            {
                COLOR: 8
            },
        ],
    },]
};
exports.hypernova_assassin = {
    PARENT: ["autoTankGun"],
    LABEL: "Mega Assassin",
    BODY: {
        FOV: 5
    },
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [40, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.assass, g.pound, g.morereload, { speed: 2, maxSpeed: 2 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [10, 12, -1.4, 4, 0, 0, 0],
        },
    ],
    TURRETS: [{
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: [
            "genericEntity",
            {
                COLOR: 8
            },
        ],
    },]
};
exports.rationalizerMinion = {
    PARENT: ["minion"],
    LABEL: "Rationalizer Minion",
    DANGER: 7,
    BODY: {
        HEALTH: base.HEALTH * 0.25,
        SHIELD: base.SHIELD * 0.5,
        DAMAGE: base.DAMAGE * 0.75,
        REGEN: base.REGEN,
        SPEED: 0.25 * base.SPEED,
        ACCLELRATION: 2 * base.ACCEL,
        FOV: 2 * base.FOV,
    },
    AI: {
        BLIND: false,
    },
    GUNS: [{
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [27, 8, 1, 0, 0, 0, 0/7],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [25, 8, 1, 0, 0, 0, 1/7],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
            TYPE: "bullet",
        },
    },
        {
            POSITION: [23, 8, 1, 0, 0, 0, 2/7],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 8, 1, 0, 0, 0, 3/7],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 4/7],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 5/7],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [15, 8, 1, 0, 0, 0, 6/7],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                TYPE: "bullet",
            },
        },
    ],
}
exports.hypernova_spawner1 = {
    PARENT: ["genericTank"],
    LABEL: "Spawned",
    INDEPENDENT: true,
    COLOR: 16,
    BODY: {
        FOV: 6,
    },
    CONTROLLERS: ['nearestDifferentMaster'],
    AI: {
        NO_LEAD: true,
        SKYNET: true,
        FULL_VIEW: true,
    },
    GUNS: [
        {
            /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [4.5, 12.5, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [1.8, 15, 1, 15, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 2,
                SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory, g.morespeed, {size: 1.25}]),
                TYPE: ["rationalizerMinion"],
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [11.5, 14, -1.2, 0, 0, 0, 0],
        },
    ],
    TURRETS: [{
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: [
            "genericEntity",
            {
                COLOR: 8
            },
        ],
    },]
};
exports.hypernova_dual = {
    PARENT: ["autoTankGun"],
    LABEL: "Dual",
    BODY: {
        FOV: 5
    },
    GUNS: [
        {
            POSITION: [22, 4, 1, 0, 4.5, 0, 0],
            PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.hunter2, g.hunter2, { reload: 1.5, speed: 2, maxSpeed: 2 }]), TYPE: "bullet", },
        },
        {
            POSITION: [22, 4, 1, 0, -4.5, 0, 0.5],
            PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.hunter2, g.hunter2, { reload: 1.5, speed: 2, maxSpeed: 2 }]), TYPE: "bullet", },
        },
        {
            POSITION: [20, 6, 1, 0, 4.5, 0, 0.1],
                PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.hunter2, {reload: 1.5, speed: 2, maxSpeed: 2}]), TYPE: "bullet", },
        },
        {
            POSITION: [20, 6, 1, 0, -4.5, 0, 0.6],
                PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.hunter2, { reload: 1.5, speed: 2, maxSpeed: 2 }]), TYPE: "bullet", },
        },
        {
            POSITION: [18, 7.5, 1, 0, 4.5, 0, 0.2],
            PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, { reload: 1.5, speed: 2, maxSpeed: 2 }]), TYPE: "bullet", },
        },
        {
            POSITION: [18, 7.5, 1, 0, -4.5, 0, 0.7],
            PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, {reload: 1.5, speed: 2, maxSpeed: 2}]), TYPE: "bullet", },
        }, {
            POSITION: [13.5, 16.5, -1.2, 0, 0, 0, 0.5],
        }, {
            POSITION: [13.5, 8.5, -1, 0, 0, 0, 0.5],
        },
    ],
    TURRETS: [{
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: [
            "genericEntity",
            {
                COLOR: 8
            },
        ],
    },]
};

exports.hypernovaPillboxTurret = {
    PARENT: ["genericTank"],
    LABEL: "",
    COLOR: 16,
    BODY: {
        FOV: 2,
    },
    HAS_NO_RECOIL: true,
    GUNS: [
        {
            POSITION: [17.5, 7.5, 1, 0, -5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.morespeed, g.morespeed, g.pound, g.doublereload, { range: 1.5 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [17.5, 7.5, 1, 0, 5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.morespeed, g.morespeed, g.pound, g.doublereload, { range: 1.5 }]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.hypernova_pillbox = {
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
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 7.5, 0.6, 7, 0, 90, 0,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm]),
            TYPE: "swarm",
            STAT_CALCULATOR: gunCalcNames.swarm,
        },
    }, {
            POSITION: [7, 7.5, 0.6, 7, 0, -90, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm]),
                TYPE: "swarm",
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },],
    TURRETS: [
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "hypernovaPillboxTurret",
        },
    ],
};

exports.hypernova_engi = {
    PARENT: ["autoTankGun"],
    LABEL: "Engineer",
    BODY: {
        FOV: 5
    },
    INDEPENDENT: true,
    GUNS: [
        {
            POSITION: [15.5, 11, 1, 0, 0, 0, 0],
        }, {
            POSITION: [15.5, 4.5, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [3, 14, 1, 15.5, 0, 0, 0],
        }, {
            POSITION: [3, 6, 1, 15.5, 0, 0, 0],
        },
        {
            POSITION: [2, 14, 1.3, 18, 0, 0, 0],
            PROPERTIES: {
                MAX_CHILDREN: 3,
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.pound, g.destroy, g.destroy, g.construct, { reload: 0.5, speed: 3, maxSpeed: 3 }]),
                TYPE: "hypernova_pillbox",
                SYNCS_SKILLS: true,
                DESTROY_OLDEST_CHILD: true,
            },
        }, {
            POSITION: [2, 6, 1.3, 18, 0, 0, 0],
        }, {
            POSITION: [14, 10, 0.7, 0, 0, 180, 0,],
        }, 
    ],
    TURRETS: [{
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: [
            "genericEntity",
            {
                COLOR: 8
            },
        ],
    },]
};

exports.hypernova_octo = {
    PARENT: ["autoTankGun"],
    LABEL: "octo Tank",
    BODY: {
        FOV: 3
    },
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.sniper, g.sniper]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 90, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.sniper, g.sniper]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 180, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.sniper, g.sniper]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 270, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.sniper, g.sniper]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 45, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.sniper, g.sniper]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 135, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.sniper, g.sniper]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 225, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.sniper, g.sniper]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 315, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam, g.sniper, g.sniper]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.hypernova_retroSpray = {
    PARENT: ["autoTankGun"],
    LABEL: "Ultimate Spraygun",
    BODY: {
        FOV: 5
    },
    GUNS: [
        {
            POSITION: [22, 6, 1.2, 0, 4, 0, 0.25], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain, { health: 2, damage: 2, pen: 2, speed: 3, maxSpeed: 3 }]), TYPE: "bullet", },
        }, {
            POSITION: [20, 8, 1.2, 0, 4, 0, 0.275], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain, { health: 2, damage: 2, pen: 2, speed: 3, maxSpeed: 3 }]), TYPE: "bullet", },
        }, {
            POSITION: [18, 10, 1.2, 0, 4, 0, 0.3], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain, { health: 2, damage: 2, pen: 2, speed: 3, maxSpeed: 3 }]), TYPE: "bullet", },
        }, {
            POSITION: [22, 6, 1.2, 0, -4, 0, 0.75], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain, { health: 2, damage: 2, pen: 2, speed: 3, maxSpeed: 3 }]), TYPE: "bullet", },
        }, {
            POSITION: [20, 8, 1.2, 0, -4, 0, 0.775], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain, { health: 2, damage: 2, pen: 2, speed: 3, maxSpeed: 3 }]), TYPE: "bullet", },
        }, {
            POSITION: [18, 10, 1.2, 0, -4, 0, 0.8], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain, { health: 2, damage: 2, pen: 2, speed: 3, maxSpeed: 3 }]), TYPE: "bullet", },
        },
        { POSITION: [22, 4, 1.4, 8, 0, 0, 0], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain, { health: 2, damage: 2, pen: 2, speed: 3, maxSpeed: 3 }]), TYPE: "bullet", },
        },
        { POSITION: [20, 6, 1.4, 8, 0, 0, 0.25], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain, { health: 2, damage: 2, pen: 2, speed: 3, maxSpeed: 3 }]), TYPE: "bullet", },
        },
        { POSITION: [18, 8, 1.4, 8, 0, 0, 0.5], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain, { health: 2, damage: 2, pen: 2, speed: 3, maxSpeed: 3 }]), TYPE: "bullet", },
        }, {
          POSITION: [16, 10, 1.4, 8, 0, 0, 0.75], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain, { health: 2, damage: 2, pen: 2, speed: 3, maxSpeed: 3 }]), TYPE: "bullet", },
        },

    ],
    TURRETS: [{
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: [
            "genericEntity",
            {
                COLOR: 8
            },
        ],
    }, {
            POSITION: [6, 0, 0, 0, 360, 1],
            TYPE: [
                "genericEntity",
                {
                    COLOR: 8
                },
            ],
        },]
};
exports.hypernova_shotgun = {
    PARENT: ["autoTankGun"],
    LABEL: "Spraygun",
    BODY: {
        FOV: 5
    },
    GUNS: [
        {
            POSITION: [4, 3, 1, 11, -3, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.sniper, g.assass, g.autosnipe, { size: 1 / 1.4, health: 3, damage: 2, pen:2, speed: 3, maxSpeed: 2 }]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [4, 3, 1, 11, 3, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.sniper, g.assass, g.autosnipe, { size: 1 / 1.4, health: 3, damage: 2, pen: 2, speed: 3, maxSpeed: 2 }]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [4, 4, 1, 13, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.sniper, g.assass, g.autosnipe, { size: 1 / 1.4, health: 3, damage: 2, pen: 2, speed: 3, maxSpeed: 2 }]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 3, 1, 13, -1, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.sniper, g.assass, g.autosnipe, { size: 1 / 1.4, health: 3, damage: 2, pen: 2, speed: 3, maxSpeed: 2 }]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 3, 1, 13, 1, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.sniper, g.assass, g.autosnipe, { size: 1 / 1.4, health: 3, damage: 2, pen: 2, speed: 3, maxSpeed: 2 }]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [1, 2, 1, 13, 2, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.sniper, g.assass, g.autosnipe, { size: 1 / 1.4, health: 3, damage: 2, pen: 2, speed: 3, maxSpeed: 2 }]),
                TYPE: "bullet",
            },
        }, {
            POSITION: [22, 11, 1, 6, 0, 0, 0,],
        }, {
            POSITION: [3, 13, 1.1, 28, 0, 0, 0,],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.multi, g.shotgun, g.fake, g.sniper, g.assass, g.autosnipe, { size: 1 / 1.4 }]),
                TYPE: "casing",
            },
        }, {
            POSITION: [10, 11.5, -1.2, 4, 0, 0, 0,],
        }
    ],
    TURRETS: [{
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: [
            "genericEntity",
            {
                COLOR: 8
            },
        ],
    }, {
            POSITION: [6, 0, 0, 0, 360, 1],
            TYPE: [
                "genericEntity",
                {
                    COLOR: 8
                },
            ],
        },]
};
exports.hypernova_main = {
    PARENT: ["autoTankGun"],
    LABEL: "Ultimate Quasar",
    BODY: {
        FOV: 5
    },
    GUNS: [{
        POSITION: [12, 14, -1.2, 4, 0, 0, 0],
    },
    ],
    TURRETS: [{
        POSITION: [16, 0, 0, 0, 360, 1],
        TYPE: [
            "genericEntity",
            {
                COLOR: 8
            },
        ],
    }, {
        POSITION: [8, 0, 0, 0, 360, 1],
        TYPE: [
            "genericEntity",
            {
                COLOR: 8
            },
        ],
    }, {
        POSITION: [4, 0, 0, 0, 360, 1],
        TYPE: [
            "genericEntity",
            {
                COLOR: 8
            },
        ],
        }, {
            POSITION: [2, 0, 0, 0, 360, 1],
            TYPE: [
                "genericEntity",
                {
                    COLOR: 8
                },
            ],
        },]
};
for (let i = 0; i < 40; i++) {
    exports.hypernova_main.GUNS.push(
        {
        POSITION: [50 - i * 0.5, 14/3, 1, 0, -14/3, 0, i / 40],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.assass, g.pound, g.morereload, { reload: 5, health: 0.25, damage: 1, pen: 2, speed: 3, maxSpeed: 3 }]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [50 - i * 0.5, 14/3, 1, 0, 14/3, 0, i / 40],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.assass, g.pound, g.morereload, { reload: 5, health: 0.25, damage: 1, pen: 2, speed: 3, maxSpeed: 3 }]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [50 - i * 0.5, 14 / 3, 1, 0, 0, 0, i / 40],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.assass, g.pound, g.morereload, { reload: 5, health: 0.25, damage: 1, pen: 2, speed: 3, maxSpeed: 3 }]),
            TYPE: "bullet",
        },
    }, 
    );
};
exports.hypernova_main.GUNS.push(
    {
        POSITION: [50 - 40 * 0.5, 14, 1, 0, 0, 0, 0],
    }, {
    POSITION: [50 - 40 * 0.5, 14/3, 1, 0, 0, 0, 0],
},
    {
        POSITION: [21, 14, -1.2, 4, 0, 0, 0],
    }, {
    POSITION: [21, 14/3, -1.2, 4, 0, 0, 0],
},
);

exports.hypernovaBoss = {
    PARENT: ["miniboss"],
    LABEL: "Hypernova",
    COLOR: "#E444B5",
    SHAPE: 36,
    SIZE: 500,
    VALUE: 144e6,
    FACING_TYPE: "spinEvenSlower",
    DANGER: 20,
    BODY: {
        FOV: 1,
        SPEED: base.SPEED * 0.05,
        HEALTH: base.HEALTH * 32,
        SHIELD: base.SHIELD * 16,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 12,
    },
    GUNS: [],
    TURRETS: [
    ],
};
exports.hypernovaShell = {
    SHAPE: 36,
    COLOR: 17,
    MIRROR_MASTER_ANGLE: true,
    INDEPENDENT: true
};
exports.hypernovaBoss.TURRETS.push(
    {
        POSITION: [20, 0, 0, 0, 0, 1],
        TYPE: [
            "hypernovaShell",
        ],
    },
    {
        POSITION: [19.5, 0, 0, 0, 0, 1],
        TYPE: [
            "hypernovaShell",
            {
                COLOR: -1,
            },
        ],
    },
);
for (let i = 0; i < 12; i++) {
    exports.hypernovaBoss.GUNS.push(
    );
    exports.hypernovaBoss.TURRETS.push(
        {
        POSITION: [0.75, 10, -0.425, 360 / 36 * i * 3, 100, 0],
            TYPE: [
                "hypernova_twinMinigun",
                {
                    COLOR: -1,
                },
            ],
        }, {
        POSITION: [0.75, 10, 0.425, 360 / 36 * i * 3, 100, 0],
        TYPE: [
            "hypernova_twinMinigun",
            {
                COLOR: -1,
            },
        ],
    }, {
        POSITION: [0.75, 10, -0.425, 360 / 36 * ( i * 3 + 2 ), 100, 0],
        TYPE: [
            "hypernova_twinMinigun",
            {
                COLOR: -1,
            },
        ],
    }, {
        POSITION: [0.75, 10, 0.425, 360 / 36 * ( i * 3 + 2 ), 100, 0],
        TYPE: [
            "hypernova_twinMinigun",
            {
                COLOR: -1,
            },
        ],
    }, {
        POSITION: [1.65, 10, 0, 360 / 36 * (i * 3 + 1), 100, 0],
        TYPE: [
            "hypernova_OPnail",
            {
                COLOR: 16,
            },
        ],
    },
    );
};
for (let i = 0; i < 36; i++) {
    exports.hypernovaBoss.GUNS.push(
    );
    exports.hypernovaBoss.TURRETS.push(
        {
            POSITION: [0.5, 9.4, 0, 360 / 36 * ( i + 0.5 ), 100, 1],
            TYPE: [
                "hypernova_assassin",
                {
                    COLOR: 16,
                },
            ],
        }, {
        POSITION: [0.72, 9.2, 0, 360 / 36 * (i + 0), 0, 1],
        TYPE: [
            "hypernova_spawner1",
            {
                COLOR: 16,
            },
        ],
    },
    );
};
for (let i = 0; i < 18; i++) {
    exports.hypernovaBoss.GUNS.push(
    );
    exports.hypernovaBoss.TURRETS.push(
        {
            POSITION: [0.45, 5.65, 0.5, 360 / 18 * (i + 0.5), 100, 1],
            TYPE: [
                "hypernova_octo",
                {
                    COLOR: 16,
                },
            ],
        }, {
        POSITION: [0.45, 5.65, -0.5, 360 / 18 * (i + 0.5), 100, 1],
        TYPE: [
            "hypernova_octo",
            {
                COLOR: 16,
            },
        ],
    },
        {
            POSITION: [1, 8, 0, 360 / 18 * (i + 0.25), 100, 1],
            TYPE: [
                "hypernova_dual",
                {
                    COLOR: 16,
                },
            ],
        }, {
        POSITION: [1.5, 7.2, 0, 360 / 18 * (i + 0.75), 100, 1],
        TYPE: [
            "hypernova_engi",
            {
                COLOR: 16,
            },
        ],
    },
    );
};
for (let i = 0; i < 6; i++) {
    exports.hypernovaBoss.GUNS.push(
    );
    exports.hypernovaBoss.TURRETS.push({
        POSITION: [1.9, 4.2, 0, 360 / 6 * (i), 100, 1],
        TYPE: [
            "hypernova_retroSpray",
            {
                COLOR: 16,
            },
        ],
    }, {
        POSITION: [1.9, 4.2, 0, 360 / 6 * (i+0.5), 100, 1],
        TYPE: [
            "hypernova_shotgun",
            {
                COLOR: 16,
            },
        ],
    },
    );
};
exports.hypernovaBoss.TURRETS.push({
    POSITION: [5, 0, 0, 0, 360, 1],
    TYPE: [
        "hypernova_main",
        {
            COLOR: 16,
        },
    ],
},
);

//Fort-Clock
exports.autoTankGun_fortClock = {
    PARENT: ["genericTank"],
    LABEL: "",
    BODY: {
        FOV: 5,
    },
    CONTROLLERS: ["canRepel", "onlyAcceptInArc", "mapAltToFire", "nearestDifferentMaster"],
    COLOR: 16,
    //INDEPENDENT: true,
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.halfreload, { speed: 2, maxSpeed: 2 }]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.mothershipMinion = {
    PARENT: ["minion"],
    LABEL: "Mothership",
    DANGER: 10,
    SHAPE: 16,
    BODY: {
        FOV: 20,
        DAMAGE: base.DAMAGE * 1.5
    },
    INDEPENDENT: true,
    GUNS: (() => {
        let e = [],
            T = [1];
        for (let e = 1; e < 8.5; e += 0.5) {
            let t = e / 16;
            T.push(t);
        }
        for (let t = 0; t < 16; t++) {
            let S = 22.5 * (t + 1),
                E = {
                    MAX_CHILDREN: 2,
                    SHOOT_SETTINGS: combineStats([g.drone, g.over, g.mothership, g.bitlesspower]),
                    TYPE: "drone",
                    AUTOFIRE: true,
                    SYNCS_SKILLS: true,
                    STAT_CALCULATOR: gunCalcNames.drone,
                    WAIT_TO_CYCLE: true,
                };
            t % 2 == 0 &&
                (E.TYPE = [
                    "drone",
                    {
                        AI: {
                            skynet: true,
                        },
                        INDEPENDENT: true,
                        LAYER: 10,
                        BODY: {
                            FOV: 2,
                        },
                    },
                ]);
            let O = {
                POSITION: [4.3, 3.1, 1.2, 8, 0, S, T[t]],
                PROPERTIES: E,
            };
            e.push(O);
        }
        return e;
    })(),
    TURRETS: []
};
for (let i = 0; i < 2; i++) {
    exports.mothershipMinion.TURRETS.push(
        {
            POSITION: [6, 6.5, 0, 360 / 2 * (i + 0), 150, 1],
            TYPE: "srk5_shotgun",
        },
        {
            POSITION: [6, 6.5, 0, 360 / 2 * (i + 0.5), 150, 1],
            TYPE: "srk5_shotgun",
        },
    );
};
exports.fortClock_mothership = {
    PARENT: ["autoTankGun"],
    LABEL: "Mothership",
    SHAPE: 0,
    COLOR: "#29361C",
    BODY: {
        FOV: 10
    },
    GUNS: (() => {
        let e = [],
            T = [1];
        for (let e = 1; e < 8.5; e += 0.5) {
            let t = e / 16;
            T.push(t);
        }
        for (let t = 0; t < 16; t++) {
            let S = 22.5 * (t + 1),
                E = {
                    MAX_CHILDREN: 2,
                    SHOOT_SETTINGS: combineStats([g.drone, g.over, g.mothership]),
                    TYPE: "drone",
                    AUTOFIRE: true,
                    SYNCS_SKILLS: true,
                    STAT_CALCULATOR: gunCalcNames.drone,
                    WAIT_TO_CYCLE: true,
                };
            t % 2 == 0 &&
                (E.TYPE = [
                    "drone",
                    {
                        AI: {
                            skynet: true,
                        },
                        INDEPENDENT: true,
                        LAYER: 10,
                        BODY: {
                            FOV: 10,
                        },
                    },
                ]);
            let O = {
                POSITION: [4.3, 3.1, 1.2, 8, 0, S, T[t]],
                PROPERTIES: E,
            };
            e.push(O);
        }
        return e;
    })(),
    TURRETS: [{
        POSITION: [14, 0, 0, 0, 360, 1],
        TYPE: [
            "genericEntity",
            {
                COLOR: 3
            },
        ],
    },]
};
for (let i = 0; i < 16; i++) {
    exports.fortClock_mothership.TURRETS.push(
        {
            POSITION: [1.8, 9, 0, 360 / 16 * (i + 0.5), 100, 1],
            TYPE: "autoTankGun_fortClock",
        },
    );
};
exports.fortClockStream = {
    PARENT: ["autoTankGun"],
    LABEL: "Streamliner",
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [25, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.sniper, g.assass, g.auto, g.one_third_reload]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [23, 8, 1, 0, 0, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.sniper, g.assass, g.auto, g.one_third_reload]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 8, 1, 0, 0, 0, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.sniper, g.assass, g.auto, g.one_third_reload]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.sniper, g.assass, g.auto, g.one_third_reload]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.sniper, g.assass, g.auto, g.one_third_reload]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: [{
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: [
            "genericEntity",
            {
                COLOR: 8
            },
        ],
    },]
}
exports.fortClockSaw = {
    PARENT: ["genericTank"],
    LABEL: "Saw",
    COLOR: "#29361C",
    CONTROLLERS: [["spin", { independent: true, speed: -0.05 }],],
    GUNS: [],
    TURRETS: [],
};
for (let i = 0; i < 60; i++) {
    exports.fortClockSaw.GUNS.push(
        {
            POSITION: [1.2, 6.5, 0.6, 0, -7.5, 360 / 60 * i, 0],
        },
    );
    exports.fortClockSaw.TURRETS.push(
    );
};
exports.fortClockGun = {
    PARENT: ["genericTank"],
    LABEL: "Gear",
    COLOR: -1,
    CONTROLLERS: [["spin", { independent: true, speed: -0.01 }],],
    GUNS: [],
    TURRETS: [{
        POSITION: [25, 0, 0, 0, 360, 0],
        TYPE: "fortClockSaw",
    },],
};
for (let i = 0; i < 16; i++) {
    let delay;
    switch (i % 4) {
        case 0:
            delay = 0;
            break;
        case 1:
            delay = 0.5;
            break;
        case 2:
            delay = 0.25;
            break;
        case 3:
            delay = 0.75;
            break;
    }
    exports.fortClockGun.GUNS.push(
        {
            POSITION: [4.5, 1.2, 0.5, 7, 1, 360/ 16 *i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.sniper, g.sniper, g.halfreload]),
                TYPE: ["autoswarm", { BODY: { FOV: 3 }}],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [4.5, 1.2, 0.5, 7, -1, 360 / 16 * i, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm, g.sniper, g.sniper, g.halfreload]),
                TYPE: ["autoswarm", { BODY: { FOV: 3 } }],
                STAT_CALCULATOR: gunCalcNames.swarm,
            },
        },
        {
            POSITION: [10.5, 1, 1, 0, 0, 360 / 16 * i, delay],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.puregunner, g.twin, g.hurricane, g.sniper, g.halfrange, g.small]),
                TYPE: "bullet",
            },
        },
    );
    exports.fortClockGun.TURRETS.push(
    );
};
for (let i = 0; i < 16; i++) {
    exports.fortClockGun.GUNS.push(
        {
            POSITION: [14, 1.2, 1, 0, 0, 360 / 16 * (i + 0.5), 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniper, g.assass, g.assass, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [2.5, 1.2, -2, 8, 0, 360 / 16 * (i + 0.5), 0],
        },
    );
    exports.fortClockGun.TURRETS.push(
        {
            POSITION: [2, 8.75, 0, 360 / 16 * (i + 0), 100, 1],
            TYPE: "fortClockStream",
        },
    );
};
exports.fortClockGun.TURRETS.push(
    {
        POSITION: [14, 0, 0, 0, 360, 1],
        TYPE: makeDeco ( 16, -1)
    },
    {
    POSITION: [10, 0, 0, 0, 360, 1],
    TYPE: [
        "fortClock_mothership",
    ],
},
);

exports.fortClockSaw2 = {
    PARENT: ["genericTank"],
    LABEL: "Saw",
    COLOR: "#29361C",
    CONTROLLERS: [["spin", { independent: true, speed: -0.05 }],],
    GUNS: [],
    TURRETS: [],
};
for (let i = 0; i < 36; i++) {
    exports.fortClockSaw2.GUNS.push(
        {
            POSITION: [2, 7.5, 0.6, 0, -7.5, 360 / 36 * i, 0],
        },
    );
    exports.fortClockSaw2.TURRETS.push(
    );
};
exports.fortClockGun2 = {
    PARENT: ["genericTank"],
    LABEL: "Gear",
    COLOR: -1,
    CONTROLLERS: [["spin", { independent: true, speed: -0.01 }],],
    GUNS: [],
    TURRETS: [{
        POSITION: [24, 0, 0, 0, 360, 0],
        TYPE: "fortClockSaw2",
    },],
};
for (let i = 0; i < 12; i++) {
    exports.fortClockGun2.TURRETS.push(
        {
            POSITION: [3, 8, 0, 360 / 12 * (i + 0), 100, 1],
            TYPE: ["vulcTurret", { BODY: { FOV: 5 }}],
        },
    );
};

exports.fortClock_hyperCannon = {
    PARENT: ["autoTankGun"],
    LABEL: "Hyper Cannon",
    BODY: {
        FOV: 5
    },
    COLOR: "#668C3B",
    GUNS: [
        {
            POSITION: [10, 12, -0.5, 32, 0, 0, 0],
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [40, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.assass, g.pound, g.destroy, g.doublereload, g.doublereload, { speed: 2, maxSpeed: 2 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [10, 12, -1.4, 4, 0, 0, 0],
        },
    ],
    TURRETS: [{
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: [
            "genericEntity",
            {
                COLOR: 8
            },
        ],
    },]
};

exports.fortClockTwin = {
    PARENT: ["autoTankGun"],
    LABEL: "Twin",
    COLOR: "#668C3B",
    GUNS: [
        {
            POSITION: [20, 8, 1, 0, 5.5, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper, g.assass, g.auto, { shudder: 5, speed: 1.5, maxSpeed: 1.5, spray: 15 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.sniper, g.assass, g.auto, { shudder: 5, speed: 1.5, maxSpeed: 1.5, spray: 15 }]),
                TYPE: "bullet",
            },
        },
    ],
};

exports.fortClock_spawner1 = {
    PARENT: ["genericTank"],
    LABEL: "Spawned",
    COLOR: "#668C3B",
    GUNS: [
        {
            /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5, 11, 1, 10.5, 0, 0, 0],
        },
        {
            POSITION: [2, 14, 1, 15.5, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.bossminion, { size: 2.5 }]),
                TYPE: "mothershipMinion",
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
                MAX_CHILDREN: 2
            },
        },
        {
            POSITION: [12, 14, 1, 0, 0, 0, 0],
        },
    ],
    TURRETS: [{
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: [
            "genericEntity",
            {
                COLOR: 8
            },
        ],
    },]
};
exports.fortClock_spawner2 = {
    PARENT: ["genericTank"],
    LABEL: "Spawned",
    COLOR: "#668C3B",
    GUNS: [
        {
            /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [5, 12, 1.2, 10.5, 0, 0, 0],
        },
        {
            POSITION: [3.5, 17, 1, 15.5, 0, 0, 1e99],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.factory]),
                TYPE: "minion",
                STAT_CALCULATOR: gunCalcNames.drone,
                AUTOFIRE: true,
                SYNCS_SKILLS: true,
            },
        },
        {
            POSITION: [12, 14, 1.2, 0, 0, 0, 0],
        },
    ],
    TURRETS: [{
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: [
            "genericEntity",
            {
                COLOR: 8
            },
        ],
    },]
};

exports.fortClock_planer = {
    PARENT: ["autoTankGun"],
    LABEL: "Planer",
    BODY: {
        FOV: 5
    },
    COLOR: "#668C3B",
    GUNS: [
        {
            POSITION: [24, 8, 1, 0, 0, 0, 0]
        }, {
            POSITION: [10, 14, 1.01, 22, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.sniper, g.assass, g.destroy, g.doublereload, g.morereload, { speed: 3, maxSpeed: 1 }]),
                TYPE: "bullet"
            }
        }, {
            POSITION: [5, 8, -1.6, 8, 0, 0, 0]
        }
    ],
    TURRETS: [{
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: [
            "genericEntity",
            {
                COLOR: 8
            },
        ],
    },]
};

exports.fortClockSaw3 = {
    PARENT: ["genericTank"],
    LABEL: "Saw",
    COLOR: "#29361C",
    CONTROLLERS: [["spin", { independent: true, speed: 0.025 }],],
    GUNS: [],
    TURRETS: [],
};
for (let i = 0; i < 24; i++) {
    exports.fortClockSaw3.GUNS.push(
        {
            POSITION: [5, 3, 0.5, 7, 0, 360 / 24 * i, 0.5],
        },
    );
    exports.fortClockSaw3.TURRETS.push(
        {
            POSITION: [1, 9.5, 0, 360 / 24 * (i + 0.5), 100, 1],
            TYPE: "autoTankGun_fortClock",
        },
    );
};

exports.fortClock_coilgun = {
    PARENT: ["genericTank"],
    LABEL: '',
    BODY: {
        FOV: 10,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [{ POSITION: [40, 2, 1, 0, 5.5, 0, 0] },
    { POSITION: [40, 2, 1, 0, -5.5, 0, 0] }, {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [1.2, 10, 1, 11, 0, 0, 1.5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.coil, g.auto, g.autosnipe]),
            TYPE: "bullet",
        },
    }, {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [1.2, 10, 1, 16, 0, 0, 1.55],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.coil, g.fake, g.auto, g.autosnipe]),
            TYPE: "casing",
            HAS_NO_RECOIL: true,
        },
    }, {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [1.2, 10, 1, 21, 0, 0, 1.6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.coil, g.fake, g.auto, g.autosnipe]),
            TYPE: "casing",
            HAS_NO_RECOIL: true,
        },
    }, {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [1.2, 10, 1, 26, 0, 0, 1.65],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.coil, g.fake, g.auto, g.autosnipe]),
            TYPE: "casing",
            HAS_NO_RECOIL: true,
        },
    }, {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [1.2, 10, 1, 31, 0, 0, 1.7],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.coil, g.fake, g.auto, g.autosnipe]),
            TYPE: "casing",
            HAS_NO_RECOIL: true,
        },
    }, {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [1.2, 10, 1, 36, 0, 0, 1.75],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.coil, g.fake, g.auto, g.autosnipe]),
            TYPE: "casing",
            HAS_NO_RECOIL: true,
        },
    },
    ],
    TURRETS: [{
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: [
            "genericEntity",
            {
                COLOR: "#668C3B"
            },
        ],
    },]
};

exports.fortClockTurret1 = {
    PARENT: ["genericTank"],
    LABEL: "Gear",
    COLOR: -1,
    CONTROLLERS: [["spin", { independent: true, speed: -0.01 }],],
    GUNS: [],
    TURRETS: [{
        POSITION: [24, 0, 0, 0, 360, 0],
        TYPE: "fortClockSaw3",
    },],
};
for (let i = 0; i < 12; i++) {
    exports.fortClockTurret1.TURRETS.push(
        {
            POSITION: [3, 8, 0, 360 / 12 * (i + 0), 100, 1],
            TYPE: [
                "fortClock_coilgun",
                {
                    COLOR: "#29361C",
                }
            ],
        },
    );
};

exports.FCsubExplosion = {
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
for (let i = 0; i < 24; i++) {
    exports.FCsubExplosion.GUNS.push(
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [1, 6, 1, 0, 0, 360 / 24 * i, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                    g.hurricane,
                    g.sniper,
                    g.assass,
                    g.pound,]),
                TYPE: ["bullet", { LABEL: "Fragment", PERSISTS_AFTER_DEATH: true, }],
                AUTOFIRE: true,
            },
        },
    );
};
exports.FCsubFrag = {
    PARENT: ["bullet"],
    NEXT_FORM: "FCsubExplosion",
};
exports.FCMainExplosion = {
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
for (let i = 0; i < 5; i++) {
    exports.FCMainExplosion.GUNS.push(
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [1, 10, 1, 0, 0, 360 / 5 * i , 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([
                    g.basic,
                    g.twin,
                    g.puregunner,
                    g.hurricane,
                    g.hurricane,
                    g.hurricane,
                    g.hurricane,
                    g.sniper,
                    g.assass,
                    g.pound,
                    g.halfrange,
                    g.halfrange,
                    g.halfrange,
                    g.slow,
                    g.slow]),
                TYPE: ["FCsubFrag", { LABEL: "Fragment", PERSISTS_AFTER_DEATH: true, }],
                AUTOFIRE: true,
            },
        },
    );
};
exports.fortClockMainBullet = {
    PARENT: ["bullet"],
    NEXT_FORM: "FCMainExplosion",
};

exports.fortClock_main = {
    PARENT: ["autoTankGun"],
    LABEL: "Hyper Destroyer",
    BODY: {
        FOV: 5
    },
    COLOR: "#668C3B",
    GUNS: [
        /*
        {
            POSITION: [10, 12, -0.5, 65, 0, 0, 0],
        },
        {
            POSITION: [10, 12, -0.5, 63.5, 0, 0, 0],
        },
        {
            POSITION: [10, 12, -0.5, 62, 0, 0, 0],
        },
        {
            POSITION: [70, 12, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.assass, g.pound, g.destroy, g.doublereload, g.doublereload, { health: 5, damage: 5, speed: 2, maxSpeed: 2 }]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [6, 12, -1.4, 20, 0, 0, 0],
        },
        {
            POSITION: [20, 12 * 1.4, -1.25, 0, 0, 0, 0],
        }, */
        {
            POSITION: [30, 10, 1, 0, 0, 0, 0]
        }, {
            POSITION: [4.5, 14, -10/14, 22.5, 0, 0, 0],
        }, {
            POSITION: [10, 14, 1, 27, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.sniper, g.assass, g.destroy, g.doublereload, g.morereload, { health: 5, damage: 5, speed: 3, maxSpeed: 1, range: 0.75 }]),
                TYPE: "fortClockMainBullet"
            }
        }, {
            POSITION: [1.5, 15, 1, 29, 0, 0, 0],
        }, {
            POSITION: [1.5, 15, 1, 32, 0, 0, 0],
        }, {
            POSITION: [10, 6, 1, 27, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.sniper, g.assass, g.destroy, g.doublereload, g.morereload, { health: 5, damage: 5, speed: 3, maxSpeed: 1 }, g.fake]),
                TYPE: "bullet"
            }
        }, {
            POSITION: [6, 4, 1, 29, 0, 0, 0],
            PROPERTIES: {
                COLOR: 9
            }
        }, {
            POSITION: [7, 10, -1.5, 6, 0, 0, 0]
        }
    ],
    TURRETS: [
        {
        POSITION: [15, 0, 0, 0, 360, 1],
        TYPE: [
            "genericEntity",
            {
                COLOR: 18
            },
        ],
        },
        {
            POSITION: [12, 0, 0, 0, 360, 1],
            TYPE: [
                "genericEntity",
                {
                    COLOR: 8
                },
            ],
        },
        {
            POSITION: [23, 0, 0, 0, 360, 0],
            TYPE: [
                "genericEntity",
                {
                    COLOR: "#29361C",
                },
            ],
        },
        {
            POSITION: [2.7, 24.5, 0, 0, 360, 1],
            TYPE: [
                "genericEntity",
                {
                    COLOR: 18
                },
            ],
        },
    ]
};

exports.fortClock_twinAssassin = {
    PARENT: ["genericTank"],
    LABEL: '',
    BODY: {
        FOV: 10,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: "#29361C",
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [38, 6.5, 1, 0, 5, 0, 0,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniper, g.auto, g.assass, g.autosnipe, g.twin, g.morespeed, g.morespeed]),
            TYPE: "bullet",
        },
    }, { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [38, 6.5, 1, 0, -5, 0, 0.5,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniper, g.auto, g.assass, g.autosnipe, g.twin, g.morespeed, g.morespeed]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [13, 17, -1.1, 0, 0, 0, 0,],
    },
    ],
    TURRETS: [{
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: [
            "genericEntity",
            {
                COLOR: "#668C3B"
            },
        ],
    },]
};

exports.fortClockSaw4 = {
    PARENT: ["genericTank"],
    LABEL: "Saw",
    COLOR: "#29361C",
    CONTROLLERS: [["spin", { independent: true, speed: 0.025 }],],
    GUNS: [],
    TURRETS: [],
};
for (let i = 0; i < 36; i++) {
    exports.fortClockSaw4.GUNS.push(
        {
            POSITION: [4.2, 1.5, 0.5, 7, 0, 360 / 36 * i, 0.5],
        },
    );
    exports.fortClockSaw4.TURRETS.push(
        {
            POSITION: [0.9, 9.5, 0, 360 / 36 * (i + 0.5), 100, 1],
            TYPE: "autoTankGun_fortClock",
        },
    );
};

exports.fortClockTurret2 = {
    PARENT: ["genericTank"],
    LABEL: "Gear",
    COLOR: -1,
    CONTROLLERS: [["spin", { independent: true, speed: 0.015 }],],
    GUNS: [],
    TURRETS: [{
        POSITION: [24, 0, 0, 0, 360, 0],
        TYPE: "fortClockSaw4",
    },],
};
for (let i = 0; i < 16; i++) {
    exports.fortClockTurret2.TURRETS.push(
        {
            POSITION: [2, 9, 0, 360 / 16 * (i + 0.5), 100, 1],
            TYPE: "fortClock_twinAssassin",
        },
    );
};

exports.fortClock = {
    PARENT: ["miniboss"],
    LABEL: "Fort-Clock",
    COLOR: "#466227",
    SHAPE: 6,
    SIZE: 150,
    VALUE: 144e6,
    FACING_TYPE: "spinEvenSlower",
    DANGER: 12,
    BODY: {
        FOV: 0.7,
        SPEED: base.SPEED * 0.15,
        HEALTH: base.HEALTH * 6,
        SHIELD: base.SHIELD * 6,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 50,
    },
    GUNS: [],
    TURRETS: [
    ],
};
for (let i = 0; i < 6; i++) {
    exports.fortClock.GUNS.push(
    );
    exports.fortClock.TURRETS.push({
        POSITION: [8, 9, 0, 360 / 6 * (i), 360, 0],
        TYPE: [
            "fortClockGun",
        ],
    },
    );
};
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
        exports.fortClock.TURRETS.push(
            {
                POSITION: [0.45, 9, 1.25 + j * 0.65, 360 / 6 * (i + 0), 100, 1],
                TYPE: ["fortClockTwin", { BODY: { FOV: 5 } }],
            },
            {
                POSITION: [0.45, 9, (1.25 + j * 0.65) * -1, 360 / 6 * (i + 0), 100, 1],
                TYPE: ["fortClockTwin", { BODY: { FOV: 5 } }],
            },
            {
                POSITION: [0.45, 8, 1.25 + j * 0.65, 360 / 6 * (i + 0), 100, 1],
                TYPE: ["fortClockTwin", { BODY: { FOV: 5 } }],
            },
            {
                POSITION: [0.45, 8, (1.25 + j * 0.65) * -1, 360 / 6 * (i + 0), 100, 1],
                TYPE: ["fortClockTwin", { BODY: { FOV: 5 } }],
            },
            {
                POSITION: [0.45, 7, 1.25 + j * 0.65, 360 / 6 * (i + 0), 100, 1],
                TYPE: ["fortClockTwin", { BODY: { FOV: 5 } }],
            },
            {
                POSITION: [0.45, 7, (1.25 + j * 0.65) * -1, 360 / 6 * (i + 0), 100, 1],
                TYPE: ["fortClockTwin", { BODY: { FOV: 5 } }],
            },
        );
    };
};
for (let i = 0; i < 6; i++) {
    exports.fortClock.GUNS.push(
    );
    exports.fortClock.TURRETS.push(
        {
            POSITION: [4.5, 10, 0, 360 / 6 * (i + 0.5), 360, 0],
            TYPE: [
                "fortClockGun2",
            ],
        },
        {
            POSITION: [2.5, 10, 0, 360 / 6 * (i + 0.5), 160, 1],
            TYPE: [
                "fortClock_hyperCannon",
            ],
        },
        {
            POSITION: [1.5, 8, 0, 360 / 6 * (i + 0), 0, 1],
            TYPE: [
                "fortClock_spawner1",
            ],
        },
        {
            POSITION: [3.4, 4.75, 0, 360 / 6 * (i + 0.5), 160, 1],
            TYPE: [
                "fortClockTurret1",
            ],
        },
    );
};
for (let i = 0; i < 3; i++) {
    exports.fortClock.GUNS.push(
    );
    exports.fortClock.TURRETS.push(
        {
            POSITION: [1.8, 4.75, 0, 360 / 3 * (i + 0.25), 0, 1],
            TYPE: [
                "fortClock_spawner2",
            ],
        },
        {
            POSITION: [1.8, 4.75, 0, 360 / 3 * (i + 0.75), 160, 1],
            TYPE: [
                "fortClock_planer",
            ],
        },
    );
};
exports.fortClock.TURRETS.push(
    {
        POSITION: [6.5, 0, 0, 0, 360, 1],
        TYPE: [
            "fortClockTurret2",
        ],
    },
    {
        POSITION: [4, 0, 0, 0, 360, 1],
        TYPE: [
            "fortClock_main",
        ],
    },
);

// XMC-37650000 (PDK-175000 MKIV)

exports.xmc_sniper3gun = {
    PARENT: ["genericTank"],
    LABEL: "Assassin",
    BODY: {
        FOV: 5,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: "#400481",
    INDEPENDENT: true,
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [27, 9, 1, 0, 0, 0, 0,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.auto, g.assass, { reload: 2, speed: 1.5, maxSpeed: 1.5 }]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [5, 9, -1.5, 8, 0, 0, 0,],
    },
    ],
};
exports.xmc_coolShitgun = {
    PARENT: ["genericTank"],
    LABEL: "Coilgun",
    BODY: {
        FOV: 5,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: "#400481",
    INDEPENDENT: true,
    GUNS: [
        {
            POSITION: [2.5, 60, 0.8, 6, -28, 90, 0],
        },
        {
            POSITION: [2.5, 60, 0.8, 6, 28, -90, 0],
        },
        {
            POSITION: [1.25, 13, 1, 15.5 + 4.5 * 7, 0, 0, 1 + 0.04 * 8], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniper, g.sniper, g.assass, g.auto, g.fake]), TYPE: "casing" },
        },
        {
            POSITION: [1.25, 13, 1, 15.5 + 4.5 * 6, 0, 0, 1 + 0.04 * 7], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniper, g.sniper, g.assass, g.auto, g.fake]), TYPE: "casing" },
        },
        {
            POSITION: [1.25, 13, 1, 15.5 + 4.5 * 5, 0, 0, 1 + 0.04 * 6], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniper, g.sniper, g.assass, g.auto, g.fake]), TYPE: "casing" },
        },
        {
            POSITION: [1.25, 13, 1, 15.5 + 4.5 * 4, 0, 0, 1 + 0.04 * 5], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniper, g.sniper, g.assass, g.auto, g.fake]), TYPE: "casing" },
        },
        {
            POSITION: [1.25, 13, 1, 15.5 + 4.5 * 3, 0, 0, 1 + 0.04 * 4], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniper, g.sniper, g.assass, g.auto, g.fake]), TYPE: "casing" },
        },
        {
            POSITION: [1.25, 13, 1, 15.5 + 4.5 * 2, 0, 0, 1 + 0.04 * 3], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniper, g.sniper, g.assass, g.auto, g.fake]), TYPE: "casing" },
        },
        {
            POSITION: [1.25, 13, 1, 15.5 + 4.5 * 1, 0, 0, 1 + 0.04 * 2], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniper, g.sniper, g.assass, g.auto, g.fake]), TYPE: "casing" },
        },
        {
            POSITION: [1.25, 13, 1, 15.5, 0, 0, 1 + 0.04 * 1], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniper, g.sniper, g.assass, g.auto, g.fake]), TYPE: "casing" },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [1.25, 13, 1, 11, 0, 0, 1 + 0.04 * 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniper, g.sniper, g.assass, g.auto]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: [{
        POSITION: [12, 0, 0, 0, 360, 1],
        TYPE: [
            "genericEntity",
            {
                COLOR: "#5600B3"
            },
        ],
    },]
};
exports.xmc_autoThingy1 = {
    PARENT: ["autoTankGun"],
    LABEL: "Auto-Stream",
    COLOR: "#7413B4",
    GUNS: [
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [25, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.sniper, g.sniper]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [23, 8, 1, 0, 0, 0, 0.2],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.sniper, g.sniper]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [21, 8, 1, 0, 0, 0, 0.4],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.sniper, g.sniper]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [19, 8, 1, 0, 0, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.sniper, g.sniper]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [17, 8, 1, 0, 0, 0, 0.8],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.sniper, g.sniper]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [10, 0, 0, 180, 360, 1],
            TYPE: ["autoTurret", { INDEPENDENT:true }],
        },
    ],
};
/*
for (let i = 0; i < 5; i++) {
    exports.xmc_autoThingy1.TURRETS.push(
        {
            POSITION: [11, 8, 0, 360 / 5 * i, 160, 0],
            TYPE: "auto5gun",
        },
        );
};
*/
exports.xmc_segment1 = {
    PARENT: ["genericTank"],
    LABEL: "",
    SHAPE: "M 0 0 Z",
    MIRROR_MASTER_ANGLE: true,
    GUNS: [],
    TURRETS: [
    ],
};
for (let i = 0; i < 45; i++) {
    if ( i%3 != 0 ) {
        exports.xmc_segment1.TURRETS.push(
            {
                POSITION: [0.5, 2, (10 + 1.15 * 6) + i * 1.15, 0, 100, 1],
                TYPE: [
                    "xmc_sniper3gun",
                ],
            },
            {
                POSITION: [0.5, 2, -(10 + 1.15 * 6) - i * 1.15, 0, 100, 1],
                TYPE: [
                    "xmc_sniper3gun",
                ],
            }
        );
    }
};
for (let i = 1; i < 45; i++) {
    if (i % 3 == 0) {
        exports.xmc_segment1.TURRETS.push(
            {
                POSITION: [1, 1.75, (10 + 1.15 * 6) + i * 1.15, 0, 100, 1],
                TYPE: [
                    "xmc_coolShitgun",
                ],
            },
            {
                POSITION: [1, 1.75, -(10 + 1.15 * 6) - i * 1.15, 0, 100, 1],
                TYPE: [
                    "xmc_coolShitgun",
                ],
            }
        );
    }
};
/*
for (let i = 1; i < 20; i++) {
        exports.xmc_segment1.TURRETS.push(
            {
                POSITION: [1, 1.25, (10 + 1.15 * 7) + i * 2.3, 0, 360, 1],
                TYPE: [
                    "xmc_autoThingy1",
                ],
            },
            {
                POSITION: [1, 1.25, -(10 + 1.15 * 7) - i * 2.3, 0, 360, 1],
                TYPE: [
                    "xmc_autoThingy1",
                ],
            }
        );
};
*/
exports.xmc_segment2 = {
    PARENT: ["genericTank"],
    LABEL: "",
    SHAPE: 6,
    MIRROR_MASTER_ANGLE: true,
    COLOR: -1,
    GUNS: [],
    TURRETS: [
    ],
};
for (let i = 4; i < 9; i++) {
    exports.xmc_segment2.GUNS.push(
        {
            POSITION: [13, 10.5, 1, 9.8, 0, 360 / 6 * (i), 0],
            PROPERTIES: {
                COLOR: 9
            }
        },
        {
            POSITION: [13, 9, 1, 9.8, 0, 360 / 6 * (i), 0],
            PROPERTIES: {
                COLOR: -1
            }
        },
        {
            POSITION: [15, 16, 1, 23.2, 0, 360 / 6 * (i), 0],
            PROPERTIES: {
                COLOR: -1
            }
        }
    );
    exports.xmc_segment2.TURRETS.push(
    );
};

exports.xmc37650000 = {
    PARENT: ["miniboss"],
    LABEL: "XMC-37650000",
    COLOR: "#5600B3",
    SHAPE: 12,
    SIZE: 150,
    VALUE: 37650000,
    FACING_TYPE: "spinEvenSlower",
    DANGER: 16,
    BODY: {
        FOV: 2,
        SPEED: base.SPEED * 0.15,
        HEALTH: base.HEALTH * 36,
        SHIELD: base.SHIELD * 12,
        REGEN: base.REGEN,
        DAMAGE: base.DAMAGE * 12,
    },
    GUNS: [],
    TURRETS: [
    ],
};
for (let i = 0; i < 12; i++) {
    exports.xmc37650000.GUNS.push(
        {
            POSITION: [60, 5, 1, 10.1, 0, 360 / 12 * (i), 0],
            PROPERTIES: {
                COLOR: 9
            }
        },
        {
            POSITION: [60, 4.35, 1, 10.1, 0, 360 / 12 * (i), 0],
            PROPERTIES: {
                COLOR: -1
            }
        }
    );
    exports.xmc37650000.TURRETS.push(
    {
        POSITION: [20, 0, 0, 360 / 12 * (i), 0, 1],
        TYPE: [
            "xmc_segment1",
        ],
    },
    {
        POSITION: [9.4, 74.65, 0, 360 / 12 * (i), 0, 0],
        TYPE: [
            "xmc_segment2",
        ],
    },
    );
};

// Developer Bosses
exports.taureonCoreBase = {
    SHAPE: 4,
    COLOR: '#00A2E8'
};
exports.taureonCore = {
    PARENT: "genericTank",
    LABEL: "Core Turret",
    SHAPE: 4.5,
    COLOR: '#99D9EA',
    INDEPENDENT: true,
    GUNS: [{
        POSITION: [10, 14, -0.5, 14, 0, 0, 0]
    },{
        POSITION: [21, 15, -1.1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.destroy, g.sniper]),
            TYPE: "snake",
            STAT_CALCULATOR: gunCalcNames.sustained
        }
    }],
    TURRETS: [{
        POSITION: [20 * Math.SQRT2, 0, 0, 0, 0, 0],
        TYPE: "taureonCoreBase"
    }]
};
exports.taureonBase = {
    SHAPE: 4.5,
    COLOR: '#161B54',
    MIRROR_MASTER_ANGLE: true
};
let d = 1/4;
exports.taureonStar = {
    SHAPE: [[0,1],[d,d],[1,0],[d,-d],[0,-1],[-d,-d],[-1,0],[-d,d]],
    COLOR: '#3F48CC',
    MIRROR_MASTER_ANGLE: true
};
exports.taureonRailgunTurret = {
    PARENT: "genericTank",
    LABEL: "Railgun Turret",
    CONTROLLERS: ["nearestDifferentMaster", "onlyAcceptInArc"],
    INDEPENDENT: true,
    GUNS: [{
        POSITION: [20, 7, 1, 0, 0, 0, 0]
    },{
        POSITION: [24, 5, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.destroy, g.veryfast, g.veryfast]),
            TYPE: "bullet"
        }
    },{
        POSITION: [5, 7.5, -1.6, 8, 0, 0, 0],
    }]
};
exports.taureonThruster = {
    PARENT: "genericTank",
    LABEL: "Thruster",
    CONTROLLERS: ["onlyAcceptInArc"],
    GUNS: [{
        POSITION: [14, 12, 1, 4, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mach, g.thruster, g.halfspeed, g.halfspeed, g.fake]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [12, 12, 1.4, 4, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.mach, g.thruster, g.halfspeed, g.halfspeed]),
            TYPE: "bullet"
        },
    }]
};
exports.taureonMissile = {
    PARENT: ["bullet"],
    LABEL: "Missile",
    TYPE: "swarm",
    MOTION_TYPE: "swarm",
    FACING_TYPE: "smoothWithMotion",
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
    INDEPENDENT: true,
    BODY: {
        FOV: base.FOV * 2
    },
    TURRETS: [{/** SIZE     X       Y     ANGLE    ARC */
        POSITION: [10, 0, 0, 0, 360, 1],
        TYPE: "genericTank",
    }],
    GUNS: [{/* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.4, 8, 0, 180, 0],
        PROPERTIES: {
            AUTOFIRE: true,
            STAT_CALCULATOR: gunCalcNames.thruster,
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, { range: 0.1 }]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
        }
    },{
        POSITION: [10, 12, 0.8, 8, 0, 180, 0.5],
        PROPERTIES: {
            AUTOFIRE: true,
            NEGATIVE_RECOIL: true,
            STAT_CALCULATOR: gunCalcNames.thruster,
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, { range: 0.1 }]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }]
        }
    },...Array(16).fill().map((_, i)=>({
        POSITION: [0, (i % 4) + 1, 0, 0, 0, 0, 9999],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, { spray: 1e6, recoil: 0, range: 0.5 }]),
            TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
            SHOOT_ON_DEATH: true
        },
    }))]
};
exports.taureonBoss = {
    PARENT: "miniboss",
    LABEL: "Diamond Marauder",
    NAME: "Taureon",
    COLOR: '#2B339B',
    DANGER: 10,
    SHAPE: 4.5,
    SIZE: 50,
    FACING_TYPE: "smoothToTarget",
    VALUE: 5e6,
    BODY: {
        FOV: 1,
        SPEED: 0.5 * base.SPEED,
        HEALTH: 20 * base.HEALTH,
        DAMAGE: 3 * base.DAMAGE,
    },
    TURRETS: [{
        POSITION: [23.3, 0, 0, 0, 0, 0],
        TYPE: "taureonBase"
    },{
        POSITION: [5, 10, 0, -45, 180, 0],
        TYPE: "taureonRailgunTurret"
    },{
        POSITION: [5, 10, 0, 45, 180, 0],
        TYPE: "taureonRailgunTurret"
    },{
        POSITION: [5, -10, 0, -45, 90, 0],
        TYPE: "taureonThruster"
    },{
        POSITION: [5, -10, 0, 45, 90, 0],
        TYPE: "taureonThruster"
    },{
        POSITION: [25, 0, 0, 0, 0, 1],
        TYPE: "taureonStar"
    },{
        POSITION: [5, 0, 0, 0, 0, 1],
        TYPE: "taureonCore"
    }],
    GUNS: [...Array(6).fill().map((_, i) => ({
        POSITION: [18, 1.75, 1, 0, Math.cos(Math.PI * i / 3) * 2, 0, i / 6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.twin]),
            TYPE: "bullet"
        }
    })),{
        POSITION: [4, 5, -0.5, 12, 0, -90, 0]
    },{
        POSITION: [10, 5, -1.2, 5, 0, -90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
            TYPE: "taureonMissile",
            STAT_CALCULATOR: gunCalcNames.sustained
        }
    },{
        POSITION: [4, 5, -0.5, 12, 0, 90, 0]
    },{
        POSITION: [10, 5, -1.2, 5, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
            TYPE: "taureonMissile",
            STAT_CALCULATOR: gunCalcNames.sustained
        }
    },{
        POSITION: [5.5, 5, -1.5, 5, 0, -45, 0]
    },{
        POSITION: [5.5, 5, -1.5, 5, 0, 45, 0]
    },{
        POSITION: [2, 7, 1, 8, 0, 0, 0]
    },{
        POSITION: [2, 7, 1, 14.5, 0, 0, 0]
    }]
};

exports.shinyomegasunchip = {
    PARENT: ["drone"],
    SHAPE: 4,
    HITS_OWN_TYPE: "hard",
    BODY: {
        FOV: 0.5,
    },
    AI: {
        BLIND: true,
        FARMER: true,
    },
    TURRETS: [{
        POSITION: [20 * Math.SQRT1_2, 0, 0, 45, 0, 1],
        TYPE: ["shinySquare", { MIRROR_MASTER_ANGLE: true }]
    },{
        POSITION: [20 * Math.SQRT1_2 ** 2, 0, 0, 0, 0, 1],
        TYPE: ["shinySquare", { MIRROR_MASTER_ANGLE: true }]
    },{
        POSITION: [20 * Math.SQRT1_2 ** 3, 0, 0, 45, 0, 1],
        TYPE: ["shinySquare", { MIRROR_MASTER_ANGLE: true }]
    }]
};
exports.shinyEggDummy = {
    SHAPE: 0,
    COLOR: 1
}
exports.shinybetawaferbread = {
    PARENT: ["drone"],
    SHAPE: 0,
    HITS_OWN_TYPE: "hard",
    BODY: {
        FOV: 0.5,
    },
    AI: {
        BLIND: true,
        FARMER: true,
    },
    TURRETS: [{
        POSITION: [10, 0, 0, 45, 0, 1],
        TYPE: "shinyEggDummy"
    },]
};;
exports.tgsBoss = {
    PARENT: "miniboss",
    LABEL: "Shiny Omega Thaumaturge",
    NAME: "TGS",
    DANGER: 10,
    SHAPE: 4,
    COLOR: 1,
    SIZE: 50,
    FACING_TYPE: "autospin",
    VALUE: 5e6,
    BODY: {
        FOV: 0.75,
        SPEED: 0.05 * base.SPEED,
        HEALTH: 15 * base.HEALTH,
        DAMAGE: 5 * base.DAMAGE,
    },
    GUNS: Array(4).fill().map((_, i) => ([{
        POSITION: [3.5, 8.65, 1.2, 8, 0, i * 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.destroy, g.destroy, g.veryfast, { maxSpeed: 3 }]),
            TYPE: "shinyomegasunchip",
            MAX_CHILDREN: 4,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: true
        }
    },{
        POSITION: [2.5, 3, 1.2, 8, 5, i * 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.pound, g.veryfast, g.mach, { spray: 50, speed: 1.25, shudder: 1.25 }]),
            TYPE: "shinybetawaferbread",
            MAX_CHILDREN: 8,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: true
        }
    },{
        POSITION: [2.5, 3, 1.2, 8, -5, i * 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.summoner, g.pound, g.veryfast, g.mach, { spray: 150, speed: 1.25, shudder: 1.25 }]),
            TYPE: "shinybetawaferbread",
            MAX_CHILDREN: 8,
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro,
            WAIT_TO_CYCLE: true
        }
    }])).flat(),
    TURRETS: [{
        POSITION: [20 * Math.SQRT1_2, 0, 0, 45, 0, 1],
        TYPE: "shinySquare"
    },{
        POSITION: [20 * Math.SQRT1_2 ** 2, 0, 0, 0, 0, 1],
        TYPE: "shinySquare"
    },{
        POSITION: [20 * Math.SQRT1_2 ** 3, 0, 0, 45, 0, 1],
        TYPE: "shinySquare"
    }]
};
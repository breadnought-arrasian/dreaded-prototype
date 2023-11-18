const { combineStats, addAura } = require('../facilitators.js');
const { base, gunCalcNames, basePolygonDamage, basePolygonHealth, dfltskl, statnames, smshskl } = require('../constants.js');
const g = require('../gunvals.js');

// TESTBED TANKS
exports.menu = {
    PARENT: ["genericTank"],
    LABEL: "",
    SKILL_CAP: [
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
        dfltskl,
    ],
    IGNORED_BY_AI: true,
    TURRETS: [],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [18, 10, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.developer = {
    PARENT: ["menu"],
    LABEL: "Developer",
    BODY: {
        SHIELD: 1000,
        REGEN: 10,
        HEALTH: 100,
        DAMAGE: 10,
        DENSITY: 20,
        FOV: 2,
        SPEED: base.SPEED * 3,
        ACCELERATION: base.ACCEL * 10
    },
    SHAPE: [
        [-1, -0.8],
        [-0.8, -1],
        [0.8, -1],
        [1, -0.8],
        [0.2, 0],
        [1, 0.8],
        [0.8, 1],
        [-0.8, 1],
        [-1, 0.8],
    ],
    GUNS: [
        {
            /*** LENGTH WIDTH     ASPECT        X             Y         ANGLE     DELAY */
            POSITION: [18, 10, -1.4, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                TYPE: "developerBullet",
            },
        },
    ],
};
exports.spectator = {
    PARENT: ["menu"],
    LABEL: "Spectator",
    ALPHA: 0,
    CAN_BE_ON_LEADERBOARD: false,
    ACCEPTS_SCORE: false,
    DRAW_HEALTH: false,
    HITS_OWN_TYPE: "never",
    ARENA_CLOSER: true,
    SKILL_CAP: [0, 0, 0, 0, 0, 0, 0, 0, 0, 255],
    BODY: {
        SPEED: 5,
        FOV: 2.5,
        DAMAGE: 0,
        HEALTH: 1e100,
        SHIELD: 1e100,
        REGEN: 1e100,
    },
    GUNS: [],
};

exports.bosses = {
    PARENT: ["menu"],
    LABEL: "Bosses",
};
exports.sentries = {
    PARENT: ["menu"],
    LABEL: "Sentries",
    COLOR: 5,
    SHAPE: 3.5,
    TURRETS: [
        {
            POSITION: [9, 0, 0, 0, 360, 1],
            TYPE: "genericEntity",
        },
    ],
};
exports.elites = {
    PARENT: ["menu"],
    LABEL: "Elites",
    COLOR: 5,
    SHAPE: 3.5,
};
exports.mysticals = {
    PARENT: ["menu"],
    LABEL: "Mysticals",
    COLOR: 13,
    SHAPE: 4,
};
exports.nesters = {
    PARENT: ["menu"],
    LABEL: "Nesters",
    COLOR: 14,
    SHAPE: 5.5,
};
exports.rogues = {
    PARENT: ["menu"],
    LABEL: "Rogues",
    COLOR: 17,
    SHAPE: 6,
};
exports.terrestrials = {
    PARENT: ["menu"],
    LABEL: "Terrestrials",
    COLOR: 2,
    SHAPE: 7,
};
exports.celestials = {
    PARENT: ["menu"],
    LABEL: "Celestials",
    COLOR: 1,
    SHAPE: 9,
};
exports.eternals = {
    PARENT: ["menu"],
    LABEL: "Eternals",
    COLOR: 0,
    SHAPE: 11,
};
exports.tieredBosses = {
    PARENT: ["menu"],
    LABEL: "Tiered Bosses",
};
exports.srkX = {
    PARENT: ["menu"],
    LABEL: "SRK-X",
};
exports.diepBosses = {
    PARENT: ["menu"],
    LABEL: "Diep Bosses",
};
exports.miscBosses = {
    PARENT: ["menu"],
    LABEL: "Misc Bosses",
};
exports.laggyBosses = {
    PARENT: ["menu"],
    LABEL: "Laggy Bosses",
};
exports.laggyBosses2 = {
    PARENT: ["menu"],
    LABEL: "WARNING: these bosses may destroy the server",
};
exports.xmcUpgrade = {
    PARENT: ["menu"],
    LABEL: "XMC-37650000",
};
exports.devBosses = {
    PARENT: ["menu"],
    LABEL: "Developers",
    COLOR: 1,
    SHAPE: 4,
};

exports.tanks = {
    PARENT: ["menu"],
    LABEL: "Tanks",
};
exports.legacyTanks = {
    PARENT: ["menu"],
    LABEL: "Legacy Tanks",
};
exports.specialTanks = {
    PARENT: ["menu"],
    LABEL: "Special Tanks",
};
exports.bases = {
    PARENT: ["menu"],
    LABEL: "Bases",
    TURRETS: [
        {
            POSITION: [22, 0, 0, 0, 360, 0],
            TYPE: "dominationBody",
        },
    ],
};
exports.dominators = {
    PARENT: ["menu"],
    LABEL: "Dominators",
    TURRETS: [
        {
            POSITION: [22, 0, 0, 0, 360, 0],
            TYPE: "dominationBody",
        },
    ],
};
exports.sanctuaries = {
    PARENT: ["menu"],
    LABEL: "Sanctuaries",
    TURRETS: [
        {
            POSITION: [22, 0, 0, 0, 360, 0],
            TYPE: "dominationBody",
        },
        {
            POSITION: [13, 0, 0, 0, 360, 1],
            TYPE: "healerSymbol",
        },
    ],
};
exports.funTanks = {
    PARENT: ["menu"],
    LABEL: "Fun Tanks",
};
exports.testingTanks = {
    PARENT: ["menu"],
    LABEL: "Testing Tanks",
};

exports.tools = {
    PARENT: ["menu"],
    LABEL: "Tools",
};

// GENERATORS
function compileMatrix(matrix, matrix2Entrance) {
    let matrixWidth = matrix[0].length,
        matrixHeight = matrix.length;
    for (let x = 0; x < matrixWidth; x++) for (let y = 0; y < matrixHeight; y++) {
        let str = matrix[y][x],
            LABEL = str[0].toUpperCase() + str.slice(1).replace(/[A-Z]/g, m => ' ' + m) + " Generator",
            code = str + 'Generator';
        exports[code] = matrix[y][x] = {
            PARENT: ["genericTank"],
            LABEL,
            SKILL_CAP: [31, 0, 0, 0, 0, 0, 0, 0, 0, 31],
            ALPHA: [0, 0],
            IGNORED_BY_AI: true,
            BODY: {
                SPEED: 5,
                FOV: 2.5,
                DAMAGE: 0,
                HEALTH: 1e100,
                SHIELD: 1e100,
                REGEN: 1e100,
            },
            TURRETS: [{
                POSITION: [5 + y * 2, 0, 0, 0, 0, 1],
                TYPE: str,
            }],
            GUNS: [{
                POSITION: [14, 12, 1, 4, 0, 0, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                    TYPE: "bullet"
                }
            }, {
                POSITION: [12, 12, 1.4, 4, 0, 0, 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, { recoil: 0 }]),
                    INDEPENDENT_CHILDREN: true,
                    TYPE: str
                },
            }],
        };
    }
}

function connectMatrix(matrix, matrix2Entrance) {
    let matrixWidth = matrix[0].length,
        matrixHeight = matrix.length;
    for (let x = 0; x < matrixWidth; x++) for (let y = 0; y < matrixHeight; y++) {
        let top = (y + matrixHeight - 1) % matrixHeight,
            bottom = (y + matrixHeight + 1) % matrixHeight,
            left = (x + matrixWidth - 1) % matrixWidth,
            right = (x + matrixWidth + 1) % matrixWidth,

        center = matrix[y     ][x    ];
        top    = matrix[top   ][x    ];
        bottom = matrix[bottom][x    ];
        left   = matrix[y     ][left ];
        right  = matrix[y     ][right];

        matrix[y][x].UPGRADES_TIER_0 = [
            "basic"     ,  top    , "developer",
             left       ,  center ,  right      ,
            "spectator" ,  bottom ,  matrix2Entrance
        ];
    }
}
let generatorMatrix = [
    [ "egg"           , "gem"                , "jewel"                  , "crasher"             , "sentry"               , "shinySentry"        , "EggRelic"           ],
    [ "square"        , "shinySquare"        , "legendarySquare"        , "shadowSquare"        , "rainbowSquare"        , "transSquare"        , "SquareRelic"        ],
    [ "triangle"      , "shinyTriangle"      , "legendaryTriangle"      , "shadowTriangle"      , "rainbowTriangle"      , "transTriangle"      , "TriangleRelic"      ],
    [ "pentagon"      , "shinyPentagon"      , "legendaryPentagon"      , "shadowPentagon"      , "rainbowPentagon"      , "transPentagon"      , "PentagonRelic"      ],
    [ "betaPentagon"  , "shinyBetaPentagon"  , "legendaryBetaPentagon"  , "shadowBetaPentagon"  , "rainbowBetaPentagon"  , "transBetaPentagon"  , "BetaPentagonRelic"  ],
    [ "alphaPentagon" , "shinyAlphaPentagon" , "legendaryAlphaPentagon" , "shadowAlphaPentagon" , "rainbowAlphaPentagon" , "transAlphaPentagon" , "AlphaPentagonRelic" ],
    [ "sphere"        , "cube"               , "tetrahedron"            , "octahedron"          , "dodecahedron"         , "icosahedron"        , "tesseract"          ],
],

gemRelicMatrix = [];
for (let tier of [ "", "Egg", "Square", "Triangle", "Pentagon", "BetaPentagon", "AlphaPentagon" ]) {
    let row = [];
    for (let gem of [ "Power", "Space", "Reality", "Soul", "Time", "Mind" ]) {
        row.push(gem + (tier ? tier + 'Relic' : 'Gem'));
    }
    gemRelicMatrix.push(row);
}

compileMatrix(generatorMatrix);
compileMatrix(gemRelicMatrix);

// Tensor = N-Dimensional Array, BASICALLY
let labyTensor = [];
for (let tier = 0; tier < 6; tier++) {
    let row = [];
    for (let poly of [ "Egg", "Square", "Triangle", "Pentagon", "Hexagon" ]) {
        let column = [];
        for (let shiny of [ "", "Shiny", "Legendary", "Shadow", "Rainbow", "Trans" ]) {
            let str = `laby${tier}${shiny}${poly}`,
                LABEL = str[0].toUpperCase() + str.slice(1).replace(/\d/, d => ["", "Beta", "Alpha", "Omega", "Gamma", "Delta"][d]).replace(/[A-Z]/g, m => ' ' + m) + " Generator",
                code = str + 'Generator';
            column.push(exports[code] = {
                PARENT: ["genericTank"],
                LABEL,
                SKILL_CAP: [31, 0, 0, 0, 0, 0, 0, 0, 0, 31],
                ALPHA: [0, 0],
                IGNORED_BY_AI: true,
                BODY: {
                    SPEED: 5,
                    FOV: 2.5,
                    DAMAGE: 0,
                    HEALTH: 1e100,
                    SHIELD: 1e100,
                    REGEN: 1e100,
                },
                TURRETS: [{
                    POSITION: [5 + tier * 2, 0, 0, 0, 0, 1],
                    TYPE: str,
                }],
                GUNS: [{
                    POSITION: [14, 12, 1, 4, 0, 0, 0],
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.fake]),
                        TYPE: "bullet"
                    }
                }, {
                    POSITION: [12, 12, 1.4, 4, 0, 0, 0],
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, { recoil: 0 }]),
                        INDEPENDENT_CHILDREN: true,
                        TYPE: str
                    },
                }],
            });
        }
        row.push(column);
    }
    labyTensor.push(row);
}

connectMatrix(generatorMatrix, 'PowerGemGenerator');
connectMatrix(gemRelicMatrix, 'laby0EggGenerator');

let tensorLength = labyTensor[0][0].length,
    tensorWidth = labyTensor[0].length,
    tensorHeight = labyTensor.length;
for (let x = 0; x < tensorWidth; x++) for (let y = 0; y < tensorHeight; y++) for (let z = 0; z < tensorLength; z++) {
    let top = (y + tensorHeight - 1) % tensorHeight,
        bottom = (y + tensorHeight + 1) % tensorHeight,
        left = (x + tensorWidth - 1) % tensorWidth,
        right = (x + tensorWidth + 1) % tensorWidth,
        front = (z + tensorLength - 1) % tensorLength,
        back = (z + tensorLength + 1) % tensorLength,

    center = labyTensor[y     ][x    ][z    ];
    top    = labyTensor[top   ][x    ][z    ];
    bottom = labyTensor[bottom][x    ][z    ];
    left   = labyTensor[y     ][left ][z    ];
    right  = labyTensor[y     ][right][z    ];
    front  = labyTensor[y     ][x    ][front];
    back   = labyTensor[y     ][x    ][back ];

    labyTensor[y][x][z].UPGRADES_TIER_0 = [
        "basic"     ,  top                , "developer",
         left       ,  center             ,  right     ,
        "spectator" ,  bottom             , "eggGenerator",
         front      , "PowerGemGenerator" ,  back
    ];
}

exports.diamondShape = {
    PARENT: ["basic"],
    LABEL: "Diamond Test Shape",
    SHAPE: 4.5
};

exports.rotatedTrap = {
    PARENT: ["basic"],
    LABEL: "Rotated Trap Test Shape",
    SHAPE: -3.5
};

exports.mummyHat = {
    SHAPE: 4.5,
    COLOR: 10
};
exports.mummy = {
    PARENT: ["drone"],
    SHAPE: 4,
    TURRETS: [{
        POSITION: [20 * Math.SQRT1_2, 0, 0, 180, 360, 1],
        TYPE: ["mummyHat"]
    }]
};
exports.mummifier = {
    PARENT: ["genericTank"],
    LABEL: "Mummifier",
    DANGER: 6,
    STAT_NAMES: statnames.drone,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    SHAPE: 4,
    MAX_CHILDREN: 10,
    GUNS: [{
        POSITION: [5.5, 13, 1.1, 8, 0, 90, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: "mummy",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    },{
        POSITION: [5.5, 13, 1.1, 8, 0, 270, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
            TYPE: "mummy",
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.necro
        }
    }],
    TURRETS: [{
        POSITION: [20 * Math.SQRT1_2, 0, 0, 180, 360, 1],
        TYPE: ["mummyHat"]
    }]
};

exports.colorMan = {
    PARENT: ["genericTank"],
    LABEL: "Testing Animated Colors",
    SHAPE: 4,
    COLOR: 36,
    TURRETS: [{
        POSITION: [20, -20, -20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 20 }
    },{
        POSITION: [20,  0 , -20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 21 }
    },{
        POSITION: [20,  20, -20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 22 }
    },{
        POSITION: [20, -20,  0 , 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 23 }
    },{
        POSITION: [20,  20,  0 , 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 29 }
    },{
        POSITION: [20,  20,  20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 24 }
    },{
        POSITION: [20,  0 ,  20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 37 }
    },{
        POSITION: [20,  20,  20, 0, 0, 1],
        TYPE: { SHAPE: 4, COLOR: 38 }
    }]
};

exports.miscTestHelper2 = {
    PARENT: ["genericTank"],
    LABEL: "Turret Reload Test 3",
    MIRROR_MASTER_ANGLE: true,
    COLOR: -1,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.noRandom]),
                TYPE: "bullet",
                COLOR: -1,
            },
        },
    ],
};
exports.miscTestHelper = {
    PARENT: ["genericTank"],
    LABEL: "Turret Reload Test 2",
    //MIRROR_MASTER_ANGLE: true,
    COLOR: {
        BASE: -1,
        BRIGHTNESS_SHIFT: 15,
    },
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.noRandom]),
                TYPE: "bullet",
                COLOR: -1,
            },
        },
    ],
    TURRETS: [
        {
          POSITION: [20, 0, 20, 30, 0, 1],
          TYPE: "miscTestHelper2",
        }
    ]
};
exports.miscTest = {
    PARENT: ["genericTank"],
    LABEL: "Turret Reload Test",
    COLOR: 1,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.noRandom]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [20, 0, 20, 30, 0, 1],
            TYPE: "miscTestHelper",
        }
    ]
};
exports.mmaTest2 = {
    PARENT: ["genericTank"],
    MIRROR_MASTER_ANGLE: true,
    GUNS: [{
            POSITION: [40, 4, 1, -20, 0, 0, 0],
        }],
}
exports.mmaTest1 = {
    PARENT: ["genericTank"],
    COLOR: -1,
    // Somehow, removing the gun below causes a crash when the tank is chosen ??????
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
        }
    ],
    TURRETS: [
        {
            POSITION: [10, 0, 0, 0, 360, 1],
            TYPE: "mmaTest2",
        }
    ]
}
exports.mmaTest = {
    PARENT: ["genericTank"],
    LABEL: "Mirror Master Angle Test",
    TURRETS: [
        {
            POSITION: [10, 0, 0, 0, 360, 1],
            TYPE: "mmaTest2",
        },
        {
            POSITION: [20, 0, 20, 0, 360, 1],
            TYPE: "mmaTest1",
        },
    ]
}
exports.auraBasicGen = addAura();
exports.auraBasic = {
    PARENT: ["genericTank"],
    LABEL: "Aura Basic",
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
            },
        },
    ],
    TURRETS: [
        {
            POSITION: [14, 0, 0, 0, 0, 1],
            TYPE: "auraBasicGen",
        }
    ],
};
exports.auraHealerGen = addAura(-1);
exports.auraHealer = {
    PARENT: ["genericTank"],
    LABEL: "Aura Healer",
    TURRETS: [
        {
            POSITION: [14, 0, 0, 0, 0, 1],
            TYPE: "auraHealerGen",
        }
    ],
    GUNS: [
        {
            /*** LENGTH    WIDTH     ASPECT        X             Y         ANGLE     DELAY */
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
};

exports.ghoster_ghostForm = {
    PARENT: ['genericTank'],
    TOOLTIP: 'You are now in ghost form, roam around and find your next target. Will turn back in 5 seconds',
    LABEL: 'Ghoster',
    BODY: {
        SPEED: 20,
        ACCELERATION: 10,
        FOV: base.FOV + 1,
    },
    GUNS: [{
        POSITION: { WIDTH: 20, LENGTH: 20 },
    }],
    ALPHA: 0.6,
}

exports.ghoster = {
    PARENT: ['genericTank'],
    LABEL: 'Ghoster',
    TOOLTIP: 'Shooting will turn you into a ghost for 5 seconds',
    BODY: {
        SPEED: base.SPEED,
        ACCELERATION: base.ACCEL,
    },
    GUNS: [{
        POSITION: {WIDTH: 20, LENGTH: 20},
        PROPERTIES: {
            TYPE: 'bullet',
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
            ON_FIRE: ({body}) => {
                body.define(Class.ghoster_ghostForm)
                setTimeout(() => { 
                    body.SPEED = 1e-99
                    body.ACCEL = 1e-99
                    body.FOV *= 2
                    body.alpha = 1
                }, 2000)
                setTimeout(() => { 
                    body.SPEED = base.SPEED 
                    body.define(Class.ghoster) 
                }, 2500)
            }
        }
    }],
    ALPHA: 1,
}

exports.switcheroo = {
    PARENT: ['basic'],
    LABEL: 'Switcheroo',
    UPGRADES_TIER_0: [],
    RESET_UPGRADE_MENU: true,
    GUNS: [{
        POSITION: {},
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: 'bullet',
            ON_FIRE: ({ body, globalMasterStore: store }) => {
                store.switcheroo_i ??= 0;
                store.switcheroo_i++;
                store.switcheroo_i %= 6;
                body.define(Class.basic.UPGRADES_TIER_1[store.switcheroo_i]);
                setTimeout(() => body.define("switcheroo"), 6000);
            }
        }
    }]
}

// FUN
exports.florr_tank_eye = {
    PARENT: "genericTank",
    BORDERLESS: true,
    MIRROR_MASTER_ANGLE: true,
    SHAPE: 'M 0 -1.5 C -1 -1.5 -1 1.5 0 1.5 C 1 1.5 1 -1.5 0 -1.5'
}
exports.florr_tank_smile = {
    PARENT: "genericTank",
    COLOR: 'black',
    BORDERLESS: true,
    MIRROR_MASTER_ANGLE: true,
    SHAPE: 'M 5 1.5 C 3 -2.5 -3 -2.5 -5 1.5 L -4 2 C -2 -1.5 2 -1.5 4 2 L 5 1.5'
}
exports.florr_tank = {
    PARENT: "genericTank",
    COLOR: 'yellow',
    LABEL: 'Flower',
    STAT_NAMES: {
        BODY_DAMAGE: 'Flower Thorns',
        BULLET_SPEED: 'Petal Speed',
        BULLET_HEALTH: 'Petal Health',
        BULLET_PEN: 'Petal Penetration',
        BULLET_DAMAGE: 'Petal Damage',
        RELOAD: 'Petal Cooldown',
        MOVE_SPEED: 'Flower Speed',
        SHIELD_REGEN: 'Photosynthesis',
        SHIELD_CAP: 'Vacuole Capacity',
    },
    GUNS: (() => {
        let output = []
        for (let i = 0; i < 32; i++) {
            output.push({
                POSITION: {
                    WIDTH: 10, 
                    LENGTH: 1, 
                    X: -2, 
                    ANGLE: (360/8)*i, 
                    DELAY: i < 8 ? 1 : i < 16 ? 2 : i < 24 ? 3 : i < 32 ? 4 : 5
                },
                PROPERTIES: {
                    TYPE: 'bullet',
                    SHOOT_SETTINGS: combineStats([g.basic, {spread: 0}])
                }
            })
        }
        return output
    })(),
    TURRETS: [
        {
            POSITION: { SIZE: 3.5, X: -3, Y: 2, LAYER: 1, ANGLE: -90 },
            TYPE: ["florr_tank_eye", {COLOR: 'black'}]
        },
        {
            POSITION: { SIZE: 3.5, X: 3, Y: 2, LAYER: 1, ANGLE: -90 },
            TYPE: ["florr_tank_eye", {COLOR: 'black'}]
        },
        {
            POSITION: { SIZE: 1.75, X: -3.5, Y: 2.5, LAYER: 1, ANGLE: -90 },
            TYPE: ["florr_tank_eye", { COLOR: 'white' }]
        },
        {
            POSITION: { SIZE: 1.75, X: 2.5, Y: 2.5, LAYER: 1, ANGLE: -90 },
            TYPE: ["florr_tank_eye", { COLOR: 'white' }]
        },
        {
            POSITION: { SIZE: 1.25, Y: -4, LAYER: 1, ANGLE: -90 },
            TYPE: ["florr_tank_smile"]
        }
    ]
}

exports.vanquisher = {
    PARENT: ["genericTank"],
    DANGER: 8,
    LABEL: "Vanquisher",
    STAT_NAMES: statnames.generic,
    BODY: {
        SPEED: 0.8 * base.SPEED,
    },
    //destroyer
    GUNS: [{
        POSITION: [21, 14, 1, 0, 0, 180, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
            TYPE: "bullet"
        }

    //builder
    },{
        POSITION: [18, 12, 1, 0, 0, 0, 0],
    },{
        POSITION: [2, 12, 1.1, 18, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block]),
            TYPE: "setTrap"
        }

    //launcher
    },{
        POSITION: [10, 9, 1, 9, 0, 90, 0],
    },{
        POSITION: [17, 13, 1, 0, 0, 90, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty]), TYPE: "minimissile", STAT_CALCULATOR: gunCalcNames.sustained }

    //shotgun
    },{
        POSITION: [4, 3, 1, 11, -3, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "bullet" }
    },{
        POSITION: [4, 3, 1, 11, 3, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "bullet" }
    },{
        POSITION: [4, 4, 1, 13, 0, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "casing" }
    },{
        POSITION: [1, 4, 1, 12, -1, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "casing" }
    },{
        POSITION: [1, 4, 1, 11, 1, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "casing" }
    },{
        POSITION: [1, 3, 1, 13, -1, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "bullet" }
    },{
        POSITION: [1, 3, 1, 13, 1, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "bullet" }
    },{
        POSITION: [1, 2, 1, 13, 2, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "casing" }
    }, {
        POSITION: [1, 2, 1, 13, -2, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]), TYPE: "casing" }
    }, {
        POSITION: [15, 14, 1, 6, 0, 270, 0],
        PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]), TYPE: "casing" }
    }, {
        POSITION: [8, 14, -1.3, 4, 0, 270, 0],
    }]
};
exports.armyOfOneBullet = {
    PARENT: ["bullet"],
    LABEL: "Unstoppable",
    TURRETS: [
        {
            /** SIZE         X             Y         ANGLE        ARC */
            POSITION: [18.5, 0, 0, 0, 360, 0],
            TYPE: ["spikeBody", { COLOR: null }],
        },
        {
            POSITION: [18.5, 0, 0, 180, 360, 0],
            TYPE: ["spikeBody", { COLOR: null }],
        },
    ],
};
exports.armyOfOne = {
    PARENT: ["genericTank"],
    LABEL: "Army Of One",
    DANGER: 9,
    SKILL_CAP: [31, 31, 31, 31, 31, 31, 31, 31, 31, 31],
    BODY: {
        SPEED: 0.5 * base.SPEED,
        FOV: 1.8 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [21, 19, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.destroy, g.destroy, g.destroy, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.doublereload, g.doublereload, g.doublereload, g.doublereload]),
                TYPE: "armyOfOneBullet",
            },
        },{
            POSITION: [21, 11, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.destroy, g.destroy, g.destroy, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.sniper, g.doublereload, g.doublereload, g.doublereload, g.doublereload, g.fake]),
                TYPE: "bullet",
            },
        }
    ],
};
exports.godbasic = {
    PARENT: ["genericTank"],
    LABEL: "God Basic",
    SKILL_CAP: [31, 31, 31, 31, 31, 31, 31, 31, 31, 31],
    SKILL: [ 31, 31, 31, 31, 31, 31, 31, 31, 31, 31 ],
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
exports.maximumOverdrive = {
    PARENT: ["overdrive"],
    LABEL: "Maximum Overdrive",
    SKILL_CAP: Array(10).fill(255),
    SKILL: Array(10).fill(255),
};
exports.weirdAutoBasic = {
    PARENT: "genericTank",
    LABEL: "Weirdly defined Auto-Basic",
    GUNS: [{
        POSITION: {
            LENGTH: 20,
            WIDTH: 10
        },
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, [0.8, 0.8, 1.5, 1, 0.8, 0.8, 0.9, 1, 1, 1, 1, 2, 1]]),
            TYPE: "bullet"
        },
    }],
    TURRETS: [{
        POSITION: {
            ANGLE: 180,
            LAYER: 1
        },
        TYPE: ["autoTurret", {
            CONTROLLERS: ["nearestDifferentMaster"],
            INDEPENDENT: true
        }]
    }]
};

exports.levels = {
    PARENT: ["menu"],
    LABEL: "Level Switcher",
    UPGRADES_TIER_0: []
};
for (let i = 0; i < 15; i++) {
    let LEVEL = i * c.TIER_MULTIPLIER;
    exports["level" + LEVEL] = {
        PARENT: ["levels"],
        LEVEL,
        LABEL: "Level " + LEVEL
    };
    exports.levels.UPGRADES_TIER_0.push("level" + LEVEL);
}

exports.teams = {
    PARENT: ["menu"],
    LABEL: "Team Switcher",
    UPGRADES_TIER_0: []
};
for (let i = 1; i <= 8; i++) {
    let TEAM = i;
    exports["Team" + TEAM] = {
        PARENT: ["teams"],
        TEAM: -TEAM,
        COLOR: getTeamColor(-TEAM),
        LABEL: "Team " + TEAM
    };
    exports.teams.UPGRADES_TIER_0.push("Team" + TEAM);
}
exports['Team' + TEAM_ROOM] = {
    PARENT: ["teams"],
    TEAM: TEAM_ROOM,
    COLOR: 3,
    LABEL: "Room Team"
};
exports['Team' + TEAM_ENEMIES] = {
    PARENT: ["teams"],
    TEAM: TEAM_ENEMIES,
    COLOR: 3,
    LABEL: "Enemies Team"
};
exports.teams.UPGRADES_TIER_0.push('Team' + TEAM_ROOM, 'Team' + TEAM_ENEMIES);

exports.addons = {
    PARENT: "menu",
    LABEL: "Addon Entities",
    UPGRADES_TIER_0: []
};

//AI GENERATED TANK
exports.randomTankTemp = {
    PARENT: ["genericTank"],
    LABEL: "Gnink",
    GUNS: [
/* {
POSITION: [ 17.28, 9, 1.2, 12, 0, 0, 0],
},{
POSITION: [ 4.905, 10.799999999999999, 1.44, 17.28, 0, 0, 0],
PROPERTIES: {
SHOOT_SETTINGS: combineStats([ g.trap, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.mini, g.bent, g.twin]),
TYPE: "trap", //
}, },6*/ {
            POSITION: [14.280000000000001, 9, 1.2, 6, 2, 15, 1 / 6],
        }, {
            POSITION: [4.905, 10.799999999999999, 1.44, 20.28, 2, 15, 1 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.mini, g.twin, g.bent]),
                TYPE: "trap", // dam: 1.265625, str: 0.5, pen: 1, rld: 46656
            },
        }, {
            POSITION: [4.905, 10.799999999999999, 1.44, 18.28, 2, 15, 3 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.bent, g.mini, g.twin]),
                TYPE: "trap", // dam: 0.29900390624999995, str: 0.22275000000000003, pen: 1, rld: 2309472
            },
        }, {
            POSITION: [4.905, 10.799999999999999, 1.44, 16.28, 2, 15, 5 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.bent, g.mini, g.twin]),
                TYPE: "trap", // dam: 1.265625, str: 0.5, pen: 1, rld: 46656
            },
        }, {
            POSITION: [14.280000000000001, 9, 1.2, 6, -2, -15, 0 / 6],
        }, {
            POSITION: [4.905, 10.799999999999999, 1.44, 20.28, -2, -15, 0 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.bent, g.mini, g.twin]),
                TYPE: "trap", // dam: 1.265625, str: 0.5, pen: 1, rld: 46656
            },
        }, {
            POSITION: [4.905, 10.799999999999999, 1.44, 18.28, -2, -15, 2 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.bent, g.mini, g.twin]),
                TYPE: "trap", // dam: 0.29900390624999995, str: 0.22275000000000003, pen: 1, rld: 2309472
            },
        }, {
            POSITION: [4.905, 10.799999999999999, 1.44, 16.28, -2, -15, 4 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.bent, g.mini, g.twin]),
                TYPE: "trap", // dam: 1.265625, str: 0.5, pen: 1, rld: 46656
            },
        }, {
            POSITION: [17.28, 9, 1.2, 12, 0, 0, 4 / 6],
        }, {
            POSITION: [4.905, 10.799999999999999, 1.44, 29.28, 0, 0, 4 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.bent, g.mini, g.twin]),
                TYPE: "trap", // dam: 1.265625, str: 0.5, pen: 1, rld: 46656
            },
        }, {
            POSITION: [4.905, 10.799999999999999, 1.44, 27.28, 0, 0, 6 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.bent, g.twin, g.mini]),
                TYPE: "trap", // dam: 0.29900390624999995, str: 0.22275000000000003, pen: 1, rld: 2309472
            },
        }, {
            POSITION: [4.905, 10.799999999999999, 1.44, 25.28, 0, 0, 8 / 6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.blank, g.bent, g.twin, g.mini]),
                TYPE: "trap", // dam: 1.265625, str: 0.5, pen: 1, rld: 46656
            },
        }, {
            POSITION: [8.64, 9, -1.3380000000000005, 3.3419999999999996, 0, 0, 0],
        },
    ],
    BODY: {
        SPEED: 0.9 * base.SPEED,
        FOV: 1.15 * base.FOV,
    },
};

// Mini Fort-Clock
exports.miniFortClockGun = {
    PARENT: ["genericTank"],
    LABEL: "Gear",
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: [["spin", { independent: true, speed: -0.01 }],],
    COLOR: -1,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.assass, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.assass, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.assass, g.twin]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.miniFortClockGun2 = {
    PARENT: ["genericTank"],
    LABEL: "Gear",
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: [["spin", { independent: true, speed: 0.025 }],],
    COLOR: -1,
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.assass, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 120, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.assass, g.twin]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 240, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.assass, g.twin]),
                TYPE: "bullet",
            },
        },
    ],
};

exports.miniFortClock = {
    PARENT: ["genericTank"],
    LABEL: "Mini Fort-Clock",
    DANGER: 9,
    FACING_TYPE: "autospin",
    BODY: {
        SPEED: 0.7 * base.SPEED,
        ACCELERATION: 0.5 * base.ACCEL,
        FOV: 1.15 * base.FOV,
        DAMAGE: 2 * base.DAMAGE
    },
    SHAPE: 6,
    SIZE: 20,
    GUNS: [],
    TURRETS: [],
};
for (let i = 0; i < 3; i++) {
    exports.miniFortClock.GUNS.push(
    );
    exports.miniFortClock.TURRETS.push(
     {
        POSITION: [8, 9, 0, 360 / 3 * (i), 360, 0],
        TYPE: [
            "miniFortClockGun",
        ],
    },
    {
        POSITION: [8, 9, 0, 360 / 3 * (i + 0.5), 360, 0],
        TYPE: [
            "miniFortClockGun2",
        ],
    },
    {
        POSITION: [5, 7, 0, 360 / 3 * (i + 0.25), 140, 1],
        TYPE: [
            "phantomgun",
        ],
        },
    {
        POSITION: [5, 7, 0, 360 / 3 * (i + 0.75), 140, 1],
        TYPE: [
            "phantomgun",
        ],
    },
    );
};

//Cool Shit

exports.coolShit = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: "Cool Shit™",
    BODY: {
        SPEED: 0.85 * base.SPEED,
        FOV: 1.4 * base.FOV,
    },
    GUNS: [
        {
            POSITION: [2.5, 60, 0.8, 4.5, -28, 90, 0],
        },
        {
            POSITION: [2.5, 60, 0.8, 4.5, 28, -90, 0],
        },
        {
            POSITION: [1.25, 8.5, 1, 15.5 + 4.5 * 7, 0, 0, 1 + 0.04 * 8], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniper, g.sniper, g.assass, g.pound, g.doublereload, g.doublereload, g.fake]), TYPE: "casing" },
        },
        {
            POSITION: [1.25, 8.5, 1, 15.5 + 4.5 * 6, 0, 0, 1 + 0.04 * 7], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniper, g.sniper, g.assass, g.pound, g.doublereload, g.doublereload, g.fake]), TYPE: "casing" },
        },
        {
            POSITION: [1.25, 8.5, 1, 15.5 + 4.5 * 5, 0, 0, 1 + 0.04 * 6], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniper, g.sniper, g.assass, g.pound, g.doublereload, g.doublereload, g.fake]), TYPE: "casing" },
        },
        {
            POSITION: [1.25, 8.5, 1, 15.5 + 4.5 * 4, 0, 0, 1 + 0.04 * 5], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniper, g.sniper, g.assass, g.pound, g.doublereload, g.doublereload, g.fake]), TYPE: "casing" },
        },
        {
            POSITION: [1.25, 8.5, 1, 15.5 + 4.5 * 3, 0, 0, 1 + 0.04 * 4], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniper, g.sniper, g.assass, g.pound, g.doublereload, g.doublereload, g.fake]), TYPE: "casing" },
        },
        {
            POSITION: [1.25, 8.5, 1, 15.5 + 4.5 * 2, 0, 0, 1 + 0.04 * 3], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniper, g.sniper, g.assass, g.pound, g.doublereload, g.doublereload, g.fake]), TYPE: "casing" },
        },
        {
            POSITION: [1.25, 8.5, 1, 15.5 + 4.5 * 1, 0, 0, 1 + 0.04 * 2], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniper, g.sniper, g.assass, g.pound, g.doublereload, g.doublereload, g.fake]), TYPE: "casing" },
        },
        {
            POSITION: [1.25, 8.5, 1, 15.5, 0, 0, 1 + 0.04 * 1], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniper, g.sniper, g.assass, g.pound, g.doublereload, g.doublereload, g.fake]), TYPE: "casing" },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [1.25, 8.5, 1, 11, 0, 0, 1 + 0.04 * 0 ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.sniper, g.sniper, g.assass, g.pound, g.doublereload, g.doublereload]),
                TYPE: "bullet",
            },
        },
    ],
};

// Ion Cannon

exports.ionCannon_explosion = {
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
                SHOOT_SETTINGS: combineStats([g.basic, [1, 0.0000001, 0.0000001, 1, 3, 1, 1, 0.00000001, 0.0000001, 0.065, 1, 1, 1],]),
                TYPE: ["bullet", { LABEL: "Explosion", GROW: 2.5, PERSISTS_AFTER_DEATH: true, }],
                AUTOFIRE: true,
            },
        },

    ],
};
exports.ionBullet = {
    PARENT: ["bullet"],
    NEXT_FORM: "ionCannon_explosion",
    BORDERLESS: true,
    DRAW_FILL: false
};
exports.IonCannon = {
    PARENT: ["genericTank"],
    DANGER: 7,
    LABEL: "Ion Cannon™",
    BODY: {
        SPEED: 0.85 * base.SPEED,
        FOV: 1.4 * base.FOV,
    },
    SKILL_CAP: [ dfltskl, dfltskl, dfltskl, dfltskl, 0, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl ],
    GUNS: [
        {
            POSITION: [3, 40, 0.8, 4.5, -15, 90, 0],
            PROPERTIES: {
                COLOR: 17
            },
        },
        {
            POSITION: [3, 40, 0.8, 4.5, 15, -90, 0],
            PROPERTIES: {
                COLOR: 17
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20, 1.5, 1, 11, 0, 0, 1 + 0.04 * 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.ion]),
                TYPE: "ionBullet",
            },
        },
        {
            /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [20, 1.5, 1, 11, 0, 0, 1 + 0.04 * 0],
            PROPERTIES: {
                COLOR: 17
            },
        }
    ],
};

// Inferius Ovum

exports.concatinator3gun = {
    PARENT: ["autoTankGun"],
    LABEL: 'Concatinator',
    COLOR: -1,
    BODY: {
        FOV: 2
    },
    GUNS: [{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15 - 0.6, 5, 1, -1.5, -5, 0, 0.45,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda, g.arquebus, g.arty, g.twin, g.flank, g.auto]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [13.5 - 0.6, 7.5, 1, -1.5, -5, 0, 0.6,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda, g.arquebus, g.arty, g.twin, g.flank, g.auto]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [12 - 0.6, 10, 1, -1.5, -5, 0, 0.75,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda, g.arquebus, g.arty, g.twin, g.flank, g.auto]),
            TYPE: "bullet",
        },
    }, { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15 - 0.6, 5, 1, -1.5, 5, 0, 0.45,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda, g.arquebus, g.arty, g.twin, g.flank, g.auto]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [13.5 - 0.6, 7.5, 1, -1.5, 5, 0, 0.6,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda, g.arquebus, g.arty, g.twin, g.flank, g.auto]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [12 - 0.6, 10, 1, -1.5, 5, 0, 0.75,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda, g.arquebus, g.arty, g.twin, g.flank, g.auto]),
            TYPE: "bullet",
        },
    }, { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17 + 1.3 * 4, 8.5 - 1.5 * 4, 1, 0, 0, 0, 0,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.hunter2, g.preda, g.arquebus, g.arty, g.twin, g.flank, g.auto]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [17 + 1.3 * 3, 8.5 - 1.5 * 3, 1, 0, 0, 0, 0.1,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.hunter2, g.preda, g.arquebus, g.arty, g.twin, g.flank, g.auto]),
            TYPE: "bullet",
        },
    }, { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [17 + 1.3 * 2, 8.5 - 1.5 * 2, 1, 0, 0, 0, 0.2,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda, g.arquebus, g.arty, g.twin, g.flank, g.auto]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [17 + 1.3 * 1, 8.5 - 1.5 * 1, 1, 0, 0, 0, 0.3,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda, g.arquebus, g.arty, g.flank, g.auto]),
            TYPE: "bullet",
        },
    }, {
        POSITION: [17, 8.5, 1, 0, 0, 0, 0.4,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda, g.arquebus, g.arty, g.flank, g.auto]),
            TYPE: "bullet",
        },
    }, {/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [8, 3.4, 1.5, 8, 3.5, 0, 0,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sniper, g.gunner, g.arty, g.flank, g.auto]),
            TYPE: "bullet",
            LABEL: 'Gatling Gun'
        },
    }, {
        POSITION: [8, 3.4, 1.5, 8, -3.5, 0, 0.5,],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sniper, g.gunner, g.arty, g.flank, g.auto]),
            TYPE: "bullet",
            LABEL: 'Gatling Gun'
        },
    },
    ],
};
exports.huntlet3gun = {
    PARENT: ["autoTankGun"],
    LABEL: "Huntlet",
    BODY: {
        FOV: 2,
    },
    COLOR: -1,
    GUNS: [
        {
            POSITION: [14, 5, 1, 0, 4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.sniper, g.hunter, g.flank, g.auto]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [14, 5, 1, 0, -4, 0, 0.5],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.sniper, g.hunter, g.flank, g.auto]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [17, 5, 1.2, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.sniper, g.hunter, g.flank, g.auto]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 8, 1, 0, 5, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.sniper, g.hunter, g.flank, g.auto]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [12, 8, 1, 0, -5, 0, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.sniper, g.hunter, g.flank, g.auto]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [15, 8, 1.2, 0, 0, 0, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.sniper, g.hunter, g.flank, g.auto]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.OPhunter3gun = {
    PARENT: ["autoTankGun"],
    LABEL: "Predator",
    BODY: {
        FOV: 2,
    },
    GUNS: [
        {
            POSITION: [24.25, 4, 1, 0, 0, 0, 0], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.hunter2, g.hunter2, g.hunter2, g.hunter2, g.preda, g.flank, g.auto, g.lessreload]), TYPE: "bullet", },
        },
        {
            POSITION: [23, 6, 1, 0, 0, 0, 0.05], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.hunter2, g.hunter2, g.hunter2, g.preda, g.flank, g.auto, g.lessreload]), TYPE: "bullet", },
        },
        {
            POSITION: [21.5, 8, 1, 0, 0, 0, 0.1], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.hunter2, g.hunter2, g.preda, g.flank, g.auto, g.lessreload]), TYPE: "bullet", },
        },
        {
            POSITION: [20, 10, 1, 0, 0, 0, 0.15], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.hunter2, g.preda, g.flank, g.auto, g.lessreload]), TYPE: "bullet", },
        },
        {
            POSITION: [18, 12, 1, 0, 0, 0, 0.2], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda, g.flank, g.auto, g.lessreload]), TYPE: "bullet", },
        },
        {
            POSITION: [16, 14, 1, 0, 0, 0, 0.25], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda, g.flank, g.auto, g.lessreload]), TYPE: "bullet", },
        },
        {
            POSITION: [14, 16, 1, 0, 0, 0, 0.3], PROPERTIES: { SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda, g.flank, g.auto, g.lessreload]), TYPE: "bullet", },
        },
    ],
};
exports.inferiusOvum_main = {
    PARENT: ["genericTank"],
    LABEL: "Panultimate Dual",
    BODY: {
        FOV: 2
    },
    //CONTROLLERS: ['nearestDifferentMaster'],
    //COLOR: -1,
    HAS_NO_RECOIL: true,
    GUNS: [{
        POSITION: [14, 2, 1, 0, 7, 0, 2 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload, g.auto]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [13, 3, 1, 0, 7, 0, 9 / 12],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload, g.auto]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [12, 4, 1, 0, 7, 0, 5 / 6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload, g.auto]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [11, 5, 1, 0, 7, 0, 11 / 12],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.half_reload, g.less_reload, g.auto]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 2, 1, 0, 4.75, 0, 1 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload, g.auto]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [16, 3, 1, 0, 4.75, 0, 5 / 12],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload, g.auto]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [15, 4, 1, 0, 4.75, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload, g.auto]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [14, 5, 1, 0, 4.75, 0, 7 / 12],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.half_reload, g.less_reload, g.auto]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [20, 2, 1, 0, 2.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload, g.auto]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [19, 3, 1, 0, 2.5, 0, 1 / 12],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload, g.auto]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [18, 4, 1, 0, 2.5, 0, 1 / 6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload, g.auto]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 5, 1, 0, 2.5, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.half_reload, g.less_reload, g.auto]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [14, 2, 1, 0, -7, 0, 2 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload, g.auto]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [13, 3, 1, 0, -7, 0, 9 / 12],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload, g.auto]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [12, 4, 1, 0, -7, 0, 5 / 6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload, g.auto]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [11, 5, 1, 0, -7, 0, 11 / 12],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.half_reload, g.less_reload, g.auto]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 2, 1, 0, -4.75, 0, 1 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload, g.auto]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [16, 3, 1, 0, -4.75, 0, 5 / 12],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload, g.auto]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [15, 4, 1, 0, -4.75, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload, g.auto]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [14, 5, 1, 0, -4.75, 0, 7 / 12],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.half_reload, g.less_reload, g.auto]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [20, 2, 1, 0, -2.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload, g.auto]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [19, 3, 1, 0, -2.5, 0, 1 / 12],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload, g.auto]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [18, 4, 1, 0, -2.5, 0, 1 / 6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload, g.auto]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 5, 1, 0, -2.5, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.half_reload, g.less_reload, g.auto]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [14.75, 4.4, 1.5, 8, 0, 0, 1 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.half_reload, g.half_reload, g.less_reload, g.auto]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [14.25, 5.2, 1.5, 8, 0, 0, 1 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.half_reload, g.half_reload, g.less_reload, g.auto]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [13.75, 6, 1.5, 8, 0, 0, 2 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.half_reload, g.half_reload, g.less_reload, g.auto]),
            TYPE: "bullet"
        }
    }]
};
exports.inferiusOvum_eggAvian = {
    PARENT: ["minion"],
    LABEL: "Egg Avian",
    BODY: {
        ACCELERATION: 1.1,
        FOV: 1.5,
        SPEED: 1.2
    },
    GUNS: [
        {
            POSITION: [18, 8, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.tonsmorrecoil, g.minion]),
                TYPE: "bullet",
                LABEL: "Front",
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 150, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil, g.minion, g.muchmorerecoil]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [16, 8, 1, 0, 0, 210, 0.1],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil, g.minion, g.muchmorerecoil]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
        {
            POSITION: [18, 8, 1, 0, 0, 180, 0.6],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil, g.minion, g.muchmorerecoil]),
                TYPE: "bullet",
                STAT_CALCULATOR: gunCalcNames.thruster,
            },
        },
    ],
};
exports.tripletAutoGun3 = {
    LABEL: "Triplet",
    BODY: {
        FOV: 1.05
    },
    CONTROLLERS: ['nearestDifferentMaster'],
    COLOR: 16,
    HAS_NO_RECOIL: true,
    GUNS: [{
        POSITION: [16.5, 8, 1, 0, 5.4, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.half_reload, g.bitlesspower, g.bitlesspower, g.auto, g.flank]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [16.5, 8, 1, 0, -5.4, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.half_reload, g.bitlesspower, g.bitlesspower, g.auto, g.flank]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [18.5, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.half_reload, g.bitlesspower, g.bitlesspower, g.auto, g.flank]),
            TYPE: "bullet"
        }
    }]
};
exports.ek0Minion = {
    PARENT: ["minion"],
    LABEL: "EK-0",
    BODY: {
        SPEED: 0.75,
        SHIELD: base.SHIELD * 0.25
    },
    FACING_TYPE: "autospin",
    DRAW_HEALTH: true,
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
        {
            POSITION: [11, 0, 0, 0, 360, 1],
            TYPE: "tripletAutoGun3",
        },
    ],
    GUNS: [],
};
exports.inferiusOvum_miniEggCannon = {
    PARENT: ["minion"],
    LABEL: "Mini Egg Cannon",
    BODY: {
        FOV: 2,
        SPEED: 1,
    },
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
                    g.minion
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
                    g.minion
                ]),
                TYPE: "bullet",
            },
        },
        {
            POSITION: [18, 16, 1, 0, 0, 0, 0.3],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda, g.minion]),
                TYPE: "bullet",
            },
        },
    ],
};
exports.inferiusOvum = {
    PARENT: ["genericTank"],
    LABEL: "Inferius Ovum",
    DANGER: 10,
    BODY: {
        DENSITY: base.DENSITY * 2,
        SPEED: base.SPEED * 0.6,
        ACCELERATION: base.ACCEL * 0.75,
        HEALTH: base.HEALTH * 4.5
    },
    SIZE: 36,
    FACING_TYPE: "spinSlowly",
    //IS_SMASHER: true,
    SKILL_CAP: [smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl],
    GUNS: [],
    TURRETS: [
        {
            POSITION: [22, 0, 0, 0, 0, 1],
            TYPE: ["smasherBody", { COLOR: 9, SHAPE: 6, MIRROR_MASTER_ANGLE: true }],
        },
        {
            POSITION: [20, 0, 0, 0, 0, 1],
            TYPE: ["genericEntity", { COLOR: -1, MIRROR_MASTER_ANGLE: true }],
        },
    ],
};
for (let i = 0; i < 6; i++) {
    if (i == 0) {
        exports.inferiusOvum.GUNS.push(
            {
                POSITION: [3, 4.5, 1, 10, 0, 360 / 6 * (i), 0],
            },
            {
                POSITION: [1, 5.5, 1, 13, 0, 360 / 6 * (i), 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.factory, { size: 1.3, health: 1.5 }]),
                    TYPE: "inferiusOvum_miniEggCannon",
                    STAT_CALCULATOR: gunCalcNames.drone,
                    AUTOFIRE: true,
                    SYNCS_SKILLS: true,
                    MAX_CHILDREN: 2
                },
            },
            {
                POSITION: [12, 5.5, 1, 0, 0, 360 / 6 * (i), 0],
            },
        );
    }
    else if (i == 3) {
        exports.inferiusOvum.GUNS.push(
            {
                POSITION: [3, 4.5, 1, 10, 0, 360 / 6 * (i), 0],
            },
            {
                POSITION: [1, 5.5, 1, 13, 0, 360 / 6 * (i), 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.factory, { size: 1.6, health: 1.5 }]),
                    TYPE: "ek0Minion",
                    STAT_CALCULATOR: gunCalcNames.drone,
                    AUTOFIRE: true,
                    SYNCS_SKILLS: true,
                    MAX_CHILDREN: 2
                },
            },
            {
                POSITION: [12, 5.5, 1, 0, 0, 360 / 6 * (i), 0],
            },
        );
    }
    else {
        exports.inferiusOvum.GUNS.push(
            {
                POSITION: [3, 4.5, 1, 10, 0, 360 / 6 * (i), 0],
            },
            {
                POSITION: [1, 5.5, 1, 13, 0, 360 / 6 * (i), 0],
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.factory]),
                    TYPE: "inferiusOvum_eggAvian",
                    STAT_CALCULATOR: gunCalcNames.drone,
                    AUTOFIRE: true,
                    SYNCS_SKILLS: true,
                    MAX_CHILDREN: 1
                },
            },
            {
                POSITION: [12, 5.5, 1, 0, 0, 360 / 6 * (i), 0],
            },
        );
    }
    exports.inferiusOvum.TURRETS.push(
        {
            POSITION: [7.5, 10, 0, 360 / 6 * (i + 0.5), 120, 0],
            TYPE: [
                "OPhunter3gun",
            ],
        },
    );
    if (i % 2 == 0) {
        exports.inferiusOvum.TURRETS.push(
            {
                POSITION: [5, 7, 0, 360 / 6 * (i + 0.5), 120, 1],
                TYPE: [
                    "concatinator3gun",
                ],
            },
        );
    }
    else {
        exports.inferiusOvum.TURRETS.push(
            {
                POSITION: [4, 7.5, 0, 360 / 6 * (i + 0.5), 120, 1],
                TYPE: [
                    "huntlet3gun",
                ],
            },
        );
    }
};
exports.inferiusOvum.TURRETS.push(
    {
        POSITION: [6.5, 0, 0, 0, 360, 1],
        TYPE: [
            "inferiusOvum_main",
            {
                COLOR: -1,
                BODY: {
                    FOV: 2
                },
                CONTROLLERS: ['nearestDifferentMaster'],
            }
        ],
    },
);

// EK-6 top
exports.ek6Top = {
    PARENT: ["genericTank"],
    LABEL: "Panultimate Dual",
    BODY: {
        FOV: 1.2
    },
    //CONTROLLERS: ['nearestDifferentMaster'],
    //COLOR: -1,
    HAS_NO_RECOIL: true,
    GUNS: [{
        POSITION: [14, 2, 1, 0, 7, 0, 2 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [13, 3, 1, 0, 7, 0, 9 / 12],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [12, 4, 1, 0, 7, 0, 5 / 6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [11, 5, 1, 0, 7, 0, 11 / 12],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.half_reload, g.less_reload]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 2, 1, 0, 4.75, 0, 1 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [16, 3, 1, 0, 4.75, 0, 5 / 12],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [15, 4, 1, 0, 4.75, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [14, 5, 1, 0, 4.75, 0, 7 / 12],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.half_reload, g.less_reload]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [20, 2, 1, 0, 2.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [19, 3, 1, 0, 2.5, 0, 1 / 12],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [18, 4, 1, 0, 2.5, 0, 1 / 6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 5, 1, 0, 2.5, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.half_reload, g.less_reload]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [14, 2, 1, 0, -7, 0, 2 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [13, 3, 1, 0, -7, 0, 9 / 12],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [12, 4, 1, 0, -7, 0, 5 / 6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [11, 5, 1, 0, -7, 0, 11 / 12],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.half_reload, g.less_reload]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 2, 1, 0, -4.75, 0, 1 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [16, 3, 1, 0, -4.75, 0, 5 / 12],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [15, 4, 1, 0, -4.75, 0, .5],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [14, 5, 1, 0, -4.75, 0, 7 / 12],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.half_reload, g.less_reload]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [20, 2, 1, 0, -2.5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [19, 3, 1, 0, -2.5, 0, 1 / 12],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [18, 4, 1, 0, -2.5, 0, 1 / 6],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.dual2, g.half_reload, g.less_reload]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [17, 5, 1, 0, -2.5, 0, .25],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.half_reload, g.less_reload]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [14.75, 4.4, 1.5, 8, 0, 0, 1 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.half_reload, g.half_reload, g.less_reload]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [14.25, 5.2, 1.5, 8, 0, 0, 1 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.half_reload, g.half_reload, g.less_reload]),
            TYPE: "bullet"
        }
    }, {
        POSITION: [13.75, 6, 1.5, 8, 0, 0, 2 / 3],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.half_reload, g.half_reload, g.less_reload]),
            TYPE: "bullet"
        }
    }]
};

// DEV "UPGRADE PATHS"
exports.developer.UPGRADES_TIER_0 = ["tanks", "bosses", "tools", "addons"];
    exports.tanks.UPGRADES_TIER_0 = ["basic", "healer", "specialTanks", "legacyTanks", "funTanks", "testingTanks"];
	exports.specialTanks.UPGRADES_TIER_0 = ["arenaCloser", "bases", "mothership"];
        exports.bases.UPGRADES_TIER_0 = ["baseProtector", "dominators", "sanctuaries", "antiTankMachineGun"];
                exports.dominators.UPGRADES_TIER_0 = ["dominator", "destroyerDominator", "gunnerDominator", "trapperDominator"];
                exports.sanctuaries.UPGRADES_TIER_0 = [];
        exports.legacyTanks.UPGRADES_TIER_0 = ["weirdSpike", "oldBentBoomer", "quadBuilder", "master", "blunderbuss", "oldRimfire", "oldSpreadshot", "oldCommander", "autoTrapper", "prodigy", "mender", "tetraGunner", "corvette", "whirlwind", "flail"];
        exports.funTanks.UPGRADES_TIER_0 = ["florr_tank", "vanquisher", "armyOfOne", "godbasic", "maximumOverdrive", "mummifier", "auraBasic", "auraHealer", "weirdAutoBasic", "ghoster", "switcheroo", "tracker3", "randomTankTemp", "miniFortClock", "coolShit", "inferiusOvum", "ek6Top"];
        exports.testingTanks.UPGRADES_TIER_0 = ["diamondShape", "rotatedTrap", "colorMan", "miscTest", "mmaTest", ["assassin", "dreadOfficialV1"], "IonCannon"];

    exports.bosses.UPGRADES_TIER_0 = ["sentries", "elites", "mysticals", "nesters", "rogues", "terrestrials", "celestials", "eternals", "tieredBosses", "diepBosses", "miscBosses", "laggyBosses", "devBosses"];
        exports.sentries.UPGRADES_TIER_0 = ["sentrySwarm", "sentryGun", "sentryTrap", "shinySentrySwarm", "shinySentryGun", "shinySentryTrap"];
        exports.elites.UPGRADES_TIER_0 = ["eliteDestroyer", "eliteGunner", "eliteSprayer", "eliteBattleship", "eliteSpawner", "eliteTrapGuard", "eliteSpinner", "eliteSkimmer", "legionaryCrasher", "sprayerLegion", "legionaryCrasherMK3"];
        exports.mysticals.UPGRADES_TIER_0 = ["sorcerer", "summoner", "enchantress", "exorcistor"];
        exports.nesters.UPGRADES_TIER_0 = ["nestKeeper", "nestWarden", "nestGuardian"];
        exports.rogues.UPGRADES_TIER_0 = ["roguePalisade", "rogueArmada", "alviss", "tyr", "fiolnir"];
        exports.terrestrials.UPGRADES_TIER_0 = ["ares", "gersemi", "ezekiel", "eris", "selene"];
        exports.celestials.UPGRADES_TIER_0 = ["paladin", "freyja", "zaphkiel", "nyx", "theia"];
        exports.eternals.UPGRADES_TIER_0 = ["ragnarok", "kronos"];
        exports.tieredBosses.UPGRADES_TIER_0 = ["srkX"];
            exports.srkX.UPGRADES_TIER_0 = ["srk1"];
        exports.diepBosses.UPGRADES_TIER_0 = ["guardianOfThePentagons","defender"];
        exports.miscBosses.UPGRADES_TIER_0 = ["hypernovaBoss", "fortClock", "heartbreaker", "luminohelix"];
        exports.laggyBosses.UPGRADES_TIER_0 = ["laggyBosses2"];
            exports.laggyBosses2.UPGRADES_TIER_0 = ["xmcUpgrade"];
                exports.xmcUpgrade.UPGRADES_TIER_0 = ["xmc37650000"];
        exports.devBosses.UPGRADES_TIER_0 = ["taureonBoss", "tgsBoss"];

    exports.tools.UPGRADES_TIER_0 = ["spectator", "levels", "teams", "eggGenerator"];


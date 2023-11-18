module.exports = {
    SPAWN_CLASS: ["node_dreaded", "base_dreaded"],

    //LEVEL_CAP: 4096,
    LEVEL_SKILL_POINT_FUNCTION: level => {
        //if (level < 2) return 0;
        if (level <= 60) return 1;
        if (level <= 280 && level & 3 == 1) return 1;
        return 0;
    },

    TIER_MULTIPLIER: 12,
};
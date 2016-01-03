if (b4w.module_check("level_02_config"))
    throw "Failed to register module: level_02_config";

b4w.register("level_02_config", function(exports, require) {

exports.LEVEL_NAME = "dungeon";

exports.CHAR_DEF_POS = new Float32Array([0, 0.1, 7]);

// obelisks
exports.NUM_OBELISKS = 4;
exports.OBELISK_NUM_GEMS = 5;
exports.OBELISK_GEM_HEALTH = 3;
exports.OBELISKS_GEMS_NAME = ["BG", "GG", "RG", "PG"];
exports.FLOOR_MAGIC_NAME = "floor_magic";

// gems
exports.GEMS_EMPTIES = ["gem_0", "gem_1", "gem_2", "gem_3", "gem_multi"];
exports.GEMS_NAMES   = ["gem_B", "gem_P", "gem_R", "gem_G", "gem_M"];

exports.GOLEMS_EMPTIES = ["golem_lava", "golem_lava.001", "golem_stone", "golem_stone.001"];

exports.GOLEM_SPAWN_POINTS = ["golem_spawn", "golem_spawn.001", "golem_spawn.002", "golem_spawn.003",
                              "golem_spawn.004", "golem_spawn.005", "golem_spawn.006", "golem_spawn.007",
                              "golem_spawn.008", "golem_spawn.009", "golem_spawn.010", "golem_spawn.011",
                              "golem_spawn.012", "golem_spawn.013", "golem_spawn.014", "golem_spawn.015"];

exports.GOLEM_PATROL_POINTS = ["golem_patrol",     "golem_patrol.001", "golem_patrol.002", "golem_patrol.003",
                               "golem_patrol.004", "golem_patrol.005", "golem_patrol.006", "golem_patrol.007",
                               "golem_patrol.008", "golem_patrol.009", "golem_patrol.010", "golem_patrol.011",
                               "golem_patrol.012", "golem_patrol.013", "golem_patrol.014", "golem_patrol.015",
                               "golem_patrol.016", "golem_patrol.017", "golem_patrol.018", "golem_patrol.019",
                               "golem_patrol.020", "golem_patrol.021", "golem_patrol.022", "golem_patrol.023",
                               "golem_patrol.024", "golem_patrol.025", "golem_patrol.026", "golem_patrol.027",
                               "golem_patrol.028", "golem_patrol.029", "golem_patrol.030", "golem_patrol.031"];

exports.GOLEM_PATROL_MAP = [[1, 7, 11], [0, 2, 3], [1, 4], [1, 8],
                            [2, 6], [4, 6, 31], [4, 5, 7], [0, 6, 30],
                            [3, 9, 10], [8,10,11], [8, 9, 12], [0, 9, 15],
                            [10, 13, 14], [12, 14, 15], [12, 13, 16], [11, 13, 18],
                            [14, 17, 19], [16, 18, 19], [15, 17, 22], [16, 17, 20],
                            [19, 21], [20, 22, 23], [18, 21, 26], [20, 21, 24],
                            [23, 25, 27], [24, 26, 27], [22, 25, 30], [24, 25, 28],
                            [27, 29], [28, 30, 31], [7, 26, 29], [29, 5]
                            ];
})

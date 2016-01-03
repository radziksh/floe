if (b4w.module_check("level_01_config"))
    throw "Failed to register module: level_01_config";

b4w.register("level_01_config", function(exports, require) {

exports.LEVEL_NAME = "volcano";

exports.CHAR_DEF_POS = new Float32Array([0, 2, 0]);

// obelisks
exports.NUM_OBELISKS = 5;
exports.OBELISK_NUM_GEMS = 1;
exports.OBELISK_GEM_HEALTH = 3;
exports.OBELISKS_GEMS_NAME = ["BG", "PG", "RG", "GG", "YG"];

// gems
exports.GEMS_EMPTIES = ["gem_0", "gem_1", "gem_2", "gem_3", "gem_4", "gem_multi"];
exports.GEMS_NAMES   = ["gem_B", "gem_P", "gem_R", "gem_G", "gem_Y", "gem_M"];

// rocks
exports.ROCK_SPEED = 8;
exports.ROCK_DAMAGE = 20;
exports.ROCK_DAMAGE_RADIUS = 3.0;
exports.ROCK_RAY_LENGTH = 40;
exports.ROCK_FALL_DELAY = 0.5;

exports.ROCK_HIT_SPEAKERS = ["rock_hit_01", "rock_hit_02", "rock_hit_03"];
exports.ROCK_EMPTIES = ["lava_rock","lava_rock.001"];
exports.ROCK_NAMES = ["rock_01", "rock_02", "rock_03"];

exports.BURST_EMITTER_NAMES = ["burst_emitter_01", "burst_emitter_02",
                               "burst_emitter_03"];

exports.MARK_NAMES = ["mark_01", "mark_02", "mark_03"];

exports.ISLES_SHIELD_DUPLI_NAME_LIST = ["enviroment", "islands", "island_shield_0"];

exports.GOLEMS_EMPTIES = ["golem_lava", "golem_lava.001", "golem_lava.002"];

exports.GOLEM_SPAWN_POINTS = ["golem_spawn", "golem_spawn.011", "golem_spawn.010",
                              "golem_spawn.009", "golem_spawn.001", "golem_spawn.008",
                              "golem_spawn.002", "golem_spawn.006", "golem_spawn.007",
                              "golem_spawn.003", "golem_spawn.005", "golem_spawn.014",
                              "golem_spawn.013", "golem_spawn.004", "golem_spawn.012"];

exports.GOLEM_PATROL_POINTS = ["golem_spawn",     "golem_patrol",     "golem_patrol.001", "golem_patrol.002", "golem_patrol.003",
                               "golem_spawn.001", "golem_patrol.004", "golem_patrol.005", "golem_patrol.006", "golem_patrol.007",
                               "golem_spawn.002", "golem_patrol.008", "golem_patrol.009", "golem_patrol.010", "golem_patrol.011",
                               "golem_spawn.003", "golem_patrol.012", "golem_patrol.013", "golem_patrol.014", "golem_patrol.015",
                               "golem_spawn.004", "golem_patrol.016", "golem_patrol.017", "golem_patrol.018", "golem_patrol.019"];

exports.ISLAND_SPEAKER = "island_shield_grow";

exports.MUSIC_INTRO_SPEAKER = "level_01_bm_intro";
exports.MUSIC_END_SPEAKER = "level_01_bm_end";

exports.MUSIC_SPEAKERS = ["level_01_bm_loop_A",
                          "level_01_bm_loop_B",
                          "level_01_bm_loop_C",
                          "level_01_bm_loop_D",
                          "level_01_bm_percussive"];
})

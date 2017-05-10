"use strict"

if (b4w.module_check("game_example_main"))
    throw "Failed to register module: game_example_main";

b4w.register("game_example_main", function (exports, require) {

    var m_anim = require("animation");
    var m_app = require("app");
    var m_cfg = require("config");
    var m_main = require("main");
    var m_data = require("data");
    var m_ctl = require("controls");
    var m_cont = require("container");
    var m_input = require("input");
    var m_phy = require("physics");
    var m_cons = require("constraints");
    var m_scs = require("scenes");
    var m_trans = require("transform");
    var m_mouse = require("mouse");
    var m_cam = require("camera")
    var _character = null;
    var _character_rig = null;

    var ROT_SPEED = 3;
    var CAMERA_OFFSET = new Float32Array([0, 1.5, 0.4]);

    exports.init = function () {
        m_app.init({
            canvas_container_id: "canvas3d",
            callback: init_cb,
            physics_enabled: true,
            show_fps: true,
            autoresize: true,
            alpha: false
        });
    }

    function init_cb(canvas_elem, success) {

        if (!success) {
            console.log("b4w init failure");
            return;
        }

        var load_path = m_cfg.get_std_assets_path() +
            "tutorials/making_a_game_p1-3/game_example.json";
        m_data.load(load_path, load_cb);
    }

    function load_cb(data_id) {
        _character = m_scs.get_first_character();
        _character_rig = m_scs.get_object_by_dupli_name("character",
            "character_rig");
        setup_movement();
        //setup_rotation();
        setup_jumping();

        m_anim.apply(_character_rig, "character_idle_01");
        m_anim.play(_character_rig);
        m_anim.set_behavior(_character_rig, m_anim.AB_CYCLIC);

        setup_camera();
    }

    function setup_movement() {
        var key_w = m_ctl.create_keyboard_sensor(m_ctl.KEY_W);
        var key_s = m_ctl.create_keyboard_sensor(m_ctl.KEY_S);
        var key_up = m_ctl.create_keyboard_sensor(m_ctl.KEY_UP);
        var key_down = m_ctl.create_keyboard_sensor(m_ctl.KEY_DOWN);

        var move_array = [
            key_w, key_up,
            key_s, key_down
        ];

        var forward_logic = function (s) { return (s[0] || s[1]) };
        var backward_logic = function (s) { return (s[2] || s[3]) };

        function move_cb(obj, id, pulse) {
            if (pulse == 1) {
                switch (id) {
                    case "FORWARD":
                        var move_dir = 1;
                        m_anim.apply(_character_rig, "character_run");
                        break;
                    case "BACKWARD":
                        var move_dir = -1;
                        m_anim.apply(_character_rig, "character_run");
                        break;
                }
            } else {
                var move_dir = 0;
                m_anim.apply(_character_rig, "character_idle_01");
            }

            m_phy.set_character_move_dir(obj, move_dir, 0);

            m_anim.play(_character_rig);
            m_anim.set_behavior(_character_rig, m_anim.AB_CYCLIC);
        };

        m_ctl.create_sensor_manifold(_character, "FORWARD", m_ctl.CT_TRIGGER,
            move_array, forward_logic, move_cb);
        m_ctl.create_sensor_manifold(_character, "BACKWARD", m_ctl.CT_TRIGGER,
            move_array, backward_logic, move_cb);
    }



    function setup_jumping() {
        var key_space = m_ctl.create_keyboard_sensor(m_ctl.KEY_SPACE);

        var jump_cb = function (obj, id, pulse) {
            m_phy.character_jump(obj);
        }

        m_ctl.create_sensor_manifold(_character, "JUMP", m_ctl.CT_SHOT,
            [key_space], null, jump_cb);
    }

    function setup_camera() {
        var camera = m_scs.get_active_camera();
        m_cons.append_stiff_trans(camera, _character, CAMERA_OFFSET);
        var canvas_elem = m_cont.get_canvas();

        canvas_elem.addEventListener("mouseup", function (e) {
            m_mouse.request_pointerlock(canvas_elem);
        }, false);
    }

});

b4w.require("game_example_main").init();

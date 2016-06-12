#var NUM_LINES 0
#var NUM_RINGS 0
#var NUM_STARS 0
#var WAVES_HEIGHT 0.0

#include <precision_statement.glslf>

uniform vec4  u_diffuse_color;
uniform vec3  u_halo_rings_color;
uniform vec3  u_halo_lines_color;
uniform float u_halo_hardness;
uniform float u_halo_size;

#if SKY_STARS
uniform vec3 u_sun_intensity;

# if WATER_EFFECTS && !DISABLE_FOG
uniform float u_halo_stars_blend;
uniform float u_halo_stars_height;
uniform float u_cam_water_depth;
varying vec4 v_position_world;
# endif

#endif

varying vec2 v_texcoord;
varying float v_vertex_random;

#include <color_util.glslf>
#include <halo_color.glslf>

void main(void) {
    vec4 frag_color = halo_color();
    vec3 color = frag_color.rgb;
    float dist = frag_color.a;
    lin_to_srgb(color);
    premultiply_alpha(color, dist);
    gl_FragColor = vec4(color, dist);
}

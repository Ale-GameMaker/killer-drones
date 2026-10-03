precision mediump float;

uniform sampler2D u_texture;

/*
 * Overall scene darkness.
 * 1.0 = normal
 * 0.0 = completely black
 */
uniform float u_darkness;

/*
 * Dynamic light intensity.
 */
uniform float u_light;

/*
 * Mouse position in normalized screen coordinates.
 * X/Y range: 0.0 - 1.0
 */
uniform vec2 u_lightPosition;

/*
 * Radius of the dynamic light.
 */
uniform float u_lightRadius;

/*
 * Ambient light.
 */
uniform float u_ambient;

varying vec2 v_texCoord;

void main() {

    vec4 color = texture2D(
        u_texture,
        v_texCoord
    );

    /*
     * Preserve transparency.
     */
    if (color.a <= 0.01) {
        discard;
    }

    /*
     * Convert texture coordinates into
     * a distance from the mouse light.
     */
    float distanceFromLight =
        distance(
            v_texCoord,
            u_lightPosition
        );

    /*
     * Soft falloff.
     */
    float lightFalloff =
        1.0 -
        smoothstep(
            0.0,
            u_lightRadius,
            distanceFromLight
        );

    /*
     * Ambient + dynamic lighting.
     */
    float lighting =
        u_ambient +
        lightFalloff * u_light;

    /*
     * Apply darkness first.
     */
    color.rgb *= u_darkness;

    /*
     * Apply dynamic light.
     */
    color.rgb +=
        color.rgb *
        lightFalloff *
        u_light;

    /*
     * Prevent excessive HDR-like clipping.
     */
    color.rgb =
        clamp(
            color.rgb,
            0.0,
            1.0
        );

    gl_FragColor = color;
}
precision mediump float;

uniform sampler2D u_texture;

uniform float u_darkness;
uniform float u_light;

varying vec2 v_texCoord;

void main() {

    vec4 color = texture2D(
        u_texture,
        v_texCoord
    );

    /*
     * Overall darkness.
     */
    color.rgb *= u_darkness;

    /*
     * Soft light around the center.
     */
    vec2 position =
        v_texCoord - vec2(0.5);

    float distance =
        length(position);

    float light =
        1.0 -
        smoothstep(
            0.12,
            0.75,
            distance
        );

    color.rgb +=
        color.rgb *
        light *
        u_light;

    gl_FragColor = color;
}
-- =========================================================
-- Killer Drones: An MD AU Story
-- blur.lua
--
-- Configura assets/blur.png como vignette.
-- O HTML já contém a imagem como fallback, então o jogo
-- continua funcionando mesmo se o runtime Lua não carregar.
-- =========================================================

local js = require "js"
local document = js.global.document

local vignette = document:getElementById("vignette")

if vignette == nil then
    return
end

vignette.src = "assets/blur.png"
vignette.alt = ""
vignette.draggable = false
vignette.setAttribute("aria-hidden", "true")

local style = vignette.style
style.position = "absolute"
style.left = "0"
style.top = "0"
style.width = "100%"
style.height = "100%"
style.objectFit = "cover"
style.pointerEvents = "none"
style.userSelect = "none"
style.zIndex = "10"

print("[Killer Drones] blur.png vignette ready.")

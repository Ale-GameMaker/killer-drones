"use strict";

/* =========================================================
   CONFIG
========================================================= */

const STORY_PATH = "story/prologue.txt";
const LANGUAGE_KEY = "killer-drones-language";
const SETTINGS_KEY = "killer-drones-settings";
const SAVE_PREFIX = "killer-drones-save-";

const SAVE_VERSION = 4;
const SAVE_SLOTS = 6;

const DEFAULT_SETTINGS = {
    showFPS: true,
    quality: "high",
    effects: true,
    textSpeed: 25,
    masterVolume: 1,
    musicVolume: 0.35,
    sfxVolume: 1
};

const MUSIC = {
    menu: "assets/audio/music/menu.ogg",
    menu2: "assets/audio/music/menu2.ogg",
    abandoned_hall: "assets/audio/music/abandoned_hall.ogg"
};

const BACKGROUNDS = {
    abandonedHall: "assets/backgrounds/abandonedHall.jpg",
    outside: "assets/backgrounds/outside.jpg"
};

const SPRITES = {
    Alice: {
        "001": "assets/characters/alice/Alice001.png",
        "002": "assets/characters/alice/Alice002.png",
        "003": "assets/characters/alice/Alice003.png",
        "004": "assets/characters/alice/Alice004.png",
        "005": "assets/characters/alice/Alice005.png"
    },
    Z: {
        "001": "assets/characters/z/Z001.png",
        "002": "assets/characters/z/Z002.png",
        "003": "assets/characters/z/Z003.png"
    }
};

const UI_TEXT = {
    en: {
        subtitle: "AN MD AU STORY",
        start: "START",
        continue: "CONTINUE",
        load: "LOAD",
        settings: "SETTINGS",
        credits: "CREDITS",
        back: "BACK",
        settingsTitle: "SETTINGS",
        creditsTitle: "CREDITS",
        creatorRole: "CREATOR / DEVELOPER",
        projectRole: "PROJECT",
        techRole: "TECHNOLOGY",
        fontRole: "FONT",
        resetSettings: "RESET SETTINGS",
        language: "LANGUAGE",
        menu: "MENU",
        menuContinue: "CONTINUE",
        menuBack: "BACK",
        menuSave: "SAVE",
        menuLoad: "LOAD",
        menuBackMenu: "BACK TO MENU",
        menuClose: "CLOSE",
        next: "NEXT",
        save: "SAVE",
        loadTitle: "LOAD",
        startTitle: "START",
        empty: "EMPTY",
        delete: "DELETE",
        deleteAll: "DELETE ALL SAVES",
        confirmDelete: slot => `Delete SLOT ${slot}?\n\nThis cannot be undone.`,
        confirmDeleteAll: "Delete ALL saves?\n\nThis cannot be undone.",
        endSpeaker: "SYSTEM",
        chapterEnd: "End of this chapter.\n\nMore content will be added soon.",
        overwrite: slot => `SLOT ${slot} already contains a save.\n\nStart a new game and overwrite it?`,
        saveLine: (chapter, line, date) => `${chapter} — LINE ${line}<br>${date}`,
        fps: "SHOW FPS",
        quality: "QUALITY",
        effects: "VISUAL EFFECTS / SHADERS",
        textSpeed: "TEXT SPEED",
        volume: "MASTER VOLUME",
        musicVolume: "MUSIC VOLUME",
        sfxVolume: "SFX VOLUME",
        low: "LOW",
        medium: "MEDIUM",
        high: "HIGH",
        off: "OFF",
        on: "ON",
        fast: "FAST",
        normal: "NORMAL",
        slow: "SLOW",
        loading: [
            "INITIALIZING SYSTEM",
            "LOADING ASSETS",
            "LOADING STORY",
            "INITIALIZING AUDIO",
            "READY"
        ]
    },
    "pt-BR": {
        subtitle: "UMA HISTÓRIA AU DE MD",
        start: "INICIAR",
        continue: "CONTINUAR",
        load: "CARREGAR",
        settings: "CONFIGURAÇÕES",
        credits: "CRÉDITOS",
        back: "VOLTAR",
        settingsTitle: "CONFIGURAÇÕES",
        creditsTitle: "CRÉDITOS",
        creatorRole: "CRIADOR / DESENVOLVEDOR",
        projectRole: "PROJETO",
        techRole: "TECNOLOGIA",
        fontRole: "FONTE",
        resetSettings: "REDEFINIR CONFIGURAÇÕES",
        language: "IDIOMA",
        menu: "MENU",
        menuContinue: "CONTINUAR",
        menuBack: "VOLTAR",
        menuSave: "SALVAR",
        menuLoad: "CARREGAR",
        menuBackMenu: "VOLTAR AO MENU",
        menuClose: "FECHAR",
        next: "PRÓXIMO",
        save: "SALVAR",
        loadTitle: "CARREGAR",
        startTitle: "INICIAR",
        empty: "VAZIO",
        delete: "APAGAR",
        deleteAll: "APAGAR TODOS OS SAVES",
        confirmDelete: slot => `Apagar o SLOT ${slot}?\n\nIsso não pode ser desfeito.`,
        confirmDeleteAll: "Apagar TODOS os saves?\n\nIsso não pode ser desfeito.",
        endSpeaker: "SISTEMA",
        chapterEnd: "Fim deste capítulo.\n\nMais conteúdo será adicionado em breve.",
        overwrite: slot => `O SLOT ${slot} já possui um save.\n\nIniciar um novo jogo e sobrescrevê-lo?`,
        saveLine: (chapter, line, date) => `${chapter} — LINHA ${line}<br>${date}`,
        fps: "MOSTRAR FPS",
        quality: "QUALIDADE",
        effects: "EFEITOS VISUAIS / SHADERS",
        textSpeed: "VELOCIDADE DO TEXTO",
        volume: "VOLUME GERAL",
        musicVolume: "VOLUME DA MÚSICA",
        sfxVolume: "VOLUME DOS SFX",
        low: "BAIXA",
        medium: "MÉDIA",
        high: "ALTA",
        off: "DESLIGADO",
        on: "LIGADO",
        fast: "RÁPIDA",
        normal: "NORMAL",
        slow: "LENTA",
        loading: [
            "INICIALIZANDO SISTEMA",
            "CARREGANDO RECURSOS",
            "CARREGANDO HISTÓRIA",
            "INICIALIZANDO ÁUDIO",
            "PRONTO"
        ]
    },
    "es-419": {
        subtitle: "UNA HISTORIA AU DE MD",
        start: "INICIAR",
        continue: "CONTINUAR",
        load: "CARGAR",
        settings: "CONFIGURACIÓN",
        credits: "CRÉDITOS",
        back: "VOLVER",
        settingsTitle: "CONFIGURACIÓN",
        creditsTitle: "CRÉDITOS",
        creatorRole: "CREADOR / DESARROLLADOR",
        projectRole: "PROYECTO",
        techRole: "TECNOLOGÍA",
        fontRole: "FUENTE",
        resetSettings: "RESTABLECER CONFIGURACIÓN",
        language: "IDIOMA",
        menu: "MENÚ",
        menuContinue: "CONTINUAR",
        menuBack: "VOLVER",
        menuSave: "GUARDAR",
        menuLoad: "CARGAR",
        menuBackMenu: "VOLVER AL MENÚ",
        menuClose: "CERRAR",
        next: "SIGUIENTE",
        save: "GUARDAR",
        loadTitle: "CARGAR",
        startTitle: "INICIAR",
        empty: "VACÍO",
        delete: "BORRAR",
        deleteAll: "BORRAR TODOS LOS GUARDADOS",
        confirmDelete: slot => `¿Borrar SLOT ${slot}?\n\nEsto no se puede deshacer.`,
        confirmDeleteAll: "¿Borrar TODOS los guardados?\n\nEsto no se puede deshacer.",
        endSpeaker: "SISTEMA",
        chapterEnd: "Fin de este capítulo.\n\nSe añadirá más contenido pronto.",
        overwrite: slot => `El SLOT ${slot} ya contiene un guardado.\n\n¿Iniciar un juego nuevo y sobrescribirlo?`,
        saveLine: (chapter, line, date) => `${chapter} — LÍNEA ${line}<br>${date}`,
        fps: "MOSTRAR FPS",
        quality: "CALIDAD",
        effects: "EFECTOS VISUALES / SHADERS",
        textSpeed: "VELOCIDAD DEL TEXTO",
        volume: "VOLUMEN GENERAL",
        musicVolume: "VOLUMEN DE MÚSICA",
        sfxVolume: "VOLUMEN DE SFX",
        low: "BAJA",
        medium: "MEDIA",
        high: "ALTA",
        off: "DESACTIVADO",
        on: "ACTIVADO",
        fast: "RÁPIDA",
        normal: "NORMAL",
        slow: "LENTA",
        loading: [
            "INICIALIZANDO SISTEMA",
            "CARGANDO RECURSOS",
            "CARGANDO HISTORIA",
            "INICIALIZANDO AUDIO",
            "LISTO"
        ]
    }
};

/* =========================================================
   STATE
========================================================= */

let dom = {};

let currentLanguage = safeGetLocalStorage(LANGUAGE_KEY) || "en";
if (!UI_TEXT[currentLanguage]) currentLanguage = "en";

let settings = loadSettings();

let storyLines = [];
let storyLoaded = false;

let currentLine = 0;
let currentChapter = "Prologue";
let currentBackground = null;
let currentWeather = null;
let currentMusicName = null;

let storyStarted = false;
let chapterFinished = false;
let activeSaveSlot = null;
let choiceHistory = {};

let saveMode = "load";
let saveReturnTo = "title";
let vnMenuOpen = false;

let isTyping = false;
let typewriterTimer = null;
let typewriterToken = 0;

let initialized = false;
let menu2Music = null;
let menu2Available = false;

let fpsFrames = 0;
let fpsLastTime = performance.now();
let fpsValue = 0;

const audioFadeTokens = new WeakMap();

/* =========================================================
   STORAGE / SAFETY
========================================================= */

function safeGetLocalStorage(key) {
    try {
        return localStorage.getItem(key);
    } catch (_) {
        return null;
    }
}

function safeSetLocalStorage(key, value) {
    try {
        localStorage.setItem(key, value);
        return true;
    } catch (_) {
        return false;
    }
}

function safeRemoveLocalStorage(key) {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (_) {
        return false;
    }
}

function loadSettings() {
    const raw = safeGetLocalStorage(SETTINGS_KEY);
    if (!raw) return { ...DEFAULT_SETTINGS };

    try {
        const parsed = JSON.parse(raw);
        return {
            ...DEFAULT_SETTINGS,
            ...(parsed && typeof parsed === "object" ? parsed : {})
        };
    } catch (_) {
        return { ...DEFAULT_SETTINGS };
    }
}

function saveSettings() {
    safeSetLocalStorage(SETTINGS_KEY, JSON.stringify(settings));
}

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getUI() {
    return UI_TEXT[currentLanguage] || UI_TEXT.en;
}

function normalizeSettings() {
    if (!["low", "medium", "high"].includes(settings.quality)) {
        settings.quality = "high";
    }

    settings.effects = Boolean(settings.effects);
    settings.showFPS = Boolean(settings.showFPS);

    settings.textSpeed = clamp(Number(settings.textSpeed) || 25, 5, 80);
    settings.masterVolume = clamp(Number(settings.masterVolume), 0, 1);
    settings.musicVolume = clamp(Number(settings.musicVolume), 0, 1);
    settings.sfxVolume = clamp(Number(settings.sfxVolume), 0, 1);
}

/* =========================================================
   DOM
========================================================= */

function cacheDOM() {
    const ids = [
        "loading-screen", "loading-progress", "loading-percent",
        "title-screen", "game-subtitle", "start-button", "continue-button",
        "load-title-button", "settings-button", "credits-button",

        "settings-screen", "credits-screen", "credits-title", "credits-back-button",
        "settings-reset-button",
        "settings-title", "settings-language-label",
        "settings-back-button",

        "settings-fps", "settings-quality", "settings-effects",
        "settings-text-speed", "settings-volume", "settings-music-volume",
        "settings-sfx-volume",

        "fps-counter",

        "save-screen", "save-screen-title", "save-slots",
        "save-back-button", "delete-all-saves-button",

        "story-screen", "background", "weather", "characters",
        "alice", "z", "dialogue-box", "speaker", "dialogue-text",
        "next-button", "vn-menu-button", "vn-menu", "vn-menu-title",
        "vn-continue", "vn-back-line", "vn-save", "vn-load",
        "vn-back-menu", "vn-close", "choice-container",

        "menu-music", "menu2-music", "story-music",
        "text-sound", "button-sound", "vignette"
    ];

    for (const id of ids) {
        dom[id.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] =
            document.getElementById(id);
    }

    dom.loadingSteps = [1, 2, 3, 4, 5]
        .map(n => document.getElementById(`loading-step-${n}`));

    dom.loadingTexts = [1, 2, 3, 4, 5]
        .map(n => document.getElementById(`loading-text-${n}`));

    dom.languageButtons = document.querySelectorAll(".language-button");
}

function showScreen(screen) {
    const screens = [
        dom.loadingScreen,
        dom.titleScreen,
        dom.settingsScreen,
        dom.creditsScreen,
        dom.saveScreen,
        dom.storyScreen
    ];

    for (const element of screens) {
        if (element) element.classList.remove("active");
    }

    if (screen) screen.classList.add("active");
}

/* =========================================================
   UI
========================================================= */

function updateUI() {
    const ui = getUI();

    const setText = (element, value) => {
        if (element) element.textContent = value;
    };

    setText(dom.gameSubtitle, ui.subtitle);
    setText(dom.startButton, ui.start);
    setText(dom.continueButton, ui.continue);
    setText(dom.loadTitleButton, ui.load);
    setText(dom.settingsButton, ui.settings);
    setText(dom.creditsButton, ui.credits);

    setText(dom.settingsTitle, ui.settingsTitle);
    setText(dom.creditsTitle, ui.creditsTitle);
    setText(dom.settingsLanguageLabel, ui.language);
    setText(dom.settingsBackButton, ui.back);

    setText(dom.nextButton, ui.next);

    setText(dom.vnMenuTitle, ui.menu);
    setText(dom.vnContinue, ui.menuContinue);
    setText(dom.vnBackLine, ui.menuBack);
    setText(dom.vnSave, ui.menuSave);
    setText(dom.vnLoad, ui.menuLoad);
    setText(dom.vnBackMenu, ui.menuBackMenu);
    setText(dom.vnClose, ui.menuClose);

    if (dom.loadingTexts) {
        dom.loadingTexts.forEach((element, index) => {
            if (element) element.textContent = ui.loading[index] || "";
        });
    }

    if (dom.settingsFps) {
        dom.settingsFps.parentElement?.querySelector(".setting-label") &&
            (dom.settingsFps.parentElement.querySelector(".setting-label").textContent = ui.fps);
    }

    if (dom.settingsQuality) {
        dom.settingsQuality.parentElement?.querySelector(".setting-label") &&
            (dom.settingsQuality.parentElement.querySelector(".setting-label").textContent = ui.quality);
    }

    if (dom.settingsEffects) {
        dom.settingsEffects.parentElement?.querySelector(".setting-label") &&
            (dom.settingsEffects.parentElement.querySelector(".setting-label").textContent = ui.effects);
    }

    if (dom.settingsTextSpeed) {
        dom.settingsTextSpeed.parentElement?.querySelector(".setting-label") &&
            (dom.settingsTextSpeed.parentElement.querySelector(".setting-label").textContent = ui.textSpeed);
    }

    if (dom.settingsVolume) {
        dom.settingsVolume.parentElement?.querySelector(".setting-label") &&
            (dom.settingsVolume.parentElement.querySelector(".setting-label").textContent = ui.volume);
    }

    if (dom.settingsMusicVolume) {
        dom.settingsMusicVolume.parentElement?.querySelector(".setting-label") &&
            (dom.settingsMusicVolume.parentElement.querySelector(".setting-label").textContent = ui.musicVolume);
    }

    if (dom.settingsSfxVolume) {
        dom.settingsSfxVolume.parentElement?.querySelector(".setting-label") &&
            (dom.settingsSfxVolume.parentElement.querySelector(".setting-label").textContent = ui.sfxVolume);
    }

    if (dom.settingsResetButton) {
        dom.settingsResetButton.textContent = ui.resetSettings;
    }

    if (dom.deleteAllSavesButton) {
        dom.deleteAllSavesButton.textContent = ui.deleteAll;
    }
}

function updateLanguageButtons() {
    if (!dom.languageButtons) return;

    dom.languageButtons.forEach(button => {
        button.classList.toggle(
            "selected",
            button.dataset.language === currentLanguage
        );
    });
}

function updateSettingsUI() {
    normalizeSettings();

    if (dom.settingsFps) dom.settingsFps.checked = settings.showFPS;
    if (dom.settingsEffects) dom.settingsEffects.checked = settings.effects;

    if (dom.settingsQuality) dom.settingsQuality.value = settings.quality;
    if (dom.settingsTextSpeed) dom.settingsTextSpeed.value = String(settings.textSpeed);
    if (dom.settingsVolume) dom.settingsVolume.value = String(settings.masterVolume);
    if (dom.settingsMusicVolume) dom.settingsMusicVolume.value = String(settings.musicVolume);
    if (dom.settingsSfxVolume) dom.settingsSfxVolume.value = String(settings.sfxVolume);

    const textSpeedValue = document.getElementById("settings-text-speed-value");
    const volumeValue = document.getElementById("settings-volume-value");
    const musicVolumeValue = document.getElementById("settings-music-volume-value");
    const sfxVolumeValue = document.getElementById("settings-sfx-volume-value");

    if (textSpeedValue) textSpeedValue.textContent = String(settings.textSpeed);
    if (volumeValue) volumeValue.textContent = `${Math.round(settings.masterVolume * 100)}%`;
    if (musicVolumeValue) musicVolumeValue.textContent = `${Math.round(settings.musicVolume * 100)}%`;
    if (sfxVolumeValue) sfxVolumeValue.textContent = `${Math.round(settings.sfxVolume * 100)}%`;

    document.documentElement.dataset.quality = settings.quality;
    document.documentElement.dataset.effects = settings.effects ? "on" : "off";

    if (dom.fpsCounter) {
        dom.fpsCounter.style.display = settings.showFPS ? "" : "none";
    }

    applyAudioVolumes();
}

/* =========================================================
   LOADING
========================================================= */

function setLoadingProgress(percent, stepIndex) {
    const value = clamp(Number(percent) || 0, 0, 100);

    if (dom.loadingProgress) {
        dom.loadingProgress.style.width = `${value}%`;
    }

    if (dom.loadingPercent) {
        dom.loadingPercent.textContent = `${Math.round(value)}%`;
    }

    if (dom.loadingSteps) {
        dom.loadingSteps.forEach((step, index) => {
            if (!step) return;

            step.classList.toggle("active", index <= stepIndex);
            step.classList.toggle("done", index < stepIndex);
        });
    }
}

function preloadImage(src) {
    return new Promise(resolve => {
        const image = new Image();

        image.onload = () => resolve(true);
        image.onerror = () => resolve(false);

        image.src = src;
    });
}

function preloadAudio(src) {
    return new Promise(resolve => {
        const audio = new Audio();
        let doneCalled = false;

        const done = () => {
            if (doneCalled) return;
            doneCalled = true;
            resolve(true);
        };

        audio.preload = "auto";
        audio.addEventListener("canplaythrough", done, { once: true });
        audio.addEventListener("error", done, { once: true });

        audio.src = src;
        audio.load();

        setTimeout(done, 1800);
    });
}

/* =========================================================
   AUDIO
========================================================= */

function getMasterMusicVolume() {
    return clamp(settings.masterVolume * settings.musicVolume, 0, 1);
}

function getSFXVolume() {
    return clamp(settings.masterVolume * settings.sfxVolume, 0, 1);
}

function applyAudioVolumes() {
    if (dom.menuMusic) {
        dom.menuMusic.volume = clamp(
            dom.menuMusic.dataset.playing === "1"
                ? getMasterMusicVolume()
                : 0,
            0,
            1
        );
    }

    if (menu2Music) {
        menu2Music.volume = clamp(
            menu2Music.dataset.playing === "1"
                ? getMasterMusicVolume()
                : 0,
            0,
            1
        );
    }

    if (dom.storyMusic) {
        dom.storyMusic.volume = clamp(
            dom.storyMusic.dataset.playing === "1"
                ? getMasterMusicVolume()
                : 0,
            0,
            1
        );
    }

    if (dom.textSound) dom.textSound.volume = getSFXVolume();
    if (dom.buttonSound) dom.buttonSound.volume = getSFXVolume();
}

function safePlay(audio) {
    if (!audio) return;

    try {
        const promise = audio.play();

        if (promise && typeof promise.catch === "function") {
            promise.catch(() => {});
        }
    } catch (_) {}
}

function safePause(audio) {
    if (!audio) return;

    try {
        audio.pause();
    } catch (_) {}
}

function fadeAudio(audio, targetVolume, duration = 450) {
    if (!audio) return Promise.resolve();

    let token = (audioFadeTokens.get(audio) || 0) + 1;
    audioFadeTokens.set(audio, token);

    const startVolume = Number.isFinite(audio.volume) ? audio.volume : 0;
    const target = clamp(targetVolume, 0, 1);

    if (duration <= 0) {
        audio.volume = target;
        return Promise.resolve();
    }

    return new Promise(resolve => {
        const start = performance.now();

        const tick = now => {
            if (audioFadeTokens.get(audio) !== token) {
                resolve();
                return;
            }

            const progress = clamp((now - start) / duration, 0, 1);
            const eased = progress * (2 - progress);

            audio.volume = clamp(
                startVolume + (target - startVolume) * eased,
                0,
                1
            );

            if (progress >= 1) {
                resolve();
                return;
            }

            requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
    });
}

function createMenu2Audio() {
    if (menu2Music) return menu2Music;

    const existing = dom.menu2Music;

    menu2Music = existing || new Audio();
    menu2Music.loop = true;
    menu2Music.preload = "auto";
    menu2Music.volume = 0;
    menu2Music.dataset.playing = "0";

    const configuredSource = existing?.getAttribute("src");
    const source = configuredSource || MUSIC.menu2;

    if (source) menu2Music.src = source;

    menu2Music.addEventListener("error", () => {
        menu2Available = false;
    });

    menu2Music.addEventListener("canplaythrough", () => {
        menu2Available = true;
    });

    if (!configuredSource) {
        menu2Available = false;
    }

    return menu2Music;
}

async function startMenuMusic() {
    if (!dom.menuMusic) return;

    dom.menuMusic.loop = true;
    dom.menuMusic.dataset.playing = "1";

    safePlay(dom.menuMusic);
    await fadeAudio(dom.menuMusic, getMasterMusicVolume(), 450);
}

async function stopMenuMusic() {
    if (!dom.menuMusic) return;

    dom.menuMusic.dataset.playing = "0";

    await fadeAudio(dom.menuMusic, 0, 350);
    safePause(dom.menuMusic);
}

async function transitionToSubmenuMusic() {
    createMenu2Audio();

    if (!menu2Available) {
        return;
    }

    safePlay(dom.menuMusic);
    safePlay(menu2Music);

    dom.menuMusic.dataset.playing = "0";
    menu2Music.dataset.playing = "1";

    await Promise.all([
        fadeAudio(dom.menuMusic, 0, 450),
        fadeAudio(menu2Music, getMasterMusicVolume(), 450)
    ]);

    safePause(dom.menuMusic);
}

async function transitionToMainMenuMusic() {
    createMenu2Audio();

    safePlay(dom.menuMusic);
    dom.menuMusic.dataset.playing = "1";

    if (!menu2Available) {
        await fadeAudio(
            dom.menuMusic,
            getMasterMusicVolume(),
            350
        );
        return;
    }

    await Promise.all([
        fadeAudio(menu2Music, 0, 450),
        fadeAudio(dom.menuMusic, getMasterMusicVolume(), 450)
    ]);

    menu2Music.dataset.playing = "0";
    safePause(menu2Music);
}

async function playStoryMusic(
    musicName,
    { fromMenu2 = false, restart = false } = {}
) {
    if (!musicName || !dom.storyMusic) return;

    const src = MUSIC[musicName] || musicName;

    let absoluteSrc;

    try {
        absoluteSrc = new URL(src, document.baseURI).href;
    } catch (_) {
        absoluteSrc = src;
    }

    if (
        !restart &&
        currentMusicName === musicName &&
        dom.storyMusic.src === absoluteSrc &&
        !dom.storyMusic.paused
    ) {
        return;
    }

    dom.storyMusic.loop = true;

    if (dom.storyMusic.src !== absoluteSrc) {
        safePause(dom.storyMusic);
        dom.storyMusic.src = src;
        dom.storyMusic.load();
    }

    currentMusicName = musicName;
    dom.storyMusic.dataset.playing = "1";
    dom.storyMusic.volume = fromMenu2 ? 0 : Math.min(
        dom.storyMusic.volume,
        getMasterMusicVolume()
    );

    safePlay(dom.storyMusic);

    const menuFade = fadeAudio(dom.menuMusic, 0, 500);

    if (fromMenu2 && menu2Available) {
        dom.menuMusic.dataset.playing = "0";
        menu2Music.dataset.playing = "0";

        await Promise.all([
            menuFade,
            fadeAudio(menu2Music, 0, 500),
            fadeAudio(
                dom.storyMusic,
                getMasterMusicVolume(),
                650
            )
        ]);

        safePause(dom.menuMusic);
        safePause(menu2Music);
    } else {
        dom.menuMusic.dataset.playing = "0";

        await Promise.all([
            menuFade,
            fadeAudio(
                dom.storyMusic,
                getMasterMusicVolume(),
                450
            )
        ]);

        safePause(dom.menuMusic);
    }
}

async function stopStoryMusic() {
    if (!dom.storyMusic) return;

    dom.storyMusic.dataset.playing = "0";

    await fadeAudio(dom.storyMusic, 0, 350);
    safePause(dom.storyMusic);

    currentMusicName = null;
}

function playButtonSound() {
    if (!dom.buttonSound) return;

    try {
        dom.buttonSound.volume = getSFXVolume();
        dom.buttonSound.currentTime = 0;

        const promise = dom.buttonSound.play();

        if (promise?.catch) promise.catch(() => {});
    } catch (_) {}
}

function playTextSound() {
    if (!dom.textSound) return;

    try {
        dom.textSound.volume = getSFXVolume();
        dom.textSound.currentTime = 0;

        const promise = dom.textSound.play();

        if (promise?.catch) promise.catch(() => {});
    } catch (_) {}
}

/* =========================================================
   STORY PARSER
========================================================= */

function parseStory(text) {
    const rawLines = String(text || "")
        .replace(/\r/g, "")
        .split("\n");

    const lines = [];
    const labels = {};

    let background = null;
    let weather = null;
    let music = null;
    let chapter = "Prologue";

    let currentDialogue = null;
    let language = null;
    let languageBuffer = [];

    let currentCharacter = null;
    let currentSprite = "001";

    let characterStates = { Alice: "001", Z: "001" };
    let visibleCharacters = { Alice: true, Z: false };

    let activeChoice = null;
    let activeOption = null;

    const clone = value => JSON.parse(JSON.stringify(value));

    function flushLanguage() {
        if (!currentDialogue || !language) {
            languageBuffer = [];
            return;
        }
        const value = languageBuffer.join("\n").trim();
        if (value) currentDialogue.texts[language] = value;
        languageBuffer = [];
    }

    function flushDialogue() {
        flushLanguage();
        language = null;
        if (!currentDialogue) return;
        if (Object.keys(currentDialogue.texts).length > 0) lines.push(currentDialogue);
        currentDialogue = null;
    }

    function flushOptionLanguage() {
        if (!activeOption || !language) {
            languageBuffer = [];
            return;
        }
        const value = languageBuffer.join("\n").trim();
        if (value) activeOption.texts[language] = value;
        languageBuffer = [];
    }

    function finishOption() {
        flushOptionLanguage();
        language = null;
        if (!activeChoice || !activeOption) return;
        if (Object.keys(activeOption.texts).length > 0) {
            activeChoice.options.push(activeOption);
        }
        activeOption = null;
    }

    function finishChoice() {
        finishOption();
        if (!activeChoice) return;
        if (activeChoice.options.length > 0) lines.push(activeChoice);
        activeChoice = null;
    }

    function beginDialogue(character, sprite) {
        flushDialogue();
        currentCharacter = character;
        currentSprite = sprite || characterStates[character] || "001";
        if (characterStates[character]) characterStates[character] = currentSprite;
        if (Object.prototype.hasOwnProperty.call(visibleCharacters, character)) {
            visibleCharacters[character] = true;
        }
        currentDialogue = {
            type: "dialogue",
            character,
            sprite: currentSprite,
            texts: {},
            background,
            weather,
            music,
            chapter,
            characterStates: clone(characterStates),
            visibleCharacters: clone(visibleCharacters)
        };
    }

    function beginChoice() {
        flushDialogue();
        finishChoice();
        activeChoice = {
            type: "choice",
            id: `choice_${lines.length}`,
            options: [],
            background,
            weather,
            music,
            chapter,
            characterStates: clone(characterStates),
            visibleCharacters: clone(visibleCharacters)
        };
    }

    for (let i = 0; i < rawLines.length; i++) {
        const raw = rawLines[i];
        const line = raw.trim();
        if (!line) continue;

        if (activeOption) {
            const nextOption = line.match(/^@option\s+(.+)$/i);

            if (nextOption) {
                finishOption();
                activeOption = {
                    target: nextOption[1].trim(),
                    texts: {}
                };
                language = null;
                languageBuffer = [];
                continue;
            }

            if (/^@endoption$/i.test(line)) {
                finishOption();
                continue;
            }

            if (/^@endchoice$/i.test(line)) {
                finishOption();
                finishChoice();
                continue;
            }

            const languageStart = line.match(/^\[([^\]/]+)\]$/);
            if (languageStart) {
                flushOptionLanguage();
                language = languageStart[1].trim();
                languageBuffer = [];
                continue;
            }
            if (/^\[\/[^\]]+\]$/.test(line)) {
                flushOptionLanguage();
                language = null;
                continue;
            }
            if (language) languageBuffer.push(raw.trim());
            continue;
        }

        if (activeChoice) {
            const optionMatch = line.match(/^@option\s+(.+)$/i);
            if (optionMatch) {
                finishOption();
                activeOption = { target: optionMatch[1].trim(), texts: {} };
                language = null;
                languageBuffer = [];
                continue;
            }
            if (/^@endchoice$/i.test(line)) {
                finishChoice();
                continue;
            }
            continue;
        }

        if (/^@choice$/i.test(line)) {
            beginChoice();
            continue;
        }

        const labelMatch = line.match(/^@label\s+(.+)$/i);
        if (labelMatch) {
            flushDialogue();
            finishChoice();
            const label = labelMatch[1].trim();
            if (label) labels[label] = lines.length;
            continue;
        }

        if (line.startsWith("#")) {
            const chapterMatch = line.match(/^#\s*Chapter:\s*(.+)$/i);
            if (chapterMatch) chapter = chapterMatch[1].trim();
            continue;
        }

        if (line.startsWith("@background")) {
            flushDialogue();
            background = line.replace(/^@background/i, "").trim() || null;
            continue;
        }

        if (line.startsWith("@weather")) {
            flushDialogue();
            weather = line.replace(/^@weather/i, "").trim() || null;
            continue;
        }

        if (line.startsWith("@music")) {
            flushDialogue();
            music = line.replace(/^@music/i, "").trim() || null;
            continue;
        }

        const characterMatch = line.match(/^(.+?)\s+@sprite\s+(.+)$/i);
        if (characterMatch) {
            const character = characterMatch[1].trim();
            const sprite = characterMatch[2].trim() || "001";
            flushDialogue();
            currentCharacter = character;
            currentSprite = sprite;
            if (Object.prototype.hasOwnProperty.call(characterStates, character)) {
                characterStates[character] = sprite;
                if (character === "Z") visibleCharacters.Z = true;
                if (character === "Alice") visibleCharacters.Alice = true;
            }
            continue;
        }

        const inlineDialogue = line.match(/^([^:]+):\s*"([\s\S]*)"$/);
        if (inlineDialogue) {
            beginDialogue(inlineDialogue[1].trim(), currentSprite || "001");
            currentDialogue.texts.en = inlineDialogue[2].trim();
            flushDialogue();
            continue;
        }

        const languageStart = line.match(/^\[([^\]/]+)\]$/);
        if (languageStart) {
            if (!currentDialogue) {
                beginDialogue(currentCharacter || "SYSTEM", currentSprite || "001");
            }
            flushLanguage();
            language = languageStart[1].trim();
            languageBuffer = [];
            continue;
        }

        if (/^\[\/[^\]]+\]$/.test(line)) {
            flushLanguage();
            language = null;
            continue;
        }

        if (language) languageBuffer.push(raw.trim());
    }

    finishChoice();
    flushDialogue();
    lines.labels = labels;
    return lines;
}

async function loadStory() {
    const response = await fetch(
        `${STORY_PATH}?v=${Date.now()}`,
        { cache: "no-store" }
    );

    if (!response.ok) {
        throw new Error(
            `Could not load story: ${response.status}`
        );
    }

    const text = await response.text();
    const parsed = parseStory(text);

    if (!parsed.length) {
        throw new Error("Story contains no dialogue.");
    }

    storyLines = parsed;
    storyLoaded = true;
}

function getLineText(line) {
    if (!line || !line.texts) return "";

    return (
        line.texts[currentLanguage] ||
        line.texts.en ||
        Object.values(line.texts)[0] ||
        ""
    );
}

/* =========================================================
   BACKGROUND / WEATHER
========================================================= */

function updateBackground(name) {
    if (!dom.background || !name) return;
    if (currentBackground === name) return;

    const src = BACKGROUNDS[name] || name;

    currentBackground = name;
    dom.background.style.backgroundImage =
        `url("${src}")`;
}

function updateWeather(name) {
    if (!dom.weather) return;

    const normalized =
        name ? String(name).toLowerCase() : null;

    if (currentWeather === normalized) return;

    currentWeather = normalized;
    dom.weather.textContent = "";

    if (
        normalized === "snow" &&
        settings.effects &&
        settings.quality !== "low"
    ) {
        createSnow();
    }
}

function createSnow() {
    if (!dom.weather) return;

    const amount =
        settings.quality === "high" ? 55 :
        settings.quality === "medium" ? 35 :
        18;

    const fragment =
        document.createDocumentFragment();

    for (let i = 0; i < amount; i++) {
        const flake =
            document.createElement("span");

        flake.className = "snowflake";
        flake.textContent = "•";

        flake.style.left =
            `${Math.random() * 100}%`;

        flake.style.setProperty(
            "--wind",
            `${-20 + Math.random() * 40}vw`
        );

        flake.style.animationDelay =
            `${Math.random() * 6}s`;

        flake.style.animationDuration =
            `${4 + Math.random() * 5}s`;

        flake.style.opacity =
            `${0.3 + Math.random() * 0.7}`;

        fragment.appendChild(flake);
    }

    dom.weather.appendChild(fragment);
}

/* =========================================================
   CHARACTERS
========================================================= */

function setCharacterVisible(element, visible) {
    if (!element) return;

    element.style.visibility =
        visible ? "visible" : "hidden";

    element.style.opacity =
        visible ? "1" : "0";

    element.style.pointerEvents = "none";
}

function setCharacterSprite(character, sprite) {
    const table = SPRITES[character];

    if (!table) return;

    const source =
        table[String(sprite)] ||
        table["001"];

    const element =
        character === "Alice"
            ? dom.alice
            : dom.z;

    if (!element) return;

    if (element.getAttribute("src") !== source) {
        element.src = source;
    }
}

function resetCharacters() {
    if (dom.alice) {
        setCharacterSprite("Alice", "001");
        dom.alice.classList.remove(
            "alice-right",
            "talking",
            "alice-cold"
        );
        setCharacterVisible(dom.alice, true);
    }

    if (dom.z) {
        setCharacterSprite("Z", "001");
        dom.z.classList.remove(
            "z-visible",
            "talking"
        );
        setCharacterVisible(dom.z, false);
    }
}

function rebuildCharacterStage(line) {
    if (!line) return;

    const states =
        line.characterStates || {};

    const visible =
        line.visibleCharacters || {};

    const zVisible =
        Boolean(visible.Z);

    setCharacterSprite(
        "Alice",
        states.Alice || "001"
    );

    setCharacterVisible(
        dom.alice,
        visible.Alice !== false
    );

    dom.alice?.classList.toggle(
        "alice-right",
        zVisible
    );

    setCharacterSprite(
        "Z",
        states.Z || "001"
    );

    setCharacterVisible(
        dom.z,
        zVisible
    );

    dom.z?.classList.toggle(
        "z-visible",
        zVisible
    );

    dom.alice?.classList.remove("talking");
    dom.z?.classList.remove("talking");

    dom.alice?.classList.toggle(
        "alice-cold",
        line.background === "outside" &&
        settings.effects
    );

    if (line.character === "Alice") {
        dom.alice?.classList.add("talking");
    } else if (line.character === "Z") {
        dom.z?.classList.add("talking");
    }
}

/* =========================================================
   TYPEWRITER
========================================================= */

function stopTypewriter() {
    typewriterToken++;

    if (typewriterTimer) {
        clearTimeout(typewriterTimer);
    }

    typewriterTimer = null;
    isTyping = false;
}

function finishTypewriter() {
    stopTypewriter();

    const line =
        storyLines[currentLine];

    if (dom.dialogueText && line) {
        dom.dialogueText.textContent =
            getLineText(line);
    }
}

function startTypewriter(text) {
    stopTypewriter();

    if (!dom.dialogueText) return;

    dom.dialogueText.textContent = "";
    isTyping = true;

    const token = typewriterToken;
    let index = 0;

    const typeNext = () => {
        if (token !== typewriterToken) return;

        if (index >= text.length) {
            isTyping = false;
            typewriterTimer = null;
            return;
        }

        const char = text[index++];

        dom.dialogueText.textContent += char;

        if (
            char !== " " &&
            char !== "\n" &&
            index % 2 === 0
        ) {
            playTextSound();
        }

        let delay = Number(settings.textSpeed) || 25;

        if (".,!?".includes(char)) {
            delay *= 4;
        }

        if (char === "\n") {
            delay *= 3;
        }

        if (char === "-" || char === "~") {
            delay *= 1.8;
        }

        typewriterTimer =
            setTimeout(typeNext, delay);
    };

    typeNext();
}

/* =========================================================
   CHOICES
========================================================= */

function getChoiceText(option) {
    if (!option || !option.texts) return "";
    return option.texts[currentLanguage] || option.texts.en || Object.values(option.texts)[0] || "";
}

function ensureChoiceContainer() {
    if (dom.choiceContainer) return dom.choiceContainer;
    if (!dom.storyScreen) return null;

    const container = document.createElement("div");
    container.id = "choice-container";
    container.className = "kd-choice-container";
    container.setAttribute("aria-live", "polite");
    dom.storyScreen.appendChild(container);
    dom.choiceContainer = container;
    return container;
}

function hideChoices() {
    const container = ensureChoiceContainer();
    if (!container) return;
    container.classList.remove("active");
    container.textContent = "";
    if (dom.nextButton) {
        dom.nextButton.disabled = false;
        dom.nextButton.style.display = "";
    }
}

function showChoices(line) {
    const container = ensureChoiceContainer();
    if (!container || !line || line.type !== "choice") return;

    container.textContent = "";
    container.classList.add("active");
    if (dom.nextButton) dom.nextButton.style.display = "none";

    const title = document.createElement("div");
    title.className = "kd-choice-title";
    title.textContent = currentLanguage === "pt-BR" ? "ESCOLHA" : currentLanguage === "es-419" ? "ELECCIÓN" : "CHOICE";
    container.appendChild(title);

    line.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "kd-choice-button";
        button.dataset.choiceIndex = String(index);
        button.textContent = getChoiceText(option);
        button.addEventListener("click", async () => {
            if (isTyping || vnMenuOpen) return;
            playButtonSound();
            await selectChoice(line, option, index);
        });
        container.appendChild(button);
    });
}

function resolveChoiceTarget(target) {
    const raw = String(target || "").trim();
    if (!raw) return -1;

    const labels = storyLines.labels || {};
    if (Object.prototype.hasOwnProperty.call(labels, raw)) return Number(labels[raw]);

    const normalized = raw.toLowerCase();
    const matchingLabel = Object.keys(labels).find(key => key.toLowerCase() === normalized);
    if (matchingLabel) return Number(labels[matchingLabel]);

    if (/^line:\d+$/i.test(raw)) return Number(raw.split(":")[1]);
    if (/^\d+$/.test(raw)) return Number(raw);
    return -1;
}

async function selectChoice(line, option, index) {
    if (!line || !option) return;

    const targetIndex = resolveChoiceTarget(option.target);
    if (!Number.isInteger(targetIndex) || targetIndex < 0 || targetIndex >= storyLines.length) {
        console.error("[Killer Drones] Invalid choice target:", option.target);
        hideChoices();
        if (dom.speaker) dom.speaker.textContent = getUI().endSpeaker;
        if (dom.dialogueText) {
            dom.dialogueText.textContent = currentLanguage === "pt-BR"
                ? "ERRO: destino da escolha não encontrado."
                : currentLanguage === "es-419"
                    ? "ERROR: no se encontró el destino de la elección."
                    : "ERROR: choice destination not found.";
        }
        return;
    }

    choiceHistory[line.id] = {
        option: index,
        target: option.target,
        line: targetIndex,
        timestamp: Date.now()
    };

    currentLine = targetIndex;
    chapterFinished = false;
    hideChoices();

    await renderCurrentLine({ updateMusic: true });
    autoCheckpoint();
}

async function renderChoiceLine(line) {
    stopTypewriter();
    hideChoices();
    if (dom.speaker) {
        dom.speaker.textContent = currentLanguage === "pt-BR" ? "ESCOLHA" : currentLanguage === "es-419" ? "ELECCIÓN" : "CHOICE";
    }
    if (dom.dialogueText) dom.dialogueText.textContent = "";
    showChoices(line);
}

/* =========================================================
   DIALOGUE
========================================================= */

async function renderCurrentLine(
    { updateMusic = true } = {}
) {
    if (!storyLines.length) return;

    if (
        currentLine < 0 ||
        currentLine >= storyLines.length
    ) {
        return;
    }

    const line =
        storyLines[currentLine];

    chapterFinished = false;

    if (line.type === "choice") {
        currentChapter = line.chapter || currentChapter || "Prologue";

        updateBackground(line.background);
        updateWeather(line.weather);
        rebuildCharacterStage(line);

        if (updateMusic && line.music) {
            await playStoryMusic(line.music);
        }

        await renderChoiceLine(line);
        return;
    }

    currentChapter =
        line.chapter || "Prologue";

    updateBackground(line.background);
    updateWeather(line.weather);
    rebuildCharacterStage(line);

    if (dom.speaker) {
        dom.speaker.textContent =
            line.character || "";
    }

    startTypewriter(
        getLineText(line)
    );

    if (updateMusic && line.music) {
        const fromMenu2 =
            Boolean(
                menu2Available &&
                menu2Music &&
                !menu2Music.paused &&
                currentMusicName === null
            );

        await playStoryMusic(
            line.music,
            { fromMenu2 }
        );
    }
}

async function startStory(lineIndex = 0) {
    if (!storyLoaded) {
        await loadStory();
    }

    if (!storyLines.length) return;

    storyStarted = true;
    chapterFinished = false;
    choiceHistory = {};

    currentLine =
        clamp(
            Number(lineIndex) || 0,
            0,
            storyLines.length - 1
        );

    currentBackground = null;
    currentWeather = null;
    currentMusicName = null;

    stopTypewriter();
    resetCharacters();
    showScreen(dom.storyScreen);
    closeVNMenu();

    await renderCurrentLine({
        updateMusic: true
    });
}

async function nextLine() {
    if (!storyStarted || vnMenuOpen) return;

    if (isTyping) {
        finishTypewriter();
        return;
    }

    if (storyLines[currentLine]?.type === "choice") {
        return;
    }

    if (
        currentLine >=
        storyLines.length - 1
    ) {
        showChapterEnd();
        return;
    }

    currentLine++;

    await renderCurrentLine({
        updateMusic: true
    });

    autoCheckpoint();
}

async function previousLine() {
    if (!storyStarted || vnMenuOpen) return;

    if (isTyping) {
        finishTypewriter();
        return;
    }

    if (currentLine <= 0) return;

    currentLine--;

    await renderCurrentLine({
        updateMusic: false
    });
}

function showChapterEnd() {
    if (chapterFinished) return;

    chapterFinished = true;
    stopTypewriter();

    const ui = getUI();

    if (dom.speaker) {
        dom.speaker.textContent =
            ui.endSpeaker;
    }

    if (dom.dialogueText) {
        dom.dialogueText.textContent =
            ui.chapterEnd;
    }

    autoCheckpoint();
}

/* =========================================================
   LANGUAGE
========================================================= */

async function setLanguage(language) {
    if (!UI_TEXT[language]) return;

    currentLanguage = language;

    safeSetLocalStorage(
        LANGUAGE_KEY,
        currentLanguage
    );

    updateLanguageButtons();
    updateUI();

    if (
        storyStarted &&
        dom.storyScreen &&
        dom.storyScreen.classList.contains("active")
    ) {
        await renderCurrentLine({
            updateMusic: false
        });
    }

    renderSaveSlots();
}

/* =========================================================
   SAVE / LOAD / DELETE
========================================================= */

function getSaveKey(slot) {
    return `${SAVE_PREFIX}${slot}`;
}

function getSaveData(slot) {
    const raw =
        safeGetLocalStorage(
            getSaveKey(slot)
        );

    if (!raw) return null;

    try {
        const data =
            JSON.parse(raw);

        if (
            !data ||
            typeof data !== "object"
        ) {
            return null;
        }

        if (
            !Number.isInteger(
                Number(data.line)
            )
        ) {
            return null;
        }

        if (
            data.version &&
            Number(data.version) > SAVE_VERSION
        ) {
            return null;
        }

        return data;
    } catch (_) {
        return null;
    }
}

function createSaveData() {
    return {
        version: SAVE_VERSION,
        slot: activeSaveSlot,
        language: currentLanguage,
        chapter: currentChapter,
        line: currentLine,
        background: currentBackground,
        weather: currentWeather,
        music: currentMusicName,
        choices: JSON.parse(JSON.stringify(choiceHistory)),
        timestamp: Date.now()
    };
}

function saveGame(slot) {
    if (
        !Number.isInteger(slot) ||
        slot < 1 ||
        slot > SAVE_SLOTS
    ) {
        return false;
    }

    activeSaveSlot = slot;

    const data =
        createSaveData();

    data.slot = slot;

    const ok =
        safeSetLocalStorage(
            getSaveKey(slot),
            JSON.stringify(data)
        );

    if (ok) {
        renderSaveSlots();
    }

    return ok;
}

function autoCheckpoint() {
    if (
        !storyStarted ||
        !Number.isInteger(activeSaveSlot)
    ) {
        return;
    }

    saveGame(activeSaveSlot);
}

async function loadGame(slot) {
    const data =
        getSaveData(slot);

    if (!data) return false;

    activeSaveSlot = slot;
    choiceHistory =
        data.choices && typeof data.choices === "object"
            ? JSON.parse(JSON.stringify(data.choices))
            : {};

    if (
        data.language &&
        UI_TEXT[data.language]
    ) {
        currentLanguage =
            data.language;

        safeSetLocalStorage(
            LANGUAGE_KEY,
            currentLanguage
        );

        updateLanguageButtons();
        updateUI();
    }

    if (!storyLoaded) {
        await loadStory();
    }

    currentLine =
        clamp(
            Number(data.line) || 0,
            0,
            storyLines.length - 1
        );

    currentChapter =
        data.chapter || "Prologue";

    currentBackground = null;
    currentWeather = null;
    currentMusicName = null;
    chapterFinished = false;
    storyStarted = true;

    stopTypewriter();
    resetCharacters();
    closeVNMenu();
    showScreen(dom.storyScreen);

    await renderCurrentLine({
        updateMusic: true
    });

    return true;
}

function deleteSave(slot) {
    if (
        !Number.isInteger(slot) ||
        slot < 1 ||
        slot > SAVE_SLOTS
    ) {
        return false;
    }

    const deleted =
        safeRemoveLocalStorage(
            getSaveKey(slot)
        );

    if (activeSaveSlot === slot) {
        activeSaveSlot = null;
    }

    renderSaveSlots();

    return deleted;
}

function deleteAllSaves() {
    for (
        let slot = 1;
        slot <= SAVE_SLOTS;
        slot++
    ) {
        safeRemoveLocalStorage(
            getSaveKey(slot)
        );
    }

    activeSaveSlot = null;
    renderSaveSlots();
}

function formatSaveDate(timestamp) {
    if (!timestamp) return "";

    const date =
        new Date(timestamp);

    if (Number.isNaN(date.getTime())) {
        return "";
    }

    return date.toLocaleString();
}

function renderSaveSlots() {
    if (!dom.saveSlots) return;

    dom.saveSlots.textContent = "";

    const ui = getUI();

    for (
        let slot = 1;
        slot <= SAVE_SLOTS;
        slot++
    ) {
        const data =
            getSaveData(slot);

        const wrapper =
            document.createElement("div");

        wrapper.className =
            "save-slot-wrapper";

        const button =
            document.createElement("button");

        button.className =
            "save-slot";

        button.type = "button";
        button.dataset.slot =
            String(slot);

        const title =
            document.createElement("div");

        title.className =
            "save-slot-number";

        title.textContent =
            `SLOT ${slot}`;

        const information =
            document.createElement("div");

        information.className =
            "save-slot-info";

        if (!data) {
            information.textContent =
                ui.empty;
        } else {
            const chapter =
                data.chapter || "Prologue";

            const line =
                Number(data.line) + 1;

            const date =
                formatSaveDate(
                    data.timestamp
                );

            information.innerHTML =
                ui.saveLine(
                    chapter,
                    line,
                    date
                );
        }

        button.append(
            title,
            information
        );

        button.addEventListener(
            "click",
            () => handleSaveSlot(slot)
        );

        const deleteButton =
            document.createElement("button");

        deleteButton.type = "button";
        deleteButton.className =
            "save-delete-button";

        deleteButton.textContent =
            ui.delete;

        deleteButton.addEventListener(
            "click",
            event => {
                event.stopPropagation();

                if (
                    window.confirm(
                        ui.confirmDelete(slot)
                    )
                ) {
                    playButtonSound();
                    deleteSave(slot);
                }
            }
        );

        wrapper.append(
            button,
            deleteButton
        );

        dom.saveSlots.appendChild(
            wrapper
        );
    }
}

async function openSaveScreen(
    mode = "load",
    returnTo = "title"
) {
    saveMode = mode;
    saveReturnTo = returnTo;

    if (
        mode === "start" ||
        mode === "load"
    ) {
        await transitionToSubmenuMusic();
    }

    showScreen(dom.saveScreen);

    const ui = getUI();

    if (dom.saveScreenTitle) {
        dom.saveScreenTitle.textContent =
            mode === "start"
                ? ui.startTitle
                : mode === "save"
                    ? ui.save
                    : ui.loadTitle;
    }

    renderSaveSlots();
}

async function closeSaveScreen() {
    if (saveReturnTo === "story") {
        showScreen(dom.storyScreen);
        return;
    }

    showScreen(dom.titleScreen);

    await transitionToMainMenuMusic();
}

async function handleSaveSlot(slot) {
    playButtonSound();

    const existing =
        getSaveData(slot);

    if (saveMode === "start") {
        if (
            existing &&
            !window.confirm(
                getUI().overwrite(slot)
            )
        ) {
            return;
        }

        activeSaveSlot = slot;

        await startStory(0);

        saveGame(slot);

        return;
    }

    if (saveMode === "save") {
        saveGame(slot);
        return;
    }

    if (
        saveMode === "load" &&
        existing
    ) {
        await loadGame(slot);
    }
}

function findNewestSave() {
    let newest = null;

    for (
        let slot = 1;
        slot <= SAVE_SLOTS;
        slot++
    ) {
        const data =
            getSaveData(slot);

        if (!data) continue;

        if (
            !newest ||
            Number(data.timestamp) >
            Number(newest.data.timestamp)
        ) {
            newest = {
                slot,
                data
            };
        }
    }

    return newest;
}

async function continueGame() {
    playButtonSound();

    const newest =
        findNewestSave();

    if (!newest) {
        await openSaveScreen(
            "start",
            "title"
        );
        return;
    }

    await transitionToSubmenuMusic();
    await loadGame(newest.slot);
}

/* =========================================================
   SETTINGS
========================================================= */

function setupSettingsControls() {
    if (dom.settingsFps) {
        dom.settingsFps.addEventListener(
            "change",
            () => {
                settings.showFPS =
                    dom.settingsFps.checked;

                saveSettings();
                updateSettingsUI();
            }
        );
    }

    if (dom.settingsEffects) {
        dom.settingsEffects.addEventListener(
            "change",
            () => {
                settings.effects =
                    dom.settingsEffects.checked;

                saveSettings();
                updateSettingsUI();

                if (
                    currentWeather === "snow"
                ) {
                    updateWeather(null);
                    updateWeather("snow");
                }

                if (
                    storyLines[currentLine]
                ) {
                    rebuildCharacterStage(
                        storyLines[currentLine]
                    );
                }
            }
        );
    }

    if (dom.settingsQuality) {
        dom.settingsQuality.addEventListener(
            "change",
            () => {
                settings.quality =
                    dom.settingsQuality.value;

                saveSettings();
                updateSettingsUI();

                if (
                    currentWeather === "snow"
                ) {
                    updateWeather(null);
                    updateWeather("snow");
                }
            }
        );
    }

    if (dom.settingsTextSpeed) {
        dom.settingsTextSpeed.addEventListener(
            "input",
            () => {
                settings.textSpeed =
                    Number(
                        dom.settingsTextSpeed.value
                    );

                saveSettings();
            }
        );
    }

    if (dom.settingsVolume) {
        dom.settingsVolume.addEventListener(
            "input",
            () => {
                settings.masterVolume =
                    Number(
                        dom.settingsVolume.value
                    );

                saveSettings();
                updateSettingsUI();
            }
        );
    }

    if (dom.settingsMusicVolume) {
        dom.settingsMusicVolume.addEventListener(
            "input",
            () => {
                settings.musicVolume =
                    Number(
                        dom.settingsMusicVolume.value
                    );

                saveSettings();
                updateSettingsUI();
            }
        );
    }

    if (dom.settingsSfxVolume) {
        dom.settingsSfxVolume.addEventListener(
            "input",
            () => {
                settings.sfxVolume =
                    Number(
                        dom.settingsSfxVolume.value
                    );

                saveSettings();
                updateSettingsUI();
            }
        );
    }
}

/* =========================================================
   TITLE / VN MENU
========================================================= */

async function openSettings() {
    playButtonSound();

    showScreen(dom.settingsScreen);

    updateSettingsUI();

    await stopMenu2IfNeeded();
}

async function closeSettings() {
    playButtonSound();

    showScreen(dom.titleScreen);

    await transitionToMainMenuMusic();
}

async function openCredits() {
    playButtonSound();
    showScreen(dom.creditsScreen);
    await stopMenu2IfNeeded();
}

async function closeCredits() {
    playButtonSound();
    showScreen(dom.titleScreen);
    await transitionToMainMenuMusic();
}

async function stopMenu2IfNeeded() {
    createMenu2Audio();

    if (
        menu2Music &&
        !menu2Music.paused
    ) {
        menu2Music.dataset.playing = "0";

        await fadeAudio(
            menu2Music,
            0,
            250
        );

        safePause(menu2Music);
    }
}

async function openTitleScreen() {
    stopTypewriter();

    closeVNMenu();

    storyStarted = false;
    chapterFinished = false;

    await stopStoryMusic();

    showScreen(dom.titleScreen);

    await transitionToMainMenuMusic();
}

function openVNMenu() {
    if (!dom.vnMenu) return;

    vnMenuOpen = true;

    dom.vnMenu.classList.add(
        "active"
    );
}

function closeVNMenu() {
    vnMenuOpen = false;

    if (dom.vnMenu) {
        dom.vnMenu.classList.remove(
            "active",
            "open"
        );
    }
}

function toggleVNMenu() {
    if (vnMenuOpen) {
        closeVNMenu();
    } else {
        openVNMenu();
    }
}

/* =========================================================
   FPS
========================================================= */

function startFPSCounter() {
    const tick = now => {
        fpsFrames++;

        const elapsed =
            now - fpsLastTime;

        if (elapsed >= 500) {
            fpsValue =
                Math.round(
                    fpsFrames /
                    (elapsed / 1000)
                );

            fpsFrames = 0;
            fpsLastTime = now;

            if (dom.fpsCounter) {
                dom.fpsCounter.textContent =
                    `${fpsValue} FPS`;

                dom.fpsCounter.style.display =
                    settings.showFPS
                        ? ""
                        : "none";
            }
        }

        requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
}

/* =========================================================
   EVENTS
========================================================= */

function setupEvents() {
    if (dom.startButton) {
        dom.startButton.addEventListener(
            "click",
            async () => {
                playButtonSound();

                await openSaveScreen(
                    "start",
                    "title"
                );
            }
        );
    }

    if (dom.continueButton) {
        dom.continueButton.addEventListener(
            "click",
            continueGame
        );
    }

    if (dom.loadTitleButton) {
        dom.loadTitleButton.addEventListener(
            "click",
            async () => {
                playButtonSound();

                await openSaveScreen(
                    "load",
                    "title"
                );
            }
        );
    }

    if (dom.settingsButton) {
        dom.settingsButton.addEventListener(
            "click",
            openSettings
        );
    }

    if (dom.creditsButton) {
        dom.creditsButton.addEventListener("click", openCredits);
    }

    if (dom.creditsBackButton) {
        dom.creditsBackButton.addEventListener("click", closeCredits);
    }

    if (dom.settingsResetButton) {
        dom.settingsResetButton.addEventListener("click", () => {
            playButtonSound();
            settings = { ...DEFAULT_SETTINGS };
            saveSettings();
            updateSettingsUI();
            if (currentWeather === "snow") {
                updateWeather(null);
                updateWeather("snow");
            }
        });
    }

    if (dom.settingsBackButton) {
        dom.settingsBackButton.addEventListener(
            "click",
            closeSettings
        );
    }

    if (dom.languageButtons) {
        dom.languageButtons.forEach(
            button => {
                button.addEventListener(
                    "click",
                    async () => {
                        playButtonSound();

                        await setLanguage(
                            button.dataset.language
                        );
                    }
                );
            }
        );
    }

    if (dom.saveBackButton) {
        dom.saveBackButton.addEventListener(
            "click",
            async () => {
                playButtonSound();

                await closeSaveScreen();
            }
        );
    }

    if (dom.deleteAllSavesButton) {
        dom.deleteAllSavesButton.addEventListener(
            "click",
            () => {
                if (
                    window.confirm(
                        getUI().confirmDeleteAll
                    )
                ) {
                    playButtonSound();
                    deleteAllSaves();
                }
            }
        );
    }

    if (dom.nextButton) {
        dom.nextButton.addEventListener(
            "click",
            async () => {
                playButtonSound();

                await nextLine();
            }
        );
    }

    if (dom.vnMenuButton) {
        dom.vnMenuButton.addEventListener(
            "click",
            () => {
                playButtonSound();
                toggleVNMenu();
            }
        );
    }

    if (dom.vnContinue) {
        dom.vnContinue.addEventListener(
            "click",
            () => {
                playButtonSound();
                closeVNMenu();
            }
        );
    }

    if (dom.vnBackLine) {
        dom.vnBackLine.addEventListener(
            "click",
            async () => {
                playButtonSound();
                closeVNMenu();

                await previousLine();
            }
        );
    }

    if (dom.vnSave) {
        dom.vnSave.addEventListener(
            "click",
            async () => {
                playButtonSound();
                closeVNMenu();

                await openSaveScreen(
                    "save",
                    "story"
                );
            }
        );
    }

    if (dom.vnLoad) {
        dom.vnLoad.addEventListener(
            "click",
            async () => {
                playButtonSound();
                closeVNMenu();

                await openSaveScreen(
                    "load",
                    "story"
                );
            }
        );
    }

    if (dom.vnBackMenu) {
        dom.vnBackMenu.addEventListener(
            "click",
            async () => {
                playButtonSound();
                closeVNMenu();

                await openTitleScreen();
            }
        );
    }

    if (dom.vnClose) {
        dom.vnClose.addEventListener(
            "click",
            () => {
                playButtonSound();
                closeVNMenu();
            }
        );
    }

    document.addEventListener(
        "keydown",
        async event => {
            if (
                !dom.storyScreen ||
                !dom.storyScreen.classList.contains(
                    "active"
                )
            ) {
                return;
            }

            if (event.key === "Escape") {
                event.preventDefault();
                toggleVNMenu();
                return;
            }

            if (vnMenuOpen) return;

            if (
                event.key === "ArrowRight" ||
                event.key === "Enter" ||
                event.key === " "
            ) {
                event.preventDefault();
                await nextLine();
                return;
            }

            if (
                event.key === "ArrowLeft"
            ) {
                event.preventDefault();
                await previousLine();
            }
        }
    );
}

/* =========================================================
   VIGNETTE FALLBACK
========================================================= */

function setupVignetteFallback() {
    const vignette =
        dom.vignette;

    if (!vignette) return;

    Object.assign(
        vignette.style,
        {
            position: "absolute",
            inset: "0",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: "10"
        }
    );
}

/* =========================================================
   DEBUG
========================================================= */

window.killerDronesDebug = function () {
    return {
        initialized,
        storyLoaded,
        storyLines: storyLines.length,
        currentLine,
        currentChapter,
        currentLanguage,
        currentMusicName,
        storyStarted,
        chapterFinished,
        activeSaveSlot,
        choiceHistory: JSON.parse(JSON.stringify(choiceHistory)),
        vnMenuOpen,
        menu2Available,
        settings: { ...settings },

        saves: Array.from(
            { length: SAVE_SLOTS },
            (_, index) =>
                getSaveData(index + 1)
        ),

        aliceVisible:
            dom.alice
                ? getComputedStyle(
                    dom.alice
                ).visibility
                : null,

        zVisible:
            dom.z
                ? getComputedStyle(
                    dom.z
                ).visibility
                : null,

        menuMusicPlaying:
            dom.menuMusic
                ? !dom.menuMusic.paused
                : false,

        menu2MusicPlaying:
            menu2Music
                ? !menu2Music.paused
                : false,

        storyMusicPlaying:
            dom.storyMusic
                ? !dom.storyMusic.paused
                : false,

        fps: fpsValue
    };
};

/* =========================================================
   INITIALIZATION
========================================================= */

async function initializeGame() {
    if (initialized) return;

    initialized = true;

    cacheDOM();
    normalizeSettings();
    setupVignetteFallback();
    setupSettingsControls();
    startFPSCounter();

    try {
        setLoadingProgress(5, 0);

        updateUI();
        updateLanguageButtons();
        updateSettingsUI();

        await wait(80);

        setLoadingProgress(20, 1);

        const imageSources = [
            "assets/blur.png",
            ...Object.values(BACKGROUNDS),
            ...Object.values(SPRITES.Alice),
            ...Object.values(SPRITES.Z)
        ];

        await Promise.all(
            imageSources.map(preloadImage)
        );

        setLoadingProgress(45, 2);

        await loadStory();

        setLoadingProgress(70, 3);

        createMenu2Audio();

        await Promise.all([
            preloadAudio(MUSIC.menu),
            preloadAudio(MUSIC.abandoned_hall),

            dom.textSound
                ? preloadAudio(
                    "assets/audio/sfx/text.ogg"
                )
                : Promise.resolve(),

            dom.buttonSound
                ? preloadAudio(
                    "assets/audio/sfx/button.ogg"
                )
                : Promise.resolve()
        ]);

        if (dom.menuMusic) {
            dom.menuMusic.volume = 0;
            dom.menuMusic.dataset.playing = "0";
        }

        if (dom.storyMusic) {
            dom.storyMusic.volume = 0;
            dom.storyMusic.dataset.playing = "0";
        }

        if (menu2Music) {
            menu2Music.volume = 0;
            menu2Music.dataset.playing = "0";
        }

        applyAudioVolumes();

        setupEvents();
        resetCharacters();

        updateUI();
        updateLanguageButtons();
        updateSettingsUI();

        setLoadingProgress(100, 4);

        await wait(300);

        showScreen(dom.titleScreen);

        await startMenuMusic();
    } catch (error) {
        console.error(
            "[Killer Drones] Initialization failed:",
            error
        );

        /*
         * Optional assets must not make the UI unusable.
         * The browser will still show the title screen.
         */
        setupEvents();
        resetCharacters();

        updateUI();
        updateLanguageButtons();
        updateSettingsUI();

        setLoadingProgress(100, 4);

        showScreen(dom.titleScreen);

        await startMenuMusic();
    }
}

function bootGame() {
    if (
        document.readyState ===
        "loading"
    ) {
        document.addEventListener(
            "DOMContentLoaded",
            initializeGame,
            { once: true }
        );
    } else {
        initializeGame();
    }
}

bootGame();
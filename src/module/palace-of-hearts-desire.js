const adventureName = "Palace of Heart's Desire";
const moduleName = 'palace-of-hearts-desire';

/**
 * welcomeJournal (if set) will automatically be imported and opened after the first activation of a
 * scene imported from the module compendium.
 * The name here corresponds to a Journal entry in your compendium and must match exactly (it is case
 * sensitive).
 * Set to the following to disable:
 *   const welcomeJournal = '';
 */
const welcomeJournal = '';
/**
 * creaturePacks is a list of compendium packs to look in for Actors by name (in prioritised order).
 * If the creature is not found in the first pack, it will search through each subsequent pack.
 * The first entry here assumes that you have an Actor pack in your module with the "name" of "actors".
 * The second entry here lists the DnD5e SRD Monsters compendium that comes with the DnD5e system. Feel
 * free to delete the 'dnd5e.monsters' reference if you want, or swapping it to any other system compendium
 * reference.
 * Set to the following to disable:
 *   const creaturePacks = [];
 */
const creaturePacks = [`${moduleName}.pohd-actors`, 'dnd5e.monsters'];
/**
 * journalPacks is a list of compendium packs to look in for Journals by name (in prioritised order).
 * The first entry here assumes that you have a Journal pack in your module with the "name" of "journals".
 * Set to the following to disable:
 *   const journalPacks = [];
 */
const journalPacks = [];
/**
 * macroPacks is a list of compendium packs to look in for Macros by name (in prioritised order).
 * The first entry here assumes that you have a Macro pack in your module with the "name" of "macros".
 * Set to the following to disable:
 *   const macroPacks = [];
 */
const macroPacks = [`${moduleName}.pohd-macros`];

Hooks.once('init', function () {
  CONFIG.Wall.doorSounds.bah1 = {
    label: 'Bah #1',
    open: `modules/${moduleName}/assets/sounds/1-bah.ogg`,
    close: 'sounds/doors/wood/close.ogg',
    lock: 'sounds/doors/wood/lock.ogg',
    test: 'sounds/doors/wood/test.ogg',
    unlock: 'sounds/doors/wood/unlock.ogg',
  };
  CONFIG.Wall.doorSounds.bah2 = {
    label: 'Bah #2',
    open: `modules/${moduleName}/assets/sounds/2-bah.ogg`,
    close: 'sounds/doors/wood/close.ogg',
    lock: 'sounds/doors/wood/lock.ogg',
    test: 'sounds/doors/wood/test.ogg',
    unlock: 'sounds/doors/wood/unlock.ogg',
  };
  CONFIG.Wall.doorSounds.yah = {
    label: 'Yah',
    open: `modules/${moduleName}/assets/sounds/3-yah.ogg`,
    close: 'sounds/doors/wood/close.ogg',
    lock: 'sounds/doors/wood/lock.ogg',
    test: 'sounds/doors/wood/test.ogg',
    unlock: 'sounds/doors/wood/unlock.ogg',
  };
  CONFIG.Wall.doorSounds.gah = {
    label: 'Gah',
    open: `modules/${moduleName}/assets/sounds/4-gah.ogg`,
    close: 'sounds/doors/wood/close.ogg',
    lock: 'sounds/doors/wood/lock.ogg',
    test: 'sounds/doors/wood/test.ogg',
    unlock: 'sounds/doors/wood/unlock.ogg',
  };
});

Hooks.once('scenePackerReady', (ScenePacker) => {
  // Initialise the Scene Packer with your adventure name and module name
  ScenePacker.Initialise({
    adventureName,
    moduleName,
    creaturePacks,
    journalPacks,
    macroPacks,
    welcomeJournal,
    allowImportPrompts: true,
  });
});

/* ============================================================================
 * File: signatureTypes.js
 * Purpose: Static signature types and signature name lists used to drive UI
 *          dropdown options for EVE scanning signatures.
 * ========================================================================== */
/* signatureTypes.js */

define([], () => {
    'use strict';

    // signature sources
    // http://de.sistersprobe.wikia.com/wiki/EVE_Sister_Core_Scanner_Probe_Wiki

    // Combat sites ===================================================================================================

    let c1Combat = {
        1: 'Perimeter Ambush Point',
        2: 'Perimeter Camp',
        3: 'Phase Catalyst Node',
        4: 'The Line'
    };

    let c2Combat = {
        1: 'Perimeter Checkpoint',
        2: 'Perimeter Hangar',
        3: 'The Ruins of Enclave Cohort 27',
        4: 'Sleeper Data Sanctuary'
    };

    let c3Combat = {
        1: 'Fortification Frontier Stronghold',
        2: 'Outpost Frontier Stronghold',
        3: 'Solar Cell',
        4: 'The Oruze Construct'
    };

    let c4Combat = {
        1: 'Frontier Barracks',
        2: 'Frontier Command Post',
        3: 'Integrated Terminus',
        4: 'Sleeper Information Sanctum'
    };

    let c5Combat = {
        1: 'Core Garrison', //*
        2: 'Core Stronghold', //*
        3: 'Oruze Osobnyk', //*
        4: 'Quarantine Area'
    };

    let c6Combat = {
        1: 'Core Citadel', //*
        2: 'Core Bastion', //*
        3: 'Strange Energy Readings', //*
        4: 'The Mirror' //*
    };

    // Thera WH
    let c12Combat = {
        1: 'Epicenter',
        2: 'Expedition Command Outpost Wreck',
        3: 'Planetary Colonization Office Wreck',
        4: 'Testing Facilities'
    };

    // Drifter Sentinel WH
    let c14Combat = {
        1: 'Monolith',
        2: 'Wormhole in Rock Circle',
        3: 'Opposing Spatial Rifts',
        4: 'Sleeper Enclave Debris',
        5: 'Crystal Resource'
    };

    // Drifter Barbican WH
    let c15Combat = {
        1: 'Wrecked Ships',
        2: 'Unstable Wormhole',
        3: 'Spatial Rift',
        4: 'Heavily Guarded Spatial Rift',
        5: 'Crystals'
    };

    // Drifter Vidette WH
    let c16Combat = {
        1: 'Ship Graveyard',
        2: 'Sleeper Engineering Station',
        3: 'Spatial Rift',
        4: 'Sleeper Enclave in Coral Rock',
        5: 'Crystals and Stone Circle'
    };

    // Drifter Conflux WH
    let c17Combat = {
        1: 'Monolith',
        2: 'Caged Wormhole',
        3: 'Rock Formation and Wormhole',
        4: 'Particle Acceleration Array',
        5: 'Guarded Asteroid Station'
    };

    // Drifter Redoubt WH
    let c18Combat = {
        1: 'Ship Graveyard',
        2: 'Caged Wormhole',
        3: 'Spatial Rift Generator',
        4: 'Sleeper Enclave',
        5: 'Hollow Asteroid'
    };

    // Relic sites ====================================================================================================

    // NullSec Relic sites, which can also spawn in C1, C2, C3 wormholes
    let nullRelic = {
        10: 'Ruined Angel Crystal Quarry',
        11: 'Ruined Angel Monument Site',
        12: 'Ruined Angel Science Outpost',
        13: 'Ruined Angel Temple Site',
        14: 'Ruined Blood Raider Crystal Quarry',
        15: 'Ruined Blood Raider Monument Site',
        16: 'Ruined Blood Raider Science Outpost',
        17: 'Ruined Blood Raider Temple Site',
        18: 'Ruined Guristas Crystal Quarry',
        19: 'Ruined Guristas Monument Site',
        20: 'Ruined Guristas Science Outpost',
        21: 'Ruined Guristas Temple Site',
        22: 'Ruined Sansha Crystal Quarry',
        23: 'Ruined Sansha Monument Site',
        24: 'Ruined Sansha Science Outpost',
        25: 'Ruined Sansha Temple Site',
        26: 'Ruined Serpentis Crystal Quarry',
        27: 'Ruined Serpentis Monument Site',
        28: 'Ruined Serpentis Science Outpost',
        29: 'Ruined Serpentis Temple Site'
    };

    let c1Relic = Object.assign({}, nullRelic, {
        1: 'Forgotten Perimeter Coronation Platform', //*
        2: 'Forgotten Perimeter Power Array' //*
    });

    let c2Relic = Object.assign({}, nullRelic, {
        1: 'Forgotten Perimeter Gateway', //*
        2: 'Forgotten Perimeter Habitation Coils' //*
    });

    let c3Relic = Object.assign({}, nullRelic, {
        1: 'Forgotten Frontier Quarantine Outpost', //*
        2: 'Forgotten Frontier Recursive Depot' //*
    });

    let c4Relic = {
        1: 'Forgotten Frontier Conversion Module',
        2: 'Forgotten Frontier Evacuation Center'
    };

    let c5Relic = {
        1: 'Forgotten Core Data Field',
        2: 'Forgotten Core Information Pen'
    };

    let c6Relic = {
        1: 'Forgotten Core Assembly Hall', //*
        2: 'Forgotten Core Circuitry Disassembler' //*
    };

    // Data sites =====================================================================================================

    // NulSec Data sites, which can also spawn in C1, C2, C3 wormholes
    let nullData = {
        10: 'Abandoned Research Complex DA005',
        11: 'Abandoned Research Complex DA015',
        12: 'Abandoned Research Complex DC007',
        13: 'Abandoned Research Complex DC021',
        14: 'Abandoned Research Complex DC035',
        15: 'Abandoned Research Complex DG003',
        16: 'Central Angel Command Center',
        17: 'Central Angel Data Mining Site',
        18: 'Central Angel Sparking Transmitter',
        19: 'Central Angel Survey Site',
        20: 'Central Blood Raider Command Center',
        21: 'Central Blood Raider Data Mining Site',
        22: 'Central Blood Raider Sparking Transmitter',
        23: 'Central Blood Raider Survey Site',
        24: 'Central Guristas Command Center',
        25: 'Central Guristas Data Mining Site',
        26: 'Central Guristas Sparking Transmitter',
        27: 'Central Guristas Survey Site',
        28: 'Central Sansha Command Center',
        29: 'Central Sansha Data Mining Site',
        30: 'Central Sansha Sparking Transmitter',
        31: 'Central Sansha Survey Site',
        32: 'Central Serpentis Command Center',
        33: 'Central Serpentis Data Mining Site',
        34: 'Central Serpentis Sparking Transmitter',
        35: 'Central Serpentis Survey Site'
    };

    let c1Data = Object.assign({}, nullData, {
        1: 'Unsecured Perimeter Amplifier', //*
        2: 'Unsecured Perimeter Information Center' //*
    });

    let c2Data = Object.assign({}, nullData, {
        1: 'Unsecured Perimeter Comms Relay', //*
        2: 'Unsecured Perimeter Transponder Farm' //*
    });

    let c3Data = Object.assign({}, nullData, {
        1: 'Unsecured Frontier Database', //*
        2: 'Unsecured Frontier Receiver' //*
    });

    let c4Data = {
        1: 'Unsecured Frontier Digital Nexus',
        2: 'Unsecured Frontier Trinary Hub'
    };

    let c5Data = {
        1: 'Unsecured Frontier Enclave Relay',
        2: 'Unsecured Frontier Server Bank'
    };

    let c6Data = {
        1: 'Unsecured Core Backup Array', //*
        2: 'Unsecured Core Emergence' //*
    };

    // Ghost sites ======================================================================================================

    let hsGh = {
        1: 'Lesser Serpentis Covert Research Facility',
        2: 'Lesser Sansha Covert Research Facility',
        3: 'Lesser Guristas Covert Research Facility',
        4: 'Lesser Blood Raiders Covert Research Facility'
    };

    let lsGh = {
        1: 'Standard Serpentis Covert Research Facility',
        2: 'Standard Sansha Covert Research Facility',
        3: 'Standard Guristas Covert Research Facility',
        4: 'Standard Blood Raiders Covert Research Facility'
    };

    let nsGh = {
        1: 'Improved Serpentis Covert Research Facility',
        2: 'Improved Sansha Covert Research Facility',
        3: 'Improved Guristas Covert Research Facility',
        4: 'Improved Blood Raiders Covert Research Facility'
    };

    let whGh = {
        1: 'Superior Serpentis Covert Research Facility',
        2: 'Superior Sansha Covert Research Facility',
        3: 'Superior Guristas Covert Research Facility',
        4: 'Superior Blood Raiders Covert Research Facility'
    };

    // Gas sites ======================================================================================================
    // Cleanup:
    // - Define a shared base list for the five Perimeter Reservoirs that exist in every C-class.
    // - Use Object.assign to reduce duplication (similar to how nullData is merged into C1/C2/C3).
    // - Preserve the original key ordering differences in C5/C6 by overriding keys after merging.

    const gasCommon = {
        1: 'Barren Perimeter Reservoir', //*
        2: 'Token Perimeter Reservoir', //*
        3: 'Minor Perimeter Reservoir', //*
        4: 'Sizeable Perimeter Reservoir', //*
        5: 'Ordinary Perimeter Reservoir' //*
    };

    let c1Gas = Object.assign({}, gasCommon);

    let c2Gas = Object.assign({}, gasCommon);

    let c3Gas = Object.assign({}, gasCommon, {
        6: 'Bountiful Frontier Reservoir', //*
        7: 'Vast Frontier Reservoir' //*
    });

    let c4Gas = Object.assign({}, gasCommon, {
        6: 'Vast Frontier Reservoir', //*
        7: 'Bountiful Frontier Reservoir' //*
    });

    // C5 and C6 keep their original key-to-name layout by overriding after the merge
    let c5Gas = Object.assign({}, gasCommon, {
        2: 'Minor Perimeter Reservoir', //*
        3: 'Ordinary Perimeter Reservoir', //*
        5: 'Token Perimeter Reservoir', //*
        6: 'Bountiful Frontier Reservoir', //*
        7: 'Vast Frontier Reservoir', //*
        8: 'Instrumental Core Reservoir', //*
        9: 'Vital Core Reservoir' //*
    });

    let c6Gas = Object.assign({}, gasCommon, {
        2: 'Minor Perimeter Reservoir', //*
        3: 'Ordinary Perimeter Reservoir', //*
        5: 'Token Perimeter Reservoir', //*
        6: 'Bountiful Frontier Reservoir', //*
        7: 'Vast Frontier Reservoir', //*
        8: 'Instrumental Core Reservoir', //*
        9: 'Vital Core Reservoir' //*
    });

// Ore sites ======================================================================================================
// Cleanup:
// - C1/C2/C3/C4 share the same first 4 ore sites (same keys and names).
// - C1/C2 share the same tail (keys 5–6).
// - C3/C4 share the same two tail names but in different key order (preserve ordering by class).
// - Leave C5 and C6 unchanged to avoid any key/order surprises.

const oreCommonC1C4 = {
    1: 'Ordinary Perimeter Deposit', //*
    2: 'Common Perimeter Deposit', //*
    3: 'Unexceptional Frontier Deposit', //*
    4: 'Average Frontier Deposit' //*
};

let c1Ore = Object.assign({}, oreCommonC1C4, {
    5: 'Isolated Core Deposit', //*
    6: 'Uncommon Core Deposit' //*
});

let c2Ore = Object.assign({}, oreCommonC1C4, {
    5: 'Isolated Core Deposit', //*
    6: 'Uncommon Core Deposit' //*
});

let c3Ore = Object.assign({}, oreCommonC1C4, {
    5: 'Infrequent Core Deposit', //*
    6: 'Unusual Core Deposit' //*
});

let c4Ore = Object.assign({}, oreCommonC1C4, {
    5: 'Unusual Core Deposit', //*
    6: 'Infrequent Core Deposit' //*
});

// C5 and C6 are left as-is (different ordering / different item sets)
let c5Ore = {
    1: 'Average Frontier Deposit', //*
    2: 'Unexceptional Frontier Deposit', //*
    3: 'Uncommon Core Deposit', //*
    4: 'Ordinary Perimeter Deposit', //*
    5: 'Common Perimeter Deposit', //*
    6: 'Exceptional Core Deposit', //*
    7: 'Infrequent Core Deposit', //*
    8: 'Unusual Core Deposit', //*
    9: 'Rarified Core Deposit', //*
    10: 'Isolated Core Deposit' //*
};

let c6Ore = {
    1: 'Ordinary Perimeter Deposit', //*
    2: 'Common Perimeter Deposit', //*
    3: 'Unexceptional Frontier Deposit', //*
    4: 'Average Frontier Deposit', //*
    5: 'Rarified Core Deposit' //*
};

let c13Ore = {
    1: 'Shattered Debris Field',
    2: 'Shattered Ice Field'
};


    // Wormholes ======================================================================================================

    // K162 is a generic “exit/unknown” type and is useful as a selectable option everywhere.
    const k162WH = {
        0: 'K162 - Unknown/Exit' // Added 20260111
    };

    // all k-space exits are static or K162
    let c1WH = Object.assign({}, k162WH, {
        1: 'H121 - C1',
        2: 'C125 - C2',
        3: 'O883 - C3',
        4: 'M609 - C4',
        5: 'L614 - C5',
        6: 'S804 - C6',
        7: 'N110 - H',
        8: 'J244 - L',
        9: 'J377 - L Turner',
        10: 'Z060 - 0.0',
        11: 'F353 - C12 Thera',
        12: 'E004 - Frig Hole (short-life)' // Added 20260111
    });

    // all w-space -> w-space are statics or K162
    let c2WH = Object.assign({}, k162WH, {
        1: 'Z647 - C1',
        2: 'D382 - C2',
        3: 'O477 - C3',
        4: 'Y683 - C4',
        5: 'N062 - C5',
        6: 'R474 - C6',
        7: 'B274 - H',
        8: 'A239 - L',
        9: 'J377 - L Turner',
        10: 'E545 - 0.0',
        11: 'F135 - C12 Thera',
        12: 'F216 - T Pochven',
        13: 'L005 - Frig Hole (short-life)' // Added 20260111
    });

    // all k-space exits are static or K162
    let c3WH = Object.assign({}, k162WH, {
        1: 'V301 - C1',
        2: 'I182 - C2',
        3: 'N968 - C3',
        4: 'T405 - C4',
        5: 'N770 - C5',
        6: 'A982 - C6',
        7: 'D845 - H',
        8: 'U210 - L',
        9: 'J377 - L Turner',
        10: 'K346 - 0.0',
        11: 'F135 - C12 Thera',
        12: 'F216 - T Pochven',
        13: 'Z006 - Frig Hole (short-life)' // Added 20260111
    });

    // no *wandering* w-space -> w-space
    // all holes are statics or K162
    let c4WH = Object.assign({}, k162WH, {
        1: 'P060 - C1',
        2: 'N766 - C2',
        3: 'C247 - C3',
        4: 'X877 - C4',
        5: 'H900 - C5',
        6: 'U574 - C6',
        7: 'S047 - H',
        8: 'N290 - L',
        9: 'J377 - L Turner',
        10: 'K329 - 0.0',
        11: 'F216 - T Pochven',
        12: 'M001 - Frig Hole (short-life)' // Added 20260111
    });

    let c5WH = Object.assign({}, k162WH, {
        1: 'Y790 - C1',
        2: 'D364 - C2',
        3: 'M267 - C3',
        4: 'E175 - C4',
        5: 'H296 - C5',
        6: 'V753 - C6',
        7: 'D792 - H',
        8: 'C140 - L',
        9: 'J377 - L Turner',
        10: 'Z142 - 0.0',
        11: 'F216 - T Pochven',
        12: 'C008 - Frig Hole (short-life)' // Added 20260111
    });

    let c6WH = Object.assign({}, k162WH, {
        1: 'Q317 - C1',
        2: 'G024 - C2',
        3: 'L477 - C3',
        4: 'Z457 - C4',
        5: 'V911 - C5',
        6: 'W237 - C6',
        7: 'B520 - H',
        8: 'D792 - H',
        9: 'C140 - L',
        10: 'C391 - L',
        11: 'J377 - L Turner',
        12: 'C248 - 0.0',
        13: 'Z142 - 0.0',
        14: 'F216 - T Pochven',
        15: 'G008 - Frig Hole (short-life)' // Added 20260111
    });

    // Shattered WH (some of them are static)
    // Cleanup:
    // - Remove duplicate H296 entry.
    // - Remove U201 (not found on Anoik).
    // - Add A009.
    let c13WH = Object.assign({}, k162WH, {
        1: 'P060 - C1',
        2: 'Z647 - C1',
        3: 'D382 - C2',
        4: 'L005 - C2',
        5: 'N766 - C2',
        6: 'C247 - C3',
        7: 'M267 - C3',
        8: 'O477 - C3',
        9: 'X877 - C4',
        10: 'Y683 - C4',
        11: 'H296 - C5',
        12: 'H900 - C5',
        14: 'N062 - C5', // ??
        15: 'V911 - C5',
        16: 'U574 - C6',
        17: 'V753 - C6',
        18: 'W237 - C6',
        19: 'B274 - H',
        20: 'D792 - H',
        21: 'D845 - H',
        22: 'N110 - H',
        23: 'A239 - L',
        24: 'C391 - L',
        25: 'J244 - L',
        26: 'J377 - L Turner',
        28: 'U210 - L',
        29: 'C248 - 0.0',
        30: 'E545 - 0.0',
        31: 'K346 - 0.0',
        32: 'Z060 - 0.0',
        33: 'A009 - C13 (frig)' // Added 20260111
    });

    let hsWH = Object.assign({}, k162WH, {
        1: 'Z971 - C1',
        2: 'R943 - C2',
        3: 'X702 - C3',
        4: 'O128 - C4',
        5: 'M555 - C5',
        6: 'B041 - C6',
        7: 'A641 - H',
        8: 'R051 - L',
        9: 'J377 - L Turner',
        10: 'V283 - 0.0',
        11: 'T458 - C12 Thera',
        12: 'C729 - T Pochven'
    });

    let lsWH = Object.assign({}, k162WH, {
        1: 'Z971 - C1',
        2: 'R943 - C2',
        3: 'X702 - C3',
        4: 'O128 - C4',
        5: 'N432 - C5',
        6: 'U319 - C6',
        7: 'B449 - H',
        8: 'N944 - L',
        9: 'J377 - L Turner',
        10: 'S199 - 0.0',
        11: 'M164 - C12 Thera',
        12: 'C729 - T Pochven'
    });

    let nullWH = Object.assign({}, k162WH, {
        1: 'Z971 - C1',
        2: 'R943 - C2',
        3: 'X702 - C3',
        4: 'O128 - C4',
        5: 'N432 - C5',
        6: 'U319 - C6',
        7: 'B449 - H',
        8: 'N944 - L',
        9: 'J377 - L Turner',
        10: 'S199 - 0.0',
        11: 'L031 - C12 Thera',
        12: 'C729 - T Pochven',
        13: 'U372 - T Pochven',
        14: 'Q003 - Frig Hole (short-life)' // Added 20260111
    });

    let pochWH = Object.assign({}, k162WH, {
        1: 'R081 - C4',
        2: 'X450 - 0.0'
    });

    // Thera wormholes (new list so Thera can provide WH dropdown options)
    let c12WH = Object.assign({}, k162WH, {
        1: 'Q063 - H', // Added 20260111
        2: 'V898 - L', // Added 20260111
        3: 'E587 - 0.0' // Added 20260111
    });

    // Drifter wormhole types (new lists so Drifter systems can provide WH dropdown options)
    let c14WH = Object.assign({}, k162WH, {
        1: 'S877 - Drifter Sentinel' // Added 20260111
    });

    let c15WH = Object.assign({}, k162WH, {
        1: 'B735 - Drifter Barbican' // Added 20260111
    });

    let c16WH = Object.assign({}, k162WH, {
        1: 'V928 - Drifter Vidette' // Added 20260111
    });

    let c17WH = Object.assign({}, k162WH, {
        1: 'C414 - Drifter Conflux' // Added 20260111
    });

    let c18WH = Object.assign({}, k162WH, {
        1: 'R259 - Drifter Redoubt' // Added 20260111
    });

    // ================================================================================================================
    //  Signature types
    // ================================================================================================================

    // signature types
    return {
        1: { // system type (wh)
            1: { // C1 (area id)
                1: c1Combat,
                2: c1Relic,
                3: c1Data,
                4: c1Gas,
                5: c1WH,
                6: c1Ore,
                7: whGh
            },
            2: { // C2
                1: c2Combat,
                2: c2Relic,
                3: c2Data,
                4: c2Gas,
                5: c2WH,
                6: c2Ore,
                7: whGh
            },
            3: { // C3
                1: c3Combat,
                2: c3Relic,
                3: c3Data,
                4: c3Gas,
                5: c3WH,
                6: c3Ore,
                7: whGh
            },
            4: { // C4
                1: c4Combat,
                2: c4Relic,
                3: c4Data,
                4: c4Gas,
                5: c4WH,
                6: c4Ore,
                7: whGh
            },
            5: { // C5
                1: c5Combat,
                2: c5Relic,
                3: c5Data,
                4: c5Gas,
                5: c5WH,
                6: c5Ore,
                7: whGh
            },
            6: { // C6
                1: c6Combat,
                2: c6Relic,
                3: c6Data,
                4: c6Gas,
                5: c6WH,
                6: c6Ore,
                7: whGh
            },
            12: { // Thera WH
                1: c12Combat,
                5: c12WH // Added 20260111
            },
            13: { // Shattered WH
                5: c13WH,
                6: c13Ore,
                7: whGh
            },
            14: { // Drifter Sentinel WH
                1: c14Combat,
                5: c14WH // Added 20260111
            },
            15: { // Drifter Barbican WH
                1: c15Combat,
                5: c15WH // Added 20260111
            },
            16: { // Drifter Vidette WH
                1: c16Combat,
                5: c16WH // Added 20260111
            },
            17: { // Drifter Conflux WH
                1: c17Combat,
                5: c17WH // Added 20260111
            },
            18: { // Drifter Redoubt WH
                1: c18Combat,
                5: c18WH // Added 20260111
            }
        }, // system type (k-space)
        2: {
            30: { // High Sec
                5: hsWH,
                7: hsGh
            },
            31: { // Low Sec
                5: lsWH,
                7: lsGh
            },
            32: { // 0.0
                5: nullWH,
                7: nsGh
            },
            33: { // Pochven
                5: pochWH
            }
        }
    };
});

/* signatureTypes.js */
/* ============================================================================ 
 * File: signatureTypes.js
 * ========================================================================== */
